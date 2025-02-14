import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - ClickEtPaf | Casino en Ligne",
  description: "Consultez les conditions générales d'utilisation de ClickEtPaf. Règles et modalités d'utilisation de notre casino en ligne.",
  keywords: "cgu clicketpaf, conditions utilisation casino, règlement clicketpaf, mentions légales casino en ligne",
  openGraph: {
    title: "Conditions Générales - ClickEtPaf Casino",
    description: "Conditions générales d'utilisation et règlement du casino",
    type: "website",
    siteName: "ClickEtPaf Casino",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary",
    title: "CGU ClickEtPaf Casino",
    description: "Conditions générales et règles d'utilisation"
  }
};

export default function TermsPage() {
  return (
    <div className="w-full bg-main-dark-blue py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Conditions Générales d&apos;Utilisation
        </h1>

        <div className="max-w-4xl mx-auto text-txt-soft-white space-y-6">
          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Introduction</h2>
            <p>
              En accédant à ClickEtPaf, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. Conditions d&apos;utilisation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vous devez être âgé d&apos;au moins 18 ans pour utiliser nos services</li>
              <li>Les comptes sont strictement personnels et non transférables</li>
              <li>Toute tentative de fraude entraînera la suspension immédiate du compte</li>
            </ul>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Règles de jeu</h2>
            <p>
              Chaque jeu dispose de ses propres règles spécifiques que vous devez accepter avant d&apos;y participer. ClickEtPaf se réserve le droit de modifier ces règles à tout moment.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Responsabilité</h2>
            <p>
              ClickEtPaf ne peut être tenu responsable des pertes financières liées à l&apos;utilisation de nos services. Jouez de manière responsable et fixez-vous des limites.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
