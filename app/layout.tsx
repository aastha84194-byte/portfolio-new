import type { Metadata } from 'next';
import './globals.css';
import BackgroundWrapper from '@/components/canvas/BackgroundWrapper';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Futuristic Portfolio',
  description: 'An interactive 3D developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundWrapper />
        <Navbar />
        <main style={{ position: "relative", zIndex: 10 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
