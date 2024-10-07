"use client";

import AccordionItem from "@/app/components/AccordionItme";
import Layout from "@/app/components/Layout";

const Faq = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="mt-5">
          <h1 className="text-4xl text-center">FAQ</h1>
          <p className="text-center text-xl text-neutral-700">
            If you have other burning questions we weren’t able to address here,
            feel free to email.
          </p>
        </div>

        <div className="space-y-12 divide-y divide-neutral-400">
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-10">
            <div className="lg:col-span-4">
              <h1 className="pt-3">
                <span className="text-4xl relative before:absolute before:top-7 before:-right-20 before:h-0.5 before:w-16  before:bg-primary">
                  Shopping
                </span>
              </h1>
            </div>
            <div className="lg:col-span-8">
              <AccordionItem
                title="What Shipping Methods Are Available?"
                description="Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps"
              />
              <AccordionItem
                title="Do You Ship Internationally?"
                description="Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps"
              />
              <AccordionItem
                title="How long does it take for home delivery?"
                description="Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps"
              />
              <AccordionItem
                title="How Long Will It Take To Get My Package?"
                description="Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 pt-10">
            <div className="lg:col-span-4">
              <h1 className="pt-3">
                <span className="text-4xl relative before:absolute before:top-7 before:-right-20 before:h-0.5 before:w-16 before:bg-primary">
                  Payment
                </span>
              </h1>
            </div>
            <div className="lg:col-span-8">
              <AccordionItem
                title="What Payment Methods Are Accepted?"
                description="Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings."
              />
              <AccordionItem
                title="How Do I Track My Order?"
                description="Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings."
              />
              <AccordionItem
                title="Can I use a different payment method?"
                description="Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 pt-10">
            <div className="lg:col-span-4">
              <h1 className="pt-3">
                <span className="text-4xl relative before:absolute before:top-7 before:-right-20 before:h-0.5 before:w-16 before:bg-primary">
                  Orders & Returns
                </span>
              </h1>
            </div>
            <div className="lg:col-span-8">
              <AccordionItem
                title="What Payment Methods Are Accepted?"
                description="Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings."
              />
              <AccordionItem
                title="How Do I Track My Order?"
                description="Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings."
              />
              <AccordionItem
                title="Can I use a different payment method?"
                description="Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings."
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
