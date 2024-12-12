import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Naija Zone - Waitlist",
  description: "App Coming Soon...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>        <link rel="icon" href="https://res.cloudinary.com/wise-solution-inc/image/upload/v1729911544/fulllogo_full_green_1_gg1urs.png" />

      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}
