import Footer from "./components/Footer";
import Card from "./components/Card";
import Image from "next/image";

export default async function Home() {
  const products = [

    {
      name: "xintent",
      title: "cool",
      links: "/xintent",
      des: "Twitter / X intent generator.",
      image: "https://sahilwise.com/xintent.png",
      blur: true,
      stats: 'https://dashboard.simpleanalytics.com/sahilwise.com/xintent',
      earning : '$0/mo'
    },
    {
      name: "Cancer Test",
      title: "cool",
      links: "/cancertest",
      des: "Twitter / X i.",
      image: "https://sahilwise.com/tweetready.png",
      blur: true,
      stats: 'https://dashboard.simpleanalytics.com/sahilwise.com/cancertest',
      earning : 'Awareness App' 
    },
    {
      name: "Best Affiliate",
      title: "cool",
      links: "#",
      des: "Twitter / X i.",
      image: "https://sahilwise.com/bestaffiliate.png",
      blur: false,
      stats: 'https://dashboard.simpleanalytics.com/sahilwise.com/xintent',
      earning : 'launchiung soon'
    },
    {
      name: "CodeBrew",
      title: "cool",
      links: "#",
      des: "Byte size news",
      image: "https://sahilwise.com/codebrew.png",
      stats: 'https://dashboard.simpleanalytics.com/sahilwise.com/xintent',
      blur: false,
      earning : 'Early Beta'
    },
    {
      name: "Wapp",
      title: "cool",
      links: "#",
      des: "Byte size news",
      stats: 'https://dashboard.simpleanalytics.com/sahilwise.com/xintent',
      image: "https://salnet.xyz/comingsoon.png",
      blur: false
    },
  
  ];
  return (
    <>
      <div className="flex items-start p-6 justify-end">
        {/* <DarkModeToggle /> */}
      </div>

      <section className="text-[#CCCCCC]">
        <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <div className="flex flex-col rounded-full items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <Image
                  src="/salnetx.png"
                  className="rounded-full"
                  width={135}
                  height={135}
                />
              </div>

              <p className="mt-4 sm:px-32 sm:text-4xl text-3xl tracking-tighter">
              Sahil 🎯
              </p>

              <p className="mt-4 sm:px-72 px-6 text-2xl sm:text-2xl sm:font-thin font-thin tracking-tighter">
              Subscribe to My Newsletter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center pb-12 sm:mt-0 mt-6">
        <a
          target="_blank"
          href="https://sahilwise.beehiiv.com/subscribe"
        >
          <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-[#e2ff03] text-lg font-bold text-black">
            Subscribe 📮
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
        </a>
      </div>

      <div className="sm:px-44 px-4 pb-12">
        <div className="grid sm:grid-cols-1 gap-x-8 gap-y-8">
          {products.map((product, index) => (
            <div className="sm:mx-60 rounded-3xl" key={index}>
              <Card
                index={index}
                links={product.links}
                name={product.name}
                des={product.des}
                image={product.image}
                blur={product.blur}
                earning={product.earning}
                stats={product.stats}
              />
            </div>
          ))}


        </div>
      </div>


      <div className="text-center mx-8 space-x-4 pb-60 mt-8">
        <button className="translate-y-1 text-neutral-100 text-sm font-bold px-6  rounded-xl inline-flex items-center">
         
          <a target="_blank" href="https://instagram.com/sahilwise">

          <svg className="mx-4" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
          </svg>
          </a>

          <a target="_blank" href="https://www.youtube.com/@sahilwise">
          <svg className="mx-4" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
          </svg>
          </a>

          <a target="_blank" href="https://twitter.com/sahilwise">
          <svg className="mx-4" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
          </svg>
          </a>

          <a target="_blank" href="https://music.apple.com/profile/sahilwise">
          <svg className="mx-4" fill="#CCCCCC" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.787 4c.18 1.637-1.283 3.345-2.806 3.226-.188-1.43 1.157-3.159 2.806-3.226zm-.2 13.981c-.938.018-1.238-.556-2.311-.556-1.071 0-1.406.539-2.293.574-1.5.057-3.816-3.4-3.816-6.414 0-2.769 1.93-4.142 3.615-4.167.903-.016 1.758.609 2.31.609.554 0 1.592-.752 2.682-.642.455.019 1.736.184 2.561 1.387-2.185 1.424-1.845 4.403.499 5.498-.459 1.331-1.832 3.686-3.247 3.711z"/>
          </svg>
          </a>
        </button>
      </div>

      <Footer homepage={"homepage"} />
    </>
  );
}