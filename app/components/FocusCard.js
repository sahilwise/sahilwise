import Image from "next/image";
import Link from "next/link";

const FocusCard = ({ name, links, image, earning, des, color, blur }) => {
  return (
    <div className="rounded-3xl text-[#CCCCCC]">
      <Link href={links}>
        <section
        className={`transition-transform bg-gradient-to-tl sm:mx-[500px] mt-32 from-[#2F2F2F] via-[#202020] to-[#010101] duration-500 ${blur ? 'hover:-skew-x-2 hover:skew-y-2' : 'blur cursor-not-allowed'} border border-6 border-[#1A2421] rounded-3xl bg-[${color}]`}
        >
          <div class="lg:order-first">
            <div class="flex flex-col">
              <div class="p-8 py-8 rounded-3xl">
                <div class="flex justify-center">
                  <div class="flex items-center gap-3">
                    {image && (
                      <Image
                        src={`${image}`}
                        width={60}
                        height={60}
                        alt="Image"
                        className="rounded-full"
                      />
                    )}
                    {/* <p class="font-semibold sm:text-3xl text-xl">{name}</p> */}
                  </div>
                  <p>
                    <span class="sm:text-sm text-xs font-normal">
                      {earning}
                    </span>
                  </p>
                </div>
                <p class="text-xl text-center pt-6 font-medium">{name}</p>
                <p class="text-sm text-center mx-16 pt-6 font-medium">{'Byte size news from Wallstreet to Siliconvalley.'}</p>
                <p class="text-sm text-center pt-6 font-medium">Checkout ➤</p>
              </div>
            </div>
          </div>
        </section>
      </Link>
      
    </div>
  );
};
export default FocusCard;