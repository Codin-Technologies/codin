interface SocialLink {
  platform: string;
  url: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  socialLinks: SocialLink[];
}

export const TeamMember = ({ image, name, position, socialLinks }: TeamMemberProps) => {
  return (
    <div className="relative group h-full w-full">
      <div 
        className="w-full h-full aspect-4/5 rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 rounded-xl bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-xs uppercase tracking-wider text-gray-300">{position}</p>
        <div className="flex items-center gap-4 mt-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};