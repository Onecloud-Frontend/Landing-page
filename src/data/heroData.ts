import workflowIcon from '../assets/icons/workflow_icon.png';
import aiIcon from '../assets/icons/ai_icon.png';
import financeIcon from '../assets/icons/finance_icon.png';
import hrmsIcon from '../assets/icons/hrms_icon.png';
import crmIcon from '../assets/icons/crm_icon.png';
import erpIcon from '../assets/icons/erp_icon.png';

/** Hero content: eyebrow, subtitle lines, trust points, module badges and connector wires. */
export const EYEBROW = 'ONE ENTERPRISE CLOUD PLATFORM';

export const SUBTITLE = [
  'Bring your business operations together in one connected',
  'cloud platform designed to simplify how teams, processes,',
  'data and workflows work together.',
];

export const TRUST_POINTS = ['Enterprise-ready', 'Secure by design', 'Built to scale'];

/** `top` is the vertical offset; `pos` is the responsive horizontal position. */
export const BADGES = [
  { label: 'Workflow', icon: workflowIcon, top: '14.5%', pos: 'left-[18.5%] xl:left-[21%]' },
  { label: 'AI', icon: aiIcon, top: '32%', pos: 'left-[16%] xl:left-[19%]' },
  { label: 'Finance', icon: financeIcon, top: '54%', pos: 'left-[18.5%] xl:left-[21%]' },
  { label: 'HRMS', icon: hrmsIcon, top: '14.5%', pos: 'left-[81.5%] xl:left-[79%]' },
  { label: 'CRM', icon: crmIcon, top: '32%', pos: 'left-[84%] xl:left-[81%]' },
  { label: 'ERP', icon: erpIcon, top: '54%', pos: 'left-[81.5%] xl:left-[79%]' },
];

/** Connector wires from the hero center to each badge (viewBox 1000x1000). */
export const WIRES = [
  { id: 'workflowPath', d: 'M 500 211.5 C 400 70, 290 75, 210 145', fade: [227, 300] },
  { id: 'aiPath', d: 'M 500 211.5 C 370 162, 260 220, 190 320', fade: [227, 300] },
  { id: 'financePath', d: 'M 500 211.5 C 370 280, 270 415, 210 540', fade: [190, 262] },
  { id: 'hrmsPath', d: 'M 500 211.5 C 600 70, 710 75, 790 145', fade: [227, 300] },
  { id: 'crmPath', d: 'M 500 211.5 C 630 162, 740 220, 810 320', fade: [227, 300] },
  { id: 'erpPath', d: 'M 500 211.5 C 630 280, 730 415, 790 540', fade: [190, 262] },
];

/** Three concentric circles centered behind the heading: top offset and diameter in px, fill strength, whether the base is solid (hides the wires behind it), and the y offset where the fill ends (omit to fade out at 55% of the height). */
export const DOMES = [
  { top: 93, size: 614, alpha: 0.1, solid: false, cut: 210 },
  { top: 173, size: 454, alpha: 0.38, solid: true, cut: 265 },
  { top: 248, size: 304, alpha: 0.48, solid: true },
];

/** Base section colour and the accent (r,g,b) used for circle and glow fills. */
export const BASE_COLOR = '#0F1330';
export const ACCENT = '70,115,240';

/** Feathered glows behind the copy: top offset, size and blur in px, peak opacity. */
export const GLOWS = [
  { top: 240, width: 380, height: 440, alpha: 0.3, blur: 22 },
  { top: 170, width: 660, height: 320, alpha: 0.36, blur: 20 },
];

/** Wire/ring masking, measured from the circles' centre: its y offset in the wire canvas (px), the radius range over which rings go from dim to full, and the dim level. */
export const CENTER_Y = 320;
export const RING_FADE = [227, 330];
export const RING_DIM = 0.28;