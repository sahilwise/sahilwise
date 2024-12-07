import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { House} from 'lucide-react';

interface FooterProps {
  homepage?: boolean; // Mark props as optional if they aren't always provided
  productspage?: boolean;
  opensourcepage?: boolean;
}

export default function Footer({ homepage, productspage, opensourcepage }: FooterProps) {
  return (
    <Fragment>
      <div className="flex flex-col sm:rounded-3xl">
        <div className="backdrop-blur-3xl py-3 px-4 text-sm  border-2 border-neutral-900 bg-black/30 rounded-xl text-neutral-500 p-2 fixed sm:bottom-12 bottom-8 left-1/2 transform -translate-x-1/2 w-72">
          <div className="flex sm:justify-between justify-around items-center">


          <Link href={"https://x.com/sahilwise"}>
              <div className="bg-[#292929] rounded-2xl border-2 border-[#3D3D3D]">
                <Image
                  src={"/panda.png"}
                  width={40}
                  height={40}
                  alt="twitter or X"
                  className="rounded-xl"
                />
              </div>
            </Link>

            
            <Link href={"/"}>
              <div
                className={`p-3 ${
                  homepage
                    ? "bg-gradient-to-br from-[#fffaf9] via-[#a8a8a8] to-[#ffffff]"
                    : "bg-neutral-400 text-[#CCCCCC]"
                } rounded-xl`}
              >
                
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    homepage ? "fill-[#16161d]" : "fill-[#FFF]"
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                </svg> */}

                <House size={18} color='#FFF' fill="#000" />
              </div>
            </Link>

            <Link href={"/products"}>
              <div
                className={`p-3 ${
                  productspage
                    ? "bg-gradient-to-b from-[#cbdb3d] via-[#f4fc1b] to-[#fff4a5]"
                    : "bg-gradient-to-br from-[#312e2d] via-[#2c2b2b] to-[#272525] text-white"
                } rounded-xl`}
              >
                <svg
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    productspage ? "fill-[#16161d]" : "fill-[#FFF]"
                  }`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M11.499 12.03v11.971l-10.5-5.603v-11.835l10.5 5.467zm11.501 6.368l-10.501 5.602v-11.968l10.501-5.404v11.77zm-16.889-15.186l10.609 5.524-4.719 2.428-10.473-5.453 4.583-2.499zm16.362 2.563l-4.664 2.4-10.641-5.54 4.831-2.635 10.474 5.775z" />
                </svg>
              </div>
            </Link>

            <Link href={"/opensource"}>
              <div
                className={`p-3 ${
                  opensourcepage
                    ? "bg-gradient-to-b from-[#cbdb3d] via-[#f4fc1b] to-[#fff4a5]"
                    : "bg-gradient-to-br from-[#312e2d] via-[#2c2b2b] to-[#272525] text-white"
                } rounded-xl`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className={`${
                    opensourcepage ? "fill-[#16161d]" : "fill-[#FFF]"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M23 0l-15.996 3.585v13.04c-2.979-.589-6.004 1.671-6.004 4.154 0 2.137 1.671 3.221 3.485 3.221 2.155 0 4.512-1.528 4.515-4.638v-10.9l12-2.459v8.624c-2.975-.587-6 1.664-6 4.141 0 2.143 1.715 3.232 3.521 3.232 2.14 0 4.476-1.526 4.479-4.636v-17.364z" />
                </svg>
              </div>
            </Link>


          </div>
        </div>
      </div>
    </Fragment>
  );
}
