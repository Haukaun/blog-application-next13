interface BlogPostItem {
  id: number;
  title: string;
  content: string;
  blogpostId: number;
  image: string | null;
  subTitle: string;
  urlPath: string;
  subContent: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  metaDesc: string;
  published: boolean;
  slug: string;
  userId: number;
  createdAt: Date;
  image: string | null;
  subTitle: string;
  items: BlogPostItem[];
}
