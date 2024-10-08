import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; //661 (gripped: 386)
import "./globals.css";
import { SidebarProvider } from "./SidebarContext";
import { ProjectDataProvider } from "./DataContextAPI";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <SidebarProvider> {/* Wrapping children with SidebarProvider */}
          <ProjectDataProvider>
          {children}
          </ProjectDataProvider>          
        </SidebarProvider>
      </body>
    </html>
  );
}
