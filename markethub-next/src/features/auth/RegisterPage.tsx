import { Poppins } from "next/font/google";
import AuthHeader from "./components/AuthHeader";
import RegisterForm from "./components/RegisterForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RegisterPage() {
  return (
    <div className={`min-h-screen bg-[#F7F8FC] ${poppins.className}`}>
      <AuthHeader />
      <RegisterForm />
    </div>
  );
}
