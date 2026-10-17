import heroArcs from "../assets/services/hero-arcs.png";
import supportArt from "../assets/services/support-art.png";
import promoArt from "../assets/services/promo-art.png";
import transferPhoto from "../assets/services/transfer-photo.png";
import budgetArt from "../assets/services/budget-art.png";
import cardArt from "../assets/services/card-art.png";
import insuranceIcon from "../assets/services/service-insurance.png";

import userFriendlyIcon from "../assets/home/feature-user-friendly.png";
import supportIcon from "../assets/home/feature-support.png";
import secureIcon from "../assets/home/feature-secure.png";

import binance from "../assets/home/partner-binance.png";
import quickteller from "../assets/home/partner-quickteller.png";
import trustWallet from "../assets/home/partner-trustwallet.png";
import paypal from "../assets/home/partner-paypal.png";

import paymentIcon from "../assets/home/service-payment.png";
import dashboardIcon from "../assets/home/service-dashboard.png";
import integratedIcon from "../assets/home/service-integrated.png";
import trackingIcon from "../assets/home/service-tracking.png";
import creditIcon from "../assets/home/service-credit.png";

import mastercardLogo from "../assets/home/pay-mastercard.png";
import visaLogo from "../assets/home/pay-visa.png";
import stripeLogo from "../assets/home/pay-stripe.png";
import paypalLogo from "../assets/home/pay-paypal.png";

import ServiceCard from "../components/ServiceCard";
import NewsLetter from "../components/NewsLetter";

// Desktop layout: every lg:left/lg:top value below is measured from the design
// and is relative to the enclosing section's top-left corner.

const lgBreak = <br className="hidden lg:inline" />;

const bodyText = "text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]";
const sectionHeading = "font-semibold text-white text-[36px] sm:text-[44px] lg:text-[55px] leading-[1.1] lg:leading-15 tracking-[0.03em]";

const features = [
  { icon: userFriendlyIcon, title: "User Friendly", iconPos: "lg:left-[253px] lg:top-[91px]", titlePos: "lg:left-[161px] lg:top-[206.9px]", bodyPos: "lg:left-[168.75px] lg:top-[239.9px]" },
  { icon: supportIcon, title: "Best Support", iconPos: "lg:left-[685px] lg:top-[80px]", titlePos: "lg:left-[586.75px] lg:top-[206.2px]", bodyPos: "lg:left-[599.75px] lg:top-[239.9px]" },
  { icon: secureIcon, title: "Secure", iconPos: "lg:left-[1134px] lg:top-[80px]", titlePos: "lg:left-[1030.25px] lg:top-[206.2px]", bodyPos: "lg:left-[1030.75px] lg:top-[239.9px]" },
];

const partners = [
  { src: binance, alt: "Binance — Trading App", className: "w-46.75 lg:left-[80px] lg:top-[72px]" },
  { src: quickteller, alt: "Quickteller — Fintech Bank", className: "w-47 lg:left-[415px] lg:top-[79px]" },
  { src: trustWallet, alt: "Trust Wallet — Cryptocurrency", className: "w-55.5 lg:left-[749px] lg:top-[78px]" },
  { src: paypal, alt: "PayPal — Finance", className: "w-37.25 lg:left-[1126px] lg:top-[87px]" },
];

// Icon offsets (ml / mt / width) are relative to the card's 31px text inset.
const services = [
  { icon: paymentIcon, iconClassName: "ml-0.25 mt-4.75 w-12.25", title: "Payment Management", className: "" },
  { icon: dashboardIcon, iconClassName: "ml-0.75 mt-4.5 w-12", title: "Personal Dashboard", className: "lg:ml-5.5" },
  { icon: integratedIcon, iconClassName: "ml-1.5 mt-5.25 w-9.75", title: "Integrated Payment", titleClassName: "font-normal tracking-[0.03em]", className: "lg:ml-4.25" },
  { icon: trackingIcon, iconClassName: "ml-0.5 mt-5.25 w-9.75", title: "Business Tracking", className: "" },
  { icon: creditIcon, iconClassName: "ml-0.25 mt-3.25 w-14.5", title: "Credit and Debit card", className: "lg:ml-5.5" },
  {
    icon: insuranceIcon,
    iconClassName: "-ml-0.75 mt-6 w-12.75",
    title: "Insurance",
    titleClassName: "font-normal tracking-[0.03em] relative lg:left-[1.5px] lg:-top-px",
    bodyClassName: "mt-2.5 lg:mt-[8.5px]",
    linkClassName: "mt-6 lg:mt-[23px]",
    className: "lg:ml-4.75",
  },
];

const stats = [
  { value: "90", label: "Powered Merchant", pos: "lg:left-[204px]", plus: "lg:left-[276.5px]", labelPos: "lg:left-[162.5px]" },
  { value: "50", label: "Trusted Partners", pos: "lg:left-[523.5px]", plus: "lg:left-[596.5px]", labelPos: "lg:left-[496.5px]" },
  { value: "70", label: "Professional Team", pos: "lg:left-[844.5px]", plus: "lg:left-[916.5px]", labelPos: "lg:left-[802.5px]" },
  { value: "90", label: "Happy Customers", pos: "lg:left-[1164px]", plus: "lg:left-[1236.5px]", labelPos: "lg:left-[1124.5px]" },
];

const sampleCopy = (
  <>
    Scelerisque urna sed turpis fermentum porttitor metus.{lgBreak} Eget
    aliquam vivamus risus odio scelerisque urna diam{lgBreak} rhoncus
    phasellus. Felis blandit in quis tellus ultrices enim{lgBreak} ut
    porttitor. Sed consectetur tellus velit luctus. E
  </>
);

const Services = () => {
  return (
    <div className="relative -mt-25.75 overflow-x-clip bg-[#151518] text-left font-['Source_Sans_Pro']">
      {/* =============================== Hero */}

      <header className="relative px-6 pt-40 pb-24 lg:h-168.75 lg:p-0 lg:pt-[219.4px]">
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(187deg,#151519_75.5px,#282543_535.5px)] [clip-path:polygon(0_0,100%_0,100%_100%,0_80.15%)]" />
        <img src={heroArcs} alt="" className="pointer-events-none select-none absolute left-0 top-0 w-64 lg:w-[427px]" />

        <h1 className="relative text-center font-semibold text-white text-[44px] sm:text-[56px] lg:text-[72px] leading-none tracking-[0.03em] lg:tracking-[0.01em] lg:pr-[15.5px]">
          OUR SERVICES
        </h1>
        <p className={`relative mt-4 lg:mt-[17.6px] mx-auto max-w-136 text-center ${bodyText}`}>
          Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus{lgBreak}{" "}
          lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare{lgBreak}{" "}
          tellus vitae elit est tellus porta malesuada ut arcu.
        </p>
      </header>

      {/* =============================== Features */}

      <section className="relative grid gap-10 px-6 pt-16 sm:grid-cols-3 lg:block lg:h-[325px] lg:p-0">
        {features.map(({ icon, title, iconPos, titlePos, bodyPos }) => (
          <div key={title} className="flex flex-col items-center text-center lg:contents">
            <img src={icon} alt="" className={`size-23.5 lg:absolute ${iconPos}`} />
            <h3 className={`mt-4 lg:mt-0 font-semibold text-[#7D72FF] text-[22px] leading-6.25 lg:absolute lg:w-75 ${titlePos}`}>{title}</h3>
            <p className={`mt-2 lg:mt-0 ${bodyText} lg:absolute lg:w-75 ${bodyPos}`}>
              Augue nulla turpis consectetur{lgBreak} pharetra fames.&nbsp; rhoncus lectus
            </p>
          </div>
        ))}
      </section>

      {/* =============================== Best Support & Always Ready to Help */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-195 lg:p-0">
        <img
          src={supportArt}
          alt="MPay support agents wearing headsets"
          className="order-last w-full max-w-158 mx-auto lg:mx-0 lg:absolute lg:left-[85px] lg:top-[53px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[851px] lg:top-[226px]`}>
          <span className="text-[#7D72FF]">Best</span> Support &amp;{lgBreak} Always Ready
          to{lgBreak} Help
        </h2>
        <p className={`${bodyText} lg:absolute lg:left-[851.5px] lg:top-[423.9px]`}>
          Scelerisque urna sed turpis fermentum porttitor metus.{lgBreak} Eget
          aliquam vivamus risus odio scelerisque urna diam{lgBreak} rhoncus
          phasellus. Felis blandit in quis tellus ultrices enim{lgBreak} ut
          porttitor. Sed consectetur tellus velit luctus. Eu odio at{lgBreak}{" "}
          faucibus massa ac in lectus cras blandit. Bibendum sapien{lgBreak} non
          quis rhoncus.
        </p>
      </section>

      {/* =============================== Partners */}

      <section className="relative flex flex-wrap items-center justify-center gap-10 px-6 py-16 lg:block lg:h-45 lg:p-0">
        {partners.map(({ src, alt, className }) => (
          <img key={alt} src={src} alt={alt} className={`max-w-[45%] lg:max-w-none lg:absolute ${className}`} />
        ))}
      </section>

      {/* =============================== Our Service */}

      <section className="relative px-6 sm:px-12 pt-16 lg:h-260 lg:p-0 lg:pt-[125.7px]">
        <h2 className={`text-center lg:pr-[11.5px] ${sectionHeading}`}>Our Service</h2>
        <p className={`mt-6 lg:mt-[20.7px] text-center lg:pl-[27px] ${bodyText}`}>
          Augue nulla turpis consectetur pharetra fames. Fermentum{lgBreak} rhoncus
          lectus condimentum augue. Faucibus a ac urna
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-[87.6px] lg:flex lg:flex-wrap lg:gap-0 lg:gap-y-6.75 lg:pl-[99px] lg:w-[1360px]">
          {services.map(({ title, ...card }) => (
            <ServiceCard key={title} title={title} {...card} />
          ))}
        </div>
      </section>

      {/* =============================== Hot Promo, Discount, and Cashback */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-[730px] lg:p-0">
        <img
          src={promoArt}
          alt="Two women reviewing business analytics on a laptop"
          className="order-last w-full max-w-175.5 mx-auto lg:mx-0 lg:absolute lg:left-[636px] lg:top-[54px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[105px] lg:top-[120.7px]`}>
          <span className="text-[#7D72FF]">Hot</span> Promo, Discount,{lgBreak} and
          Cashback
        </h2>
        <p className={`${bodyText} lg:absolute lg:left-[105px] lg:top-[269.9px]`}>{sampleCopy}</p>
        <p className={`${bodyText} lg:absolute lg:left-[105px] lg:top-[391.9px]`}>
          Scelerisque urna sed turpis fermentum porttitor metus.{lgBreak} Eget
          aliquam vivamus risus odio scelerisque urna diam{lgBreak} rhoncus
          phasellus. Felis blandit in
        </p>

        <div className="flex flex-wrap gap-6 lg:contents">
          <img src={mastercardLogo} alt="Mastercard" className="w-19.5 lg:absolute lg:left-[102px] lg:top-[498px]" />
          <img src={visaLogo} alt="Visa" className="w-18.25 lg:absolute lg:left-[230px] lg:top-[495px]" />
          <img src={stripeLogo} alt="Stripe" className="w-18.25 lg:absolute lg:left-[353px] lg:top-[495px]" />
          <img src={paypalLogo} alt="PayPal" className="w-18.25 lg:absolute lg:left-[476px] lg:top-[495px]" />
        </div>
      </section>

      {/* =============================== Stats */}

      <section className="relative grid grid-cols-2 gap-y-10 px-6 pt-16 lg:block lg:h-[230px] lg:p-0">
        {stats.map(({ value, label, pos, plus, labelPos }, i) => (
          <div key={`${label}-${i}`} className="flex flex-col items-center gap-3 lg:contents">
            <p className={`relative text-white text-[48px] lg:text-[60px] leading-none tracking-[0.02em] lg:absolute lg:top-[48.7px] ${pos}`}>
              {value}
              <span className="absolute left-full top-0 ml-2 text-[#7D72FF] text-[38px] leading-none lg:hidden">+</span>
            </p>
            <span className={`hidden lg:block absolute top-[48.7px] text-[#7D72FF] text-[38px] leading-none ${plus}`}>+</span>
            <p className={`text-[rgba(255,255,255,0.75)] text-[18px] leading-none tracking-[0.03em] lg:absolute lg:top-[116px] ${labelPos}`}>
              {label}
            </p>
          </div>
        ))}
      </section>

      {/* =============================== Payment & Transfer */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-160 lg:p-0">
        <img
          src={transferPhoto}
          alt="Woman reviewing payments at her computer"
          className="order-last w-full max-w-116 mx-auto lg:mx-0 lg:absolute lg:left-[102px] lg:top-[59px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[846px] lg:top-[189.7px]`}>Payment &amp; Transfer</h2>
        <p className={`${bodyText} lg:absolute lg:left-[845.5px] lg:top-[282.9px]`}>{sampleCopy}</p>
        <p className={`${bodyText} lg:absolute lg:left-[845.5px] lg:top-[394.9px]`}>{sampleCopy}</p>
      </section>

      {/* =============================== Save & Budget */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-150 lg:p-0">
        <img
          src={budgetArt}
          alt="Businesswoman carrying folders"
          className="order-last w-full max-w-156.25 mx-auto lg:mx-0 lg:absolute lg:left-[815px] lg:top-[85px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[108px] lg:top-[202.7px]`}>Save &amp; Budget</h2>
        <p className={`${bodyText} lg:absolute lg:left-[107.5px] lg:top-[295.9px]`}>{sampleCopy}</p>
        <p className={`${bodyText} lg:absolute lg:left-[104.5px] lg:top-[409.9px]`}>{sampleCopy}</p>
      </section>

      {/* =============================== MPAY Card */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-150 lg:p-0">
        <img
          src={cardArt}
          alt="MPay debit card"
          className="order-last w-full max-w-132.75 mx-auto lg:mx-0 lg:absolute lg:left-[92px] lg:top-[51px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[822px] lg:top-[233.7px]`}>
          <span className="text-[#7D72FF]">MPAY</span> Card
        </h2>
        <p className={`${bodyText} lg:absolute lg:left-[821.5px] lg:top-[313.9px]`}>{sampleCopy}</p>

        <div className="flex gap-6 lg:contents">
          <img src={mastercardLogo} alt="Mastercard" className="w-19.5 lg:absolute lg:left-[819px] lg:top-[485px]" />
          <img src={visaLogo} alt="Visa" className="w-18.25 lg:absolute lg:left-[947px] lg:top-[482px]" />
        </div>
      </section>

      {/* =============================== Newsletter */}

      <div className="relative px-6 sm:px-12 pt-16 lg:px-0 lg:pl-[110px] lg:pt-12.5 lg:pb-[27px] lg:w-[1348px]">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Services;
