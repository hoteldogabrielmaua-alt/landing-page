import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Hotel do Gabriel | Hospedagem em Mauá da Serra - PR',
  description:
    'Hospede-se no Hotel do Gabriel em Mauá da Serra, PR. Suítes confortáveis, café da manhã incluso, estacionamento e fácil acesso à BR-376.',
  keywords: [
    'Hotel do Gabriel',
    'hotel em Mauá da Serra',
    'hospedagem em Mauá da Serra',
    'hotel na BR-376',
    'suítes em Mauá da Serra ',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Hotel do Gabriel | Hospedagem em Mauá da Serra - PR',
    description:
      'Suítes confortáveis, café da manhã incluso e estacionamento em Mauá da Serra, com fácil acesso à BR-376.',
    siteName: 'Hotel do Gabriel',
    images: ['/images/fachada.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel do Gabriel | Hospedagem em Mauá da Serra - PR',
    description:
      'Suítes confortáveis, café da manhã incluso e estacionamento em Mauá da Serra, com fácil acesso à BR-376.',
    images: ['/images/fachada.webp'],
  },
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Hotel do Gabriel',
              description:
                'Hotel em Mauá da Serra, Paraná, com suítes confortáveis, café da manhã incluso e estacionamento para hóspedes.',
              telephone: '+5543996677263',
              email: 'hoteldogabriel@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Avenida Ponta Grossa, 845, Centro',
                addressLocality: 'Mauá da Serra',
                addressRegion: 'PR',
                postalCode: '86828-000',
                addressCountry: 'BR',
              },
              checkinTime: '14:00',
              checkoutTime: '11:00',
              sameAs: ['https://www.instagram.com/hoteldogabriel'],
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi gratuito', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Ar-condicionado', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Café da manhã incluso', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Estacionamento para hóspedes', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Elevador', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Aceita pets', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Recepção 24 horas', value: true },
              ],
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
