import supabase, { supabaseUrl } from "./supabase";

export async function submitForm(newCustomer) {
  // create the image name
  const imageName = `${Math.random()}-${newCustomer.image.name}`.replaceAll(
    "/",
    ""
  );

  // the image url path
  const imagePath = `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  try {
    // 1. create a new customer
    const { data, error } = await supabase
      .from("customers")
      .insert([{ ...newCustomer, image: imagePath }]);

    if (error) {
      // Check for unique constraint violation (Supabase uses Postgres codes)
      if (error.code === "23505") {
        if (error.message.includes("phoneNumber")) {
          throw new Error(
            `The phone number ${newCustomer.phoneNumber} is already registered.`
          );
        }
        if (error.message.includes("email")) {
          throw new Error(
            `The email address ${newCustomer.email} is already registered.`
          );
        }
        if (error.message.includes("NIN")) {
          throw new Error(
            `The national Id number ${newCustomer.NIN} is already registered.`
          );
        }
      }
      console.error(error);
      throw new Error("Customer could not be added.");
    }

    // 2. if successful, upload the image to the IMAGES STORAGE
    const { error: imgError } = await supabase.storage
      .from("images")
      .upload(imageName, newCustomer.image);

    // 3. Delete the customer if image upload fails
    if (imgError) {
      await supabase.from("customers").delete().eq("id", data.id);
      console.error(imgError);
      throw new Error(
        "Customer ID image could not be uploaded; therefore, the form could not be submitted!"
      );
    }

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
