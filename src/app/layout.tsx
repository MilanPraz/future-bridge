import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Future Bridged Consultancy",
  description: "One and only stop solution for consultancies",
};

// import localFont from "next/font/local";

// const myFont = localFont({
//   src: "../components/ui/NHaasGroteskTXPro-65Md.ttf",
// });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          ubuntu.className,
          " bg-[#F7FFEF] min-h-screen flex flex-col"
        )}
      >
        <div className=" flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
