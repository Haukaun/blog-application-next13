import ImageGrid from "@/components/LandingPage/ImageGrid";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100">
      <ImageGrid />
    </main>
  );
}
