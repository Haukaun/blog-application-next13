import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
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
  const blogPost = await prisma.blogPost.delete({
    where: {
      id: +params.id,
    },
  });

  return new Response(JSON.stringify(blogPost));
}
