import ImageGrid from "@/components/LandingPage/ImageGrid";
import NavbarLinks from "@/components/Navbar/NavbarLinks";
import BlogCardList from "@/components/Blogs/Landingpage/BlogCardLandingList";
import HeroPage from "@/components/LandingPage/HeroPage";
import Loading from "./loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col items-center justify-center">
        <div className="pb-32">
          <NavbarLinks />
        </div>
        <HeroPage />
        <h1 className="font-bold text-2xl">New blog posts</h1>
        <BlogCardList />
      </main>
    </Suspense>
  );
}
