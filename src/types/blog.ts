export interface BlogInfo {
    title: string;
    content: string;
    quote?: string;
    secondContent: string;
}

export interface BlogPost {
    id: string;
    title: string;
    time: string;
    by: string;
    description: string;
    keywords: string,
    date: string,
    infos: BlogInfo[];
}
