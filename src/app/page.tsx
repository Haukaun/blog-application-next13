import NavbarLinks from "@/components/Navbar/NavbarLinks";
import BlogCardList from "@/components/LandingPage/card/BlogCardLandingList";
import HeroPage from "@/components/LandingPage/HeroPage";

export default function Home() {
  return (
    <main>
      <div className="pb-32">
        <NavbarLinks />
      </div>
      <HeroPage />
      <BlogCardList />
    </main>
  );
}
