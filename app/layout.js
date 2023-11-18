import './globals.css'
import { Hind_Siliguri } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootProvider from '@/providers/RootProvider';

const Hind = Hind_Siliguri({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"] });


export const metadata = {
  title: 'Shopno',
  description: 'Shopno E-commerce website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${Hind.className} bg-primary/[.04]`}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
