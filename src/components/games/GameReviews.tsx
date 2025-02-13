'use client';
import { useEffect, useState } from 'react';

interface Review {
    id: number;
    author: string;
    content: string;
    rating: number;
}

export default function GameReviews({ reviews }: { reviews: Review[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((current) => 
                current === reviews.length - 1 ? 0 : current + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <div className="w-full overflow-hidden my-8">
            <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="min-w-full px-4"
                    >
                        <blockquote className="bg-darkerShade p-6 rounded-lg shadow-lg">
                            <p className="text-white text-lg italic mb-4">"{review.content}"</p>
                            <footer className="text-lighterSeal">
                                - {review.author}
                                <div className="flex mt-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
}
