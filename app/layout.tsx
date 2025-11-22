import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Covenda - Your AI-SOC, Powered by the Covenda Technology System',
  description:
    'Covenda runs security operations as a product. Turn on your AI-SOC with preemptive threat intelligence, risk-based vulnerability management, and Forward-Deployed Engineers.',
  keywords: [
    'AI-SOC',
    'threat intelligence',
    'cybersecurity',
    'security operations',
    'threat modeling',
    'threat hunting',
    'covenda',
    'covenda technology system',
    'lucid ai',
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
