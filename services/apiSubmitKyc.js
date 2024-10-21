import supabase, { supabaseUrl } from "./supabase";

export async function submitForm(newCustomer) {
  // ID image name
  const imageName = `${Math.random()}-${newCustomer.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${imageName}`; // Path for ID image in storage

  // Customer image name
  const customerImageName = `${Math.random()}-${
    newCustomer.customerImage.name
  }`.replaceAll("/", "");
  const customerImagePath = `${customerImageName}`; // Path for customer image in storage

  try {
    // 1. Insert the customer data with the image URLs (to be uploaded next)
    const { data, error } = await supabase.from("customers").insert([
      {
        ...newCustomer,
        image: `${supabaseUrl}/storage/v1/object/public/images/${imagePath}`,
        customerImage: `${supabaseUrl}/storage/v1/object/public/images/${customerImagePath}`,
      },
    ]);

    if (error) {
      // Handle unique constraint violation
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

    // 2. Upload ID image to Supabase storage
    const { error: idImageError } = await supabase.storage
      .from("images")
      .upload(imagePath, newCustomer.image);

    if (idImageError) {
      await supabase.from("customers").delete().eq("id", data.id); // Rollback customer entry
      console.error(idImageError);
      throw new Error("ID image upload failed, form submission canceled.");
    }

    // 3. Upload Customer image to Supabase storage
    const { error: customerImageError } = await supabase.storage
      .from("images")
      .upload(customerImagePath, newCustomer.customerImage);

    if (customerImageError) {
      await supabase.from("customers").delete().eq("id", data.id); // Rollback customer entry
      console.error(customerImageError);
      throw new Error(
        "Customer image upload failed, form submission canceled."
      );
    }

    return data; // Return the customer data if successful
  } catch (err) {
    console.error("Form submission error:", err);
    throw err;
  }
}
