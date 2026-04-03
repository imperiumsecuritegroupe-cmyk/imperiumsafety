import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimationInit from '@/components/AnimationInit';

export const metadata: Metadata = {
  title: 'Imperium Safety Security - Sûreté Aéroportuaire & Portuaire',
  description: 'Imperium Safety Security - Votre partenaire de confiance en sûreté aéroportuaire et portuaire en France et DOM-TOM. Agents certifiés CNAPS, habilitation préfectorale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
        <AnimationInit />
      </body>
    </html>
  );
}
