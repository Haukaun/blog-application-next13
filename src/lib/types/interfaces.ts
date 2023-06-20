import { BlogPost, BlogPostItem } from "@prisma/client";

export interface BlogPostProps {
  blogPost: BlogPost;
}

export interface BlogPostItemProps {
  blogPostItem: BlogPostItem;
}
