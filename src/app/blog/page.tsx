import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog Casino ClicketPaf - Actualités et Guide des Jeux',
    description: 'Découvrez les dernières actualités du casino en ligne, guides et astuces pour les jeux sur ClicketPaf Casino.',
    keywords: 'blog casino, clicketpaf, actualités casino, guide des jeux, astuces casino, blog gaming, casino en ligne',
    openGraph: {
        title: 'Blog ClicketPaf Casino',
        description: 'Actualités et guides du casino en ligne ClicketPaf',
        type: 'website',
        siteName: 'ClicketPaf Casino Blog',
        locale: 'fr_FR'
    }
};

const truncateDescription = (description: string, maxLength: number = 30) => {
    return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
};

const BlogPage = () => {
    const posts = getAllPosts();

    return (
        <article 
            className="container mx-auto px-4 py-10" 
            role="main"
            itemScope 
            itemType="https://schema.org/Blog"
        >
            <h1 className="text-4xl font-bold mb-6 text-center">Articles Blog ClicketPaf Casino</h1>

            <div className="space-y-6">
                {posts.length === 0 ? (
                    <p className="text-center text-gray-500">No blog posts available.</p>
                ) : (
                    posts.map((post) => (
                        <article key={post.id} className="block"
                            itemProp="blogPost" 
                            itemScope 
                            itemType="https://schema.org/BlogPosting"
                        >
                            <Link
                                href={`/blog/${post.id}`}
                                passHref
                                className="block p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
                            >
                                <h2 className="text-2xl font-semibold text-blue-600 mb-3" itemProp="headline">
                                    {post.title}
                                </h2>
                                <p className="text-gray-700 mb-4" itemProp="abstract">
                                    {truncateDescription(post.description)}
                                </p>
                                <time className="text-sm text-gray-500" itemProp="datePublished">
                                    Published on {new Date(post.date).toLocaleDateString()}
                                </time>
                            </Link>
                        </article>
                    ))
                )}
            </div>
        </article>
    );
};

export default BlogPage;
