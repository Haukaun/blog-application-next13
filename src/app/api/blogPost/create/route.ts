import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

interface RequestBody {
  title: string;
  content: string;
  userId: number;
  image: string;
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

  const body: RequestBody = await request.json();

  const blogPost = await prisma.blogPost.create({
    data: {
      title: body.title,
      content: body.content,
      userId: body.userId,
      image: body.image,
    },
    include: {
      user: true,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
