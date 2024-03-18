"use client";
import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-black fixed z-50 top-0 left-0">
      <div className="w-full h-full flex justify-center items-center pb-24">
        <div className="z-50">
          <Image
            src={"/video/rasam.gif"}
            width={1200}
            height={1200}
            alt="land"
            
          />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
