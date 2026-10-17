import NewsLetter from "../components/NewsLetter";

import heroArcs from "../assets/contact-hero-arcs.png";
import dots from "../assets/contact-dots.svg";
import blob from "../assets/contact-blob.svg";
import supportPhoto from "../assets/contact-support-photo.webp";
import officeIcon from "../assets/contact-icon-office.png";
import phoneIcon from "../assets/contact-icon-phone.png";
import mailIcon from "../assets/contact-icon-mail.png";

const fields = [
  { label: "Name", placeholder: "Your Name", type: "text" },
  { label: "Email Address", placeholder: "Your Email", type: "email" },
  { label: "Subject", placeholder: "Subject Message", type: "text" },
];

const Contact = () => {
  return (
    <div className="relative -mt-25.75 overflow-x-clip bg-[#151518] text-left font-['Source_Sans_Pro']">
      {/* =============================== Hero */}

      <header className="relative h-90 pt-40 lg:h-126.5 lg:pt-54.5">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#16161D_0px,#1C1B2D_316px)] [clip-path:polygon(0_0,100%_0,100%_100%,0_75.5%)]" />
        <img
          src={heroArcs}
          alt=""
          className="pointer-events-none select-none absolute left-0 top-0 w-72 lg:w-130"
        />

        <h1 className="relative text-center font-semibold text-white text-[40px] sm:text-[56px] lg:text-[72px] leading-none tracking-[0.0125em] lg:pr-5">
          CONTACT US
        </h1>
      </header>

      {/* =============================== Get in touch + form */}

      <section className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-0 px-6 sm:px-12 lg:pl-25.25 lg:pr-30 pt-12.75">
        <div className="lg:w-140">
          <h2 className="font-semibold text-white text-[44px] lg:text-[56px] leading-none tracking-[0.021em] lg:-ml-0.75">
            Get In Touch
          </h2>

          <p className="mt-7.5 max-w-137.5 text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]">
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>

          <ul className="mt-10.75">
            <li className="grid grid-cols-[131px_1fr] items-start">
              <span className="size-23.5 rounded-full bg-[#7D72FF] flex items-center justify-center">
                <img src={officeIcon} alt="" className="w-13.5 -translate-y-1" />
              </span>
              <div className="pt-0.75">
                <h3 className="font-semibold text-[#7D72FF] text-[22px] leading-6.25">
                  Office Address
                </h3>
                <p className="mt-2.75 max-w-80 text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]">
                  Augue nulla turpis consectetur pharetra fames. Fermentum
                  rhoncus lectus
                </p>
              </div>
            </li>

            <li className="mt-9.5 grid grid-cols-[131px_1fr] items-start">
              <span className="size-23.5 rounded-full bg-[#7D72FF] flex items-center justify-center">
                <img src={phoneIcon} alt="" className="w-13 -translate-y-0.75" />
              </span>
              <div className="pt-1">
                <h3 className="font-semibold text-[#7D72FF] text-[22px] leading-6.25">
                  Phone Number
                </h3>
                <p className="mt-2.25 text-[rgba(255,255,255,0.78)] text-[18px] leading-6.5 tracking-[0.03em] whitespace-pre">
                  {"+234 567 9805 606\n+1  54 567805 606"}
                </p>
              </div>
            </li>

            <li className="mt-13 grid grid-cols-[131px_1fr] items-start">
              <span className="ml-2 size-23.5 rounded-full bg-[#7D72FF] flex items-center justify-center">
                <img src={mailIcon} alt="" className="w-11.25 -translate-y-0.75" />
              </span>
              <div className="pt-1.25">
                <h3 className="font-semibold text-[#7D72FF] text-[22px] leading-6.25">
                  Email Address
                </h3>
                <p className="mt-2.5 text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]">
                  Support@mpay.com
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form className="relative z-10 w-full lg:w-146.75 lg:mt-2.75 lg:-mb-51 rounded-xl bg-[linear-gradient(247deg,#27244C_28%,#1D1B1E_68%)] pt-14.5 pb-10.5 pl-5 sm:pl-14.75 pr-5 sm:pr-11.5">
          <h2 className="font-semibold text-[rgba(255,255,255,0.75)] text-[30px] leading-none">
            Your Details
          </h2>

          <div className="sm:pl-3">
            {fields.map(({ label, placeholder, type }, i) => (
              <label key={label} className={`block ${i === 0 ? "mt-13.5" : "mt-12.5"}`}>
                <span className="block pl-0.5 font-semibold text-[rgba(255,255,255,0.75)] text-[22px] leading-none">
                  {label} <span className="text-[#7D72FF]">*</span>
                </span>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="mt-5.25 block w-full bg-transparent border-b-[2.5px] border-[#5F57A1] pl-0.5 pb-5.5 text-[18px] leading-none tracking-[0.03em] text-white placeholder:text-[rgba(255,255,255,0.78)] outline-none"
                />
              </label>
            ))}

            <label className="block mt-12.5">
              <span className="block pl-0.5 font-semibold text-[rgba(255,255,255,0.75)] text-[22px] leading-none">
                Comment/Questions <span className="text-[#7D72FF]">*</span>
              </span>
              <textarea
                placeholder="Your Message..."
                rows={4}
                className="mt-4.5 block w-full h-[125.5px] pl-0.5 resize-none bg-transparent border-b-[2.5px] border-[#5F57A1] text-[18px] leading-6.25 tracking-[0.03em] text-white placeholder:text-[rgba(255,255,255,0.78)] outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-8 h-13.75 w-37.5 cursor-pointer rounded-full bg-[#7D72FF] hover:bg-[#5A51D4] transition-colors text-white text-[18px] tracking-[0.06em]"
            >
              SUBMIT
            </button>
          </div>
        </form>

        <img
          src={dots}
          alt=""
          className="pointer-events-none select-none absolute z-20 right-0 top-78.5 w-72.5 hidden lg:block"
        />
      </section>

      {/* =============================== 24/7 availability */}

      <section className="relative bg-[#1C1B2D] lg:h-144.5 pt-4.5 pb-16 lg:pb-0 px-6 sm:px-12 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-0">
        <img
          src={blob}
          alt=""
          className="pointer-events-none select-none absolute left-0 top-11.25 w-32.5 hidden lg:block"
        />

        <img
          src={supportPhoto}
          alt="Smiling MPay support agent wearing a headset"
          className="relative w-full max-w-126.75 lg:ml-27.5 self-center lg:self-start"
        />

        <div className="lg:ml-36.25 lg:pt-54.5 lg:w-140">
          <h2 className="font-semibold text-white text-[40px] lg:text-[55px] leading-none tracking-[0.03em]">
            24/7 Availability
          </h2>
          <p className="mt-9.25 text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]">
            Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
            vivamus risus odio scelerisque urna diam rhoncus phasellus. Felis
            blandit in quis tellus ultrices enim ut porttitor. Sed consectetur
            tellus velit luctus. Eu odio at faucibus massa ac in lectus cras
            blandit. Bibendum sapien non quis rhoncus.
          </p>
        </div>
      </section>

      {/* =============================== Newsletter */}

      <div className="px-6 sm:px-12 lg:px-25.25 bg-[linear-gradient(180deg,#1C1B2D_192px,transparent_192px)]">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Contact;
