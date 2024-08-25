// pages/index.js
// import DarkModeToggle from './components/DarkModeToggle';
import Footer from "../components/Footer";
import Card from "../components/Card";

export default async function Products() {
  return (
    <>
      <div className="flex items-start p-6 justify-end">
        {/* <DarkModeToggle /> */}
      </div>

      <section>
        <div class="items-center px-8 mx-auto max-w-7xl text-[#CCCCCC] lg:px-16 md:px-12">
          <div class="justify-center w-full text-center lg:p-10 max-auto">
            <div class="justify-center w-full mx-auto">
              <p class="mt-4 sm:px-32 sm:text-5xl text-4xl tracking-tighter">
                ⌘ Products ⌘
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="sm:px-44 px-4 pb-32 mt-12">
        <div className="grid sm:grid-cols-1 gap-x-8 gap-y-8">
          {/* {links.map((link, index) => (
        <div className="sm:mx-60 rounded-3xl mt-6" key={index}>
        <Card index={index} banner={link.banner} des={link.des} name={link.name} route={link.route} image={link.image} earning={link.earning} />
        </div>
        ))} */}

          <div className="sm:mx-60 space-y-8">
            <Card
              name={"CodeBrew"}
              links={"https://codebrew.news"}
              des={
                "Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free."
              }
              image={"https://www.salnet.xyz/github.png"}
            />
            <Card
              name={"Xintent"}
              links={"/xintent"}
              des={
                "Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free."
              }
              image={"https://www.salnet.xyz/github.png"}
            />
            <Card
              name={"Apple Music Clone"}
              links={"/products/applemusicclone"}
              des={
                "Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free."
              }
              image={"https://www.salnet.xyz/github.png"}
            />
            <Card
              name={"Instagram Clone"}
              links={"/products/instagramclone"}
              des={
                "Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free."
              }
              image={"https://www.salnet.xyz/github.png"}
            />
          </div>
        </div>
      </div>

      <Footer productspage={"productspage"} />
    </>
  );
}