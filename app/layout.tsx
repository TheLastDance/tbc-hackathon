import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layouts/Layout";
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "რეპეტიტორი",
  description: "აირჩიე რეპეტიტორი",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
