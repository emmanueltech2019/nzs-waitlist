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
      <body
      >
        {children}
      </body>
    </html>
  );
}
