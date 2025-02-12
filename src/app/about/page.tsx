import Image from "next/image";

export default function AboutUsPage() {
  return (
      <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-700 pb-6">
              Un clic, un frisson, et Paf un jackpot !
          </h1>

          <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">Notre Mission chez <span
              className="text-yellow-500 leading-4">Click<span className="text-white">et</span>Paf</span></h2>

          <p className="text-lg text-txt-soft-white text-center max-w-2xl mx-auto">
              Chez <strong>ClickEtPaf</strong>, nous avons une mission simple : offrir une expérience de jeu
              unique, sécurisée et immersive. Que vous soyez un joueur débutant ou un expert des tables de blackjack et
              de poker, nous avons conçu notre plateforme pour répondre à toutes vos attentes.
          </p>

          <div className="flex justify-center my-6">
              <Image src="/images/cardImage.jpg" alt="CardImage" width={600} height={300}
                     className="rounded-lg shadow-md"/>
          </div>

          <h2 className="text-3xl font-semibold text-center mt-8 text-blue-600">L'Histoire de <span
              className="text-yellow-500 leading-4">Click<span className="text-white">et</span>Paf</span></h2>

          <p className="text-lg text-txt-soft-white text-center max-w-2xl mx-auto mt-4">
              Nous avons lancé <strong>ClickEtPaf</strong> en 2019 avec une ambition claire :
              révolutionner le monde des jeux d'argent en ligne. Nous avons débuté en proposant une sélection de
              machines à sous et de jeux de table, et aujourd’hui, nous sommes fiers d’être une référence avec une offre
              complète incluant du poker, blackjack, roulette et pleins d'autres jeux.
          </p>

          <h2 className="text-3xl font-semibold text-center mt-8 text-blue-600">Pourquoi nous choisir ?</h2>

          <ul className="list-disc text-lg text-txt-soft-white max-w-2xl mx-auto mt-4">
              <li><strong>🎰 Jeux variés :</strong> Des centaines de jeux de casino, du classique au moderne.</li>
              <li><strong>🔒 Sécurité garantie :</strong> Une plateforme certifiée et des paiements sécurisés.</li>
              <li><strong>⚡ Paiements rapides :</strong> Retraits instantanés pour une expérience sans stress.</li>
              <li><strong>🎁 Bonus exclusifs :</strong> Profitez d'offres et de promotions inédites.</li>
              <li><strong>📱 Compatibilité mobile :</strong> Jouez sur PC, tablette et smartphone sans compromis.</li>
          </ul>

          <div className="text-center mt-10">
              <a href="/"
                 className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
                  Découvrir nos jeux 🎲
              </a>
          </div>
      </div>
  )
}
