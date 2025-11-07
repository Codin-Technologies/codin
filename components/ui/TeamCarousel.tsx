'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
}

interface TeamCarouselProps {
  members: TeamMemberProps[];
}

export const TeamCarousel = ({ members }: TeamCarouselProps) => {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {members.map((member, index) => (
          <SwiperSlide key={index} className="rounded-xl overflow-hidden">
            <div className="relative group aspect-3/4 w-full">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-xs uppercase tracking-wider text-gray-300">{member.position}</p>
                <div className="flex items-center gap-4 mt-3">
                  {member.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};