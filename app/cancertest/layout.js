import { Bricolage_Grotesque } from "next/font/google";
import "../../app/globals.css";
import Script from 'next/script';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--bricolage-grotesque",
});

export const metadata = {
  title: "Cancer Test",
  description: "Do you have cancer? This AI tool will tell you if you are at risk.",
  openGraph: {
    title: "Cancer Test ",
    description: "Do you have cancer? This AI tool will tell you if you are at risk.",
    url: "https://sahilwise.com/cancertest",
    siteName: "Cancer Test",
    images: [
      {
        url: "https://sahilwise.com/cancertest.png",
        width: 800,
        height: 600,
        alt: "Cancer Test Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "Cancer Test",
    title: "Cancer Test",
    description: "Do you have cancer? This AI tool will tell you if you are at risk.",
    image: "https://sahilwise.com/cancertest.png",
    site: "https://sahilwise.com/cancertest",
    creator: "@sahilwise",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="cancer, awareness, health, self-diagnosis, healthcare" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="google-adsense-account" content="ca-pub-7123797226885173"></meta>

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        <title>{metadata.title}</title>
      </head>
      <body className={bricolageGrotesque.className}>
        {children}
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
