// pages/index.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
export default function Home() {
  const [tweetText, setTweetText] = useState("");
  const [twitterIntentCode, setTwitterIntentCode] = useState("");
  const [twitterIntentLink, setTwitterIntentLink] = useState("");

  const generateIntent = () => {
    const encodedText = encodeURIComponent(tweetText);
    const intentURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

    // Generate Twitter intent code
    const intentCode = `${intentURL}`;
    setTwitterIntentCode(intentCode);

    // Set Twitter intent link
    setTwitterIntentLink(intentURL);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(twitterIntentLink);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="sm:mx-96 mx-6 pt-12 pb-52">
        <header className="mb-8">
          <div className="flex items-center">
            <Image
              src="/xintent.png"
              alt="Twitter Logo"
              width={56}
              height={56}
              className="mr-4 rounded-full"
            />
            <h1 className="sm:text-2xl text-xl font-semibold">
              {" "}
              X / twitter Intent Generator
              <br />
              by <Link href="https://x.com/sahilwise">@sahilwise</Link>
            </h1>
          </div>
        </header>

        <main>
          <textarea
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            rows="4"
            placeholder="Enter your tweet text..."
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          ></textarea>
          <button
            className="bg-[#000] text-xl text-white py-3 px-6"
            onClick={generateIntent}
          >
            Generate Intent
          </button>

          {/* Display Twitter intent code */}
          {twitterIntentCode && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Twitter Intent Code</h2>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                {twitterIntentCode}
              </pre>

              {/* Copy Link button */}
              <button
                className="bg-[#1c9bee] text-white py-2 px-4 mt-4 mr-2"
                onClick={copyToClipboard}
              >
                Copy Link
              </button>

              {/* Open Twitter button */}
              <a
                href={twitterIntentLink}
                target="_blank"
                className="bg-white text-black border border-black py-2 px-4 mt-4 inline-block"
              >
                Open Twitter
              </a>
            </div>
          )}
        </main>

        <div className="flex items-center sm:mt-20 mt-16">
          <Image
            src="/salnetlogo.png"
            alt="Twitter Logo"
            width={26}
            height={26}
            className="mr-2 rounded-full"
          />
          <h1 className="sm:text-4xl sm:text-2xl sm:text-xl text-lg font-normal">
            {" "}
            Dev🖤ed by{" "}
            <Link href="https://twitter.com/sahilwise">@sahilwise</Link>
          </h1>
        </div>

        <Footer />

        <a
          href="https://www.producthunt.com/products/xintnet/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-xintnet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=567329&theme=light"
            alt="Xintnet - X&#0032;&#0040;twitter&#0041;&#0032;intnet&#0032;generator&#0046; | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250"
            height="54"
          />
        </a>
      </div>
    </div>
  );
}