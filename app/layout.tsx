import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/app/component/header/header';
import Footer from '@/app/component/footer/footer';
import Script from 'next/script';
import Analytics from './component/Analytics/Analytics';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel VN - The Anh 21',
  description:
    'Lên đường khám phá cảnh đẹp Việt Nam, lên kế hoạch tour, săn ưu đãi và lưu lại những trải nghiệm không thể quên cùng Travel VN.',
  verification: {
    google: 'TL6vqFp2MWsd8vkxpA04EJjdU2XOwnZ11y1LD3dVx1A',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Travel VN - The Anh 21',
    description:
      'Lên đường khám phá cảnh đẹp Việt Nam, lên kế hoạch tour, săn ưu đãi và lưu lại những trải nghiệm không thể quên cùng Travel VN.',
    url: 'https://travel-vn.vercel.app',
    siteName: 'Travel VN',
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <Analytics />
      </Head>
      <body
        className={
          inter.className +
          ' mx-auto min-h-screen flex flex-col justify-between'
        }
      >
        {/* NOSCRIPT cho GTM */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFQH3LBN"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
