import heroArt from "../assets/home/hero-art.png";
import binance from "../assets/home/partner-binance.png";
import quickteller from "../assets/home/partner-quickteller.png";
import trustWallet from "../assets/home/partner-trustwallet.png";
import paypal from "../assets/home/partner-paypal.png";

import manageArt from "../assets/home/manage-art.png";
import promoArt from "../assets/home/promo-art.png";
import dotsLeft from "../assets/home/dots-left.png";
import dotsRight from "../assets/home/dots-right.png";
import servicesArcs from "../assets/home/services-arcs.png";
import testimonialCard from "../assets/home/testimonial.png";
import testimonialAvatar from "../assets/testimonial-avatar.jpeg";

import userFriendlyIcon from "../assets/home/feature-user-friendly.png";
import supportIcon from "../assets/home/feature-support.png";
import secureIcon from "../assets/home/feature-secure.png";

import paymentIcon from "../assets/home/service-payment.png";
import dashboardIcon from "../assets/home/service-dashboard.png";
import integratedIcon from "../assets/home/service-integrated.png";
import trackingIcon from "../assets/home/service-tracking.png";
import creditIcon from "../assets/home/service-credit.png";

import mastercardLogo from "../assets/home/pay-mastercard.png";
import visaLogo from "../assets/home/pay-visa.png";
import stripeLogo from "../assets/home/pay-stripe.png";
import paypalLogo from "../assets/home/pay-paypal.png";

import NewsLetter from "../components/NewsLetter";
import ServiceCard from "../components/ServiceCard";

const partners = [
  { src: binance, alt: "Binance — Trading App", className: "w-46.75 lg:mt-1" },
  { src: quickteller, alt: "Quickteller — Fintech Bank", className: "w-47 lg:ml-37 lg:mt-2.75" },
  { src: trustWallet, alt: "Trust Wallet — Cryptocurrency", className: "w-55.5 lg:ml-36.5 lg:mt-2.5" },
  { src: paypal, alt: "PayPal — Finance", className: "w-37.25 lg:ml-38.75 lg:mt-4.75" },
];

const features = [
  { icon: userFriendlyIcon, title: "User Friendly" },
  { icon: supportIcon, title: "Best Support" },
  { icon: secureIcon, title: "Secure" },
];

// Icon offsets (ml / mt / width) are relative to the card's 31px text inset.
const services = [
  { icon: paymentIcon, iconClassName: "ml-0.25 mt-4.75 w-12.25", title: "Payment Management" },
  { icon: dashboardIcon, iconClassName: "ml-0.75 mt-4.5 w-12", title: "Personal Dashboard" },
  { icon: integratedIcon, iconClassName: "ml-1.5 mt-5.25 w-9.75", title: "Integrated Payment", titleClassName: "font-normal tracking-[0.03em]" },
  { icon: trackingIcon, iconClassName: "ml-0.5 mt-5.25 w-9.75", title: "Business Tracking" },
  { icon: creditIcon, iconClassName: "ml-0.25 mt-3.25 w-14.5", title: "Credit and Debit card" },
];

const paymentLogos = [
  { src: mastercardLogo, alt: "Mastercard", className: "w-19.5 lg:ml-1.25 lg:mt-0.75" },
  { src: visaLogo, alt: "Visa", className: "w-18.25 lg:ml-12.5" },
  { src: stripeLogo, alt: "Stripe", className: "w-18.25 lg:ml-12.5" },
  { src: paypalLogo, alt: "PayPal", className: "w-18.25 lg:ml-12.5" },
];

const bodyText = "text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]";
const sectionHeading = "font-semibold text-white text-[36px] sm:text-[44px] lg:text-[55px] leading-[1.1] lg:leading-15 tracking-[0.03em]";
const pillButton = "cursor-pointer font-semibold w-49.25 rounded-[27px] bg-[#7D72FF] hover:bg-[#5A51D4] transition-colors text-white text-[16px] tracking-[0.035em] pb-0.5";

const Home = () => {
  return (
    <div className="relative -mt-25.75 overflow-x-clip bg-[#151518] text-left font-['Source_Sans_Pro']">
      <div className="absolute inset-x-0 top-0 h-250 bg-[linear-gradient(192deg,#201F2F_99.5px,#151518_859.5px)]" />

      {/* Decorative layers, positioned in page coordinates on desktop */}
      <img src={dotsLeft} alt="" className="pointer-events-none select-none absolute left-0 top-[2423px] w-125 hidden lg:block" />
      <img src={servicesArcs} alt="" className="pointer-events-none select-none absolute left-[1021px] top-[3171px] w-104.75 hidden lg:block" />
      <img src={dotsRight} alt="" className="pointer-events-none select-none absolute left-[925px] top-[4518px] w-128.75 hidden lg:block" />

      {/* =============================== Hero */}

      <header className="relative px-6 sm:px-12 pt-40 lg:px-0 lg:pl-25.75 lg:pt-[358.5px] lg:h-250">
        <h1 className="font-semibold text-white text-[40px] sm:text-[52px] lg:text-[66px] leading-[1.1] lg:leading-17.5 tracking-[0.03em] lg:tracking-[0.021em] lg:-ml-0.75">
          <span className="text-[#7D72FF]">FASTEST</span> PAYMENT
          <br />
          METHOD EVER
        </h1>

        <p className="mt-7 lg:mt-[28.5px] max-w-123 text-[rgba(255,255,255,0.7)] text-[18px] leading-6.25 tracking-[0.03em]">
          Massa cursus cum in at tincidunt nisl id nisl. In ac viverra quis
          massa in pharetra praesent. Nisl in torto bgbdsudhg
          hdhjdkjAugue nulla turpis consectetur pharetra fames. Fermentum
          rhoncus lectus condimentum augue. Faucibus a ac urna tellus purus.
          Ornare tellus vitae elit est tellus porta malesuada ut arcu.
        </p>

        <button type="button" className={`${pillButton} mt-11.75 h-16.25`}>
          LEARN MORE
        </button>

        <img
          src={heroArt}
          alt="MPay app showing balance and recent transactions"
          className="mt-12 w-full max-w-194.25 lg:mt-0 lg:absolute lg:left-[663px] lg:top-25"
        />
      </header>

      {/* =============================== Partners */}

      <section className="relative flex flex-wrap items-center justify-center gap-10 px-6 py-16 lg:h-25 lg:flex-nowrap lg:items-start lg:justify-start lg:gap-0 lg:p-0 lg:pl-20">
        {partners.map(({ src, alt, className }) => (
          <img key={alt} src={src} alt={alt} className={`max-w-[45%] lg:max-w-none ${className}`} />
        ))}
      </section>

      {/* =============================== Manage Everything in Your Hand */}

      <section className="relative flex flex-col-reverse gap-12 px-6 sm:px-12 pt-16 lg:block lg:h-200 lg:p-0">
        <img
          src={manageArt}
          alt="MPay cards screen next to a physical MPay card"
          className="w-full max-w-148.5 mx-auto lg:mx-0 lg:absolute lg:left-17.5 lg:top-[91px]"
        />

        <div className="lg:ml-195 lg:pt-[120.7px] lg:w-136.5">
          <h2 className={sectionHeading}>
            Manage Everything in
            <br />
            Your&nbsp; <span className="text-[#7D72FF]">Hand</span>
          </h2>

          <p className={`mt-6 lg:mt-[21.3px] ${bodyText}`}>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>

          <ul className="mt-10.75">
            {features.map(({ icon, title }, i) => (
              <li
                key={title}
                className={`grid grid-cols-[100px_1fr] sm:grid-cols-[131px_1fr] items-start ${i === 0 ? "" : i === 1 ? "mt-9.5" : "mt-9.75"}`}
              >
                <img src={icon} alt="" className="size-23.5" />
                <div className="pt-1">
                  <h3 className="font-semibold text-[#7D72FF] text-[22px] leading-6.25">{title}</h3>
                  <p className={`mt-2.5 max-w-80 ${bodyText}`}>
                    Augue nulla turpis consectetur pharetra fames. Fermentum
                    rhoncus lectus
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============================== Enjoy Enormous Business Promos */}

      <section className="relative flex flex-col gap-12 px-6 sm:px-12 pt-24 lg:block lg:h-200 lg:p-0">
        <div className="lg:pl-25.75 lg:pt-[279.7px] lg:w-[580px]">
          <h2 className={sectionHeading}>
            Enjoy <span className="text-[#7D72FF]">Enormous</span>
            <br />
            Business Promos
          </h2>

          <p className={`mt-5 lg:mt-[16.3px] max-w-118.5 ${bodyText}`}>
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </p>

          <button type="button" className={`${pillButton} mt-[42.5px] h-15.5 lg:-ml-0.5 lg:pl-1.5`}>
            GET STARTED
          </button>
        </div>

        <img
          src={promoArt}
          alt="Two women reviewing business analytics on a laptop"
          className="w-full max-w-176.25 mx-auto lg:mx-0 lg:absolute lg:left-[638px] lg:top-[97px]"
        />
      </section>

      {/* =============================== Our Services */}

      <section className="relative px-6 sm:px-12 pt-24 lg:h-250 lg:p-0 lg:pt-[136.7px]">
        <h2 className={`text-center lg:pr-5 ${sectionHeading}`}>Our Services</h2>

        <p className={`mt-6 lg:mt-[22.3px] mx-auto max-w-119 text-center lg:pl-5 lg:max-w-124 ${bodyText}`}>
          Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
          lectus condimentum augue. Faucibus a ac urna
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-25 lg:flex lg:flex-wrap lg:gap-0 lg:gap-y-6.75 lg:pl-25 lg:w-[1360px]">
          {services.map(({ icon, iconClassName, title, titleClassName }, i) => (
            <ServiceCard
              key={title}
              icon={icon}
              iconClassName={iconClassName}
              title={title}
              titleClassName={titleClassName}
              className={i === 1 || i === 4 ? "lg:ml-5.5" : i === 2 ? "lg:ml-4.25" : ""}
            />
          ))}
        </div>
      </section>

      {/* =============================== Testimonial */}

      <section className="relative px-6 sm:px-12 pt-24 lg:h-200 lg:p-0">
        <img src={testimonialCard} alt="" className="hidden lg:block absolute left-27.5 top-56.25 w-[1330px]" />

        <figure className="relative rounded-3xl bg-[linear-gradient(90deg,#7D72FF_45%,#A59CFF_100%)] px-6 py-12 text-center lg:rounded-none lg:bg-none lg:p-0 lg:pt-[360.5px] lg:pl-[110px] lg:w-[1325px]">
          <blockquote className="mx-auto max-w-187 text-[rgba(255,255,255,0.82)] text-[20px] lg:text-[26px] leading-[1.4] lg:leading-[35.5px] tracking-[0.03em]">
            Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
            lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
            tellus vitae elit est tellus porta malesuada ut arcu.
          </blockquote>

          <figcaption className="mt-6 flex items-center justify-center gap-4 lg:mt-[3.5px] lg:ml-[465px] lg:justify-start lg:gap-0">
            <img src={testimonialAvatar} alt="" className="size-12 rounded-full object-cover lg:invisible lg:size-23.75" />
            <span className="text-left lg:ml-[18px]">
              <span className="block text-black text-[22px] lg:text-[26px] leading-none tracking-[0.03em]">
                Babatunde Alisha
              </span>
              <span className="block mt-2 lg:mt-[9px] text-[rgba(255,255,255,0.78)] text-[18px] lg:text-[22px] leading-none tracking-[0.03em]">
                Customer
              </span>
            </span>
          </figcaption>
        </figure>
      </section>

      {/* =============================== Support Payment From Every Platform */}

      <section className="relative px-6 sm:px-12 pt-24 lg:h-125 lg:p-0 lg:pl-25.75 lg:pt-[77.7px]">
        <h2 className={sectionHeading}>
          Support Payment
          <br />
          From Every Platform
        </h2>

        <p className={`mt-5 lg:mt-[16.8px] max-w-118.5 ${bodyText}`}>
          Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus
          lectus condimentum augue. Faucibus a ac urna tellus purus. Ornare
          tellus vitae elit est tellus porta malesuada ut arcu.
        </p>

        <h4 className="mt-6 lg:mt-[24.2px] font-semibold text-white text-[16px] leading-none tracking-[0.03em]">
          Supported Payment
        </h4>

        <div className="mt-6 lg:mt-[25.8px] flex flex-wrap items-start gap-6 lg:gap-0">
          {paymentLogos.map(({ src, alt, className }) => (
            <img key={alt} src={src} alt={alt} className={className} />
          ))}
        </div>
      </section>

      {/* =============================== Newsletter */}

      <div className="relative px-6 sm:px-12 pt-24 lg:px-0 lg:pl-24 lg:pt-[139px] lg:pb-[51.5px] lg:w-[1334px]">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
