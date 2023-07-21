"use client";
import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      avatar: "/fatane-rahimi--8kfrn_Tjps-unsplash.jpg",
      name: "Sophia Martinez",
      title: "Pediatrician",
      quote:
        "Finding time for myself is rare, but #ASpecialAffair is my sanctuary! 💃 The instructors are nurturing, and the personalized programs have been a game-changer for my poise and confidence. Fellow moms, this is our haven! 🌟 #DanceMagic #MomTime",
    },
    {
      avatar: "/joe-gardner-N5GCRjEMboQ-unsplash.jpg",
      name: "Ayesha Patel",
      title: "Graphic Designer",
      quote:
        "At #ASpecialAffair, creativity is not just in art; it’s in every step and rhythm! 🎨💃 Love how the space is so vibrant and energizing. My design ideas have skyrocketed since joining. Thank you, #ASpecialAffair! 🚀 #CreativeSoul #DanceAndDesign",
    },
    {
      avatar: "/pranav-kumar-jain-70xDUkxLWB8-unsplash.jpg",
      name: "Isabella Rossi",
      title: "University Professor",
      quote:
        "Joined #ASpecialAffair to add a dash of grace to my life and, oh, how splendid the journey has been! 🌹 The Elegance Lounge is top-notch, and the community events have connected me with wonderful souls. A standing ovation! 👏 #EnrichedLife #EleganceInDance",
    },
  ];

  return (
    <section className='py-14'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='max-w-xl sm:text-center md:mx-auto'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className='text-primary-content text-3xl font-semibold sm:text-4xl'>
              Tweeting to the Beat: Hear From Our Queens
            </h3>
          </motion.div>
          {/* <p className='mt-3 text-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p> */}
        </div>
        <div className='mt-12'>
          <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map((item, idx) => (
              <li key={idx} className='bg-base-200 p-4 rounded-xl'>
                <figure>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <div className='flex items-center gap-x-4'>
                      <Image
                        src={item.avatar}
                        className='rounded-full w-16 h-16'
                        width={100}
                        height={100}
                        alt=''
                        quality={100}
                      />
                      <div>
                        <span className='block text-black font-semibold'>
                          <div className='inline-flex pr-2 align-middle'>
                            <AiFillTwitterCircle />
                          </div>
                          {item.name}
                        </span>
                        <span className='block text-secondary-content text-sm mt-0.5'>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <blockquote>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <p className='mt-6 text-black'>{item.quote}</p>
                    </motion.div>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
