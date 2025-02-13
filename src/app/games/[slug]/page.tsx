import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GameHeader from '@/components/games/GameHeader';
import GameReviews from '@/components/games/GameReviews';

const getGameBySlug = (slug: string) => {
    const games = [
        {
            slug: 'coinflip',
            title: 'Pile ou Face',
            description: 'Testez votre chance avec notre jeu de Pile ou Face équitable et divertissant ! Pariez sur pile ou face et doublez vos chances de gagner. Avec des résultats en temps réel et des gains instantanés, vivez l\'excitation du lancer !',
            image: '/images/games/coinflip.jpeg',
            category: 'Jeux de Chance',
            playCount: 15000,
            reviews: [
                { id: 1, author: 'Alex', content: "J'adore le Pile ou Face de ClickEtPaf, c'est super addictif !", rating: 5 },
                { id: 2, author: 'Sophie', content: "Le meilleur jeu de pile ou face en ligne !", rating: 5 },
                { id: 3, author: 'Marc', content: "Interface intuitive et paiements rapides.", rating: 4 },
            ]
        },
        {
            slug: 'roulette',
            title: 'Roulette',
            description: 'Découvrez notre Roulette en ligne captivante ! Placez vos paris sur les numéros, couleurs ou combinaisons de votre choix. Une expérience de casino authentique avec des animations fluides et réalistes.',
            image: '/images/games/roulette.jpeg',
            category: 'Jeux de Casino',
            playCount: 25000,
            reviews: [
                { id: 4, author: 'Marie', content: "L'ambiance casino est parfaitement reproduite !", rating: 5 },
                { id: 5, author: 'Thomas', content: "Les animations sont superbes, on s'y croirait.", rating: 4 },
                { id: 6, author: 'Julie', content: "Ma roulette préférée sur le web.", rating: 5 },
            ]
        },
        {
            slug: 'blackjack',
            title: 'Blackjack',
            description: 'Affrontez le croupier dans notre version du célèbre Blackjack ! Utilisez votre stratégie pour atteindre 21 sans le dépasser. Un classique du casino repensé pour une expérience en ligne optimale.',
            image: '/images/games/blackjack.jpeg',
            category: 'Jeux de Cartes',
            playCount: 20000,
            reviews: [
                { id: 7, author: 'Pierre', content: "Le meilleur Blackjack que j'ai joué en ligne.", rating: 5 },
                { id: 8, author: 'Emma', content: "Facile à comprendre même pour les débutants.", rating: 4 },
                { id: 9, author: 'Lucas', content: "J'apprécie particulièrement la fluidité du jeu.", rating: 5 },
            ]
        },
        {
            slug: 'slots',
            title: 'Machine à Sous',
            description: 'Plongez dans l\'univers excitant de nos machines à sous ! Avec des thèmes variés, des bonus captivants et des jackpots progressifs, chaque partie est une nouvelle aventure.',
            image: '/images/games/slots.jpeg',
            category: 'Machines à Sous',
            playCount: 30000,
            reviews: [
                { id: 10, author: 'Léa', content: "Les graphismes sont magnifiques !", rating: 5 },
                { id: 11, author: 'Nicolas', content: "Beaucoup de bonus différents, c'est top.", rating: 4 },
                { id: 12, author: 'Sarah', content: "Je ne me lasse pas des différents thèmes.", rating: 5 },
            ]
        }
    ];

    return games.find(game => game.slug === slug) || null;
};

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const game = getGameBySlug(params.slug);
    
    if (!game) return { title: 'Game Not Found' };

    return {
        title: `${game.title} - ClickEtPaf Games`,
        description: game.description,
        openGraph: {
            title: game.title,
            description: game.description,
            type: 'website',
            images: [{ url: game.image }],
        },
        twitter: {
            card: 'summary_large_image',
            title: game.title,
            description: game.description,
            images: [game.image],
        }
    };
}

export default function GamePage({ params }: Props) {
    const game = getGameBySlug(params.slug);

    if (!game) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-8" itemScope itemType="https://schema.org/Game">
            <GameHeader
                title={game.title}
                image={game.image}
                category={game.category}
                playCount={game.playCount}
            />

            <section className="mt-8">
                <p className="text-white text-lg leading-relaxed" itemProp="description">
                    {game.description}
                </p>
            </section>

            <section className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Avis des Joueurs</h2>
                <GameReviews reviews={game.reviews} />
            </section>
        </article>
    );
}
