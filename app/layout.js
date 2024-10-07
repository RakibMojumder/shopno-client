import "./globals.css";
import "swiper/css";
import { Hind_Siliguri, Jost } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootProvider from "@/providers/RootProvider";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const Hind = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Shopno",
  description: "Shopno E-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${jost.className} bg-primary/[.05]`}
      >
        <div className="">
          <RootProvider>{children}</RootProvider>
        </div>
      </body>
    </html>
  );
}
