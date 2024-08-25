// pages/index.js
// import DarkModeToggle from './components/DarkModeToggle';
import Footer from "../components/Footer";
import Card from "../components/Card";

export default async function OpenSource() {
  return (
    <>
    <div className="flex items-start p-6 justify-end">
      {/* <DarkModeToggle /> */}
    </div>


    <section>
                <div class="items-center text-[#CCCCCC] px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                  <div class="justify-center w-full text-center lg:p-10 max-auto">
                    <div class="justify-center w-full mx-auto">

                    <p class="mt-4 sm:px-32 sm:text-5xl text-4xl tracking-tighter">
                    ⌘ OpenSource ⌘
                      </p>

                    </div>
                  </div>
              
                </div>
              </section>
             
             
              <div className='sm:px-44 px-4 pb-32 mt-12'>
              <div className="sm:mx-60 space-y-8">
                <Card name={'SendSms'} links={'/'} des={'Prank your friends with SendSms. Git clone and run ~ npm i. Add the token and you are good to go.'} image={'https://www.salnet.xyz/github.png'} earning={'$0/mo'} />
                <Card name={'Xintent'} links={'/products/xintent'} des={'Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free.'} image={'https://www.salnet.xyz/github.png'} />
                <Card name={'Apple Music Clone'} links={'/products/applemusicclone'} des={'Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free.'} image={'https://www.salnet.xyz/github.png'} />
                <Card name={'Instagram Clone'} links={'/products/instagramclone'} des={'Xintent is the X (twitter) intent generator. Convert your entire post and seamlessly transform it into an intent with just a single input. Try now, It is free.'} image={'https://www.salnet.xyz/github.png'} />
              </div>
              </div>


              <Footer opensourcepage={'opensourcepage'} />
    </>
  );
}
