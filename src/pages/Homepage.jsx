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

export default function Home() {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg mt-10 ">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-3xl font-bold text-center">
          QCell KYC Verification
        </CardTitle>
        <CardDescription className="text-center text-primary-foreground/80">
          Complete your Know Your Customer (KYC) process
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center mt-6">
        <p className="mb-4">
          Welcome to QCell&rsquo;s KYC verification process. This helps us
          ensure the security of our services and comply with regulations.
        </p>
        <p className="mb-4 font-semibold">
          Please have the following information ready:
        </p>
        <ul className="list-none mb-4 text-left space-y-2">
          <li className="flex items-center">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">
              1
            </span>
            Personal details (Name, Address, Date of Birth)
          </li>
          <li className="flex items-center">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">
              2
            </span>
            Contact information (Email, Phone Number)
          </li>
          <li className="flex items-center">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">
              3
            </span>
            National ID Number
          </li>
          <li className="flex items-center">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">
              3
            </span>
            Take a clear snapshot of yourself using your camera
          </li>
          <li className="flex items-center">
            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-2">
              4
            </span>
            A clear image of your National ID
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link to="/kycForm">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Start KYC Process
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
