import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "ClickEtPaf - Le Casino en Ligne N°1 en France | Jeux d'Argent en Ligne",
  description: "ClickEtPaf est votre casino en ligne de confiance. ✓ Jeux d'argent en ligne ✓ Machines à sous ✓ Poker ✓ Blackjack ✓ Bonus exclusifs. Rejoignez ClickEtPaf maintenant !",
  keywords: "ClickEtPaf, Click Et Paf, ClicketPaf casino, Click et Paf casino, meilleur casino en ligne, casino ClickEtPaf, jeux ClickEtPaf, casino en ligne français, Click&Paf",
  icons: "https://www.clicketpaf.shop/favicon.ico",
  authors: [{name: "Andre DOMINGUES RAMOS", url: "https://www.andredr.dev"}, {name: "Mathis TASSART", url: "https://mathistassart.fr"}, {name: "Elise GARROUTY"}],
  openGraph: {
    title: "ClickEtPaf - Casino en Ligne N°1",
    description: "Découvrez ClickEtPaf, le casino en ligne de référence en France. Bonus exclusifs et jeux d'exception vous attendent !",
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
