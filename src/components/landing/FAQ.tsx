// import React, { useState } from 'react';
// import { ChevronDown, Star } from 'lucide-react';

// const faqItems = [
//   {
//     id: 'faq-1',
//     question: 'What is One Enterprise Cloud Platform?',
//     answer:
//       'The Enterprise Cloud Platform is a unified cloud solution that connects essential business functions, teams, data, and workflows in one place.',
//   },
//   {
//     id: 'faq-2',
//     question: 'What business functions does the platform support?',
//     answer:
//       'The platform brings business functions such as HR, CRM, Finance, Procurement, Operations, and other enterprise workflows together in a single workspace.',
//   },
//   {
//     id: 'faq-3',
//     question: 'Can different teams use the same platform?',
//     answer:
//       'Yes. Different teams can work within the same platform while maintaining their own workflows, responsibilities, permissions, and business data.',
//   },
//   {
//     id: 'faq-4',
//     question: 'How does the platform connect between processes?',
//     answer:
//       'Connected modules share information through the platform so that data can move smoothly between departments and business processes.',
//   },
//   {
//     id: 'faq-5',
//     question: 'Is the platform scalable for enterprise requirements?',
//     answer:
//       'Yes. The platform is designed to scale as organizations grow, allowing additional teams, users, modules, and business functions to be added over time.',
//   },
// ];

// const FAQ: React.FC = () => {
//   const [openId, setOpenId] = useState<string>('faq-1');

//   const toggleItem = (id: string) => {
//     setOpenId((current) => (current === id ? '' : id));
//   };

//   return (
//     <section
//       id="faq"
//       className="relative overflow-hidden bg-[#111a4b] px-6 pb-24 pt-24 text-white"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#273b9b]/20 blur-[130px]" />

//       <div className="relative mx-auto max-w-[1180px]">
//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-[30px] font-Onest tracking-[-0.8px] text-white sm:text-[38px]">
//             Frequently Asked Questions
//           </h2>

//           <p className="mt-3 text-[11px] font-Onest text-[#8e9bd0] sm:text-[12px]">
//             Clear answers about building a more connected enterprise.
//           </p>
//         </div>

//         {/* FAQ content */}
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_1fr] lg:gap-12">
//           {/* Left side */}
//           <div className="flex flex-col">
//             <h3 className="text-[39px] font-Onest leading-[0.98] tracking-[-1.8px] text-white sm:text-[46px]">
//               Question &amp;
//               <br />
//               Answer&apos;s
//             </h3>

//             <p className="mt-3 max-w-[310px] text-[11px] leading-5 text-[#8490c1]">
//               Your questions about the platform, answered clearly.
//             </p>

//             {/* Testimonial / profile card */}
//             <div className="mt-7 rounded-[12px] border border-[#2a3776] bg-[#172355] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
//               <div className="flex items-center gap-3">
//                 {/* Avatar */}
//                 <div className="relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-[7px] bg-gradient-to-br from-[#7048ff] via-[#6738dc] to-[#0a123c]">
//                   <div className="absolute left-1/2 top-[9px] h-[18px] w-[18px] -translate-x-1/2 rounded-full bg-[#070a22]" />
//                   <div className="absolute bottom-[-5px] left-1/2 h-[34px] w-[32px] -translate-x-1/2 rounded-t-[18px] bg-[#070a22]" />
//                 </div>

//                 <div>
//                   <h4 className="text-[15px] font-Onest text-white">
//                     Thomas alva
//                   </h4>

//                   <p className="mt-0.5 text-[9px] text-[#8c98c7]">
//                     CEO &amp; Founder
//                   </p>
//                 </div>
//               </div>

//               {/* Rating */}
//               <div className="mt-5 flex items-center gap-1.5">
//                 <span className="mr-1 text-[9px] font-Onest text-[#c0c8e4]">
//                   5.0
//                 </span>

//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <Star
//                     key={star}
//                     size={10}
//                     fill="#f3a928"
//                     strokeWidth={0}
//                     className="text-[#f3a928]"
//                   />
//                 ))}
//               </div>

//               <p className="mt-5 text-[10px] leading-[1.8] text-[#8d99c7]">
//                 Working together was a seamless experience. The entire team
//                 was responsive, efficient, and focused on helping us succeed.
//               </p>
//             </div>
//           </div>

//           {/* Right side accordion */}
//           <div className="space-y-3">
//             {faqItems.map((item) => {
//               const isOpen = openId === item.id;

//               return (
//                 <div
//                   key={item.id}
//                   className={[
//                     'overflow-hidden rounded-[12px] border transition-all duration-300',
//                     isOpen
//                       ? 'border-[#34458f] bg-[#1c285d]'
//                       : 'border-[#283674] bg-[#1a2558]',
//                   ].join(' ')}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => toggleItem(item.id)}
//                     aria-expanded={isOpen}
//                     className="flex w-full items-center justify-between gap-5 px-5 py-[17px] text-left"
//                   >
//                     <span className="text-[11px] font-Onest leading-5 text-[#dce2ff] sm:text-[12px]">
//                       {item.question}
//                     </span>

//                     <ChevronDown
//                       size={14}
//                       strokeWidth={1.8}
//                       className={[
//                         'shrink-0 text-[#9ca8d4] transition-transform duration-300',
//                         isOpen ? 'rotate-180' : '',
//                       ].join(' ')}
//                     />
//                   </button>

//                   {isOpen && (
//                     <div className="border-t border-[#303d7d] px-5 pb-5 pt-3">
//                       <p className="max-w-[720px] text-[10px] leading-[1.8] text-[#929dcc] sm:text-[11px]">
//                         {item.answer}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

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
                    className="relative z-10 flex w-full items-center justify-between gap-5 px-5 py-[17px] text-left"
                  >
                    <span className="text-[14px] font-Onest leading-5 text-[#e6eaff]">
                      {item.question}
                    </span>

                    {isOpen ? (
                      <X size={14} strokeWidth={1.8} className="shrink-0 text-[#c0c8e4]" />
                    ) : (
                      <Plus size={14} strokeWidth={1.8} className="shrink-0 text-[#c0c8e4]" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="relative z-10 px-5 pb-5">
                      <p className="w-full text-[13px] leading-[1.8] text-[#b3bce0]">
                        {item.answer}
                      </p>
                    </div>
                  )}
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