import { Link} from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-primary">QCell KYC Verification</CardTitle>
        <hr />
        <CardDescription className="text-center">Complete your Know Your Customer (KYC) process</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-4">Welcome to QCell&apos;s KYC verification process. This helps us ensure the security of our services and comply with regulations.</p>
        <p className="mb-4">Please have the following information ready:</p>
        <ul className="list-disc list-inside mb-4 text-left font-extralight ">
          <li>Personal details (Name, Address, Date of Birth)</li>
          <li>Contact information (Email, Phone Number)</li>
          <li>National ID Number</li>
          <li>A clear image of your National ID</li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link to="/kycForm">
          <Button className="w-full">Start KYC Process</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}