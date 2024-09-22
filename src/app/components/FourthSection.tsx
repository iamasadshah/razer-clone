import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const FourthSection = () => {
  return (
    <div className="{roboto.className} cursor-pointer grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4">
      {/* #set image on the background */}
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
      <div
        className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
        style={{ backgroundImage: "url('/sixth.webp')" }}
      >
        <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
          RAZERO SNEKI SNEK HOODIE
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
      <div
        className="h-[500px] bg-cover bg-center text-center text-white pt-12 space-y-2"
        style={{ backgroundImage: "url('/eight.webp')" }}
      >
        <h1 className="text-3xl px-6 lg:text-5xl font-semibold ">
          RAZER | HELLO KITTY AND FRIENDS
        </h1>
        <h3 className="text-lg lg:text-3xl ">IT'S MORE FUN WITH FRIENDS</h3>
        <p className="lg:text-xl space-x-6">
          <Link href={"/"} className="hover:underline">
            Learn More &gt;
          </Link>{" "}
        </p>
      </div>
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
    </div>
  );
};

export default FourthSection;
