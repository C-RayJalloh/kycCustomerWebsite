import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useCreateCustomer } from "../../Mutations/useCreateCustomer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();
  const { isCreating, CreateCustomer } = useCreateCustomer();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const newCustomer = {
      name: data.fullName,
      phone: data.phoneNumber,
      nationalId: data.nationalIdNumber,
      dob: data.dateOfBirth,
      address: data.address,
      email: data.email,
      created_at: new Date(),
      status: "pending",
    };

    CreateCustomer(newCustomer);

    reset();
    navigate("/customers");
  };

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

          <Button type="submit" disabled={isCreating}>
            <UserPlus className="w-4 h-4 mr-2" />
            {isCreating ? "Submitting" : "Submit KYC"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CustomerForm;
