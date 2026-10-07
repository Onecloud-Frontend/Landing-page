import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialData';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 testimonial cards at a time
  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[
      (currentIndex + 1) % testimonialsData.length
    ],
  ];

  return (
    <section
      id="testimonials"
      className="
        relative
        scroll-mt-[88px]
        overflow-hidden
        bg-[#1e234a]
        px-5
        py-[60px]
        sm:px-8
        lg:px-12
      "
    >
      {/* ==========================================
          BACKGROUND GLOW
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_55%,#3c4ef933_0%,#3c4ef91a_38%,#3c4ef900_75%)]
        "
      />

      {/* ==========================================
          TOP BLUE LINE
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-[#3c4ef9]
        "
      />

      {/* ==========================================
          MAIN CONTAINER
      =========================================== */}

      <div className="relative z-10 mx-auto max-w-[900px]">
        {/* ========================================
            HEADING
        ========================================= */}

        <div className="text-center">
          <h2
            className="
              font-sans
              text-[30px]
              font-bold
              leading-[1.2]
              tracking-[-0.5px]
              text-white
              sm:text-[34px]
            "
          >
            What Our Clients Say
          </h2>

          <p
            className="
              mx-auto
              mt-[13px]
              max-w-[700px]
              font-sans
              text-[11px]
              font-normal
              leading-[1.5]
              text-[#d2d7e6]
              sm:text-[12px]
            "
          >
            Trusted by operations, technology and security leaders at the
            world&apos;s most demanding enterprises.
          </p>
        </div>

        {/* ========================================
            TESTIMONIAL CARDS
        ========================================= */}

        <div
          className="
            mt-[23px]
            grid
            grid-cols-1
            gap-[45px]
            md:grid-cols-2
            md:gap-[26px]
          "
        >
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.id}-${index}`}
              className="relative pt-[25px]"
            >
              {/* ==================================
                  BLUE GLOW BEHIND CARD
              =================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[58%]
                  h-[145px]
                  w-[90%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#3c4ef933]
                  blur-[50px]
                "
              />

              {/* ==================================
                  REVIEW GLASS CARD
              =================================== */}

              <div
                className="
                  relative
                  z-10

                  min-h-[160px]
                  overflow-hidden

                  rounded-[6px_16px_16px_16px]

                  border
                  border-[#7780a3]/55

                  bg-[#292d53]/80

                  backdrop-blur-[18px]
                  backdrop-saturate-150

                  px-[23px]
                  pb-[20px]
                  pt-[60px]
                "
              >
                {/* =================================
                    SUBTLE GLASS HIGHLIGHT
                ================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(180deg,#ffffff08_0%,#ffffff00_65%)]
                  "
                />

                {/* =================================
                    LEFT VERTICAL ACCENT
                ================================== */}

                <div
                  className="
                    absolute
                    bottom-[24px]
                    left-[23px]
                    top-[63px]
                    z-10
                    w-px
                    bg-[#536fdf]
                  "
                />

                {/* =================================
                    REVIEW CONTENT
                ================================== */}

                <div className="relative z-10 pl-[15px]">
                  {/* STAR RATING */}

                  <div className="flex items-center gap-[2px]">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="
                          h-[13px]
                          w-[13px]
                          fill-[#f4b942]
                          text-[#f4b942]
                        "
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  {/* REVIEW TEXT */}

                  <p
                    className="
                      mt-[8px]
                      max-w-[350px]
                      font-sans
                      text-[11px]
                      font-normal
                      leading-[1.65]
                      text-[#f4f5fa]
                      sm:text-[11.5px]
                    "
                  >
                    “{testimonial.testimonial}”
                  </p>
                </div>
              </div>

              {/* ==================================
                  CLIENT DETAILS BLUE BAR
              =================================== */}

              <div
                className="
                  absolute
                  left-[-12px]
                  top-0
                  z-20

                  flex
                  h-[65px]
                  w-[68%]
                  min-w-[250px]
                  items-center

                  rounded-r-[16px]

                  bg-[#536fdf]

                  px-[18px]
                "
              >
                {/* =================================
                    CLIENT DETAILS
                ================================== */}

                <div className="pr-[35px]">
                  <h3
                    className="
                      font-sans
                      text-[11px]
                      font-bold
                      leading-[1.3]
                      text-white
                    "
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                      mt-[3px]
                      whitespace-nowrap
                      font-sans
                      text-[9px]
                      font-normal
                      leading-[1.4]
                      text-[#d7dfff]
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* =================================
                    FOLDED RIBBON TRIANGLE
                ================================== */}

                <span
                  className="
                    absolute
                    -bottom-[9px]
                    left-0

                    h-[9px]
                    w-[12px]

                    bg-[#3046a8]

                    [clip-path:polygon(100%_0,100%_100%,0_0)]
                  "
                />
              </div>

              {/* ==================================
                  CLIENT PHOTO
              =================================== */}

              <div
                className="
                  absolute
                  right-[10%]
                  top-[-8px]
                  z-30

                  h-[69px]
                  w-[69px]

                  overflow-hidden
                  rounded-full

                  border-[4px]
                  border-white

                  bg-white
                "
              >
                <img
                  src={testimonial.photo}
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
          ))}
        </div>

        {/* ========================================
            SLIDER DOTS
        ========================================= */}

        <div
          className="
            mt-[28px]
            flex
            items-center
            justify-center
            gap-[10px]
          "
        >
          {testimonialsData.map((testimonial, index) => {
            const isActive = currentIndex === index;

            return (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className="
                  flex
                  h-[14px]
                  items-center
                  justify-center
                  border-0
                  bg-transparent
                  p-0
                  outline-none
                "
              >
                <span
                  className={
                    isActive
                      ? `
                          block
                          h-[7px]
                          w-[24px]
                          rounded-full
                          bg-[#536fdf]
                          transition-all
                          duration-300
                        `
                      : `
                          block
                          h-[7px]
                          w-[7px]
                          rounded-full
                          bg-white
                          transition-all
                          duration-300
                        `
                  }
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;