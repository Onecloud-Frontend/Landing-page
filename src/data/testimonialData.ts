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
    name: 'Elena Rostova',
    role: 'VP of Infrastructure at FinCore Global',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    testimonial:
      'The zero trust security and sovereign enclave architecture allowed us to clear rigorous financial compliance across 6 jurisdictions with zero friction.',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'VP of Infrastructure at FinCore Global',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    testimonial:
      'The zero trust security and sovereign enclave architecture allowed us to clear rigorous financial compliance across 6 jurisdictions with zero friction.',
  },
];