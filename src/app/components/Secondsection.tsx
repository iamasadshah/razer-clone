import React from "react";

import Link from "next/link";

const Secondsection = () => {
  return (
    <div className=" cursor-pointer">
      {/* #set image on the background */}
      <div
        className="h-[700px] bg-cover bg-center text-center text-white pt-12 space-y-2"
        style={{ backgroundImage: "url('/second.webp')" }}
      >
        <h1 className="text-3xl px-10 lg:text-[55px] font-semibold ">
          RAZER WOLVERINE V3 PRO
        </h1>
        <h3 className="text-lg lg:text-3xl ">FOR THE PRO</h3>
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

export default Secondsection;
