import { motion as m } from "framer-motion";

const Shipping = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <p className="font-semibold">
        Thank you for shopping with Shopno. We want to make your shopping
        experience as seamless and enjoyable as possible. Please review our
        Shipping and Return Policy below for important information about your
        purchases:
      </p>
      <div className="mt-5">
        <h2 className="text-lg font-semibold underline underline-offset-4">
          Shipping Times
        </h2>
        <ul className="text-sm list-disc pl-5">
          <li>
            We strive to process and ship your order as quickly as possible.
          </li>
          <li>Orders are typically processed within 1-2 business days.</li>
          <li>
            Delivery times may vary depending on your location, but you can
            expect to receive your order within 1-7 business days from the date
            of purchase.
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-semibold underline underline-offset-4">
          Return Policy
        </h2>
        <div className="mt-2 text-sm">
          <h3 className="font-semibold">1. 7-Day Return Period:</h3>
          <p>
            We offer a 7-day return policy, allowing you to return your item(s)
            within 7 days of receiving your order. To be eligible for a return,
            the item must be in the same condition as when you received it, with
            all original tags and packaging intact.
          </p>
        </div>
        <div className="mt-2 text-sm">
          <h3 className="font-semibold">2. How to Initiate a Return:</h3>
          <p>
            To initiate a return, please contact our customer support team.
            Provide your order number and a brief reason for the return. Our
            team will guide you through the return process and provide you with
            a return shipping label if necessary.
          </p>
        </div>
        <div className="mt-2 text-sm">
          <h3 className="font-semibold">2. Refund or Exchange:</h3>
          <p>
            You may choose either a refund or an exchange for the returned
            item(s). Refunds will be processed within 7 business days from the
            date we receive the returned item(s). Exchanges will be shipped out
            promptly after your returned item is received and inspected.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default Shipping;
