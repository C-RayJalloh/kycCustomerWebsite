/* eslint-disable no-unused-vars */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  UserPlus,
  Upload,
  ChevronLeft,
  Camera,
  RefreshCw,
  X,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { useCreate } from "../../Mutations/useSubmit";
import toast from "react-hot-toast";

function KycForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const { isCreating, createMutate } = useCreate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setShowWebcam(false);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
    setShowWebcam(true);
  };

  const onSubmit = (data) => {
    // Convert base64 image to file
    const capturedImageFile = imgSrc
      ? dataURLtoFile(imgSrc, "captured-image.png")
      : null;

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
      {
        ...newCustomer,
        image: data.uploadedImage[0],
        customerImage: capturedImageFile,
      },
      {
        onSuccess: () => {
          toast.success("Customer KYC submitted successfully!");
          setTimeout(() => {
            navigate("/completion");
          }, 3000);
          reset();
          setImgSrc(null);
          setShowWebcam(false);
        },
        onError: (error) => {
          toast.error(`Error submitting KYC: ${error.message}`);
        },
      }
    );
  };

  // Helper function to convert base64 to file
  const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg mt-5">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">
          Customer KYC FORM
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Enter Full Name"
                {...register("fullName", { required: "Full Name is required" })}
                className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
              />
              {errors.fullName && (
                <p className="text-destructive text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
                className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
              />
              {errors.phoneNumber && (
                <p className="text-destructive text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Enter National ID Number - NIN"
                {...register("nationalIdNumber", {
                  required: "National ID is required",
                })}
                className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
              />
              {errors.nationalIdNumber && (
                <p className="text-destructive text-sm mt-1">
                  {errors.nationalIdNumber.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="date"
                placeholder="Date of Birth"
                {...register("dateOfBirth", {
                  required: "Date of Birth is required",
                })}
                className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
              />
              {errors.dateOfBirth && (
                <p className="text-destructive text-sm mt-1">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="text"
                placeholder="Enter Address"
                {...register("address", { required: "Address is required" })}
                className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
              />
              {errors.address && (
                <p className="text-destructive text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-full max-w-md aspect-video bg-muted relative">
                {showWebcam ? (
                  <>
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      className="w-full h-full object-cover"
                    />
                    <Button
                      type="button"
                      onClick={() => setShowWebcam(false)}
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close camera</span>
                    </Button>
                  </>
                ) : imgSrc ? (
                  <img
                    src={imgSrc}
                    alt="captured"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">No image captured</p>
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                {showWebcam ? (
                  <Button type="button" onClick={capture}>
                    <Camera className="w-4 h-4 mr-2" />
                    Capture Photo
                  </Button>
                ) : imgSrc ? (
                  <Button type="button" onClick={retake} variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retake
                  </Button>
                ) : (
                  <Button type="button" onClick={() => setShowWebcam(true)}>
                    <Camera className="w-4 h-4 mr-2" />
                    Take a Photo
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Controller
                name="uploadedImage"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value, ...field } }) => (
                  <>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        onChange(e.target.files);
                        setSelectedFile(file);
                      }}
                      className="hidden"
                      id="image-upload"
                      {...field}
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded cursor-pointer hover:bg-secondary/90"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload ID Card
                    </label>
                  </>
                )}
              />
              {selectedFile && (
                <div className="text-sm text-gray-600 truncate max-w-xs">
                  {selectedFile.name}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <Button
              type="submit"
              disabled={isCreating}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <UserPlus className="w-4 h-4 mr-2" />
              {isCreating ? "Submitting..." : "Submit KYC"}
            </Button>

            <Button
              type="button"
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
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
