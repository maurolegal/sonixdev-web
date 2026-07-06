import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SONIXDEV',
  description: 'Software corporativo diseñado para escalar empresas.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
