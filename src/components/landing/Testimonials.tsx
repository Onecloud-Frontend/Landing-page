/**
 * SECTION: What Our Clients Say (Testimonials)
 * ASSIGNED DEVELOPER: PERSON 5
 * OWNERSHIP SCOPE:
 * - Client reviews & social proof section
 * - 3-column responsive testimonial card grid
 * - Customer name, operational title, enterprise organization
 * - Star rating visualization
 * - Highlight metrics & key ROI impact badges
 * - Avatar display with graceful initials fallback
 *
 * RULES:
 * - Modify ONLY this file or companion files inside your personal scope.
 * - Do NOT modify App.tsx or files assigned to other developers.
 */
/**
 * PERSON 5 - Siripurapu Pavan Putra
 * Section: What Our Clients Say
 */
/**
 * SECTION: What Our Clients Say (Testimonials)
 * ASSIGNED DEVELOPER: PERSON 5
 *
 * Data comes from:
 * src/data/landingData.ts
 *
 * Do not modify App.tsx.
 */
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { clientTestimonials } from '../../data/landingData';

const customerPhotos = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleTestimonials = [
    clientTestimonials[currentIndex],

    clientTestimonials[
      (currentIndex + 1) % clientTestimonials.length
    ],
  ];

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#071744]
        px-5
        py-[78px]
        sm:px-8
        lg:px-12
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[420px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#244d9b]/20
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-[1180px]">

        <div className="text-center">

          <h2
            className="
              font-sans
              text-[32px]
              font-bold
              leading-[1.2]
              tracking-[-0.5px]
              text-white
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            What Our Clients Say
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[850px]
              font-sans
              text-[13px]
              font-normal
              leading-[1.6]
              tracking-[0.1px]
              text-[#c1c9dc]
              sm:text-[14px]
            "
          >
            Trusted by operations, technology and security leaders at the
            world&apos;s most demanding enterprises.
          </p>

        </div>

        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            gap-[44px]
            md:grid-cols-2
            md:gap-[34px]
          "
        >

          {visibleTestimonials.map((testimonial, index) => {
            const originalIndex =
              clientTestimonials.findIndex(
                (item) => item.id === testimonial.id
              );
            const customerPhoto =
              customerPhotos[
                originalIndex % customerPhotos.length
              ];

            return (

              <article
                key={`${testimonial.id}-${index}`}
                className="relative pt-[42px]"
              >
                <div
                  className="
                    relative
                    min-h-[235px]
                    rounded-[3px_20px_20px_20px]
                    border
                    border-[#425684]
                    bg-[linear-gradient(135deg,#13295d_0%,#102351_50%,#0c1c47_100%)]
                    px-[32px]
                    pb-[30px]
                    pt-[92px]
                    shadow-[0_18px_40px_rgba(0,0,0,0.15)]
                  "
                >
                  <div
                    className="
                      absolute
                      left-[30px]
                      top-[96px]
                      h-[100px]
                      w-[2px]
                      bg-[#3978ef]
                    "
                  />

                  <div className="pl-[22px]">

                    <div className="flex items-center gap-[3px]">

                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, starIndex) => (

                        <Star
                          key={starIndex}
                          className="
                            h-[16px]
                            w-[16px]
                            fill-[#ffb52e]
                            text-[#ffb52e]
                          "
                          strokeWidth={1.5}
                        />

                      ))}

                    </div>
                    <p
                      className="
                        mt-[15px]
                        font-sans
                        text-[14px]
                        font-normal
                        leading-[1.65]
                        tracking-[0.05px]
                        text-[#f2f4fa]
                        sm:text-[15px]
                      "
                    >
                      “{testimonial.testimonial}”
                    </p>

                  </div>

                </div>

                <div
                  className="
                    absolute
                    left-[-12px]
                    top-0
                    z-10
                    flex
                    h-[92px]
                    w-[72%]
                    min-w-[280px]
                    items-center
                    rounded-r-[19px]
                    bg-[#3374df]
                    px-[26px]
                    shadow-[0_8px_22px_rgba(0,0,0,0.16)]
                  "
                >

                  <div className="pr-[45px]">

                    <h3
                      className="
                        font-sans
                        text-[15px]
                        font-bold
                        leading-[1.3]
                        tracking-[0.1px]
                        text-white
                      "
                    >
                      {testimonial.name}
                    </h3>

                    <p
                      className="
                        mt-[5px]
                        font-sans
                        text-[12px]
                        font-normal
                        leading-[1.4]
                        text-[#dce7ff]
                      "
                    >
                      {testimonial.role}
                    </p>

                    <p
                      className="
                        mt-[2px]
                        font-sans
                        text-[11px]
                        font-normal
                        leading-[1.4]
                        text-[#b9d0ff]
                      "
                    >
                      {testimonial.company}
                    </p>

                  </div>

                  <span
                    className="
                      absolute
                      -bottom-[11px]
                      left-0
                      h-0
                      w-0
                      border-r-[12px]
                      border-t-[11px]
                      border-r-[#174ca8]
                      border-t-transparent
                    "
                  />

                </div>
                <div
                  className="
                    absolute
                    right-[7%]
                    top-[-10px]
                    z-20
                    h-[100px]
                    w-[100px]
                    overflow-hidden
                    rounded-full
                    border-[5px]
                    border-white
                    bg-white
                    shadow-[0_8px_20px_rgba(0,0,0,0.25)]
                    sm:h-[104px]
                    sm:w-[104px]
                  "
                >

                  <img
                    src={customerPhoto}
                    alt={`${testimonial.name} profile`}
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      object-center
                    "
                  />

                </div>

              </article>
            );
          })}

        </div>

        <div
          className="
            mt-[38px]
            flex
            items-center
            justify-center
            gap-[10px]
          "
        >

          {clientTestimonials.map((testimonial, index) => (

            <button
              key={testimonial.id}
              type="button"

              onClick={() => setCurrentIndex(index)}

              aria-label={`Show testimonial ${index + 1}`}

              className={
                currentIndex === index
                  ? `
                      h-[7px]
                      w-[24px]
                      rounded-full
                      bg-[#3978ef]
                      transition-all
                      duration-300
                    `
                  : `
                      h-[7px]
                      w-[7px]
                      rounded-full
                      bg-[#8997b8]
                      transition-all
                      duration-300
                      hover:bg-white
                    `
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;