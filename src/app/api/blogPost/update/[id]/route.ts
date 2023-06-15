import prisma from "@/lib/prisma";

interface RequestBody {
  title: string;
  subTitle: string;
  content: string;
  //image: string;
}

export async function UPDATE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const body: RequestBody = await request.json();

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
