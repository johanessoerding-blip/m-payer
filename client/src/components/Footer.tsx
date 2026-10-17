import { Link } from "react-router-dom";
import footerLogo from "../assets/footer/footer-logo.png";
import appleIcon from "../assets/footer/store-apple.png";
import googlePlayIcon from "../assets/footer/store-google-play.png";
import appStoreIcon from "../assets/footer/store-app-store.png";
import twitterIcon from "../assets/footer/social-twitter.png";
import facebookIcon from "../assets/footer/social-facebook.png";
import linkedinIcon from "../assets/footer/social-linkedin.png";
import instagramIcon from "../assets/footer/social-instagram.png";

// Desktop offsets (lg:top-*) are measured from the footer's top edge.
const otherPages = [
  { label: "Home", to: "/", top: "lg:top-[130.8px]" },
  { label: "About Us", to: "/about", top: "lg:top-[159.8px]" },
  { label: "Contact Us", to: "/contact", top: "lg:top-[189.8px]" },
  { label: "Services", to: "/services", top: "lg:top-[217.8px]" },
];

const quickLinks = [
  { label: "Privacy Policy", top: "lg:top-[122.8px]" },
  { label: "Disclaimer", top: "lg:top-[151.8px]" },
  { label: "Security", top: "lg:top-[181.8px]" },
  { label: "FAQ", top: "lg:top-[209.8px]" },
];

const storeIcons = [
  { src: appleIcon, alt: "Download on the App Store", className: "w-5.75" },
  { src: googlePlayIcon, alt: "Get it on Google Play", className: "w-6.5 lg:ml-7" },
  { src: appStoreIcon, alt: "App Store", className: "w-7 lg:ml-6.75" },
];

const socialIcons = [
  { src: twitterIcon, alt: "Twitter", className: "w-5.75" },
  { src: facebookIcon, alt: "Facebook", className: "w-2.25 lg:ml-6.75" },
  { src: linkedinIcon, alt: "LinkedIn", className: "w-4.5 lg:ml-6.75" },
  { src: instagramIcon, alt: "Instagram", className: "w-5 lg:ml-6.5" },
];

const heading = "font-['Open_Sans'] font-bold text-[#7D72FF] text-[20px] leading-none";
const linkText = "font-['Inter'] text-[rgba(255,255,255,0.75)] text-[16px] leading-none hover:text-white transition-colors";

const Footer = () => {
  return (
    <footer className="relative bg-[#151518] text-left px-6 sm:px-12 pt-17 pb-8 flex flex-col gap-10 lg:block lg:h-[425.5px] lg:p-0">
      <div className="flex flex-col items-start gap-6 lg:block">
        <img src={footerLogo} alt="MPay" className="w-45 lg:w-56.25 lg:absolute lg:left-25.25 lg:top-[67.5px]" />

        <p className="font-['Inter'] text-[rgba(255,255,255,0.75)] text-[18px] leading-none tracking-[-0.1px] lg:absolute lg:left-27 lg:top-[175px]">
          One Application for Every Transaction
        </p>

        <div className="flex items-start gap-6 lg:gap-0 lg:absolute lg:left-29.5 lg:top-[207.5px]">
          {storeIcons.map(({ src, alt, className }) => (
            <img key={alt} src={src} alt={alt} className={className} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 lg:block">
        <div>
          <h4 className={`${heading} lg:absolute lg:left-[595px] lg:top-[87.3px]`}>Other Pages</h4>
          <ul className="mt-4 flex flex-col gap-3 lg:contents">
            {otherPages.map(({ label, to, top }) => (
              <li key={label} className={`lg:absolute lg:left-[622.7px] ${top}`}>
                <Link to={to} className={linkText}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={`${heading} lg:absolute lg:left-[821px] lg:top-[86.5px]`}>Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-3 lg:contents">
            {quickLinks.map(({ label, top }) => (
              <li key={label} className={`lg:absolute lg:left-[828.7px] ${top}`}>
                <a href="#" className={linkText}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className={`${heading} lg:absolute lg:left-[1006px] lg:top-[83px]`}>Social Media</h4>
          <p className="mt-4 max-w-62 font-['Inter'] text-[rgba(255,255,255,0.75)] text-[16px] leading-7.5 lg:mt-0 lg:absolute lg:left-[1005.6px] lg:top-[128.3px]">
            Our Support and Sales team are always available 24/7 to answer
            your queries
          </p>
          <div className="mt-4 flex items-start gap-6 lg:mt-0 lg:gap-0 lg:absolute lg:left-[999px] lg:top-[232.5px]">
            {socialIcons.map(({ src, alt, className }) => (
              <img key={alt} src={src} alt={alt} className={className} />
            ))}
          </div>
        </div>
      </div>

      <div className="h-0.75 bg-[#222225] lg:absolute lg:left-25.25 lg:top-87 lg:w-310" />

      <div className="flex flex-col sm:flex-row-reverse sm:justify-between gap-2 font-['Inter'] text-[rgba(255,255,255,0.78)] text-[14px] leading-none">
        <p className="lg:absolute lg:right-[41px] lg:top-[376.1px]">
          Copyright, ©2023, All rights reserved
        </p>
        <p className="lg:absolute lg:left-26 lg:top-[387.1px]">MPay by Mickietyronne</p>
      </div>
    </footer>
  );
};

export default Footer;
