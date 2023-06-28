import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

interface addBlogPost {
  title: string;
  subTitle: string;
  metaDesc: string;
  content: string;
  slug: string;
  userId: number;
  image: string | null;
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("Authorization");

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "You must be authorized",
      }),
      {
        status: 401,
      }
    );
  }

  const body: addBlogPost = await request.json();

  const blogPost = await prisma.blogPost.create({
    data: {
      title: body.title,
      subTitle: body.subTitle,
      metaDesc: body.metaDesc,
      content: body.content,
      slug: body.slug,
      userId: body.userId,
      image: body.image,
    },
    include: {
      user: true,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
