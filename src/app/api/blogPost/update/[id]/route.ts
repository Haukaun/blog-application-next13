import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

interface RequestBody {
  title: string;
  subTitle: string;
  content: string;
  //image: string;
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const body: RequestBody = await request.json();

  const accessToken = request.headers.get("authorization");

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

  const blogPost = await prisma.blogPost.update({
    where: {
      id: +params.id,
    },
    data: {
      title: body.title,
      subTitle: body.subTitle,
      content: body.content,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
