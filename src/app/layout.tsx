import Navbar from "@/components/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Space-B",
  description: "Venue Space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="luxury">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
