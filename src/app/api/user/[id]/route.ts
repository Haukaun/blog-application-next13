import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

export async function GET(
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

  const getBlogPostsByUser = await prisma.blogPost.findMany({
    where: {
      userId: +params.id,
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      items: true,
    },
  });

  return new Response(JSON.stringify(getBlogPostsByUser));
}
