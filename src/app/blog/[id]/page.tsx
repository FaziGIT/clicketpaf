import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';
import HeaderBlog from '@/components/blog/HeaderBlog';
import MainBlog from '@/components/blog/MainBlog';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const post = getPostBySlug(id);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: new Date().toISOString(),
            authors: [post.by],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { id } = await params;
    const post = getPostBySlug(id);

    if (!post) {
        notFound();
    }

    const wordCount =
        post.description.split(' ').length +
        post.infos.reduce(
            (acc, info) =>
                acc +
                info.content.split(' ').length +
                (info.quote?.split(' ').length || 0) +
                info.secondContent.split(' ').length,
            0
        );

    const readingTime = Math.ceil(wordCount / 200) + ' min read';

    return (
        <article className="relative p-4">
            <div className="max-w-3xl mx-auto">
                <div className="mt-3 text-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <HeaderBlog
                        title={post.title}
                        time={post.time}
                        by={post.by}
                        publishDate={new Date().toISOString()}
                        readingTime={readingTime}
                    />
                    <MainBlog
                        description={post.description}
                        infos={post.infos}
                        keywords={[post.keywords, ...id.split('-')]}
                    />
                </div>
            </div>
        </article>
    );
}
