/* eslint-disable no-unused-vars */
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Upload, ChevronLeft } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useCreate } from "../../Mutations/useSubmit";
// import Spinner from "../../../internalApp/src/components/Spinner";

// function KycForm() {
//   const { isCreating, createMutate } = useCreate();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = (data) => {
//     const newCustomer = {
//       name: data.fullName,
//       phoneNumber: data.phoneNumber,
//       NIN: data.nationalIdNumber,
//       dob: data.dateOfBirth,
//       address: data.address,
//       email: data.email,
//       created_at: new Date(),
//       status: "Pending",
//     };

//     createMutate(
//       { ...newCustomer, image: data.image[0] },
//       {
//         onSuccess: () => {
//           toast.success("Customer KYC submitted successfully!");

//           // Delay navigation by 3 seconds
//           setTimeout(() => {
//             navigate("/completion");
//           }, 3000);

//           reset(); // Reset the form after submission
//         },
//       }
//     );
//   };

//   if (isCreating) return <Spinner />;

//   return (
//     <Card className="max-w-md mx-auto shadow-lg">
//       <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
//         <CardTitle className="text-2xl font-bold text-center">New Customer KYC</CardTitle>
//       </CardHeader>
//       <CardContent className="mt-6">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <Input
//               type="text"
//               placeholder="Enter Full Name"
//               {...register("fullName", { required: "Full Name is required" })}
//               className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
//             />
//             {errors.fullName && (
//               <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
//             )}
//           </div>
//           <div>
//             <Input
//               type="email"
//               placeholder="Enter email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
//               })}
//               className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
//             />
//             {errors.email && (
//               <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
//             )}
//           </div>
//           <div>
//             <Input
//               type="tel"
//               placeholder="Enter Phone Number"
//               {...register("phoneNumber", {
//                 required: "Phone Number is required",
//               })}
//               className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
//             />
//             {errors.phoneNumber && (
//               <p className="text-destructive text-sm mt-1">{errors.phoneNumber.message}</p>
//             )}
//           </div>
//           <div>
//             <Input
//               type="text"
//               placeholder="Enter National ID Number - NIN"
//               {...register("nationalIdNumber", {
//                 required: "National ID is required",
//               })}
//               className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
//             />
//             {errors.nationalIdNumber && (
//               <p className="text-destructive text-sm mt-1">{errors.nationalIdNumber.message}</p>
//             )}
//           </div>
//           <div>
//             <Input
//               type="date"
//               placeholder="Date of Birth"
//               {...register("dateOfBirth", {
//                 required: "Date of Birth is required",
//               })}
//               className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
//             />
//             {errors.dateOfBirth && (
//               <p className="text-destructive text-sm mt-1">{errors.dateOfBirth.message}</p>
//             )}
//           </div>
//           <div>
//             <Input
//               type="text"
//               placeholder="Enter Address"
//               {...register("address", { required: "Address is required" })}
//               className="bg-secondary text-secondary-foreground border-primary/20 focus:border-primary"
//             />
//             {errors.address && (
//               <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
//             )}
//           </div>
//           <div className="flex items-center space-x-2">
//             <Input
//               type="file"
//               accept="image/*"
//               {...register("image", { required: "Image is required" })}
//               className="hidden"
//               id="image-upload"
//             />
//             <label
//               htmlFor="image-upload"
//               className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded cursor-pointer hover:bg-secondary/90"
//             >
//               <Upload className="w-4 h-4 mr-2" />
//               Upload Image
//             </label>
//             {errors.image && (
//               <p className="text-destructive text-sm">{errors.image.message}</p>
//             )}
//           </div>
//           <div className="flex justify-between gap-2">
//             <Button type="submit" disabled={isCreating} className="bg-primary hover:bg-primary/90 text-primary-foreground">
//               <UserPlus className="w-4 h-4 mr-2" />
//               {isCreating ? "Submitting..." : "Submit KYC"}
//             </Button>

//             <Button type="button" onClick={() => navigate(-1)} variant="outline" className="border-primary text-primary hover:bg-primary/10">
//               <ChevronLeft className="w-4 h-4 mr-2" />
//               Go Back
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

// export default KycForm;

// import { useState, useRef, useCallback, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { UserPlus, Upload, ChevronLeft, Camera, RefreshCw } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useCreate } from "../../Mutations/useSubmit";
// import Spinner from "../../../internalApp/src/components/Spinner";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Progress } from "@/components/ui/progress";

// function KycForm() {
//   const { isCreating, createMutate } = useCreate();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [capturedSelfie, setCapturedSelfie] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [cameraError, setCameraError] = useState(null);
//   const [livenessPrompt, setLivenessPrompt] = useState(null);
//   const [livenessProgress, setLivenessProgress] = useState(0);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const streamRef = useRef(null);

//   const onSubmit = (data) => {
//     if (!capturedSelfie) {
//       toast.error(
//         "Please complete the liveness detection and capture a selfie."
//       );
//       return;
//     }

//     const newCustomer = {
//       name: data.fullName,
//       phoneNumber: data.phoneNumber,
//       NIN: data.nationalIdNumber,
//       dob: data.dateOfBirth,
//       address: data.address,
//       email: data.email,
//       created_at: new Date(),
//       status: "Pending",
//     };

//     // Convert base64 selfie to File object
//     const selfieFile = dataURLtoFile(capturedSelfie, "selfie.jpg");

//     console.log(newCustomer);
//     console.log(selfieFile);
//   };

//   const startCamera = useCallback(async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "user" },
//       });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         streamRef.current = stream;
//         setIsCameraOpen(true);
//         setCameraError(null);
//         startLivenessDetection();
//       }
//     } catch (err) {
//       console.error("Error accessing the camera:", err);
//       setCameraError(err.message || "Unable to access the camera");
//       toast.error(
//         "Unable to access the camera. Please check your permissions and try again."
//       );
//     }
//   }, []);

//   const stopCamera = useCallback(() => {
//     if (streamRef.current) {
//       const tracks = streamRef.current.getTracks();
//       tracks.forEach((track) => track.stop());
//       streamRef.current = null;
//     }
//     setIsCameraOpen(false);
//     setLivenessPrompt(null);
//     setLivenessProgress(0);
//   }, []);

//   useEffect(() => {
//     return () => {
//       stopCamera();
//     };
//   }, [stopCamera]);

//   const startLivenessDetection = () => {
//     const prompts = [
//       "Blink your eyes",
//       "Turn your head slightly to the right",
//       "Smile",
//       "Raise your eyebrows",
//     ];
//     let currentPromptIndex = 0;

//     const showNextPrompt = () => {
//       if (currentPromptIndex < prompts.length) {
//         setLivenessPrompt(prompts[currentPromptIndex]);
//         setLivenessProgress((currentPromptIndex + 1) * (100 / prompts.length));
//         currentPromptIndex++;
//         setTimeout(showNextPrompt, 3000); // Show each prompt for 3 seconds
//       } else {
//         setLivenessPrompt(
//           "Liveness detection complete. You can now capture your selfie."
//         );
//         setLivenessProgress(100);
//       }
//     };

//     showNextPrompt();
//   };

//   const captureSelfie = useCallback(() => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
//       context.drawImage(
//         videoRef.current,
//         0,
//         0,
//         canvasRef.current.width,
//         canvasRef.current.height
//       );
//       const imageDataUrl = canvasRef.current.toDataURL("image/jpeg");
//       setCapturedSelfie(imageDataUrl);
//       stopCamera();
//     }
//   }, [stopCamera]);

//   const retakeSelfie = () => {
//     setCapturedSelfie(null);
//     startCamera();
//   };

//   const dataURLtoFile = (dataurl, filename) => {
//     const arr = dataurl.split(",");
//     const mime = arr[0].match(/:(.*?);/)?.[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], filename, { type: mime });
//   };

//   if (isCreating) return <Spinner />;

//   return (
//     <Card className="max-w-md mx-auto shadow-lg">
//       <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
//         <CardTitle className="text-2xl font-bold text-center">
//           New Customer KYC
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="mt-6">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {/* ...Other form fields here... */}
//           <div className="space-y-2">
//             <Alert>
//               <AlertTitle>Liveness Detection and Selfie Capture</AlertTitle>
//               <AlertDescription>
//                 Please complete the liveness detection process and capture a
//                 clear selfie using your device&rsquo;s camera.
//               </AlertDescription>
//             </Alert>
//             <div className="flex justify-between gap-2">
//               {isCameraOpen ? (
//                 <Button
//                   type="button"
//                   onClick={captureSelfie}
//                   className="flex-1"
//                   disabled={livenessProgress < 100}
//                 >
//                   <Camera className="w-4 h-4 mr-2" />
//                   Capture Selfie
//                 </Button>
//               ) : capturedSelfie ? (
//                 <Button
//                   type="button"
//                   onClick={retakeSelfie}
//                   variant="outline"
//                   className="flex-1"
//                 >
//                   <RefreshCw className="w-4 h-4 mr-2" />
//                   Retake Selfie
//                 </Button>
//               ) : (
//                 <Button type="button" onClick={startCamera} className="flex-1">
//                   <Camera className="w-4 h-4 mr-2" />
//                   Start Liveness Detection
//                 </Button>
//               )}
//             </div>
//             {isCameraOpen && (
//               <div className="space-y-2">
//                 <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
//                   <video
//                     ref={videoRef}
//                     autoPlay
//                     playsInline
//                     muted
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 {livenessPrompt && (
//                   <Alert>
//                     <AlertTitle>Liveness Check</AlertTitle>
//                     <AlertDescription>{livenessPrompt}</AlertDescription>
//                   </Alert>
//                 )}
//                 <Progress value={livenessProgress} className="w-full" />
//               </div>
//             )}
//             <canvas
//               ref={canvasRef}
//               style={{ display: "none" }}
//               width={640}
//               height={480}
//             />
//             {capturedSelfie && (
//               <div className="mt-4">
//                 <p className="text-sm font-semibold mb-1">Captured Selfie:</p>
//                 <img
//                   src={capturedSelfie}
//                   alt="Captured selfie"
//                   className="w-full h-auto rounded-lg"
//                 />
//               </div>
//             )}
//             {cameraError && (
//               <Alert variant="destructive">
//                 <AlertTitle>Camera Error</AlertTitle>
//                 <AlertDescription>{cameraError}</AlertDescription>
//               </Alert>
//             )}
//             {errors.image && (
//               <p className="text-destructive text-sm">{errors.image.message}</p>
//             )}
//           </div>
//           <div className="flex justify-between gap-2">
//             <Button
//               type="submit"
//               disabled={isCreating}
//               className="bg-primary hover:bg-primary/90 text-primary-foreground"
//             >
//               <UserPlus className="w-4 h-4 mr-2" />
//               {isCreating ? "Submitting..." : "Submit KYC"}
//             </Button>
//             <Button
//               type="button"
//               onClick={() => navigate(-1)}
//               variant="outline"
//               disabled={isCreating}
//             >
//               <ChevronLeft className="w-4 h-4 mr-2" />
//               Cancel
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }

// export default KycForm;
import { useState, useRef, useCallback } from "react";
import {
  Camera,
  CheckCircle,
  Loader2,
  RefreshCw,
  Shield,
  UserPlus,
  Upload,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCreate } from "../../Mutations/useSubmit";
import Spinner from "../../../internalApp/src/components/Spinner";
import { Progress } from "@/components/ui/progress";

function KycForm() {
  const { isCreating, createMutate } = useCreate();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [step, setStep] = useState(0);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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

          // Delay navigation by 3 seconds
          setTimeout(() => {
            navigate("/completion");
          }, 3000);

          reset(); // Reset the form after submission
        },
      }
    );
  };

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
    }
  }, []);

  const stopCamera = useCallback(() => {
    const stream = videoRef.current && videoRef.current.srcObject;
    const tracks = stream && stream.getTracks();
    tracks && tracks.forEach((track) => track.stop());
  }, []);

  const captureImage = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    }
  }, []);

  const simulateVerification = useCallback(() => {
    setIsVerifying(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsVerifying(false);
          setIsVerified(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  }, []);

  const handleStart = useCallback(() => {
    setStep(1);
    startCamera();
  }, [startCamera]);

  const handleCapture = useCallback(() => {
    setIsCapturing(true);
    captureImage();
    stopCamera();
    setStep(2);
  }, [captureImage, stopCamera]);

  const handleRetry = useCallback(() => {
    setIsCapturing(false);
    setStep(1);
    startCamera();
  }, [startCamera]);

  const handleVerify = useCallback(() => {
    simulateVerification();
    navigate("/kycForm");
  }, [simulateVerification]);
  if (isCreating) return <Spinner />;

  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">
          New Customer KYC
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        {step === 0 && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                className="flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded cursor-pointer hover:bg-secondary/90"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </label>
              {errors.image && (
                <p className="text-destructive text-sm">
                  {errors.image.message}
                </p>
              )}
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
            <Button onClick={handleStart} className="w-full mt-4">
              Start Camera Verification
            </Button>
          </form>
        )}
        {step === 1 && (
          <div className="space-y-4">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-center">
              Position your face within the frame and ensure good lighting.
            </p>
            <Button onClick={handleCapture} className="w-full mt-4">
              {isCapturing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Capturing...
                </>
              ) : (
                <>
                  <Camera className="mr-2 h-4 w-4" />
                  Capture Image
                </>
              )}
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <canvas ref={canvasRef} className="w-full h-full object-cover" />
            </div>
            {isVerifying && (
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-center">
                  Verifying your identity...
                </p>
              </div>
            )}
            {isVerified && (
              <div className="text-center space-y-2">
                <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
                <p className="font-semibold text-green-500">
                  Identity Verified Successfully!
                </p>
              </div>
            )}
            <div className="flex justify-between gap-2">
              <Button
                onClick={handleRetry}
                variant="outline"
                className="w-full"
                disabled={isVerifying}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retake Photo
              </Button>
              <Button
                onClick={handleVerify}
                className="w-full"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify Identity"
                )}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default KycForm;
