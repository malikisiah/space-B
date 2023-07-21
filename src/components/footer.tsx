import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { AiFillInstagram } from "react-icons/ai";
const ds = Dancing_Script({ subsets: ["latin"], weight: "400" });
export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-base-200 ">
      <div className="items-center grid-flow-col mx-4">
        <h1 className="inline-flex">
          <p className={` pr-3 ${ds.className}`}>&quot;Space-B&quot;</p>
          Copyright © 2023 - All rights reserved
        </h1>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-4">
        <a>
          <AiFillInstagram className="w-6 h-6 transition hover:scale-110" />
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current transition hover:scale-110"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current transition hover:scale-110 "
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
