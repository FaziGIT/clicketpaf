import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GameHeader from '@/components/games/GameHeader';
import GameReviews from '@/components/games/GameReviews';

const getGameBySlug = (slug: string) => {
    const games = [
        {
            slug: 'coinflip',
            title: 'Pile ou Face',
            description: 'Testez votre chance avec notre jeu de Pile ou Face équitable et divertissant !',
            image: '/images/games/coinflip.webp',
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
            description: 'Découvrez notre Roulette en ligne captivante !',
            image: '/images/games/roulette.webp',
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
            image: '/images/games/blackjack.webp',
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
            image: '/images/games/slots.webp',
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
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const game = getGameBySlug(slug);

    if (!game) return { title: 'Game Not Found' };

    return {
        title: `${game.title} - Jouez en ligne sur ClicketPaf Casino`,
        description: game.description,
        keywords: `${game.title.toLowerCase()}, clicketpaf, casino en ligne, ${game.category.toLowerCase()}, jeux d'argent, ${slug}, casino france, jeux en ligne, argent réel`,
        openGraph: {
            title: `${game.title} - ClicketPaf Casino`,
            description: game.description,
            type: 'website',
            images: [{ 
                url: game.image,
                alt: `${game.title} sur ClicketPaf Casino`
            }],
            siteName: 'ClicketPaf Casino',
            locale: 'fr_FR'
        },
        twitter: {
            card: 'summary_large_image',
            title: `${game.title} - ClicketPaf Casino`,
            description: game.description,
            images: [game.image],
            site: '@clicketpaf'
        }
    };
}

export default async function GamePage({ params }: Props) {
    const { slug } = await params;
    const game = getGameBySlug(slug);

    if (!game) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8" 
            itemScope 
            itemType="https://schema.org/Game"
            role="main"
        >
            <meta itemProp="provider" content="ClicketPaf Casino" />
            <meta itemProp="gameCategory" content={game.category} />
            <meta itemProp="numberOfPlays" content={game.playCount.toString()} />
            
            <GameHeader
                title={game.title}
                image={game.image}
                category={game.category}
                playCount={game.playCount}
            />

            <section className="mt-6 sm:mt-8">
                <p className="text-white text-base sm:text-lg leading-relaxed" 
                   itemProp="description"
                   lang="fr"
                >
                    {game.description}
                </p>
            </section>

            <section className="mt-8 sm:mt-12">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Avis des Joueurs</h2>
                <GameReviews reviews={game.reviews} />
            </section>
        </article>
    );
}
