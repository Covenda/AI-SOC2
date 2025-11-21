import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Covenda - AI-SOC Services with Forward-Deployed Security Engineers',
  description:
    'We embed Forward-Deployed Security Engineers with your team to build detections, automate responses, and co-manage operations on Covenda AI.',
  keywords: [
    'threat intelligence',
    'cybersecurity',
    'security intelligence',
    'cyber threat intelligence',
    'covenda ai',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
