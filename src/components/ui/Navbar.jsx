// src/components/Navbar.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar"; // ✅ Importing LoadingBar

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Start and finish fake progress on route change
    setProgress(30);
    const timeout1 = setTimeout(() => setProgress(70), 100);
    const timeout2 = setTimeout(() => setProgress(100), 800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [pathname]);

  return (
    <>
      {/* ✅ Animated Top Loading Bar */}
      <LoadingBar
        color="linear-gradient(to right, #00f0ff, #ff00f7, #ffc700)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={4}
        shadow={true}
      />

      <nav className="p-4 bg-background/50 sticky top-0 border-b backdrop-blur z-50">
        <div className="container mx-auto flex justify-between items-center pb-6">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            TechNovaVista
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/"
              className="transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white px-3 py-2 rounded"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white px-3 py-2 rounded"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white px-3 py-2 rounded"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white px-3 py-2 rounded"
            >
              Contact
            </Link>

            <div className="flex space-x-2 ml-4">
              <Button
                variant="outline"
                className="transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white"
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white"
              >
                Signup
              </Button>
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="focus:outline-none"
                  variant="outline"
                  size="icon"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </Button>
              </SheetTrigger>
              <ModeToggle />
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>TechNovaVista</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-6 mt-4">
                      <Link href="/">Home</Link>
                      <Link href="/blogs">Blogs</Link>
                      <Link href="/about">About</Link>
                      <Link href="/contact">Contact</Link>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline">Login</Button>
                        <Button variant="outline">Signup</Button>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
