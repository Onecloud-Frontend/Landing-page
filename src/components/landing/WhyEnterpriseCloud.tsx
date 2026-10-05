import type { CSSProperties } from "react";
import { enterpriseBenefits } from "../../data/whyEnterpriseCloudData";

const cardPositions: CSSProperties[] = [
  { left: "0px", top: "0px", zIndex: 6 },
  { left: "245px", top: "0px", zIndex: 5 },
  { left: "490px", top: "0px", zIndex: 4 },
  { left: "0px", top: "222px", zIndex: 6 },
  { left: "245px", top: "222px", zIndex: 5 },
  { left: "490px", top: "222px", zIndex: 4 },
];

export default function WhyEnterpriseCloud() {
  return (
    <section
      id="why-us"
      className="overflow-hidden bg-[#0F1330] py-[58px] text-white"
      style={{ fontFamily: '"Onest", sans-serif' }}
    >
      <div className="mx-auto w-full max-w-[1024px] px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[36px] font-semibold leading-[1.2] tracking-[-0.7px]">
            Why One Enterprise Cloud
          </h2>

          <p className="mt-3 text-[12px] text-white/75">
            Everything Your Enterprise Needs, Connected in One Platform
          </p>
        </div>

        {/* Desktop Cards */}
        <div
          className="
            group/cards
            relative
            mx-auto
            mt-[23px]
            hidden
            h-[445px]
            w-[735px]
            lg:block
          "
        >
          {enterpriseBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.id}
                style={cardPositions[index]}
                className="
                  absolute
                  h-[200px]
                  w-[315px]
                  overflow-hidden

                  rounded-[38px_26px_38px_26px]

                  border
                  border-white/20

                  bg-[#232A5C]/10

                  -skew-x-[10deg]

                  shadow-[inset_0_0_35px_rgba(255,255,255,0.025),0_12px_30px_rgba(0,0,0,0.08)]

                  backdrop-blur-[8px]

                  transition-all
                  duration-300
                  ease-in-out

                  group-has-[article:hover]/cards:opacity-35
                  group-has-[article:hover]/cards:blur-[2.5px]
                  group-has-[article:hover]/cards:brightness-75

                  hover:!z-20
                  hover:!opacity-100
                  hover:!blur-none
                  hover:!brightness-110

                  hover:-translate-y-1
                  hover:scale-[1.025]

                  hover:border-[#758BFF]/60
                  hover:bg-[#313B7E]/40

                  hover:shadow-[inset_0_0_45px_rgba(111,132,255,0.10),0_0_25px_rgba(77,99,230,0.15),0_18px_40px_rgba(0,0,0,0.25)]
                "
              >
                {/* Reverse skew */}
                <div
                  className="
                    h-full
                    skew-x-[10deg]
                    px-8
                    py-[23px]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex
                      h-[35px]
                      w-[35px]
                      items-center
                      justify-center

                      rounded-[5px]

                      border
                      border-[#6680FF]/20

                      bg-[#5267DC]/10

                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-[#5C75EF]"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      whitespace-nowrap
                      text-[17px]
                      font-semibold
                      italic
                      leading-[1.25]
                    "
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-[17px]
                      max-w-[265px]
                      text-[12px]
                      italic
                      leading-[1.45]
                      text-white/80
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile / Tablet */}
        <div
          className="
            group/mobile
            mt-8
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            lg:hidden
          "
        >
          {enterpriseBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.id}
                className="
                  rounded-[28px]

                  border
                  border-white/20

                  bg-[#232A5C]/10

                  p-7

                  transition-all
                  duration-300

                  group-has-[article:hover]/mobile:opacity-40
                  group-has-[article:hover]/mobile:blur-[2px]
                  group-has-[article:hover]/mobile:brightness-75

                  hover:!opacity-100
                  hover:!blur-none
                  hover:!brightness-110

                  hover:-translate-y-1
                  hover:scale-[1.015]

                  hover:border-[#758BFF]/60
                  hover:bg-[#313B7E]/40

                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.22)]
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    h-[35px]
                    w-[35px]
                    items-center
                    justify-center

                    rounded-[5px]

                    border
                    border-[#6680FF]/20

                    bg-[#5267DC]/10
                  "
                >
                  <Icon
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#5C75EF]"
                  />
                </div>

                <h3 className="text-[17px] font-semibold italic">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-[12px] italic leading-[1.55] text-white/80">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
