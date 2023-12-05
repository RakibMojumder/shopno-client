import Image from "next/image";
import { Td, Tr } from "react-super-responsive-table";

const OrderBody = ({ product, email, transactionId }) => {
  return (
    <Tr className="bg-secondary/5">
      <Td className="text-center py-1">
        <Image alt="product image" src={product.image} width={40} height={40} />
      </Td>
      <Td className="text-center py-1">{product.name}</Td>
      <Td className="text-center py-1">{product.price}</Td>
      <Td className="text-center py-1">{email}</Td>
      <Td className="text-center py-1">{transactionId}</Td>
    </Tr>
  );
};

export default OrderBody;
