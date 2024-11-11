import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Typing App',
  description: 'this app is a typing app that can crete problems to solve.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
