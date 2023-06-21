import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { BlogPostProps } from "@/lib/types/interfaces";

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const body: BlogPostProps = await request.json();

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
      title: body.blogPost.title,
      subTitle: body.blogPost.subTitle,
      content: body.blogPost.content,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
