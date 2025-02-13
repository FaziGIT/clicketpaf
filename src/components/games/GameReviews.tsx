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
        <>
            {/* Version mobile */}
            <div className="grid grid-cols-1 gap-4 my-8 md:hidden">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <p className="text-white text-base italic mb-4">"{review.content}"</p>
                        <footer className="text-gray-300 text-sm">
                            - {review.author}
                            <div className="flex mt-2">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">★</span>
                                ))}
                            </div>
                        </footer>
                    </div>
                ))}
            </div>

            {/* Version desktop avec carousel */}
            <div className="hidden md:block w-full overflow-hidden my-8">
                <div 
                    className="flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {reviews.map((review) => (
                        <div key={review.id} className="min-w-full px-4">
                            <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <p className="text-white text-lg italic mb-4">"{review.content}"</p>
                                <footer className="text-gray-300">
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
        </>
    );
}
