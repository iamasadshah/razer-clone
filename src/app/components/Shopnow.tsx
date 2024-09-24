import Link from "next/link";
import React from "react";

const Shopnow = () => {
  return (
    <div className="flex justify-center items-center text-white py-2 text-base px-8 h-7">
      <p>
        For a limited time, all orders will enjoy free shipping to the United
        States.{" "}
        <Link href={"/"} className="hover:underline">
          Shop Now &gt;
        </Link>
      </p>
    </div>
  );
};

export default Shopnow;
