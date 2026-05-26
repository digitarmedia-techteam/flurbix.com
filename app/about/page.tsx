import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Flurbix",
  description:
    "Learn about Flurbix, our mission, values, and the operating system we are building for outreach and growth teams to automate B2B campaigns safely.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300">
        <AboutClient />
      </main>
      <Footer />
    </>
  );
}
