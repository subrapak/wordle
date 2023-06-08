import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

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
    <>
      <html lang="en" className="bg-neutral-700">
        <head>
          {
            <script
              dangerouslySetInnerHTML={{
                __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "hczkrzs1j1");
            `,
              }}
            />
          }
        </head>
        <body className={`${inter.className} m-0`}>{children}</body>
      </html>
    </>
  );
}
