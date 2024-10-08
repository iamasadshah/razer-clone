import React from "react";
import Link from "next/link";

const FourthSection = () => {
  return (
    <div className=" cursor-pointer grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4">
      <a href="https://www.razer.com/razercon">
        <div
          className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
          style={{ backgroundImage: "url('/fourth.webp')" }}
        >
          <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
            RAZERCON 2024
          </h1>
          <h3 className="text-lg lg:text-3xl ">
            A DIGITAL CELEBRATION FOR GAMERS, BY GAMERS
          </h3>
          <p className="lg:text-xl space-x-6">
            <Link href={"/"} className="hover:underline">
              Sign Up Now &gt;
            </Link>{" "}
          </p>
        </div>
      </a>
      <a href="https://www.razer.com/gaming-laptops/razer-blade-16">
        <div
          className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
          style={{ backgroundImage: "url('/fifth.webp')" }}
        >
          <h1 className="text-3xl px-6 lg:text-5xl  font-semibold ">
            NEW RAZER BLADE 16
          </h1>
          <h3 className="text-lg lg:text-3xl ">FASTEST. SHARPEST. CLEAREST.</h3>
          <p className="lg:text-xl space-x-6">
            <Link href={"/"} className="hover:underline">
              Learn More &gt;
            </Link>{" "}
            <Link href={"/"} className="hover:underline">
              Buy &gt;
            </Link>
          </p>
        </div>
      </a>
      <a href="https://www.razer.com/apparel-outerwear/razer-sneki-snek-hoodie">
        <div
          className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
          style={{ backgroundImage: "url('/sixth.webp')" }}
        >
          <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
            RAZER SNEKI SNEK HOODIE
          </h1>
          <h3 className="text-lg lg:text-3xl ">NOW BACK IN STOCK</h3>
          <p className="lg:text-xl space-x-6">
            <Link href={"/"} className="hover:underline">
              Learn More &gt;
            </Link>{" "}
            <Link href={"/"} className="hover:underline">
              Buy &gt;
            </Link>
          </p>
        </div>
      </a>
      <a href="https://www.razer.com/gaming-headsets/razer-kraken-v4">
        {" "}
        <div
          className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
          style={{ backgroundImage: "url('/seventh.webp')" }}
        >
          <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
            RAZER KRAKEN V4
          </h1>
          <h3 className="text-lg lg:text-3xl ">
            FULL-SPECTRUM IMMERSION. UNLEASHED.
          </h3>
          <p className="lg:text-xl space-x-6">
            <Link href={"/"} className="hover:underline">
              Learn More &gt;
            </Link>{" "}
            <Link href={"/"} className="hover:underline">
              Buy &gt;
            </Link>
          </p>
        </div>
      </a>
      <a href="https://www.razer.com/collabs/hello-kitty-and-friends">
        {" "}
        <div
          className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
          style={{ backgroundImage: "url('/eight.webp')" }}
        >
          <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
            RAZER | HELLO KITTY AND FRIENDS
          </h1>
          <h3 className="text-lg lg:text-3xl ">
            I&#39;TS MORE FUN WITH FRIENDS
          </h3>
          <p className="lg:text-xl space-x-6">
            <Link href={"/"} className="hover:underline">
              Learn More &gt;
            </Link>{" "}
          </p>
        </div>{" "}
      </a>
      <a href="https://www.razer.com/store/razer-bundles">
        {" "}
        <div
          className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
          style={{ backgroundImage: "url('/ninth.webp')" }}
        >
          <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
            CELEBRATE YOUR CHAMPIONS
          </h1>
          <h3 className="text-lg lg:text-3xl ">EDGE BUNDLE SPECIAL.</h3>
          <p className="lg:text-xl space-x-6">
            <Link href={"/"} className="hover:underline">
              Learn More &gt;
            </Link>{" "}
            <Link href={"/"} className="hover:underline">
              Buy &gt;
            </Link>
          </p>
        </div>
      </a>
    </div>
  );
};

export default FourthSection;
