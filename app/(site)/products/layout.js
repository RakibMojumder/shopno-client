import Layout from "@/app/components/Layout";
import Filter from "@/app/components/filter/Filter";

const ProductLayout = ({ children }) => {
    return (
        <Layout>
            <div className="flex gap-x-5">
                <Filter />
                <div className="flex-1">{children}</div>
            </div>
        </Layout>
    )
};

export default ProductLayout;