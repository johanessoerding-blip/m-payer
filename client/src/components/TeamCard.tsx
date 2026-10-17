import instagramIcon from "../assets/footer-instagram.svg";

interface TeamCardProps {
  name: string;
  role: string;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TeamCard = ({ name, role }: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="size-27.5 rounded-full bg-[#7D72FF]/15 border border-[#7D72FF]/40 flex items-center justify-center">
        <span className="font-['Source_Sans_3'] font-semibold text-[#7D72FF] text-[28px]">
          {getInitials(name)}
        </span>
      </div>

      <div>
        <h3 className="font-['Source_Sans_3'] font-semibold text-white text-[22px] leading-6.25">
          {name}
        </h3>
        <p className="font-['Source_Sans_3'] text-[rgba(255,255,255,0.78)] text-[16px] tracking-[0.03em]">
          {role}
        </p>
      </div>

      <img src={instagramIcon} alt="Instagram" className="size-6" />
    </div>
  );
};

export default TeamCard;
