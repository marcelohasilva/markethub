"use client";
import { Poppins } from "next/font/google";
import AuthHeader from "./components/AuthHeader";
import LoginForm from "./components/LoginForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LoginPage = () => {
  return (
    <div className={`min-h-screen bg-[#F7F8FC] ${poppins.className}`}>
      <AuthHeader />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
