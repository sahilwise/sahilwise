import Footer from "../components/Footer";

export default function OpenSource() {
  const musicLinks = [
    "https://embed.music.apple.com/in/album/danielle-smile-on-my-face-mixed/1653471640?i=1653471645",
    "https://embed.music.apple.com/in/album/ten/1706861926?i=1706861929",
    "https://embed.music.apple.com/in/album/places-to-be/1747373137?i=1747373147",
  ];

  return (
    <>
      <div className="flex items-start p-6 justify-end">
        {/* <DarkModeToggle /> */}
      </div>

      <section>
        <div className="items-center text-[#CCCCCC] px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <p className="mt-4 sm:px-32 sm:text-5xl text-4xl tracking-tighter">
                ⌘ Settings ⌘
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="sm:px-44 px-4 mb-32 mt-4">
        <div>
          {musicLinks.map((link, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              style={{ width: "100%" }}
            >
              <iframe
                allow="autoplay *; encrypted-media *;"
                frameBorder="0"
                height="210"
                style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={link}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <Footer opensourcepage={"opensourcepage"} />
    </>
  );
}
