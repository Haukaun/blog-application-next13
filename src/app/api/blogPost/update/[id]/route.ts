import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const body: BlogPost = await request.json();

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
      slug: body.slug,
      title: body.title,
      subTitle: body.subTitle,
      content: body.content,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
