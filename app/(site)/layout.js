import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

const SiteLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="pb-20">
                {children}
            </div>
            <Footer />
        </>
    )
};

export default SiteLayout;