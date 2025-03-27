import "./globals.css";
import { Roboto } from 'next/font/google'
import { Providers } from "./providers";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
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
