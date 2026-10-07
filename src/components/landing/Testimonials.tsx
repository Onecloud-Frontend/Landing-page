import React, { useState } from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "../../data/testimonialData";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
  ];

  return (
    <section
      id="testimonials"
      className="
              relative
              min-h-[429px]
              overflow-hidden
              bg-radial[#0F1330]
              bg-[#0F1330]
              px-5
              pb-[52px]
              pt-[58px]
              sm:px-8
              lg:px-12
"
    >
      <div
        className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    z-0
                    
                    h-[420px]
                    w-[720px]
                    -translate-x-1/2
                    
                    rounded-[50%/60%]
                    
                    bg-[radial-gradient(ellipse_at_top,_#172B5C1A_0%,_#172B5C1A_10%,_#172B5C0D_62%,_transparent_78%)]
                    
                    blur-[55px]
                    "
                    aria-hidden="true"
      />

      {/* TOP BLUE LINE */}
      <div
        className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      z-10
                      h-px
                      w-full
                      bg-[#2F6FE0]
                      "
                              aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-[900px]">
        {/* HEADING */}
        <div className="text-center">
          <h2
            className="
                        text-[30px]
                        font-bold
                        leading-[1.2]
                        tracking-[-0.03em]
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
                        text-[11px]
                        font-normal
                        leading-[1.6]
                        text-white/70
                        sm:text-[12px]
"
          >
            Trusted by operations, technology and security leaders at the
            world&apos;s most demanding enterprises.
          </p>
        </div>

        {/* =========================================
TESTIMONIAL CARDS
========================================== */}
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
              className="relative h-[185px] pt-[25px]"
            >
              {/* REVIEW CARD */}
              <div
                className="
                            absolute
                            bottom-0
                            left-[12px]
                            right-0
                            top-[25px]
                            
                            overflow-hidden
                            
                            rounded-[5px_17px_17px_17px]
                            
                            border
                            border-[#8EA9FF]/25
                            
                            bg-[#172B5C]/35
                            
                            backdrop-blur-[14px]
"
              >
                {/* LEFT VERTICAL LINE */}
                <div
                  className="
                                absolute
                                bottom-[24px]
                                left-[23px]
                                top-[63px]
                                z-10
                                w-px
                                bg-[#5C83FF]
"
                />

                {/* REVIEW CONTENT */}
                <div
                  className="
                                relative
                                z-10
                                ml-[38px]
                                mr-[20px]
                                pt-[62px]
"
                >
                  {/* STARS */}
                  <div className="flex items-center gap-[2px]">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="
                                    h-[13px]
                                    w-[13px]
                                    fill-[#F4B942]
                                    text-[#F4B942]
"
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                  {/* REVIEW TEXT */}
                  <p
                    className="
                                  mt-[7px]
                                  max-w-[350px]
                                  text-[11px]
                                  font-normal
                                  leading-[18px]
                                  text-white/90
"
                  >
                    “{testimonial.testimonial}”
                  </p>
                </div>
              </div>

              {/* =====================================
CLIENT BLUE RIBBON
====================================== */}
              <div
                className="
                              absolute
                              left-0
                              top-0
                              z-20
                              
                              flex
                              h-[65px]
                              w-[296px]
                              max-w-[70%]
                              items-center
                              
                              rounded-r-[16px]
                              
                              bg-[#526FDC]
                              
                              pl-[18px]
                              pr-[55px]
"
              >
                <div>
                  <h3
                    className="
                                  text-[11px]
                                  font-bold
                                  leading-[14px]
                                  text-white
"
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                                  mt-[2px]
                                  whitespace-nowrap 
                                  text-[9px]
                                  font-normal
                                  leading-[13px]
                                  text-[#B2C6FF]
"
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* RIBBON FOLD */}
                <span
                  className="
                              absolute
                              -bottom-[9px]
                              left-0
                              h-[9px]
                              w-[12px]
                              bg-[#243572]
                              [clip-path:polygon(100%_0,100%_100%,0_0)]
"
                />
              </div>
              <div
                className="
                                  absolute
                                  right-[43px]
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
        <div
          className="
                        mt-[27px]
                        flex
                        h-[10px]
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
                          bg-[#5C83FF]
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
