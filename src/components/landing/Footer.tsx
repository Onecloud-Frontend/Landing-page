import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111a4b] px-6 pb-5 pt-16 text-white">
      <div className="mx-auto max-w-[1180px]">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              {/* Stackly-style logo mark */}
              <div className="relative h-[25px] w-[22px]">
                <span className="absolute left-[3px] top-0 h-[15px] w-[7px] -skew-x-[20deg] rounded-[4px] border-[3px] border-white" />
                <span className="absolute bottom-0 right-[2px] h-[15px] w-[7px] -skew-x-[20deg] rounded-[4px] border-[3px] border-white" />
              </div>

              <span className="text-[17px] font-bold tracking-[-0.5px]">
                STACKLY
              </span>
            </div>

            <p className="mt-6 max-w-[245px] text-[9px] leading-[1.7] text-[#8996c7]">
              Your all-in-one enterprise platform for
              <br />
              operations, data, workflows and
              <br />
              business teams.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#111a4b] transition-transform hover:-translate-y-0.5"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#111a4b] transition-transform hover:-translate-y-0.5"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2zm-1.1 17.82h1.73L8.26 4.07H6.4L17.8 19.82z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#111a4b] transition-transform hover:-translate-y-0.5"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#111a4b] transition-transform hover:-translate-y-0.5"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5zM4.75 3C3.65 3 3 3.75 3 4.75S3.65 6.5 4.75 6.5 6.5 5.75 6.5 4.75 5.85 3 4.75 3zM21 13.87c0-3.76-2-5.52-4.67-5.52-2.15 0-3.11 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.32V21H21v-7.13z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#111a4b] transition-transform hover:-translate-y-0.5"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.5v-7l6.2 3.5-6.2 3.5z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={[
              'Features',
              'Pricing',
              'Case Studies',
              'Benefits',
              'Updates',
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              'About Us',
              'Contact Us',
              'Careers',
              'Culture',
              'Blog',
            ]}
          />

          {/* Support */}
          <FooterColumn
            title="Support"
            links={[
              'Getting started',
              'Help center',
              'Server status',
              'Report a bug',
              'Chat support',
            ]}
          />

          {/* Developers */}
          <FooterColumn
            title="Developers"
            links={[
              'CLI',
              'API',
              'SDKs',
              'Plugins',
              'Changelog',
            ]}
          />
        </div>

        {/* Bottom divider */}
        <div className="mt-8 border-t border-[#33417b] pt-5 text-center">
          <p className="text-[9px] text-[#7886bb]">
            © 2026 One Enterprise Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h3 className="text-[10px] font-bold text-white">
        {title}
      </h3>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[9px] text-[#8996c7] transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;