import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export type Post = {
    slug: string;
    metadata: {
        title: string;
        publishedAt: string;
        summary: string;
        image?: string;
        [key: string]: any;
    };
    content: string;
};

export function getFiles(type: "blog" | "cases" | "jobs") {
    return fs.readdirSync(path.join(root, "content", type));
}

export function getPost(type: "blog" | "cases" | "jobs", slug: string): Post | null {
    try {
        const source = fs.readFileSync(
            path.join(root, "content", type, `${slug}.mdx`),
            "utf8"
        );

        const { data, content } = matter(source);

        return {
            slug,
            metadata: data as Post["metadata"],
            content,
        };
    } catch (e) {
        return null;
    }
}

export function getAllPosts(type: "blog" | "cases" | "jobs"): Post[] {
    const files = getFiles(type);

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(
            path.join(root, "content", type, postSlug),
            "utf8"
        );
        const { data } = matter(source);

        return [
            {
                slug: postSlug.replace(".mdx", ""),
                metadata: data as Post["metadata"],
                content: "",
            },
            ...allPosts,
        ];
    }, [] as Post[]).sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        return 1;
    });
}
