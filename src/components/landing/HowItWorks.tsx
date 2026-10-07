import {
  ContactRound,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  type LucideIcon,
} from 'lucide-react';
import { useEffect } from 'react';

type WorkflowStep = {
  number: string;
  title: string;
  description: string;
  accentClass: string;
  icon: LucideIcon;
};

/*
 * Copy and visual order intentionally follow the supplied Website.pdf
 * How its Works reference. This data stays local to this owned component.
 */
const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Contact',
    description: 'Bring your business function and team together',
    accentClass: 'bg-[#5cf0a8]',
    icon: ContactRound,
  },
  {
    number: '02',
    title: 'Manage',
    description: 'Manage operations, processes and information from one platform.',
    accentClass: 'bg-[#ffc84e]',
    icon: Search,
  },
  {
    number: '03',
    title: 'Automate',
    description: 'Streamline workflows and business processes.',
    accentClass: 'bg-[#59d8ff]',
    icon: SlidersHorizontal,
  },
  {
    number: '04',
    title: 'Analyze',
    description: 'Use connected data and insights.',
    accentClass: 'bg-[#c98dff]',
    icon: ShieldCheck,
  },
];

export const HowItWorks = () => {
  useEffect(() => {
    const existingFont = document.querySelector(
      'link[data-onest-font="true"]',
    );

    if (!existingFont) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap';
      link.dataset.onestFont = 'true';

      document.head.appendChild(link);
    }
  }, []);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      style={{ fontFamily: "'Onest', sans-serif" }}
      className="relative isolate overflow-hidden bg-[#0F1330] px-5 pb-[104px] pt-[72px] sm:px-8 sm:pb-[118px] sm:pt-20 lg:px-12 lg:pb-[105px] lg:pt-[73px]"
    >
      <div
  className="pointer-events-none absolute inset-0 z-0 bg-[#172B5C1A]/10%"
  aria-hidden="true"
/>

      <div className="relative z-10 mx-auto max-w-[1020px]">
        <header className="text-center">
          <h2
            id="how-it-works-title"
            className="text-[29px] font-bold leading-[1.03] tracking-[-0.8px] text-white sm:text-[34px] lg:text-[36px] lg:leading-[37px] lg:tracking-[-1px]"
          >
            How its Works
          </h2>
          <p className="mt-3 text-[12px] font-medium tracking-[-0.2px] text-[#e1e5f3] sm:text-[14px] lg:mt-[21px] lg:text-[15px]">
            One Connected Platform for Your Entire Business
          </p>
        </header>

        <div className="mt-10 grid items-center gap-10 lg:mt-[36px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <ol className="relative m-0 flex list-none flex-col gap-8 p-0 lg:gap-[43px]" aria-label="Four-step business workflow">
            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
              viewBox="0 0 970 821"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 188 140 C 188 184 72 161 72 227 L 72 594 C 72 649 294 633 294 681"
                fill="none"
                stroke="#07183f"
                strokeLinecap="round"
                strokeWidth="30"
                opacity="0.56"
              />
              <path
                d="M 188 140 C 188 184 72 161 72 227 L 72 594 C 72 649 294 633 294 681"
                fill="none"
                stroke="#1bbceb"
                strokeLinecap="round"
                strokeWidth="7"
              />
              <path
                d="M 188 140 C 188 184 72 161 72 227 L 72 594 C 72 649 294 633 294 681"
                fill="none"
                stroke="#d4fbff"
                strokeDasharray="28 20"
                strokeDashoffset="10"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
            {workflowSteps.map((step) => {
              const Icon = step.icon;

              return (
                <li key={step.number} className="relative z-10">
                 <article className="group relative flex min-h-[76px] items-center gap-3 rounded-[14px] border border-[#365784] bg-[linear-gradient(105deg,#16234A,#172B5C1A)] px-3 py-3 shadow-[0_10px_24px_rgba(3,12,48,0.42),inset_0_1px_0_rgba(151,208,255,0.2)] transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[#3b7dde] hover:shadow-[0_0_12px_rgba(59,125,222,0.25)] motion-reduce:transform-none sm:min-h-[78px] sm:gap-3.5 sm:px-4 lg:min-h-[70px] lg:gap-[15px] lg:rounded-[14px] lg:px-[15px] lg:py-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-[#208BC4] bg-[linear-gradient(145deg,#123A72,#102B59)] text-[#6edaff] shadow-[0_0_9px_rgba(8,164,243,0.17),inset_0_0_12px_rgba(20,90,194,0.38)] sm:h-[42px] sm:w-[42px] lg:h-[42px] lg:w-[42px] lg:rounded-[11px]">
                      <span className="absolute -left-1 -top-1 flex h-4 min-w-[22px] items-center justify-center rounded-[4px] border border-[#1597db] bg-[#0b326e] px-0.5 text-[7px] font-bold leading-none text-[#79dcff] shadow-[0_1px_4px_rgba(0,11,55,0.3)] lg:h-[15px] lg:min-w-[22px] lg:rounded-[4px] lg:text-[7px]">
                        {step.number}
                      </span>
                      <Icon className="h-[19px] w-[19px] sm:h-5 sm:w-5 lg:h-[19px] lg:w-[19px]" strokeWidth={2.1} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[15px] font-bold leading-[1.08] tracking-[-0.35px] text-white sm:text-[16px] lg:text-[16px] lg:tracking-[-0.45px]">
                        {step.title}
                      </h3>
                      <p className="mt-1 flex items-start gap-1.5 text-[11px] leading-[1.38] text-[#f0f2fb] sm:text-[12px] lg:mt-1 lg:gap-1.5 lg:text-[12px]">
                        <span className={`mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full lg:h-[5px] lg:w-[5px] ${step.accentClass}`} aria-hidden="true" />
                        <span>{step.description}</span>
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>

          <div className="lg:-translate-y-[9px] lg:pl-1">
            <h3 className="max-w-[490px] text-[29px] font-bold leading-[0.99] tracking-[-1.1px] text-white sm:text-[33px] lg:text-[36px] lg:leading-[0.98] lg:tracking-[-1.35px]">
              <span className="block">
                “How{' '}
                <span className="inline-flex -translate-y-[0.06em] items-center rounded-[13px] border border-[#48b9e7] bg-[linear-gradient(135deg,#114d87,#0b2d68)] px-2 py-[0.08em] text-[0.68em] tracking-[-0.5px] text-[#35bdf5] shadow-[0_0_10px_rgba(43,183,247,0.22),inset_0_0_10px_rgba(63,205,255,0.14)] lg:rounded-[14px] lg:px-3">
                  4-Step
                </span>
              </span>
              <span className="block">the Process Works”</span>
            </h3>

            <p className="mt-5 max-w-[465px] text-[12px] leading-[1.42] tracking-[-0.25px] text-[#c0c9e2] sm:text-[13px] lg:mt-[18px] lg:text-[13px] lg:leading-[1.38] lg:tracking-[-0.35px]">
              A comprehensive operational framework tailored for financial entities and critical third-party ICT providers to achieve total regulatory readiness and systemic cyber resilience.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-[23px] lg:gap-[14px]">
              <a
  href="#login"
  className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#406ed9] px-4 py-2.5 text-[11px] font-bold leading-none text-white shadow-[0_6px_22px_rgba(55,111,229,0.5),inset_0_1px_0_rgba(255,255,255,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4a79e3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3d3ff] motion-reduce:transform-none lg:min-h-[34px] lg:px-4 lg:py-2 lg:text-[10px]"
>
  Get Started
</a>

<a
  href="#register"
  className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#e5e9f6] bg-transparent px-4 py-2.5 text-[11px] font-bold leading-none text-[#f4f6fd] transition-colors duration-200 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a3d3ff] lg:min-h-[34px] lg:px-4 lg:py-2 lg:text-[10px]"
>
  Talk to sales
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
