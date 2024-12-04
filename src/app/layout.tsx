import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ClicketPaf - Casino en ligne",
  description: "Découvrez ClicketPaf, votre site de casino en ligne préféré. Rejoignez-nous pour jouer à des jeux passionnants comme Poker, Jackpot, Coinflip et bien plus.",
  icons: "https://www.clicketpaf.shop/favicon.ico",
  authors: [{name: "Andre DOMINGUES RAMOS", url: "https://www.andredr.dev"}, {name: "Mathis TASSART", url: "https://mathistassart.fr"}, {name: "Elise GARROUTY"}],
  openGraph: {
    title: "ClicketPaf - Casino en Ligne",
    description: "Rejoignez ClicketPaf pour jouer à vos jeux de casino préférés : Poker, Jackpot, Coinflip. Prêt à décrocher le gros lot ?",
    images: "https://www.clicketpaf.shop/favicon.ico",
    url: "https://www.clicketpaf.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClicketPaf - Casino en Ligne",
    description: "Jouez à des jeux de casino en ligne sur ClicketPaf : Poker, Jackpot, Coinflip et bien plus !",
    images: "https://www.clicketpaf.shop/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex bg-bg-dark-blue`}>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
