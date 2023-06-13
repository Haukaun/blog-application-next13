enum Role {
  USER,
  ADMIN,
}

export interface User {
  email: string;
  name: string | null;
  role: Role;
  id: number;
  password: string;
  blogPosts: BlogPost[];
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  published: boolean;
  userId: number;
  createdAt: Date | null;
  image: string;
  user: User;
  items: BlogPostItem[] | null;
}

export interface BlogPostItem {
  id: number;
  title: string;
  content: string;
  blogpostId: number;
  image: string;
  blogpost: BlogPost;
}
