import AdsNavbar from "@/components/advertisement-navbar/AdsNavbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS ecommerce practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdsNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
