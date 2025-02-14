import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ClicketPaf - Casino en ligne",
  description: "Découvrez ClicketPaf, votre site de casino en ligne préféré. Rejoignez-nous pour jouer à des jeux passionnants comme Poker, Jackpot, Coinflip et bien plus.",
  keywords: "clicketpaf, click et paf, casino en ligne, clicket paf, click etpaf, click, paf, casino, poker, jackpot, coinflip, jeux en ligne, click & paf, click and paf, click&paf, clickandpaf, jeux d'argent, paris en ligne, machine à sous, roulette, blackjack, bonus casino, casino france, casino virtuel, casino gratuit",
  icons: "https://www.clicketpaf.shop/favicon.ico",
  authors: [{name: "Andre DOMINGUES RAMOS", url: "https://www.andredr.dev"}, {name: "Mathis TASSART", url: "https://mathistassart.fr"}, {name: "Elise GARROUTY"}],
  openGraph: {
    title: "ClicketPaf - Casino en Ligne",
    description: "Rejoignez ClicketPaf pour jouer à vos jeux de casino préférés : Poker, Jackpot, Coinflip. Prêt à décrocher le gros lot ?",
    images: "https://www.clicketpaf.shop/favicon.ico",
    url: "https://www.clicketpaf.com",
    siteName: "ClicketPaf",
    type: "website",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "ClicketPaf - Casino en Ligne",
    description: "Jouez à des jeux de casino en ligne sur ClicketPaf : Poker, Jackpot, Coinflip et bien plus !",
    images: "https://www.clicketpaf.shop/favicon.ico",
    site: "@clicketpaf"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased flex bg-bg-dark-blue"}>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
