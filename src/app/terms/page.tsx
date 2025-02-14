import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ClickEtPaf - Conditions d'utilisation du casino virtuel de démonstration",
  description: "ClickEtPaf est un casino virtuel de démonstration à but éducatif. Découvrez nos conditions d'utilisation et notre engagement envers le jeu responsable.",
  keywords: "ClickEtPaf, casino démo, casino virtuel, jeu démonstration, ClickEtPaf conditions",
  openGraph: {
    title: "ClickEtPaf - Conditions du casino virtuel",
    description: "Conditions d'utilisation du casino virtuel de démonstration ClickEtPaf",
    type: "website",
    siteName: "ClickEtPaf",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary",
    title: "ClickEtPaf - Conditions d'utilisation",
    description: "Casino virtuel de démonstration - Conditions d'utilisation"
  }
};

export default function TermsPage() {
  return (
    <div className="w-full bg-main-dark-blue py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Conditions d&apos;utilisation de ClickEtPaf
        </h1>

        <div className="max-w-4xl mx-auto text-txt-soft-white space-y-6">
          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Présentation de ClickEtPaf</h2>
            <p>
              ClickEtPaf est un casino virtuel de démonstration créé uniquement à des fins éducatives. 
              Aucune information personnelle n&apos;est collectée et aucun argent réel n&apos;est impliqué.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Nature du service</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>ClickEtPaf est une simulation à but pédagogique</li>
              <li>Aucune transaction réelle n&apos;est possible sur la plateforme</li>
              <li>Les gains et pertes sont purement fictifs</li>
            </ul>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Fonctionnement</h2>
            <p>
              Les jeux disponibles sur ClickEtPaf sont des démonstrations techniques. 
              Ils servent à illustrer les mécaniques de jeu dans un environnement sécurisé et sans risque.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Objectif pédagogique</h2>
            <p>
              ClickEtPaf vise à sensibiliser aux mécaniques de jeu tout en restant dans un cadre strictement démonstratif.
              Cette plateforme n&apos;a aucune vocation commerciale.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
