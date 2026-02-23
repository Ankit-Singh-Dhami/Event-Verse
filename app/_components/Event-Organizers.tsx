"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { EncryptedText } from "@/components/ui/encrypted-text";

const content = [
  {
    title: "RC Innovation Club",
    description:
      "The RC Innovation Club focuses on robotics, technology, and hands-on innovation. Students collaborate on real-world tech projects, participate in competitions, and build creative solutions that solve practical problems.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        RC Innovation Club
      </div>
    ),
  },
  {
    title: "RC E-Cell",
    description:
      "The RC Entrepreneurship Cell empowers students to develop startup ideas, pitch business models, and connect with industry mentors. From idea validation to execution, E-Cell supports future entrepreneurs.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="RC E-Cell activities"
        />
      </div>
    ),
  },
  {
    title: "National Service Scheme (NSS)",
    description:
      "NSS encourages students to contribute to society through community service, awareness drives, cleanliness campaigns, and social initiatives. It builds leadership, responsibility, and social commitment.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        NSS Activities
      </div>
    ),
  },
  {
    title: "Sports Club",
    description:
      "The Sports Club promotes physical fitness, teamwork, and competitive spirit. From inter-college tournaments to annual sports meets, students get opportunities to excel in cricket, football, athletics, and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Sports Club
      </div>
    ),
  },
];

export function EventOrganizers() {
  return (
    <div className="w-full py-16">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white ">
          <p className="text-center">
            <EncryptedText
              text="Event Organizers"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-white text-black"
              revealDelayMs={50}
            />
          </p>
        </h2>
      </div>

      <StickyScroll content={content} />
    </div>
  );
}
