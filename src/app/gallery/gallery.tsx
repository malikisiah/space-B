"use client";
import Header from "../../components/galleryHeader";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Gallery() {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Bianca Friend #1",
      title: "Bad Bitch",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Bianca Friend #2",
      title: "Spicy Latina",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Bianca Friend #3",
      title: "Sexy Chocolate",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Bianca Friend #4",
      title: "Somebody mama",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Bianca Friend #5",
      title: "Too tired for this",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Bianca Friend #6",
      title: "District Attorney",
    },
  ];

  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 min-h-screen">
          <Header />
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: idx * 0.15 },
                    }}
                  >
                    <div className="w-full h-60 sm:h-52 md:h-56">
                      <Image
                        src={item.avatar}
                        className="w-full h-full object-cover object-center shadow-md rounded-xl hover:scale-105 transition"
                        alt=""
                        width={500}
                        height={500}
                        quality={100}
                      />
                    </div>
                    {/* <div className="mt-4">
                      <h4 className="text-lg text-gray-700 font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-secondary-focus">{item.title}</p>
                    </div> */}
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      ></motion.div>
    </>
  );
}
