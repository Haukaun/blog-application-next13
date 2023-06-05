import Image from "next/image";
import React from "react";

export default function HeroPage() {
  return (
    <div className="min-h-screen">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-[80%] flex justify-center items-center flex-col">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Explore the Blogosphere
            </h1>
            <p className="py-6">
              Welcome to our blog platform, your gateway to a world of
              fascinating insights and diverse perspectives. From technology to
              travel, finance to fashion, delve into a variety of topics penned
              by our diverse community of bloggers. Start your reading journey
              with us today.
            </p>
            <button className="btn btn-primary">Dive In</button>
            <Image
              src="/blog-intro.jpg"
              alt=""
              width={400}
              height={400}
              className="pt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
