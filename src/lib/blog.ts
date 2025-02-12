import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/blog';

const blogDirectory = path.join(process.cwd(), 'src/data');

export function getAllPosts(): BlogPost[] {
    const filePath = path.join(blogDirectory, 'blog-posts.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
    const posts = getAllPosts();
    return posts.find(post => post.id === slug) || null;
}
