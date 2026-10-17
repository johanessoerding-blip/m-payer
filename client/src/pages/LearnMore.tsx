import { Link } from "react-router-dom";
import heroArcs from "../assets/services/hero-arcs.png";
import cardArt from "../assets/services/card-art.png";
import transferPhoto from "../assets/services/transfer-photo.png";
import manageArt from "../assets/home/manage-art.png";
import dotsRight from "../assets/home/dots-right.png";
import servicesArcs from "../assets/home/services-arcs.png";

import binance from "../assets/home/partner-binance.png";
import quickteller from "../assets/home/partner-quickteller.png";
import trustWallet from "../assets/home/partner-trustwallet.png";
import paypal from "../assets/home/partner-paypal.png";

import paymentIcon from "../assets/home/service-payment.png";
import dashboardIcon from "../assets/home/service-dashboard.png";
import trackingIcon from "../assets/home/service-tracking.png";
import creditIcon from "../assets/home/service-credit.png";

import secureIcon from "../assets/home/feature-secure.png";
import supportIcon from "../assets/home/feature-support.png";
import userFriendlyIcon from "../assets/home/feature-user-friendly.png";

import mastercardLogo from "../assets/home/pay-mastercard.png";
import visaLogo from "../assets/home/pay-visa.png";
import stripeLogo from "../assets/home/pay-stripe.png";
import paypalLogo from "../assets/home/pay-paypal.png";

import NewsLetter from "../components/NewsLetter";

// No design exists for this page; it follows the system used across the other
// pages: #151518 base, #7D72FF accent, Source Sans Pro, 55px section headings,
// 18px/25px body copy, 212deg gradient cards and 27px-radius pill buttons.

const sectionHeading = "font-semibold text-white text-[36px] sm:text-[44px] lg:text-[55px] leading-[1.1] lg:leading-15 tracking-[0.03em]";
const bodyText = "text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]";
const cardSurface = "rounded-[10px] bg-[linear-gradient(212deg,#1E1B30_23.8%,#1C1B1B_67.85%)]";
const pillButton = "inline-flex items-center justify-center h-16.25 px-12 rounded-[27px] font-semibold text-[16px] tracking-[0.035em] transition-colors cursor-pointer";

const partners = [
  { src: binance, alt: "Binance — Trading App", className: "w-36 sm:w-46.75" },
  { src: quickteller, alt: "Quickteller — Fintech Bank", className: "w-36 sm:w-47" },
  { src: trustWallet, alt: "Trust Wallet — Cryptocurrency", className: "w-42 sm:w-55.5" },
  { src: paypal, alt: "PayPal — Finance", className: "w-28 sm:w-37.25" },
];

const steps = [
  {
    title: "Create an Account",
    description: "Sign up in minutes with just your phone number and email. No paperwork, no branch visits.",
  },
  {
    title: "Verify Your Identity",
    description: "Confirm your details securely in the app to unlock higher limits and every MPay feature.",
  },
  {
    title: "Fund Your Wallet",
    description: "Top up instantly from your bank, card or any supported payment platform you already use.",
  },
  {
    title: "Pay, Send & Save",
    description: "Pay bills, send money to anyone and track every transaction from one simple dashboard.",
  },
];

const capabilities = [
  { icon: paymentIcon, iconClassName: "w-12.25", title: "Payment Management", description: "Schedule, split and settle payments without switching between apps." },
  { icon: trackingIcon, iconClassName: "w-9.75", title: "Business Tracking", description: "Live reports on income, expenses and growth for your business." },
  { icon: creditIcon, iconClassName: "w-14.5", title: "Virtual & Physical Cards", description: "Spend online or in store with cards you can freeze in one tap." },
  { icon: dashboardIcon, iconClassName: "w-12", title: "Personal Dashboard", description: "See balances, budgets and goals together in a single view." },
];

const stats = [
  { value: "2M", label: "Transactions Monthly" },
  { value: "150K", label: "Active Users" },
  { value: "40", label: "Supported Countries" },
  { value: "99", suffix: "%", label: "Uptime This Year" },
];

const plans = [
  {
    name: "Personal",
    price: "Free",
    period: "forever",
    description: "Everything you need to manage your everyday money.",
    features: ["Free local transfers", "Virtual debit card", "Spending insights", "24/7 chat support"],
    cta: "GET STARTED",
    featured: false,
  },
  {
    name: "Business",
    price: "$9",
    period: "per month",
    description: "Tools to get paid faster and keep your books in order.",
    features: ["Everything in Personal", "Payment links & invoices", "Team cards & limits", "Business analytics"],
    cta: "START FREE TRIAL",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "Scale-ready payments with dedicated support and APIs.",
    features: ["Everything in Business", "Payments API access", "Dedicated account manager", "Custom settlement terms"],
    cta: "CONTACT SALES",
    featured: false,
  },
];

const securityPoints = [
  { icon: secureIcon, title: "Bank-Grade Encryption", description: "Your data and money are protected with 256-bit encryption end to end." },
  { icon: userFriendlyIcon, title: "Two-Factor Authentication", description: "Every login and payment can be confirmed with a second step." },
  { icon: supportIcon, title: "Fraud Monitoring", description: "Our team watches for unusual activity around the clock." },
];

const faqs = [
  {
    question: "Is MPay free to use?",
    answer: "Yes. The Personal plan is free forever and includes local transfers, a virtual card and spending insights. Paid plans add business tools.",
  },
  {
    question: "How long do transfers take?",
    answer: "Transfers between MPay users are instant. Transfers to banks usually arrive within minutes, and always within one business day.",
  },
  {
    question: "Which payment platforms can I connect?",
    answer: "You can fund and withdraw with Mastercard, Visa, Stripe and PayPal, along with partners like Binance, Quickteller and Trust Wallet.",
  },
  {
    question: "Is my money safe with MPay?",
    answer: "Funds are held with regulated partner banks, every account is protected by encryption and two-factor authentication, and our fraud team monitors activity 24/7.",
  },
  {
    question: "Can I use MPay for my business?",
    answer: "Absolutely. The Business plan adds payment links, invoices, team cards and analytics so you can run your finances from one place.",
  },
];

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`size-5 shrink-0 ${className}`}>
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.18" />
    <path d="M6 10.2 8.6 12.8 14 7.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LearnMore = () => {
  return (
    <div className="relative -mt-25.75 overflow-x-clip bg-[#151518] text-left font-['Source_Sans_Pro']">
      {/* =============================== Hero */}

      <header className="relative px-6 sm:px-12 lg:px-25.25 pt-40 pb-28 lg:pt-52 lg:pb-44">
        <div className="absolute inset-0 bg-[linear-gradient(187deg,#151519_75px,#282543_535px)] [clip-path:polygon(0_0,100%_0,100%_100%,0_80%)]" />
        <img
          src={heroArcs}
          alt=""
          className="pointer-events-none select-none absolute right-0 top-0 w-64 lg:w-[427px] -scale-x-100 opacity-80"
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14">
          <div className="max-w-155">
            <p className="text-[#7D72FF] text-[16px] font-semibold tracking-[0.2em]">LEARN MORE</p>
            <h1 className="mt-5 font-semibold text-white text-[44px] sm:text-[56px] lg:text-[66px] leading-[1.06] tracking-[0.021em]">
              Everything You Need to Know About{" "}
              <span className="text-[#7D72FF]">MPAY</span>
            </h1>
            <p className={`mt-7 max-w-123 ${bodyText}`}>
              One application for every transaction. Discover how MPay helps you
              pay, send, save and grow — whether you&apos;re managing your
              personal budget or running a business.
            </p>
            <div className="mt-11 flex flex-wrap gap-5">
              <a href="#plans" className={`${pillButton} bg-[#7D72FF] hover:bg-[#5A51D4] text-white`}>
                GET STARTED
              </a>
              <a href="#how-it-works" className={`${pillButton} border-2 border-[#7D72FF] text-[#7D72FF] hover:bg-[#7D72FF] hover:text-white`}>
                HOW IT WORKS
              </a>
            </div>
          </div>

          <img
            src={cardArt}
            alt="MPay debit card"
            className="w-full max-w-110 lg:max-w-132.75 self-center lg:-mr-6"
          />
        </div>
      </header>

      {/* =============================== Partners */}

      <section className="px-6 sm:px-12 lg:px-25.25 pt-6 pb-24">
        <p className="text-center text-[rgba(255,255,255,0.6)] text-[16px] tracking-[0.2em]">TRUSTED BY TEAMS AT</p>
        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-between gap-x-12 gap-y-10">
          {partners.map(({ src, alt, className }) => (
            <img key={alt} src={src} alt={alt} className={className} />
          ))}
        </div>
      </section>

      {/* =============================== How MPay Works */}

      <section id="how-it-works" className="relative px-6 sm:px-12 lg:px-25.25 py-24 scroll-mt-10">
        <div className="text-center">
          <h2 className={sectionHeading}>
            How <span className="text-[#7D72FF]">MPay</span> Works
          </h2>
          <p className={`mt-6 mx-auto max-w-145 ${bodyText}`}>
            Getting started takes less than five minutes. Here&apos;s the journey
            from sign up to your first payment.
          </p>
        </div>

        <ol className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div aria-hidden="true" className="hidden lg:block absolute top-11.75 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-[#7D72FF]/40" />
          {steps.map(({ title, description }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="size-23.5 rounded-full bg-[#7D72FF] flex items-center justify-center text-white text-[36px] font-semibold leading-none ring-8 ring-[#151518]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 font-semibold text-[#7D72FF] text-[22px] leading-6.25">{title}</h3>
              <p className={`mt-3 max-w-67 ${bodyText}`}>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* =============================== Capabilities */}

      <section className="relative px-6 sm:px-12 lg:px-25.25 py-24 flex flex-col lg:flex-row items-center gap-16">
        <img
          src={manageArt}
          alt="MPay cards screen next to a physical MPay card"
          className="w-full max-w-148.5 lg:-ml-8"
        />

        <div className="lg:max-w-136.5">
          <h2 className={sectionHeading}>
            Built for Every Way <span className="text-[#7D72FF]">You Pay</span>
          </h2>
          <p className={`mt-6 ${bodyText}`}>
            From splitting dinner with friends to paying suppliers across the
            world, MPay brings every money task into one secure app.
          </p>

          <ul className="mt-10 grid sm:grid-cols-2 gap-5">
            {capabilities.map(({ icon, iconClassName, title, description }) => (
              <li key={title} className={`${cardSurface} p-6`}>
                <div className="h-11 flex items-center">
                  <img src={icon} alt="" className={iconClassName} />
                </div>
                <h3 className="mt-4 font-semibold text-[#7D72FF] text-[20px] leading-6.25">{title}</h3>
                <p className="mt-2 text-[rgba(255,255,255,0.78)] text-[16px] leading-5.5 tracking-[0.03em]">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============================== Stats */}

      <section className="px-6 sm:px-12 lg:px-25.25 py-20">
        <dl className={`${cardSurface} grid grid-cols-2 lg:grid-cols-4 gap-y-12 px-6 py-14`}>
          {stats.map(({ value, suffix = "+", label }) => (
            <div key={label} className="flex flex-col-reverse items-center text-center gap-3">
              <dt className="text-[rgba(255,255,255,0.75)] text-[18px] leading-none tracking-[0.03em]">{label}</dt>
              <dd className="relative text-white text-[48px] lg:text-[60px] leading-none tracking-[0.02em]">
                {value}
                <span className="absolute left-full top-0 ml-2 text-[#7D72FF] text-[30px] lg:text-[38px] leading-none">{suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* =============================== Plans */}

      <section id="plans" className="relative px-6 sm:px-12 lg:px-25.25 py-24 scroll-mt-10">
        <img src={dotsRight} alt="" className="pointer-events-none select-none absolute right-0 top-10 w-80 lg:w-128.75 opacity-70 hidden sm:block" />

        <div className="relative text-center">
          <h2 className={sectionHeading}>
            Choose Your <span className="text-[#7D72FF]">Plan</span>
          </h2>
          <p className={`mt-6 mx-auto max-w-145 ${bodyText}`}>
            Start free and upgrade whenever you&apos;re ready. No hidden fees,
            cancel any time.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3 lg:items-center">
          {plans.map(({ name, price, period, description, features, cta, featured }) => (
            <article
              key={name}
              className={
                featured
                  ? "rounded-[20px] bg-[#7D72FF] px-9 py-12 shadow-[0_24px_60px_rgba(125,114,255,0.35)] lg:py-16"
                  : `${cardSurface} px-9 py-12`
              }
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className={`font-semibold text-[24px] leading-none ${featured ? "text-white" : "text-[#7D72FF]"}`}>{name}</h3>
                {featured && (
                  <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-white text-[13px] font-semibold tracking-[0.1em]">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <p className="mt-7 flex items-baseline gap-2">
                <span className="text-white text-[52px] font-semibold leading-none tracking-[0.02em]">{price}</span>
                <span className={`text-[16px] tracking-[0.03em] ${featured ? "text-white/80" : "text-[rgba(255,255,255,0.6)]"}`}>{period}</span>
              </p>
              <p className={`mt-4 text-[17px] leading-6.25 tracking-[0.03em] ${featured ? "text-white/90" : "text-[rgba(255,255,255,0.78)]"}`}>
                {description}
              </p>

              <ul className={`mt-8 pt-8 border-t space-y-4 ${featured ? "border-white/25" : "border-white/10"}`}>
                {features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-[17px] tracking-[0.03em] ${featured ? "text-white" : "text-[rgba(255,255,255,0.85)]"}`}>
                    <CheckIcon className={featured ? "text-white" : "text-[#7D72FF]"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`${pillButton} mt-10 w-full ${
                  featured
                    ? "bg-white text-[#7D72FF] hover:bg-[#F0EEFF]"
                    : "bg-[#7D72FF] text-white hover:bg-[#5A51D4]"
                }`}
              >
                {cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* =============================== Security */}

      <section className="relative px-6 sm:px-12 lg:px-25.25 py-24 flex flex-col-reverse lg:flex-row items-center gap-16">
        <img src={servicesArcs} alt="" className="pointer-events-none select-none absolute left-0 top-0 w-60 -scale-x-100 opacity-60 hidden lg:block" />

        <div className="relative lg:max-w-143.75">
          <h2 className={sectionHeading}>
            Your Money, <span className="text-[#7D72FF]">Protected</span>
          </h2>
          <p className={`mt-6 ${bodyText}`}>
            Security isn&apos;t a feature we bolted on — it&apos;s built into every
            part of MPay, from sign in to settlement.
          </p>

          <ul className="mt-10 space-y-8">
            {securityPoints.map(({ icon, title, description }) => (
              <li key={title} className="grid grid-cols-[72px_1fr] sm:grid-cols-[94px_1fr] gap-x-6 sm:gap-x-9 items-center">
                <img src={icon} alt="" className="size-18 sm:size-23.5" />
                <div>
                  <h3 className="font-semibold text-[#7D72FF] text-[22px] leading-6.25">{title}</h3>
                  <p className={`mt-2 ${bodyText}`}>{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 font-semibold text-white text-[16px] tracking-[0.03em]">Supported Payment</p>
          <div className="mt-6 flex flex-wrap items-center gap-8">
            <img src={mastercardLogo} alt="Mastercard" className="w-19.5" />
            <img src={visaLogo} alt="Visa" className="w-18.25" />
            <img src={stripeLogo} alt="Stripe" className="w-18.25" />
            <img src={paypalLogo} alt="PayPal" className="w-18.25" />
          </div>
        </div>

        <img
          src={transferPhoto}
          alt="Woman reviewing payments at her computer"
          className="relative w-full max-w-116 lg:ml-auto"
        />
      </section>

      {/* =============================== FAQ */}

      <section className="px-6 sm:px-12 lg:px-25.25 py-24">
        <div className="text-center">
          <h2 className={sectionHeading}>
            Frequently Asked <span className="text-[#7D72FF]">Questions</span>
          </h2>
          <p className={`mt-6 mx-auto max-w-145 ${bodyText}`}>
            Can&apos;t find what you&apos;re looking for? Our support team is
            available 24/7 to answer your queries.
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-225 space-y-4">
          {faqs.map(({ question, answer }, i) => (
            <details
              key={question}
              open={i === 0}
              className={`${cardSurface} group px-7 sm:px-9 py-7 open:ring-1 open:ring-[#7D72FF]/40`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-white text-[20px] sm:text-[22px] leading-7">{question}</span>
                <span className="relative size-9 shrink-0 rounded-full bg-[#7D72FF]/15 text-[#7D72FF]">
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-3.5 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded bg-current transition-transform group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className={`mt-4 pr-12 ${bodyText}`}>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* =============================== Closing CTA */}

      <section className="px-6 sm:px-12 lg:px-25.25 pt-10 pb-24 text-center">
        <h2 className={sectionHeading}>
          Ready to Make Your <span className="text-[#7D72FF]">First Payment?</span>
        </h2>
        <p className={`mt-6 mx-auto max-w-145 ${bodyText}`}>
          Join thousands of people and businesses who move money faster with MPay.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a href="#plans" className={`${pillButton} bg-[#7D72FF] hover:bg-[#5A51D4] text-white`}>
            GET STARTED
          </a>
          <Link to="/contact" className={`${pillButton} border-2 border-[#7D72FF] text-[#7D72FF] hover:bg-[#7D72FF] hover:text-white`}>
            TALK TO SALES
          </Link>
        </div>
      </section>

      {/* =============================== Newsletter */}

      <div className="px-6 sm:px-12 lg:px-25.25 pb-10">
        <NewsLetter />
      </div>
    </div>
  );
};

export default LearnMore;
