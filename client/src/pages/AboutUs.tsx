import heroDots from "../assets/about/hero-dots.png";
import craftedArt from "../assets/about/crafted-art.png";
import committedArt from "../assets/about/committed-art.png";
import fastestArt from "../assets/about/fastest-art.png";
import teamDots from "../assets/about/team-dots.png";
import teamSocials from "../assets/about/team-socials.png";
import tyronne from "../assets/about/team-tyronne.png";
import akpeki from "../assets/about/team-akpeki.png";
import alisha from "../assets/about/team-alisha.png";
import aishat from "../assets/about/team-aishat.png";
import babatunde from "../assets/about/team-babatunde.png";

import userFriendlyIcon from "../assets/home/feature-user-friendly.png";
import supportIcon from "../assets/home/feature-support.png";
import secureIcon from "../assets/home/feature-secure.png";

import binance from "../assets/home/partner-binance.png";
import quickteller from "../assets/home/partner-quickteller.png";
import trustWallet from "../assets/home/partner-trustwallet.png";
import paypal from "../assets/home/partner-paypal.png";

import NewsLetter from "../components/NewsLetter";

// Desktop layout: every lg:left/lg:top value below is measured from the design
// and is relative to the enclosing section's top-left corner.

const lgBreak = <br className="hidden lg:inline" />;

const bodyText = "text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]";
const sectionHeading = "font-semibold text-white text-[36px] sm:text-[44px] lg:text-[55px] leading-[1.1] lg:leading-15 tracking-[0.03em]";

const craftedFeatures = [
  {
    icon: userFriendlyIcon,
    title: "User Friendly",
    iconPos: "lg:left-[114px] lg:top-[370px]",
    titlePos: "lg:left-[236px] lg:top-[359.9px]",
    bodyPos: "lg:left-[235px] lg:top-[400px]",
  },
  {
    icon: supportIcon,
    title: "Best Support",
    iconPos: "lg:left-[110px] lg:top-[543px]",
    titlePos: "lg:left-[241.5px] lg:top-[541.2px]",
    bodyPos: "lg:left-[236px] lg:top-[582px]",
  },
  {
    icon: secureIcon,
    title: "Security",
    iconPos: "lg:left-[112px] lg:top-[727px]",
    titlePos: "lg:left-[238px] lg:top-[726.7px]",
    bodyPos: "lg:left-[237.5px] lg:top-[766px]",
  },
];

const partners = [
  { src: binance, alt: "Binance — Trading App", className: "w-46.75 lg:left-[111px] lg:top-[44px]" },
  { src: quickteller, alt: "Quickteller — Fintech Bank", className: "w-47 lg:left-[446px] lg:top-[51px]" },
  { src: trustWallet, alt: "Trust Wallet — Cryptocurrency", className: "w-55.5 lg:left-[780px] lg:top-[50px]" },
  { src: paypal, alt: "PayPal — Finance", className: "w-37.25 lg:left-[1157px] lg:top-[59px]" },
];

const highlights = [
  { value: "100", suffix: "+", label: "Active user", pos: "lg:left-[745.5px] lg:top-[443.7px]", labelPos: "lg:left-[758px] lg:top-[511.5px]", suffixClassName: "top-0" },
  { value: "400", suffix: "+", label: "App Download", pos: "lg:left-[997.5px] lg:top-[443.7px]", labelPos: "lg:left-[999px] lg:top-[511.5px]", suffixClassName: "top-0" },
  { value: "100", suffix: "%", label: "Satisfied Users", pos: "lg:left-[744.5px] lg:top-[587.7px]", labelPos: "lg:left-[752.5px] lg:top-[655px]", suffixClassName: "top-[2px]" },
  { value: "200", suffix: "+", label: "Partner Joined", pos: "lg:left-[997.5px] lg:top-[588.7px]", labelPos: "lg:left-[998.5px] lg:top-[657px]", suffixClassName: "top-0" },
];

// nameShift/roleShift reproduce the design's slightly off-centre text per card.
const team = [
  { name: "Tyronne Michael", role: "CEO/Founder", photo: tyronne, photoClassName: "w-55.5 lg:left-[77px] lg:top-[34px]", nameTop: "lg:top-[281.6px]", nameShift: "lg:translate-x-[0.75px]", roleShift: "lg:-translate-x-[0.5px]" },
  { name: "Akpeki Tega", role: "Operation Manager", photo: akpeki, photoClassName: "w-55.75 lg:left-[76px] lg:top-[33px]", nameTop: "lg:top-[281.6px]", nameShift: "lg:translate-x-[2.75px]", roleShift: "lg:translate-x-[10.5px]" },
  { name: "Alisha Gazel", role: "Sales and Marketing", photo: alisha, photoClassName: "w-55.75 lg:left-[76px] lg:top-[33px]", nameTop: "lg:top-[281.6px]", nameShift: "lg:translate-x-[7.25px]", roleShift: "lg:translate-x-[8.5px]" },
  { name: "Aishat Chinedu", role: "Lead Blockchain Developer", photo: aishat, photoClassName: "w-55.75 lg:left-[76px] lg:top-[33px]", nameTop: "lg:top-[288.6px]", nameShift: "lg:-translate-x-[3px]", roleShift: "lg:-translate-x-[1.25px]" },
  { name: "Babatunde Victor", role: "IT Support Executive", photo: babatunde, photoClassName: "w-55.75 lg:left-[76px] lg:top-[33px]", nameTop: "lg:top-[285.6px]", nameShift: "lg:-translate-x-[5.75px]", roleShift: "lg:-translate-x-[6.5px]" },
];

const teamCardPos = [
  "lg:left-[99px] lg:top-[315px]",
  "lg:left-[529px] lg:top-[315px]",
  "lg:left-[959px] lg:top-[315px]",
  "lg:left-[99px] lg:top-[787px]",
  "lg:left-[529px] lg:top-[787px]",
];

const stats = [
  { value: "90", label: "Powered Merchant", pos: "lg:left-[235.5px]", plus: "lg:left-[307.5px]", labelPos: "lg:left-[193.5px]" },
  { value: "50", label: "Trusted Partners", pos: "lg:left-[554.5px]", plus: "lg:left-[627.5px]", labelPos: "lg:left-[527.5px]" },
  { value: "70", label: "Professional Team", pos: "lg:left-[876px]", plus: "lg:left-[947.5px]", labelPos: "lg:left-[833.5px]" },
  { value: "90", label: "Happy Customers", pos: "lg:left-[1195.5px]", plus: "lg:left-[1267.5px]", labelPos: "lg:left-[1155.5px]" },
];

const AboutUs = () => {
  return (
    <div className="relative -mt-25.75 overflow-x-clip bg-[#151518] text-left font-['Source_Sans_Pro']">
      {/* =============================== Hero */}

      <header className="relative px-6 pt-40 pb-24 lg:h-146.25 lg:p-0 lg:pt-[231.4px]">
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(163deg,#151519_205px,#282543_575px)] [clip-path:polygon(0_0,100%_0,100%_calc(100%-0.5px),0_78%)]" />
        <img src={heroDots} alt="" className="pointer-events-none select-none absolute left-0 top-0 w-72 lg:w-[421px]" />

        <h1 className="relative text-center font-semibold text-white text-[44px] sm:text-[56px] lg:text-[72px] leading-none tracking-[0.03em] lg:tracking-[0.01em] lg:pr-3">
          ABOUT US
        </h1>
        <p className={`relative mt-4 lg:mt-[17.6px] mx-auto max-w-95 text-center ${bodyText}`}>
          Augue nulla turpis consectetur pharetra fames.{lgBreak} rhoncus
          lectus Augue nulla turpis consectetur{lgBreak} pharetra
        </p>
      </header>

      {/* =============================== Crafted by the Creative Genzies */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-[895px] lg:p-0">
        <img
          src={craftedArt}
          alt="Smiling MPay team member"
          className="order-last w-full max-w-154.5 mx-auto lg:mx-0 lg:absolute lg:left-[822px] lg:top-[36px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[102px] lg:top-[84.2px]`}>
          Crafted by the Creative{lgBreak} Genzies
        </h2>
        <p className={`${bodyText} lg:absolute lg:left-[104px] lg:top-[211px] lg:w-[575px]`}>
          Purus sit imperdiet egestas penatibus. Duis odio metus tristique orci
          rutrum ipsum mattis. Auctor vel commodo consectetur placerat semper
          vel. Nunc volutpat eget facilisis dui tellus. Elementum ornare non
          sollicitudin hendrerit nunc mi proin nibh. Adipiscing at mi ultrices
          et sagittis nibh libero. Pha
        </p>

        <ul className="flex flex-col gap-8 lg:contents">
          {craftedFeatures.map(({ icon, title, iconPos, titlePos, bodyPos }) => (
            <li key={title} className="grid grid-cols-[94px_1fr] gap-x-6 lg:contents">
              <img src={icon} alt="" className={`size-23.5 row-span-2 lg:absolute ${iconPos}`} />
              <h3 className={`font-semibold text-[#7D72FF] text-[22px] leading-6.25 lg:absolute ${titlePos}`}>{title}</h3>
              <p className={`mt-2 lg:mt-0 ${bodyText} lg:absolute ${bodyPos}`}>
                Augue nulla turpis consectetur{lgBreak} pharetra fames.&nbsp; rhoncus
                lectus Augue{lgBreak} nulla turpis consectetur pharetra
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* =============================== Our Mission */}

      <section className="relative px-6 sm:px-12 pt-24 text-center lg:h-100 lg:p-0 lg:pt-[45.7px] lg:pl-16">
        <h2 className={sectionHeading}>Our Mission</h2>
        <p className={`mt-6 lg:mt-[31.3px] ${bodyText}`}>
          Purus sit imperdiet egestas penatibus. Duis odio metus tristique orci
          rutrum ipsum mattis. Auctor vel{lgBreak} commodo consectetur placerat
          semper vel. Nunc volutpat eget facilisis dui tellus. Elementum
          ornare{lgBreak} non sollicitudin hendrerit nunc mi proin nibh.
          Adipiscing at mi ultrices et sagittis nibh libero.{lgBreak}
          PhaPurus sit imperdiet egestas penatibus. Duis odio metus tristique
          orci rutrum ipsum mattis. Auctor{lgBreak} vel commodo consectetur
          placerat semper vel. Nunc volutpat eget facilisis dui tellus.
          Elementum{lgBreak} ornare non sollicitudin hendrerit nunc mi proin
          nibh. Adipiscing at mi ultrices et sagittis nibh libero.{lgBreak}
          PhaPurus sit imperdiet egestas penatibus
        </p>
      </section>

      {/* =============================== Partners */}

      <section className="relative flex flex-wrap items-center justify-center gap-10 px-6 py-16 lg:block lg:h-[170px] lg:p-0">
        {partners.map(({ src, alt, className }) => (
          <img key={alt} src={src} alt={alt} className={`max-w-[45%] lg:max-w-none lg:absolute ${className}`} />
        ))}
      </section>

      {/* =============================== Committed to Give You the Best Service */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-200 lg:p-0">
        <img
          src={committedArt}
          alt="MPay app with a customer checking his phone"
          className="w-full max-w-154 mx-auto lg:mx-0 lg:absolute lg:left-[86px] lg:top-[96px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[745.75px] lg:top-[137.7px]`}>
          Committed to Give{lgBreak} You the Best Service
        </h2>
        <p className={`${bodyText} lg:absolute lg:left-[751px] lg:top-[273px] lg:w-[575px]`}>
          Purus sit imperdiet egestas penatibus. Duis odio metus tristique orci
          rutrum ipsum mattis. Auctor vel commodo consectetur placerat semper
          vel. Nunc volutpat eget facilisis dui tellus. Elementum ornare non
          sollicitudin hendrerit nunc mi proin nibh. Adipiscing at mi ultrices
          et sagittis nibh libero. Pha
        </p>

        <dl className="grid grid-cols-2 gap-y-8 lg:contents">
          {highlights.map(({ value, suffix, label, pos, labelPos, suffixClassName }) => (
            <div key={label} className="flex flex-col-reverse lg:contents">
              <dt className={`text-[rgba(255,255,255,0.75)] text-[18px] leading-none tracking-[0.03em] lg:absolute ${labelPos}`}>{label}</dt>
              <dd className={`relative w-fit text-white text-[48px] lg:text-[60px] leading-none tracking-[0.02em] lg:absolute ${pos}`}>
                {value}
                <span className={`absolute left-full ml-2 text-[#7D72FF] text-[38px] leading-none ${suffixClassName}`}>{suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* =============================== Fastest, Easiest and Most Reliable Payment Platform */}

      <section className="relative flex flex-col gap-8 px-6 sm:px-12 pt-16 lg:block lg:h-[630px] lg:p-0">
        <img
          src={fastestArt}
          alt="Team reviewing an MPay dashboard"
          className="order-last w-full max-w-141.5 mx-auto lg:mx-0 lg:absolute lg:left-[764px] lg:top-[63px]"
        />

        <h2 className={`${sectionHeading} lg:absolute lg:left-[102px] lg:top-[92.7px]`}>
          <span className="text-[#7D72FF]">Fastest</span>, Easiest and{lgBreak} Most
          Reliable Payment{lgBreak} Platform
        </h2>
        <p className={`${bodyText} lg:absolute lg:left-[103.5px] lg:top-[310px]`}>
          Scelerisque urna sed turpis fermentum porttitor metus.{lgBreak} Eget
          aliquam vivamus risus odio scelerisque urna diam{lgBreak} rhoncus
          phasellus. Felis blandit in quis tellus ultrices enim{lgBreak} ut
          porttitor. Sed consectetur tellus velit luctus. E
        </p>
        <p className={`${bodyText} lg:absolute lg:left-[103.5px] lg:top-[432px]`}>
          Scelerisque urna sed turpis fermentum porttitor metus.{lgBreak} Eget
          aliquam vivamus risus odio scelerisque urna diam{lgBreak} rhoncus
          phasellus. Felis blandit in
        </p>
      </section>

      {/* =============================== Our Team */}

      <section className="relative px-6 sm:px-12 pt-24 lg:h-[1320px] lg:p-0">
        <img src={teamDots} alt="" className="pointer-events-none select-none absolute left-[1103px] top-[493px] w-[337px] hidden lg:block" />

        <h2 className={`text-center ${sectionHeading} lg:pt-[69.7px] lg:pr-[19.5px]`}>Our Team</h2>
        <p className={`mt-6 lg:mt-[32.3px] text-center lg:pl-[7px] ${bodyText}`}>
          Scelerisque urna sed turpis fermentum porttitor metus. Eget aliquam
          vivamus risus{lgBreak} odio scelerisque urna diam rhoncus phasellus.
          Felis blandit in quis tellus ultrices{lgBreak} enim ut porttitor. Sed
          consectetur tellus velit luctus. E
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-0 lg:block">
          {team.map(({ name, role, photo, photoClassName, nameTop, nameShift, roleShift }, i) => (
            <article
              key={name}
              className={`relative flex flex-col items-center gap-4 pt-8 pb-10 text-center bg-[linear-gradient(195deg,#29254F_49px,#1D1C1F_321px)] lg:absolute lg:block lg:w-[382px] lg:h-[432px] lg:p-0 ${teamCardPos[i]}`}
            >
              <img src={photo} alt={name} className={`lg:absolute ${photoClassName}`} />
              <h3 className={`text-[#7D72FF] text-[24px] leading-none tracking-[0.03em] lg:absolute lg:inset-x-0 ${nameTop} ${nameShift}`}>
                {name}
              </h3>
              <p className={`text-[rgba(255,255,255,0.78)] text-[18px] leading-none tracking-[0.03em] lg:absolute lg:inset-x-0 lg:top-[332px] ${roleShift}`}>
                {role}
              </p>
              <img src={teamSocials} alt="Twitter, Facebook, LinkedIn and Instagram" className="w-29 lg:absolute lg:left-[130px] lg:top-[375px]" />
            </article>
          ))}
        </div>
      </section>

      {/* =============================== Stats */}

      <section className="relative grid grid-cols-2 gap-y-10 px-6 pt-24 lg:block lg:h-75 lg:p-0">
        {stats.map(({ value, label, pos, plus, labelPos }, i) => (
          <div key={`${label}-${i}`} className="flex flex-col items-center gap-3 lg:contents">
            <p className={`relative text-white text-[48px] lg:text-[60px] leading-none tracking-[0.02em] lg:absolute lg:top-[88.7px] ${pos}`}>
              {value}
              <span className="absolute left-full top-0 ml-2 text-[#7D72FF] text-[38px] leading-none lg:hidden">+</span>
            </p>
            <span className={`hidden lg:block absolute top-[88.7px] text-[#7D72FF] text-[38px] leading-none ${plus}`}>+</span>
            <p className={`text-[rgba(255,255,255,0.75)] text-[18px] leading-none tracking-[0.03em] lg:absolute lg:top-[157px] ${labelPos}`}>
              {label}
            </p>
          </div>
        ))}
      </section>

      {/* =============================== Newsletter */}

      <div className="relative px-6 sm:px-12 pt-24 lg:px-0 lg:pl-[101px] lg:pt-18 lg:pb-[77.5px] lg:w-[1339px]">
        <NewsLetter />
      </div>
    </div>
  );
};

export default AboutUs;
