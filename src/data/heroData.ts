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
  { id: 'workflowPath', d: 'M 500 211.5 C 400 70, 290 75, 210 145' },
  { id: 'aiPath', d: 'M 500 211.5 C 370 162, 260 220, 190 320' },
  { id: 'financePath', d: 'M 500 211.5 C 370 280, 270 415, 210 540' },
  { id: 'hrmsPath', d: 'M 500 211.5 C 600 70, 710 75, 790 145' },
  { id: 'crmPath', d: 'M 500 211.5 C 630 162, 740 220, 810 320' },
  { id: 'erpPath', d: 'M 500 211.5 C 630 280, 730 415, 790 540' },
];