"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Newman",
    role: "Envato market",
    image:
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    quote:
      "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive.",
  },
  {
    name: "Emma Trueman",
    role: "Envato market",
    image:
      "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    quote:
      "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work.",
  },
  {
    name: "Michael Chen",
    role: "Envato market",
    image:
      "https://plus.unsplash.com/premium_photo-1745839715934-3123fc463f1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    quote:
      "Working with this team has been an absolute pleasure. Their innovative approach and dedication to excellence truly sets them apart.",
  },
  {
    name: "Lisa Anderson",
    role: "Envato market",
    image:
      "https://images.unsplash.com/photo-1694323018318-6c4afb7cda26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500",
    quote:
      "The level of creativity and professionalism displayed by this agency is unmatched. They consistently exceed expectations.",
  },
  {
    name: "James Wilson",
    role: "Envato market",
    image:
      "https://images.unsplash.com/photo-1632828169028-11b148c180fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=850",
    quote:
      "Exceptional service and outstanding results. This team knows how to deliver excellence.",
  },
  {
    name: "David Miller",
    role: "Envato market",
    image:
      "https://plus.unsplash.com/premium_photo-1669627131459-9511dc42bccb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
    quote:
      "Their attention to detail and innovative solutions make them stand out in the industry.",
  },
  {
    name: "Robert Smith",
    role: "Envato market",
    image:
      "https://plus.unsplash.com/premium_photo-1661324418102-1731e91f83e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
    quote:
      "A team that truly understands client needs and delivers beyond expectations.",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  const handleAvatarClick = (idx: number) => {
    setCurrent(idx);
    if (swiper) {
      swiper.slideTo(idx);
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-5">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Customer Voices:
            <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-5">
              Hear What They Say!
            </span>
          </h2>
        </div>

        <div className="flex relative justify-around items-center h-40 mb-5 max-w-3xl mx-auto">
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[0%] top-[10%] ${current === 0 ? "border-4 border-indigo-600 size-26": ""}`}
                              onClick={() => handleAvatarClick(0)}
          >
            <img
              src={testimonials[0].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[15%] ${current === 1 ? "border-4 border-indigo-600 size-26": ""}`}
            onClick={() => handleAvatarClick(1)}
          >
            <img
              src={testimonials[1].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[30%] top-[10%] ${current === 2 ? "border-4 border-indigo-600 size-26": ""}`}
            onClick={() => handleAvatarClick(2)}
          
          >
            <img
              src={testimonials[2].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[45%] ${current === 3 ? "border-4 border-indigo-600 size-26": ""}`}
            onClick={() => handleAvatarClick(3)}
          
          >
            <img
              src={testimonials[3].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[60%] top-[10%] ${current === 4 ? "border-4 border-indigo-600 size-26": ""}`}
            onClick={() => handleAvatarClick(4)}
          
          >
            <img
              src={testimonials[4].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[75%] ${current === 5 ? "border-4 border-indigo-600 size-26": ""}`}
            onClick={() => handleAvatarClick(5)}
          
          >
            <img
              src={testimonials[5].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute  size-20 rounded-full overflow-hidden left-[90%] top-[10%] ${current === 6 ? "border-4 border-indigo-600 size-26": ""}`}
            onClick={() => handleAvatarClick(6)}
          
          >
            <img
              src={testimonials[5].image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative px-16">
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
            initialSlide={current}
            className="text-center"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-amber-500 text-3xl mb-4">""</div>
                <div className="text-xl font-semibold mb-1">{t.name}</div>
                <div className="text-xs tracking-widest text-gray-500 mb-6">
                  {t.role.toUpperCase()}
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-12">
                  {t.quote}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="testimonial-prev" aria-label="Previous">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="testimonial-next" aria-label="Next">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
