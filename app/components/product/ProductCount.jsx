"use client";

const ProductCount = ({ productCount, increaseProduct, decreaseProduct }) => {
  return (
    <div className="inline-flex items-center text-neutral-600">
      <button
        onClick={increaseProduct}
        className="h-7 w-7 text-2xl border border-primary rounded-full flex justify-center items-center "
      >
        +
      </button>
      <span className="w-14 h-full flex justify-center items-center text-2xl font-medium">
        {productCount}
      </span>
      <button
        onClick={decreaseProduct}
        disabled={productCount <= 1}
        className="h-7 w-7 text-2xl border border-primary rounded-full flex justify-center items-center disabled:cursor-not-allowed font-bold"
      >
        -
      </button>
    </div>
  );
};

export default ProductCount;
