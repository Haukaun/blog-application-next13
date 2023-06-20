///add blogpostitem to blogpost
import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { BlogPostItemProps } from "@/lib/types/interfaces";

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

  const body: BlogPostItemProps = await request.json();

  const blogPostItem = await prisma.blogPostItem.create({
    data: {
      title: body.blogPostItem.title,
      content: body.blogPostItem.content,
      blogpostId: body.blogPostItem.blogpostId,
      image: body.blogPostItem.image,
      subTitle: body.blogPostItem.subTitle,
      urlPath: body.blogPostItem.urlPath,
    },
  });

  return new Response(JSON.stringify(blogPostItem));
}
