import Image from "next/image";
import { Td, Tr } from "react-super-responsive-table";

const OrderBody = ({ product, email, quantity }) => {
  return (
    <Tr className="bg-white">
      <Td className="py-3 border-b">
        <Image
          className="mx-auto"
          alt="product image"
          src={product.image}
          width={40}
          height={40}
        />
      </Td>
      <Td className="text-left py-3 border-b lg:w-[400px]">
        {product.name.length > 30
          ? product.name.slice(0, 30)
          : `${product.name}...`}
      </Td>
      <Td className="text-left py-3 border-b">{email}</Td>
      <Td className="text-left py-3 border-b">{product.quantity}</Td>
      <Td className="text-left py-3 border-b">{product.price}</Td>
    </Tr>
  );
};

export default OrderBody;
