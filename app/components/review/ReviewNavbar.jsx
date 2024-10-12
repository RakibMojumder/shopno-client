"use client";

const ReviewNavbar = ({ navs, reviewNav, setReviewNav }) => {
  return (
    <div>
      <div
        className={`w-full md:w-4/5 lg:w-2/3 2xl:w-1/2 flex items-center z-10 relative rounded-t-2xl font-semibold`}
      >
        <div
          className={`absolute top-0 h-[106%] lg:h-[104%] w-1/3 border-b-2 border-primary -z-10 transition-all duration-500 ${
            reviewNav.label == "Shipping & Returns"
              ? "left-0"
              : reviewNav.label == "Reviews"
              ? "left-1/3"
              : "left-2/3"
          }`}
        ></div>
        {navs.map((nav) => (
          <button
            key={nav.id}
            onClick={() => setReviewNav(nav)}
            className="w-full py-2 text-xs md:text-base"
          >
            {nav.label}
          </button>
        ))}
      </div>
      <div className="border-b border-primary/20"></div>
    </div>
  );
};

export default ReviewNavbar;
