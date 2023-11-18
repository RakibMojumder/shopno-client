import Filter from "@/app/components/filter/Filter";

const ProductLayout = ({ children }) => {
    return (
        <div className="flex">
            <Filter />
            <div className="flex-1">{children}</div>
        </div>
    )
};

export default ProductLayout;