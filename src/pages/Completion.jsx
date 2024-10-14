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

export default function Completion() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-primary">
          KYC Submitted Successfully
        </CardTitle>
        <CardDescription className="text-center">
          Thank you for completing the KYC process
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-4">
          Your KYC information has been submitted successfully. We will review
          it shortly.
        </p>
        <p className="mb-4">
          You will be notified once the verification process is complete.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
