"use client";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./modal";

export default function Prices() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center space-y-4">
      <h1 className=" text-5xl font-semibold"> Price Info Coming Soon</h1>
      <h1 className="text-3xl inline-block"> Stay Tuned!</h1>
    </div>
  );
}
