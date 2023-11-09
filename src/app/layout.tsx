import { Providers } from '@/redux/Provider';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'IDR Foundation',
  description: 'Dua App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="@/app/logo.png" />
      </head>
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}