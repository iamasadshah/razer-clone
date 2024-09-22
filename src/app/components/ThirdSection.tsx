import React from "react";
import { Roboto } from "@next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const ThirdSection = () => {
  return (
    <div className="{roboto.className} cursor-pointer">
      {/* #set image on the background */}
      <div
        className="h-[700px] bg-cover bg-center text-center text-black pt-12 space-y-2"
        style={{ backgroundImage: "url('/third.webp')" }}
      >
        <h1 className="text-3xl px-10 lg:text-[55px] font-semibold ">
          RAZER HYBRID GEAR
        </h1>
        <h3 className="text-lg lg:text-3xl ">WIN AT WORK AND PLAY</h3>
        <p className="lg:text-xl space-x-6">
          <Link href={"/"} className="hover:underline">
            Shop Now &gt;
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default ThirdSection;
