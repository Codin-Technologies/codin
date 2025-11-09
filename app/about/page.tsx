import { Card } from "@/components/ui/Card";
import { TeamCarousel } from "@/components/ui/TeamCarousel";
import OurValues from "./components/OurValues";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Codin Technologies",
  description:
    "Learn about Codin Technologies - our mission, vision, values, and commitment to making technology accessible for organizations of all sizes in Africa.",
};

const milestones = [
  {
    year: "2010",
    title: "Founded",
    description:
      "Codin Technologies was born with a vision to democratize access to advanced technology solutions.",
  },
  {
    year: "2015",
    title: "Expansion",
    description:
      "Expanded our services across Tanzania, helping SMEs embrace digital transformation.",
  },
  {
    year: "2020",
    title: "Growth",
    description:
      "Reached 500+ successful projects, establishing ourselves as a trusted technology partner.",
  },
  {
    year: "2025",
    title: "Today",
    description:
      "Leading innovation in East Africa, empowering businesses to thrive in the digital economy.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">
              Born from Vision,
              <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent pb-5">
                Raised by Purpose
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Codin Technologies, we believe that every organization,
              regardless of size, deserves access to world-class technology
              solutions. Based in Dar es Salaam, Tanzania, we're bridging the
              technology gap across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6">
  
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Making advanced technology accessible, adoptable, and
                implementable for organizations of all sizes. We ensure no
                organization is left behind in the digital transformation
                journey.
              </p>
            </Card>

            <Card>
              <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-3xl mb-6">
                
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the technology partner of choice across Africa and beyond,
                creating new ways of working and realizing value within our
                communities. Building a future where technology empowers
                everyone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <OurValues />

      {/* Timeline */}
      {/* <section className="py-24 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto"> */}
            {/* <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2> */}
            {/* <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative pl-12 pb-12 border-l-2 border-gray-300 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg" />
                  <div className="text-sm font-bold text-indigo-600 mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Text Block */}
            <div className="lg:col-span-5">
              <h2 className="text-5xl font-bold tracking-tight mb-6">
                Meet Our Team
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are talented individuals who are passionate about bringing
                ideas to life. With a diverse range of backgrounds and skill
                sets, we collaborate to produce effective solutions for our
                clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Together, our creative team is committed to delivering impactful
                work that exceeds expectations.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
              >
                Read More <span>→</span>
              </a>
            </div>

            {/* Team Carousel */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <TeamCarousel
                members={[
                  {
                    image:
                      "https://i.postimg.cc/vmtDNzfK/IMG-0522-2.jpg",
                    name: "Kelvin Kijazi",
                    position: "Co-Founder & CEO",
                    socialLinks: [
                      {
                        platform: "LinkedIn",
                        url: "www.linkedin.com/in/kelvin-kijazi-b1b7612a2",
                      },
                      { platform: "GitHub", url: "https://https://github.com/KelvinKijazi" },
                    ],
                  },
                  {
                    image:
                      "https://pbs.twimg.com/profile_images/1705305537028444160/64qU58sF.jpg",
                    name: "Moody Amin",
                    position: "CTO",
                    socialLinks: [
                      {
                        platform: "LinkedIn",
                        url: "https://www.linkedin.com/in/moody-mshana/",
                      },
                      { platform: "GitHub", url: "https://github.com/heismoody" },
                    ],
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                    name: "George Massam",
                    position: "COO",
                    socialLinks: [
                      {
                        platform: "LinkedIn",
                        url: "https://linkedin.com/in/sarah-smith",
                      },
                      {
                        platform: "Dribbble",
                        url: "https://dribbble.com/sarah",
                      },
                      { platform: "Behance", url: "https://behance.net/sarah" },
                    ],
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                    name: "Frank Kiruma",
                    position: "Lead AI Developer",
                    socialLinks: [
                      {
                        platform: "LinkedIn",
                        url: "https://linkedin.com/in/david-wilson",
                      },
                      { platform: "GitHub", url: "https://github.com/davidw" },
                      {
                        platform: "Twitter",
                        url: "https://twitter.com/davidw",
                      },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
              📍
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Located in Dar es Salaam, Tanzania
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're proud to call Tanzania home. Our local expertise combined
              with global standards allows us to serve organizations across East
              Africa and beyond with deep understanding of regional business
              needs.
            </p>
            <p className="text-sm text-gray-500">
              Contact us to learn more about how we can help transform your
              business.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
