import Image from "next/image";

const OrderBody = ({ product, email }) => {
  return (
    <div className="flex items-center text-center p-2 bg-secondary/5">
      <div className="w-14 px-2 text-ellipsis overflow-hidden">
        <Image alt="product image" src={product.image} width={40} height={40} />
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {product.name}
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {product.price}
      </div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">{email}</div>
      <div className="w-full px-2 text-ellipsis overflow-hidden">
        {product.transactionId}
      </div>
    </div>
  );
};

export default OrderBody;
