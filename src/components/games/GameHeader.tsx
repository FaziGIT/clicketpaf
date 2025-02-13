import Image from 'next/image';

interface Props {
    title: string;
    image: string;
    category: string;
    playCount: number;
}

export default function GameHeader({ title, image, category, playCount }: Props) {
    return (
        <header className="relative">
            <div className="w-full h-[300px] relative overflow-hidden rounded-lg">
                <Image
                    src={image}
                    alt={`${title} game preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-cover"
                    priority
                    quality={85}
                    loading="eager"
                />
            </div>
            <div className="mt-4">
                <span className="text-category-blue text-sm font-medium">{category}</span>
                <h1 className="text-4xl font-bold text-white mt-2">{title}</h1>
                <p className="text-gray-400 mt-2">
                    {playCount.toLocaleString()} players have tried this game
                </p>
            </div>
        </header>
    );
}
