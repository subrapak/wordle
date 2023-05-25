import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aruba Wordle",
  description: "By Aro S",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex w-100vw h-full bg-cyan-600 overflow-auto">
      <body className={`${inter.className} w-full h-full overflow-auto`}>
        {children}
      </body>
    </html>
  );
}
