"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import paymentFailed from "../../public/assets/payment-failed.png";

const PaymentCancel = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex justify-center mt-24">
      <div>
        <Image
          alt="payment failed"
          src={paymentFailed}
          height={150}
          width={150}
          className="h-40 mx-auto"
        />
        <h3 className="text-lg text-center my-3">You Cancel the payment.</h3>
        <Button handleClick={handleNavigate} variant="filled" size="medium">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default PaymentCancel;
