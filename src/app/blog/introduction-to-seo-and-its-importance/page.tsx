import MainBlog from "@/app/components/blog/MainBlog";
import HeaderBlog from "@/app/components/blog/HeaderBlog";

interface JsonProps {
    title: string;
    time: string;
    by: string;
    description: string;
    infos: {
        title: string;
        content: string;
        quote?: string;
        secondContent: string;
    }[]
}

export default async function Page() {

    const json: JsonProps = {
        title: 'Introduction to SEO and its Importance',
        time: '5 mins ago',
        by: 'John Doe',
        description: 'SEO (Search Engine Optimization) is a crucial element for digital marketing. It involves optimizing a website to rank higher in search engine results, increasing visibility and traffic.',
        infos: [
            {
                title: 'What is SEO?',
                content: 'SEO stands for Search Engine Optimization. It is the practice of improving the quality and quantity of website traffic by increasing its visibility in search engine results. SEO encompasses both technical and content aspects of a website.',
                quote: 'SEO is about making your website easier for search engines to understand, improving both content and technical aspects.',
                secondContent: 'SEO focuses on various factors such as keywords, content quality, backlinks, and technical setup like site speed and mobile-friendliness, all aiming to improve the website\'s ranking on search engines.'
            },
            {
                title: 'Why is SEO Important?',
                content: 'SEO helps increase organic traffic, improves brand visibility, and ensures your site ranks high in relevant search queries. A well-optimized website can also lead to better user experience and increased conversions.',
                quote: 'SEO is vital for increasing online visibility, making it an indispensable part of digital marketing strategies.',
                secondContent: 'Websites that rank higher in search results are more likely to get clicked by users. Without proper SEO, even the most amazing websites can go unnoticed, making it essential for businesses to implement effective SEO strategies.'
            },
            {
                title: 'On-Page SEO vs Off-Page SEO',
                content: 'On-page SEO refers to optimizing elements on your website, such as content, keywords, meta tags, and images. Off-page SEO refers to factors outside your website, such as backlinks and social media signals.',
                quote: 'On-page SEO ensures that search engines can read your website\'s content correctly, while off-page SEO builds credibility and authority.',
                secondContent: 'Both on-page and off-page SEO are critical for a well-rounded strategy. On-page SEO helps search engines understand the content of your site, and off-page SEO improves your site\'s authority and trustworthiness through backlinks and social interactions.'
            },
            {
                title: 'How to Improve Your SEO?',
                content: 'Improving SEO involves creating high-quality, relevant content, performing keyword research, ensuring mobile responsiveness, optimizing page load speed, and obtaining quality backlinks.',
                quote: 'Effective SEO is a combination of great content, user experience, and technical optimization.',
                secondContent: 'Start with keyword research to understand what your audience is searching for. Then, optimize your content with those keywords, improve your site\'s speed and structure, and earn high-quality backlinks to improve your ranking.'
            }
        ]
    }


    return <>
        <div className="relative p-4">
            <div className="max-w-3xl mx-auto">
                <div
                    className="mt-3 text-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="">
                        <HeaderBlog title={json.title} time={json.time} by={json.by}/>
                        <MainBlog description={json.description} infos={json.infos}/>
                    </div>
                </div>
            </div>
        </div>
    </>

}
