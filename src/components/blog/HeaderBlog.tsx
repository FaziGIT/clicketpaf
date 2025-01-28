import Link from 'next/link';

interface Props {
    title: string;
    time: string;
    by: string;
    category?: string;
    readingTime?: string;
    publishDate: string;
}

export default function HeaderBlog({
                                       title,
                                       time,
                                       by,
                                       category = "Technology",
                                       readingTime = "5 min read",
                                       publishDate
                                   }: Props) {
    return (
        <header className="article-header">
            <Link
                href={`/category/${category.toLowerCase()}`}
                className="text-white hover:text-gray-700 transition duration-500 ease-in-out text-sm"
                aria-label={`View ${category} category`}
            >
                {category}
            </Link>

            <h1
                className="text-white font-bold text-4xl mt-2 mb-4"
                itemProp="headline"
            >
                {title}
            </h1>

            <div className="py-5 text-sm font-regular text-white flex items-center" itemProp="author">
                <time
                    dateTime={publishDate}
                    className="mr-3 flex flex-row items-center"
                    itemProp="datePublished"
                >
                    <svg
                        className="text-white"
                        fill="currentColor"
                        height="13"
                        width="13"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                    >
                        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333-21.333V256z" />
                    </svg>
                    <span className="ml-1">{time}</span>
                </time>

                <span className="mr-3 flex flex-row items-center">
                    <svg
                        className="text-white"
                        fill="currentColor"
                        height="13"
                        width="13"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    <span className="ml-1">{readingTime}</span>
                </span>

                <Link
                    href={`/author/${by.toLowerCase().replace(' ', '-')}`}
                    className="flex flex-row items-center hover:text-gray-300"
                    aria-label={`View articles by ${by}`}
                >
                    <svg
                        className="text-white"
                        fill="currentColor"
                        height="16"
                        width="16"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <span className="ml-1">{by}</span>
                </Link>
            </div>
            <hr className="border-gray-600" />
        </header>
    );
}
