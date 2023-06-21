interface BlogPostItem {
  id: number;
  title: string;
  content: string;
  blogpostId: number;
  image: string | null;
  subTitle: string;
  urlPath: string;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  published: boolean;
  slug: string;
  userId: number;
  createdAt: Date;
  image: string | null;
  subTitle: string;
  items: BlogPostItem[]; // Add this line
}
