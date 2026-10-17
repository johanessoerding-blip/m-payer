interface FeatureRowProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureRow = ({ icon, title, description }: FeatureRowProps) => {
  return (
    <div className="flex items-center gap-6 sm:gap-8 text-left">
      <img src={icon} alt="" className="size-23.5 shrink-0" />

      <div>
        <h3 className="font-['Source_Sans_3'] font-semibold text-[#7D72FF] text-[22px] leading-6.25 mb-2">
          {title}
        </h3>
        <p className="font-['Source_Sans_3'] text-[rgba(255,255,255,0.78)] text-[18px] leading-6.25 tracking-[0.03em]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureRow;
