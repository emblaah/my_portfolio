import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { icons } from "lucide-react";

export const metadata = {
  title: "Embla Andersson - Frontend Developer",
  description: "Portfolio website built with next app",
  icon: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto w-full antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
