import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ProModal from "@/components/pro-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisdom",
  description: "AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ProModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
