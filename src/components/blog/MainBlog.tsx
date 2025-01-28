import Link from 'next/link';

interface Props {
    description: string;
    infos: {
        title: string;
        content: string;
        quote?: string;
        secondContent: string;
    }[];
    keywords?: string[];
}

export default function MainBlog({ description, infos, keywords = [] }: Props) {
    return (
        <main className="article-content" itemScope itemType="http://schema.org/Article">
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            <p className="text-base leading-8 my-5" itemProp="description">
                {description}
            </p>

            <div itemProp="articleBody">
                {infos.map((item, index) => (
                    <section
                        key={index}
                        className="article-section"
                        id={`section-${index + 1}`}
                    >
                        <h2 className="text-2xl font-bold my-5">
                            <span className="text-gray-400">#{index + 1}.</span> {item.title}
                        </h2>

                        <p className="text-base leading-8 my-5">
                            {item.content}
                        </p>

                        {item.quote && (
                            <blockquote className="text-md italic leading-8 my-5 p-5 text-white font-semibold border-l-4 border-gray-400">
                                {item.quote}
                            </blockquote>
                        )}

                        <p className="text-base leading-8 my-5">
                            {item.secondContent}
                        </p>
                    </section>
                ))}
            </div>

            {/* "Back to Blog" Button */}
            <div className="mt-8 text-center">
                <Link
                    href="/blog"
                    className="inline-block px-6 py-3 bg-darkerShade text-white font-semibold rounded-md shadow-md hover:bg-lighterSeal transition duration-200"
                >
                    Back to Blog
                </Link>
            </div>
        </main>
    );
}
