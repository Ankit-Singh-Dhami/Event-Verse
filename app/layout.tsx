import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Event Verse",
  description:
    "EventVerse is an AI-powered event management platform that simplifies event registration and automatically generates secure, professional digital certificates. With role-based dashboards, QR verification, and a modern interactive design, EventVerse makes managing and participating in events seamless and efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ConvexClientProvider>
            {" "}
            {children}
            <Toaster richColors position="bottom-right" />
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
