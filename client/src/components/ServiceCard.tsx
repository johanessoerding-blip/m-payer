import learnMoreArrow from "../assets/service-arrow.svg";

interface ServiceCardProps {
  icon: string;
  /** Icon offset/size relative to the card's 31px text inset, e.g. "ml-0.25 mt-4.75 w-12.25". */
  iconClassName: string;
  title: string;
  description?: string;
  titleClassName?: string;
  bodyClassName?: string;
  linkClassName?: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  iconClassName,
  title,
  description = "Augue nulla turpis consectetur pharetra fames. Fermentum rhoncus lectus condimentum aug",
  titleClassName = "font-semibold relative -top-px",
  bodyClassName = "mt-2.5",
  linkClassName = "mt-6",
  className = "",
}: ServiceCardProps) => {
  return (
    <article
      className={`relative lg:w-100 lg:h-70 rounded-[10px] px-7.75 pb-9 text-left font-['Source_Sans_Pro'] bg-[linear-gradient(212deg,#1E1B30_23.8%,#1C1B1B_67.85%)] ${className}`}
    >
      {/* flow-root stops the icon's top margin collapsing through this wrapper */}
      <div className="h-21.5 flow-root">
        <img src={icon} alt="" className={iconClassName} />
      </div>
      <h3 className={`text-[#7D72FF] text-[22px] leading-6.25 ${titleClassName}`}>{title}</h3>
      <p className={`text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em] ${bodyClassName}`}>
        {description}
      </p>
      <a
        href="#"
        className={`inline-flex items-center gap-2.5 text-[#7D72FF] text-[18px] leading-6.25 tracking-[0.03em] ${linkClassName}`}
      >
        Learn More
        <img src={learnMoreArrow} alt="" className="w-4.5 h-3.5" />
      </a>
    </article>
  );
};

export default ServiceCard;
