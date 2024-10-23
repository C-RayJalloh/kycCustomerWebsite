import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
import KYCForm from "./pages/KycForm";
import Completion from "./pages/Completion";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/kycCustomerWebsite">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/kycForm" element={<KYCForm />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "--color-yellow-500",
            color: "--color-blue-700",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
