import "./globals.css";
import { Roboto } from 'next/font/google'
import { Providers } from "./providers";
import { Metadata } from "next";
 
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Talim Aushakhman",
  description: "My personal website."
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
