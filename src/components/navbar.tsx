"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Avatar from "./avatar";
import { Dancing_Script } from "next/font/google";
const ds = Dancing_Script({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [state, setState] = useState(false);

  const [userImage, setUserImage] = useState("/flower.png");
  const [userName, setUserName] = useState("");

  const navigation = [
    { title: "Schedule", path: "/schedule" },
    { title: "Gallery", path: "/gallery" },
    { title: "Prices", path: "/prices" },
    { title: "About Me", path: "/aboutme" },
  ];

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const image = user?.imageUrl as string;
    const name = user?.firstName as string;
    setUserName(name);
    setUserImage(image);
  }, [user]);

  return (
    <nav className="bg-base-100 w-full border-b md:border-1 border-accent  sticky top-0 z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className=" justify-start items-center">
            <Link href="/">
              <span className=" text-xl">
                {" "}
                <div className={ds.className}> Space-B</div>
              </span>
            </Link>
          </div>
          <div className="md:hidden">
            {userId ? (
              <Avatar imageSrc={userImage} userName={userName} />
            ) : (
              <Link
                href="/sign-in"
                className="py-3 px-4  hover:text-accent rounded-md shadow bg-black "
              >
                Sign In
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button
              className=" outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center  space-y-8 md:flex md:space-x-8 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className=" hover:text-accent">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { delay: idx * 0.15 },
                    }}
                  >
                    <Link onClick={() => setState(false)} href={item.path}>
                      {item.title}
                    </Link>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          {userId ? (
            <Avatar imageSrc={userImage} userName={userName} />
          ) : (
            <Link
              href="/sign-in"
              className="py-3 px-4 hover:text-accent rounded-md shadow bg-black "
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
