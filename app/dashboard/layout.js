
import DashboardNav from "../components/dashboard/DashboardNav";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="h-screen flex bg-[#EDE9FE]/20">
                <Sidebar />
                <div className="flex-1 shrink-0 h-screen overflow-auto">
                    <DashboardNav />
                    <div className="p-5 pb-24">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
};

export default DashboardLayout;
