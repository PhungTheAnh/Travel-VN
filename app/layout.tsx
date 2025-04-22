import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/app/component/header/header';
import Footer from '@/app/component/footer/footer';
import Script from 'next/script';
import Analytics from './component/Analytics/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel VN',
  description: 'Travel VN by TheAnh',
  name: 'google-site-verification',
  content: 'eYkQszMmKVo_XuRe-yltvEpS3VPXb2OdOhbiVADJRJM',
  other: {
    'google-site-verification': 'TL6vqFp2MWsd8vkxpA04EJjdU2XOwnZ11y1LD3dVx1A',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <Analytics />
        </head>
</script>

{/* End Google Tag Manager */}
      </head>
      <body
        className={
          inter.className +
          ' mx-auto min-h-screen flex flex-col justify-between'
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-TFQH3LBN'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </html>
  );
}
