import React, { useState } from 'react';
import { Plus, X, Star } from 'lucide-react';

const faqItems = [
  {
    id: 'faq-1',
    question: 'What is One Enterprise Cloud Platform?',
    answer:
      'One Enterprise Cloud Platform is a unified cloud solution that connects essential business functions, teams, data, and workflows in one place.',
  },
  {
    id: 'faq-2',
    question: 'What business functions does the platform support?',
    answer:
      'The platform brings business functions such as HR, CRM, Finance, Procurement, Operations, and other enterprise workflows together in a single workspace.',
  },
  {
    id: 'faq-3',
    question: 'Can different teams use the same platform?',
    answer:
      'Yes. Different teams can work within the same platform while maintaining their own workflows, responsibilities, permissions, and business data.',
  },
  {
    id: 'faq-4',
    question: 'How does the platform connect business processes?',
    answer:
      'Connected modules share information through the platform so that data can move smoothly between departments and business processes.',
  },
  {
    id: 'faq-5',
    question: 'Is the platform scalable for enterprise requirements?',
    answer:
      'Yes. The platform is designed to scale as organizations grow, allowing additional teams, users, modules, and business functions to be added over time.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? '' : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#111a4b] px-6 pb-24 pt-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#273b9b]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-[32px] font-Onest font-semibold tracking-[-0.8px] text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-[11px] font- text-[#8e9bd0]">
            Clear answers about building a more connected enterprise.
          </p>
        </div>

        {/* FAQ content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:gap-12">
          {/* Left side */}
          <div className="flex flex-col">
            <h3 className="text-[44px] font-Onest font-light leading-[1.05] tracking-[-1.2px] text-white">
              Question <span className="text-white/50">&amp;</span>
              <br />
              Answer<span className="text-white/50">&apos;s</span>
            </h3>

            <p className="mt-1 max-w-[310px] text-[11px] leading-5 text-[#8490c1]">
              Real words from people I&apos;ve worked with.
            </p>

            {/* Testimonial card: two-tone glass + faded edge */}
            <div className="relative mt-0 overflow-hidden rounded-[12px] border border-white/1 bg-gradient-to-br from-white/[0.16] via-white/[0.06] to-white/[0.02] p-4 backdrop-blur-md">
              {/* Dark fade overlay (bottom-right) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#111a4b]/70 via-transparent to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <img
                    src="src/assets/avatar.jpg"
                    alt="Thoms alva"
                    className="h-[60px] w-[60px] shrink-0 rounded-[7px] object-cover"
                  />

                  <div>
                    <h4 className="text-[23px] font-Onest text-white">
                      Thoms alva
                    </h4>
                    <p className="mt-0.5 text-[11px] text-[#c0c8e4]">
                      Ceo Of bingo
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-1.5">
                  <span className="mr-1 text-[11px] font-Onest text-[#c0c8e4]">
                    5.0
                  </span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      fill="#f3a928"
                      strokeWidth={0}
                      className="text-[#f3a928]"
                    />
                  ))}
                </div>

                <p className="mt-5 text-[11px] leading-[1.8] text-[#b3bce0]">
                  Working together was a seamless experience. The designs were
                  beautiful and user-focused, and our website traffic improved
                  noticeably.
                </p>
              </div>
            </div>
          </div>

          {/* Right side accordion */}
          <div className="space-y-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={[
                    'relative overflow-hidden rounded-[12px] border backdrop-blur-md transition-all duration-300',
                    'bg-gradient-to-r from-white/[0.12] via-white/[0.05] to-white/[0.02]',
                    isOpen ? 'border-white/15' : 'border-white/[0.06]',
                  ].join(' ')}
                >
                  {/* Dark fade overlay (right side) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#111a4b]/60 via-transparent to-transparent" />

                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="relative z-10 flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-[17px] text-left"
                  >
                    <span className="text-[14px] font-Onest leading-5 text-[#e6eaff]">
                      {item.question}
                    </span>

                    {/* + and × icons: rotate and cross-fade */}
                    <span className="relative h-[14px] w-[14px] shrink-0">
                      <Plus
                        size={14}
                        strokeWidth={1.8}
                        className={[
                          'absolute inset-0 text-[#c0c8e4] transition-all duration-300 ease-in-out',
                          isOpen
                            ? 'rotate-90 scale-50 opacity-0'
                            : 'rotate-0 scale-100 opacity-100',
                        ].join(' ')}
                      />
                      <X
                        size={14}
                        strokeWidth={1.8}
                        className={[
                          'absolute inset-0 text-[#c0c8e4] transition-all duration-300 ease-in-out',
                          isOpen
                            ? 'rotate-0 scale-100 opacity-100'
                            : '-rotate-90 scale-50 opacity-0',
                        ].join(' ')}
                      />
                    </span>
                  </button>

                  {/* Answer: smooth slide open / close */}
                  <div
                    aria-hidden={!isOpen}
                    className={[
                      'relative z-10 grid transition-all duration-300 ease-in-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    ].join(' ')}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <p className="w-full text-[13px] leading-[1.8] text-[#b3bce0]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;