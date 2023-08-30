"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="md:text-2xl font-bold cursor-pointer text-teal-700"
    >
      WaterBnb
    </div>
  );
};

export default Logo;
