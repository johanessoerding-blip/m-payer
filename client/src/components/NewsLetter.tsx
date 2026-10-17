import rings from "../assets/newsletter-rings.png";

const NewsLetter = () => {
  return (
    <section className="relative overflow-hidden rounded-[20px] bg-[#7D72FF] px-6 sm:px-10 py-10 flex flex-col items-center gap-8 lg:block lg:h-58 lg:p-0 lg:pl-39 lg:pt-[49.7px] font-['Source_Sans_Pro']">
      <img
        src={rings}
        alt=""
        className="pointer-events-none select-none absolute right-0 top-0 w-[273px]"
      />

      <h2 className="relative font-semibold text-white text-[32px] sm:text-[42px] lg:text-[55px] leading-[1.15] lg:leading-15 tracking-[0.03em] text-center lg:text-left">
        Keep Updated About
        <br />
        Our Product
      </h2>

      <div className="relative w-full max-w-98 h-15.25 flex items-center rounded-full bg-[#FDFEFF] lg:absolute lg:left-[759px] lg:top-[79px]">
        <input
          type="email"
          placeholder="YOUR EMAIL ADDRESS"
          className="flex-1 min-w-0 h-full bg-transparent pl-6 sm:pl-12.25 text-[15px] tracking-[0.09em] text-[#7D72FF] placeholder:text-[#7D72FF] outline-none pb-0.75"
        />
        <button
          type="button"
          className="shrink-0 self-start mt-1.25 mr-2 h-12 w-28 sm:w-40 cursor-pointer rounded-full bg-[#7D72FF] hover:bg-[#5A51D4] transition-colors text-white text-[15px] tracking-[0.095em]"
        >
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
