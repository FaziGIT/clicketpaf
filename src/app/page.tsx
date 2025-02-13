export default function Home() {
  return (
      <main className="bg-main-dark-blue flex-1 flex flex-col p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-center bg-dark text-yellow-500 py-4 mt-4 sm:mt-8">
            <hr className="hidden sm:block w-1/4 border-yellow-500" />
            <h2 className="text-center text-yellow-500 text-2xl sm:text-3xl lg:text-4xl px-3 sm:px-6">Bienvenue sur ClicketPaf</h2>
            <hr className="hidden sm:block w-1/4 border-yellow-500" />
        </div>

        <div className="text-center py-4 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
          <p className="text-txt-soft-white text-sm sm:text-base lg:text-lg">
            Explorez ClicketPaf, l&apos;endroit incontournable pour les vrais amateurs de casino en ligne. Ici, on, 
            parle sérieux : Poker, Jackpot, Coinflip… tout est réuni pour vous offrir des moments intenses.
            <br/>Alors, prêt à décrocher le gros lot ? Il vous suffit de ClicketPaf !
          </p>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-between h-full">
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
          <div className="bg-indigo-950 h-32 sm:h-36 lg:h-40 rounded-lg shadow-lg transition-transform hover:scale-105">
          </div>
        </div>

      </main>
  );
}
