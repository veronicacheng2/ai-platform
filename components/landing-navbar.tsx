"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  const { isSignedIn } = useAuth(); // useAuth is for client component and auth is for server component

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="h-8 w-8 relative mr-4">
          <Image fill src="/logo.png" alt="logo" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Wisdom
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button variant="outline">Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
