import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/home/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "", // menimpa semua value yang lain
    default: "Tamipublicapi", // default untuk page ini dan childnya
    template: "%s | Tamipublicapi", // nilai dinamis tergantung childnya
  },
  description: "Description tami public api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
