"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Features() {
  const features = [
    {
      icon: (
        <Image
          src="/alexander-jawfox-oEpnMn1y-7A-unsplash.jpg"
          width={600}
          height={600}
          alt=""
          quality={100}
          className="rounded-md"
        />
      ),
      title: "Personalized Dance Programs",
      desc: "Embark on a journey tailored just for you! At A Special Affair, our seasoned instructors will work with you to design a personalized dance program that aligns with your goals, style, and pace. Whether you're an elegant beginner or a seasoned ballerina, we ensure your experience is unique and transformative. Revel in the rhythm and discover the dancer within.",
    },
    {
      icon: (
        <Image
          src="/chris-yang-u-ONkFoHXAI-unsplash.jpg"
          width={600}
          height={600}
          alt=""
          quality={100}
          className="rounded-md"
        />
      ),
      title: "Elegance Lounge",
      desc: "Step into our Elegance Lounge - an exclusive haven for our lovely dancers. Our state-of-the-art facility, featuring spacious studios with sprung hardwood floors, full-length mirrors, and ambient lighting, sets the perfect stage for your dancing journey. Enjoy luxurious amenities including a serene relaxation area, private lockers, and an exquisite selection of teas and beverages to keep you refreshed and invigorated.",
    },
    {
      icon: (
        <Image
          src="/gordon-cowie-SUADE2U97mE-unsplash.jpg"
          width={600}
          height={600}
          alt=""
          quality={100}
          className="rounded-md"
        />
      ),
      title: "Enriching Community Discovery",
      desc: "Connect, grow, and celebrate with a community that shares your passion for dance. A Special Affair hosts a range of enriching events including social dances, themed parties, workshops, and wellness sessions. Immerse yourself in a vibrant atmosphere, gain insights from industry professionals, and create cherished memories with fellow dancers. Your dance experience is more than just steps; it's a path to lifelong friendships and self-discovery.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-content md:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="max-w-xl space-y-3">
            <p className="  text-3xl font-semibold sm:text-4xl">
              Elevating Dance Experiences: Our Exclusive Offerings
            </p>
          </div>
        </motion.div>
        <div className="mt-12">
          <ul className="grid gap-x-12 divide-y  sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            {features.map((item, idx) => (
              <li
                key={idx}
                className={`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <div className=" flex items-center justify-center">
                    {item.icon}
                  </div>
                </motion.div>

                <h4 className="text-lg text-secondary-content font-semibold">
                  {item.title}
                </h4>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <p>{item.desc}</p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
