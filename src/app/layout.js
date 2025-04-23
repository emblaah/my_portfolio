import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Embla Andersson - Frontend Developer",
  description: "Portfolio website built with next app",
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
