"use client";
import Header from "../components/auth/header";
import Login from "../components/auth/Login";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TelaLogin = () => {
  return (
    <div className={`min-h-screen bg-[#F7F8FC] ${poppins.className}`}>
      <Header />
      <Login />
    </div>
  );
};

export default TelaLogin;
