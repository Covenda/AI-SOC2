import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditModeProvider } from '@/contexts/EditModeContext';
import EditableTextManager from '@/components/EditableTextManager';
import EditModeToggle from '@/components/EditModeToggle';

export const metadata: Metadata = {
  title: 'Covenda - Your AI-SOC',
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
    'covenda ai',
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
        <EditModeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <EditableTextManager />
          <EditModeToggle />
        </EditModeProvider>
      </body>
    </html>
  );
}
