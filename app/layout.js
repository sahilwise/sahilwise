import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--bricolage-grotesque",
});

export const metadata = {
  title: "sahilwise",
  description: "Hi, This is Salnet. I build Apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-7123797226885173" />
      </head>
      <body className={bricolageGrotesque.className}>
        {children}
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}