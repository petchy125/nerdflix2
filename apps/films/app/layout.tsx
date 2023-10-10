import './global.css';
import type { Metadata } from 'next';
import '@nerdflix-nx-cypress/shared/assets/styles/global.css';
import Layout from '@nerdflix-nx-cypress/shared/components/layout';
import Analytics from '@nerdflix-nx-cypress/shared/components/analytic';

export const metadata: Metadata = {
  title: 'Nerdflix | Films',
  description: 'An application built by nerds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
