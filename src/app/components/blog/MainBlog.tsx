interface Props {
    description: string;
    infos: {
        title: string;
        content: string;
        quote?: string;
        secondContent: string;
    }[]
}

export default function MainBlog({description, infos}: Props) {
    return <>
        <p className="text-base leading-8 my-5">
            {description}
        </p>

        {infos.map((item, index) =>
            <div key={index}>
                <h3 className="text-2xl font-bold my-5">#{index + 1}. {item.title}</h3>
                <p className="text-base leading-8 my-5">
                    {item.content}
                </p>
                
                {item.quote && (
                    <blockquote className="text-md italic leading-8 my-5 p-5 text-white font-semibold">{item.quote}
                    </blockquote>
                )}

                <p className="text-base leading-8 my-5">
                    {item.secondContent}
                </p>

            </div>
        )}
    </>
}
