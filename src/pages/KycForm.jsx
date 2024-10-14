import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserPlus, Upload, ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCreate } from "../../Mutations/useSubmit";
import Spinner from "../../../internalApp/src/components/Spinner";

function KycForm() {
  const { isCreating, createMutate } = useCreate();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newCustomer = {
      name: data.fullName,
      phoneNumber: data.phoneNumber,
      NIN: data.nationalIdNumber,
      dob: data.dateOfBirth,
      address: data.address,
      email: data.email,
      created_at: new Date(),
      status: "Pending",
    };

    createMutate(
      { ...newCustomer, image: data.image[0] },
      {
        onSuccess: () => {
          toast.success("Customer KYC submitted successfully!");

          // Delay navigation by 5 seconds
          setTimeout(() => {
            navigate("/completion");
          }, 3000);

          reset(); // Reset the form after submission
        },
      }
    );
  };

  if (isCreating) return <Spinner />;
  // if(isError) return toast.error(isError.message);

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Customer KYC</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter Full Name"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
          <Input
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            type="tel"
            placeholder="Enter Phone Number"
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
          <Input
            type="text"
            placeholder="Enter National ID Number - NIN"
            {...register("nationalIdNumber", {
              required: "National ID is required",
            })}
          />
          {errors.nationalIdNumber && (
            <p className="text-red-500">{errors.nationalIdNumber.message}</p>
          )}
          <Input
            type="date"
            placeholder="Date of Birth"
            {...register("dateOfBirth", {
              required: "Date of Birth is required",
            })}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500">{errors.dateOfBirth.message}</p>
          )}
          <Input
            type="text"
            placeholder="Enter Address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
          <div className="flex items-center space-x-2">
            <Input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer hover:bg-gray-300"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </label>
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="flex justify-normal gap-2">
            <Button type="submit" disabled={isCreating}>
              <UserPlus className="w-4 h-4 mr-2" />
              {isCreating ? "Submitting..." : "Submit KYC"}
            </Button>

            <Button type="submit" onClick={() => navigate(-1)}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default KycForm;
