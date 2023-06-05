import ImageGrid from "@/components/LandingPage/ImageGrid";
import NavbarLinks from "@/components/LandingPage/NavbarLinks";
import BlogCardList from "@/components/Blogs/BlogCardList";
import HeroPage from "@/components/LandingPage/HeroPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="pb-32">
        <NavbarLinks />
      </div>
      <HeroPage />
      <h1 className="font-bold text-2xl">New blog posts</h1>
      <BlogCardList />
    </main>
  );
}
