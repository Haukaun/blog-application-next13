import prisma from "@/lib/prisma";

interface RequestBody {
  title: string;
  content: string;
  userId: number;
  image: string;
}

export async function GET() {
  const blogPosts = await prisma.blogPost.findMany({
    include: {
      user: true,
    },
  });
  return new Response(JSON.stringify(blogPosts));
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const blogPost = await prisma.blogPost.create({
    data: {
      title: body.title,
      content: body.content,
      userId: body.userId,
      image: body.image,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
