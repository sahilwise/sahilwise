import Link from "next/link";
import { Fragment } from "react";

interface FooterProps {
  homepage?: boolean; // Mark props as optional if they aren't always provided
  productspage?: boolean;
  opensourcepage?: boolean;
}

export default function Footer({ homepage, productspage, opensourcepage }: FooterProps) {
  return (
    <Fragment>
      <div className="flex flex-col sm:rounded-3xl z-50">
        <div className="backdrop-blur-3xl py-3 px-4 text-sm  border-2 border-[#16161d] bg-black/30 rounded-2xl bo text-neutral-500 p-2 fixed sm:bottom-12 bottom-8 left-1/2 transform -translate-x-1/2 w-72">
          <div className="flex sm:justify-between justify-around items-center">





            <Link href={"/"}>
              <div
                className={`p-3 ${homepage
                    ? "bg-gradient-to-br from-[#fffaf9] via-[#a8a8a8] to-[#ffffff]"
                    : "bg-neutral-400 text-[#CCCCCC]"
                  } rounded-xl`}
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${homepage ? "fill-[#16161d]" : "fill-[#FFF]"
                    }`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                </svg>

              </div>
            </Link>

            <Link href={"/apps"}>
              <div
                className={`p-3 ${productspage
                    ? "bg-gradient-to-b from-[#cbdb3d] via-[#f4fc1b] to-[#fff4a5]"
                    : "bg-gradient-to-br from-[#312e2d] via-[#2c2b2b] to-[#272525] text-white"
                  } rounded-xl`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${productspage ? "fill-[#16161d]" : "fill-[#FFF]"
                    }`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
<path d="M10 16v2.5c0 2.483-2.017 4.5-4.5 4.5-2.484 0-4.5-2.017-4.5-4.5 0-2.484 2.016-4.5 4.5-4.5h2.5v-4h-2.5c-2.484 0-4.5-2.016-4.5-4.5 0-2.483 2.016-4.5 4.5-4.5 2.483 0 4.5 2.017 4.5 4.5v2.5h4v-2.5c0-2.483 2.017-4.5 4.5-4.5 2.484 0 4.5 2.017 4.5 4.5 0 2.484-2.016 4.5-4.5 4.5h-2.5v4h2.5c2.484 0 4.5 2.016 4.5 4.5 0 2.483-2.016 4.5-4.5 4.5-2.483 0-4.5-2.017-4.5-4.5v-2.5h-4zm-2 0h-2.5c-1.379 0-2.5 1.122-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.122 2.5-2.5v-2.5zm10.5 0h-2.5v2.5c0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.121-2.5-2.5-2.5zm-4.5-6h-4v4.132h4v-4.132zm-6-2v-2.5c0-1.378-1.121-2.5-2.5-2.5s-2.5 1.122-2.5 2.5 1.121 2.5 2.5 2.5h2.5zm10.5 0c1.379 0 2.5-1.122 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.122-2.5 2.5v2.5h2.5z"/>
</svg>
              </div>
            </Link>

            <Link href={"/blogs"}>
              <div
                className={`p-3 ${opensourcepage
                    ? "bg-gradient-to-b from-[#cbdb3d] via-[#f4fc1b] to-[#fff4a5]"
                    : "bg-gradient-to-br from-[#312e2d] via-[#2c2b2b] to-[#272525] text-white"
                  } rounded-xl`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className={`${opensourcepage ? "fill-[#16161d]" : "fill-[#FFF]"
                    }`}
                  viewBox="0 0 24 24"
                >
<path d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z" fillRule="nonzero"/>
                </svg>
              </div>
            </Link>


            <Link href={"/chat"}>
              <div
                className={`p-3 ${opensourcepage
                    ? "bg-gradient-to-b from-[#cbdb3d] via-[#f4fc1b] to-[#fff4a5]"
                    : "bg-gradient-to-br from-[#312e2d] via-[#2c2b2b] to-[#272525] text-white"
                  } rounded-xl`}
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className={`${opensourcepage ? "fill-[#16161d]" : "fill-[#FFF]"
                    }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm13 12h-8v-1h8v1zm6-3h-14v-1h14v1zm0-3h-14v-1h14v1z" />
                </svg>


              </div>
            </Link>






          </div>
        </div>
      </div>
    </Fragment>
  );
}
