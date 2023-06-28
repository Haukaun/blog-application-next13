///add blogpostitem to blogpost
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

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

  const body: BlogPostItem = await request.json();

  const blogPostItem = await prisma.blogPostItem.create({
    data: {
      title: body.title,
      content: body.content,
      blogpostId: body.blogpostId,
      image: body.image,
      subTitle: body.subTitle,
      urlPath: body.urlPath,
      subContent: body.subContent,
    },
  });

  return new Response(JSON.stringify(blogPostItem));
}
