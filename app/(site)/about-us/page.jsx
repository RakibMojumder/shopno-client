import Layout from "@/app/components/Layout";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-10">
      <Layout>
        <div className="space-y-14">
          <div>
            <h1 className="text-4xl">About Us</h1>
            <p className="text-xl mt-4">
              At <span className="italic font-semibold">Shopno</span>, we
              believe that shopping should be an enjoyable experience filled
              with variety and convenience. Founded in 2023, our mission is to
              provide a one-stop destination for all your shopping needs,
              offering a diverse range of high-quality products across multiple
              categories.
            </p>

            <p className="text-xl mt-4">
              Our journey began with a simple idea: to connect customers with
              products that inspire and enhance their everyday lives. With a
              deep-rooted passion for e.g. design, technology, sustainability,
              we have carefully curated a diverse selection of items from around
              the world. Each product is chosen for its craftsmanship,
              functionality, and style, ensuring you receive only the best.
            </p>
            <p className="text-xl mt-4">
              We also understand the importance of sustainability. Many of our
              products are eco-friendly, and we are committed to partnering with
              brands that prioritize ethical practices and environmental
              responsibility.
            </p>
          </div>
          <div>
            <h1 className="text-4xl">Our Mission</h1>
            <p className="text-xl mt-4">
              At <span className="italic font-semibold">Shopno</span>, our
              mission is simple: to provide you with exceptional products at
              competitive prices while delivering an outstanding shopping
              experience. We believe that shopping should be enjoyable,
              seamless, and rewarding. That’s why we strive to make your journey
              with us as smooth as possible, from browsing to checkout.
            </p>
          </div>
          <div>
            <h1 className="text-4xl">Quality You Can Trust</h1>
            <p className="text-xl mt-4">
              We know that quality matters. That&apos;s why we carefully select
              our products from trusted manufacturers and artisans around the
              globe. Each item is rigorously tested to ensure it meets our
              standards for quality, durability, and design. When you shop with
              us, you can feel confident that you’re investing in products that
              will last.
            </p>
          </div>
          <div>
            <h1 className="text-4xl">Why Choose Us</h1>
            <p className="text-xl mt-4">
              Why Choose Us? We’re not just about selling products; we’re about
              building relationships. Our dedicated customer service team is
              here to ensure you have a smooth shopping experience, from your
              first visit to delivery. Plus, we’re committed to making a
              positive impact, and supporting sustainable practices in every
              step of our process.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutUs;
