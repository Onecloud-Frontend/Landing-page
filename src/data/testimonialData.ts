export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  photo: string;
  rating: number;
  testimonial: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'VP of Infrastructure at FinCore Global',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    testimonial:
      'The zero trust security and sovereign enclave architecture allowed us to clear rigorous financial compliance across 6 jurisdictions with zero friction.',
  },
  {
    id: 2,
    name: 'Stephen McCarthy',
    role: 'Project Manager at Amazon',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    testimonial:
      'Our sovereign cloud architecture gave us complete control over sensitive workloads while meeting demanding data residency requirements across multiple regions',
  },
  {
    id: 3,
    name: 'Damon Salvatore',
    role: 'Team Lead at Microsoft',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    testimonial:
      'The combination of encrypted workloads and granular access controls allowed us to protect sensitive data without slowing down business operations',
  },
];