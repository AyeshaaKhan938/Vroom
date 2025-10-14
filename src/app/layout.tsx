import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vroom",
  description: "Pakistan's Premium Racing Circuit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add your custom font link here */}
        <link
          href="https://db.onlinewebfonts.com/c/48a0b04df2a4ed89b33f1533dbdf24f6?family=Nico+Moji"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
