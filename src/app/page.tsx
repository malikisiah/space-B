import Hero from "@/components/hero";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Link from "next/link";
import ButtonGroup from "@/components/buttonGroup";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <Features />
      </div>
      <div className="">{/* <Testimonials /> */}</div>
    </div>
  );
}
