import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Argatio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}