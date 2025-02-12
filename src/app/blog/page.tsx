import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

const truncateDescription = (description: string, maxLength: number = 30) => {
    return description.length > maxLength ? description.substring(0, maxLength) + "..." : description;
};

const BlogPage = () => {
    // Fetch all the blog posts
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold mb-6 text-center">All Blog Posts</h1>

            <div className="space-y-6">
                {posts.length === 0 ? (
                    <p className="text-center text-gray-500">No blog posts available.</p>
                ) : (
                    posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            passHref
                            className="block p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
                        >
                            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                                {post.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{truncateDescription(post.description)}</p>
                            <p className="text-sm text-gray-500">Published on {new Date(post.date).toLocaleDateString()}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default BlogPage;
