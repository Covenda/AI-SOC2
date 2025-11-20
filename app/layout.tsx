import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Recorded Future - Intelligence Cloud for Cybersecurity',
  description:
    'The world\'s largest provider of intelligence for enterprise security. Real-time threat intelligence to protect your organization.',
  keywords: [
    'threat intelligence',
    'cybersecurity',
    'security intelligence',
    'cyber threat intelligence',
    'recorded future',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
