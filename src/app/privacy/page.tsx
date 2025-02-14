import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ClickEtPaf - Politique de confidentialité du casino virtuel de démonstration",
  description: "ClickEtPaf est un casino virtuel de démonstration qui ne collecte aucune donnée personnelle. Site créé à but éducatif uniquement.",
  keywords: "ClickEtPaf, confidentialité démo, casino virtuel, jeu démonstration, ClickEtPaf confidentialité",
  openGraph: {
    title: "ClickEtPaf - Confidentialité du casino virtuel",
    description: "Casino virtuel de démonstration sans collecte de données",
    type: "website",
    siteName: "ClickEtPaf",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary",
    title: "ClickEtPaf - Confidentialité",
    description: "Casino virtuel sans collecte de données personnelles"
  }
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-main-dark-blue py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Politique de Confidentialité de ClickEtPaf
        </h1>

        <div className="max-w-4xl mx-auto text-txt-soft-white space-y-6">
          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Absence de collecte de données</h2>
            <p>
              ClickEtPaf est un site de démonstration à but éducatif. 
              Aucune donnée personnelle n&apos;est collectée ni stockée lors de votre utilisation du site.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Fonctionnement du site</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Toutes les données de jeu sont fictives</li>
              <li>Aucune inscription réelle n&apos;est nécessaire</li>
              <li>Aucune information n&apos;est enregistrée</li>
            </ul>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cookies et données techniques</h2>
            <p>
              Le site n&apos;utilise que les cookies strictement nécessaires à son fonctionnement technique.
              Aucun cookie de traçage ou d&apos;analyse n&apos;est mis en place.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact</h2>
            <p>
              ClickEtPaf étant un projet de démonstration, aucun service de support 
              ou de traitement des données n&apos;est disponible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
