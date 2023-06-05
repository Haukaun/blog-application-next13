import ImageGrid from "@/components/LandingPage/ImageGrid";
import NavbarLinks from "@/components/LandingPage/NavbarLinks";
import BlogCardList from "@/components/Blogs/BlogCardList";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-center pb-32">
        <NavbarLinks />
      </div>
      <h1 className="font-bold text-2xl">New blog posts</h1>
      <BlogCardList />
    </main>
  );
}
