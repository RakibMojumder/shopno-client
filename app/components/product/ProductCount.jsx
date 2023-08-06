"use client";

const ProductCount = ({ productCount, setProductCount }) => {
  return (
    <div className="inline-flex items-center text-neutral-600 h-14 border bg-white divide-x-[1px]">
      <button
        onClick={() => setProductCount((prev) => prev + 1)}
        className="px-6 h-full text-3xl"
      >
        +
      </button>
      <span className="w-20 h-full flex justify-center items-center text-2xl font-medium">
        {productCount}
      </span>
      <button
        onClick={() => setProductCount((prev) => prev - 1)}
        disabled={productCount <= 1}
        className="px-6 h-full text-3xl disabled:cursor-not-allowed"
      >
        -
      </button>
    </div>
  );
};

export default ProductCount;
