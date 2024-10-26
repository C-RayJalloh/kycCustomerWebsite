import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Completion() {
  return (
    <>
      <Card className="w-full max-w-md mx-auto shadow-lg mt-10">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <CheckCircle className="w-8 h-8 mr-2" />
            KYC Submitted Successfully
          </CardTitle>
          <CardDescription className="text-center text-primary-foreground/80">
            Thank you for completing the KYC process
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center mt-6">
          <p className="mb-4">
            Your KYC information has been submitted successfully. We will review
            it shortly.
          </p>
          <p className="mb-4 font-semibold">
            You will be notified once the verification process is complete.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Back to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
      <footer className=" text-white py-4">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kyc Digital System. All rights
            reserved.
          </p>
          <p className="text-sm">
            Developed by <span className="font-semibold">C Ray</span>
          </p>
        </div>
      </footer>
    </>
  );
}
