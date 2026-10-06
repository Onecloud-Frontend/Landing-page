import type { CSSProperties } from "react";
import { enterpriseBenefits } from "../../data/whyEnterpriseCloudData";

/* =========================================================
   DESKTOP CARD POSITIONS

   Card width = 380px
   Position difference = 310px
   Overlap = 380 - 310 = 70px
   ========================================================= */

const cardPositions: CSSProperties[] = [
  { left: 0, top: 0, zIndex: 6 },
  { left: 310, top: 0, zIndex: 5 },
  { left: 620, top: 0, zIndex: 4 },

  { left: 0, top: 233, zIndex: 6 },
  { left: 310, top: 233, zIndex: 5 },
  { left: 620, top: 233, zIndex: 4 },
];

/* =========================================================
   GLASS STYLE
   ========================================================= */

const glass =
  "border border-white/[0.32] bg-white/[0.075] backdrop-blur-[22px] backdrop-saturate-[180%] backdrop-brightness-110 shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_0_-1px_0_rgba(255,255,255,0.08),0_0_12px_rgba(150,170,255,0.08),0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out";

const hoverGlass =
  "hover:border-white/55 hover:bg-white/[0.11] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12),0_0_20px_rgba(150,175,255,0.15),0_14px_32px_rgba(0,0,0,0.14)]";

/* =========================================================
   GLASS EFFECTS
   ========================================================= */

function GlassEffects({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {/* Main Glass Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-[#9CACFF]/[0.035] to-transparent" />

      {/* Large Soft Reflection */}
      <div className="pointer-events-none absolute -right-[10%] -top-[45%] h-[125%] w-[75%] rounded-full bg-white/[0.09] blur-[28px]" />

      {/* Middle Glass Reflection */}
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-[55%] w-[55%] rounded-full bg-[#AEBBFF]/[0.055] blur-[25px]" />

      {/* Bottom Glass Depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#111632]/[0.16] to-transparent" />

      {/* Inner Border */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/[0.06]" />

      {/* Top Border Shine */}
      <div className="pointer-events-none absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      {/* Bottom Border Shine */}
      <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Left Border Shine */}
      <div className="pointer-events-none absolute bottom-8 left-0 top-8 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />

      {/* Right Border Shine */}
      <div className="pointer-events-none absolute bottom-8 right-0 top-8 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />

      {/* Moving Shine */}
      {mobile ? (
        <div className="pointer-events-none absolute -left-[55%] -top-[30%] h-[160%] w-[32%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent opacity-0 transition-all duration-700 ease-out group-hover/mobile-card:left-[125%] group-hover/mobile-card:opacity-100" />
      ) : (
        <div className="pointer-events-none absolute -left-[55%] -top-[30%] h-[160%] w-[32%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent opacity-0 transition-all duration-700 ease-out group-hover/card:left-[125%] group-hover/card:opacity-100" />
      )}
    </>
  );
}

/* =========================================================
   CARD CONTENT
   ========================================================= */

function CardContent({
  benefit,
  mobile = false,
}: {
  benefit: (typeof enterpriseBenefits)[number];
  mobile?: boolean;
}) {
  const Icon = benefit.icon;

  return (
    <div
      className={
        mobile
          ? "relative z-10 flex h-full flex-col p-6"
          : "relative z-10 flex h-full flex-col skew-x-[10deg] p-6"
      }
    >
      {/* Icon */}
      <div
        className={
          mobile
            ? "mb-4 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[7px] border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 group-hover/mobile-card:border-white/30 group-hover/mobile-card:bg-white/[0.10]"
            : "mb-4 flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[7px] border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 group-hover/card:border-white/30 group-hover/card:bg-white/[0.10]"
        }
      >
        <Icon
          size={20}
          strokeWidth={1.4}
          className={
            mobile
              ? "text-[#7188F5] transition-colors duration-300 group-hover/mobile-card:text-[#A9B6FF]"
              : "text-[#7188F5] transition-colors duration-300 group-hover/card:text-[#A9B6FF]"
          }
        />
      </div>

      {/* Title */}
      <h3
        className={
          mobile
            ? "text-[16px] font-semibold italic leading-[1.3] text-white sm:text-[17px]"
            : "whitespace-nowrap text-[17px] font-semibold italic leading-[1.25] text-white"
        }
      >
        {benefit.title}
      </h3>

      {/* Description */}
      <p
        className={
          mobile
            ? "mt-3 text-[12px] italic leading-[1.55] text-white/75 sm:text-[13px]"
            : "mt-4 max-w-[295px] text-[12px] italic leading-[1.5] text-white/80"
        }
      >
        {benefit.description}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function WhyEnterpriseCloud() {
  return (
    <section
      id="why-us"
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#0F1330]
        px-2
        py-8
        text-white

        sm:px-4
        sm:py-10

        lg:px-2
        lg:py-4
      "
      style={{
        fontFamily: '"Onest", sans-serif',
        scrollMarginTop: "88px",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col">
        {/* =====================================================
            HEADING
            ===================================================== */}

        <div className="shrink-0 px-3 text-center">
          <h2
            className="
              text-[26px]
              font-semibold
              leading-[1.2]
              tracking-[-0.6px]

              sm:text-[32px]

              lg:text-[36px]
              lg:tracking-[-0.7px]
            "
          >
            Why One Enterprise Cloud
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[600px]
              text-[11px]
              leading-[1.5]
              text-white/75

              sm:text-[12px]
            "
          >
            Everything Your Enterprise Needs, Connected in One Platform
          </p>
        </div>

        {/* =====================================================
            MOBILE
            0px - 639px
            ===================================================== */}

        <div
          className="
            mx-auto
            mt-8
            grid
            w-full
            max-w-[520px]
            grid-cols-1
            gap-[18px]

            px-3
            pb-10

            sm:hidden
          "
        >
          {enterpriseBenefits.map((benefit) => (
            <article
              key={benefit.id}
              className={`
                group/mobile-card

                relative
                min-h-[190px]
                w-full

                overflow-hidden
                rounded-[32px]

                ${glass}
                ${hoverGlass}

                hover:-translate-y-[2px]
              `}
            >
              <GlassEffects mobile />
              <CardContent benefit={benefit} mobile />
            </article>
          ))}
        </div>

        {/* =====================================================
            TABLET
            640px - 1023px
            ===================================================== */}

        <div
          className="
            mx-auto
            mt-8
            hidden
            w-full
            max-w-[960px]

            grid-cols-2
            gap-[20px]

            px-4
            pb-10

            sm:grid
            lg:hidden
          "
        >
          {enterpriseBenefits.map((benefit) => (
            <article
              key={benefit.id}
              className={`
                group/mobile-card

                relative
                min-h-[210px]
                w-full

                overflow-hidden
                rounded-[32px]

                ${glass}
                ${hoverGlass}

                hover:-translate-y-[2px]
              `}
            >
              <GlassEffects mobile />
              <CardContent benefit={benefit} mobile />
            </article>
          ))}
        </div>

        {/* =====================================================
            DESKTOP
            1024px+
            Reduced overlap + moved slightly right
            ===================================================== */}

        <div
          className="
            mx-auto
            mt-[18px]
            hidden
            translate-x-[20px]
            px-2
            py-4
            lg:block
          "
        >
          <div className="group/cards relative h-[443px] w-[1000px]">
            {enterpriseBenefits.map((benefit, index) => (
              <article
                key={benefit.id}
                style={cardPositions[index]}
                className={`
                  group/card
                  absolute

                  h-[210px]
                  w-[380px]

                  overflow-hidden

                  -skew-x-[10deg]

                  rounded-[32px]

                  ${glass}
                  ${hoverGlass}

                  group-has-[article:hover]/cards:opacity-35
                  group-has-[article:hover]/cards:blur-[3px]
                  group-has-[article:hover]/cards:brightness-75

                  hover:!z-20
                  hover:!opacity-100
                  hover:!blur-none
                  hover:!brightness-110

                  hover:-translate-y-[2px]
                  hover:scale-[1.015]
                `}
              >
                <GlassEffects />
                <CardContent benefit={benefit} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
