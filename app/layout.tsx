import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/app/component/header/header";
import Footer from "@/app/component/footer/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Travel VN",
  description: "Travel VN by TheAnh",
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
    <body className={inter.className + ' mx-auto min-h-screen flex flex-col justify-between'}>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
