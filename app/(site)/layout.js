import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

export default function SiteLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}