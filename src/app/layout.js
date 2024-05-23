import { Inter } from "next/font/google";
import NavBar from "@/components/layout/Navbar/NavBar";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Argatio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " text-white"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
