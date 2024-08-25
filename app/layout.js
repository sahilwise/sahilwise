import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

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
      <body className={bricolageGrotesque.className}>
        {children}
      </body>
    </html>
  );
}