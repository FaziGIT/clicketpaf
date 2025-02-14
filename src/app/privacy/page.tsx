import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de Confidentialité - ClickEtPaf | Protection des Données",
  description: "Découvrez comment ClickEtPaf protège vos données personnelles. Politique de confidentialité conforme au RGPD.",
  keywords: "politique confidentialité clicketpaf, rgpd casino en ligne, protection données joueurs, sécurité données casino",
  openGraph: {
    title: "Politique de Confidentialité - ClickEtPaf",
    description: "Protection de vos données personnelles sur ClickEtPaf",
    type: "website",
    siteName: "ClickEtPaf Casino",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary",
    title: "Politique de Confidentialité ClickEtPaf",
    description: "Protection des données et respect de votre vie privée"
  }
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-main-dark-blue py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Politique de Confidentialité
        </h1>

        <div className="max-w-4xl mx-auto text-txt-soft-white space-y-6">
          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Protection de vos données</h2>
            <p>
              ClickEtPaf s&apos;engage à protéger et respecter votre vie privée. Cette politique détaille comment nous traitons vos informations personnelles.
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Données collectées</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informations d&apos;identification (nom, prénom, date de naissance)</li>
              <li>Coordonnées (email, numéro de téléphone)</li>
              <li>Données de transaction et historique de jeu</li>
              <li>Informations techniques (IP, cookies)</li>
            </ul>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour :<br/>
              - Gérer votre compte<br/>
              - Assurer la sécurité des transactions<br/>
              - Prévenir la fraude<br/>
              - Améliorer nos services
            </p>
          </section>

          <section className="bg-bg-dark-blue p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
