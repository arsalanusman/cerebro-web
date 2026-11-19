/**
 * Proof items (Testimonials and Case Study cards).
 * Renders nothing until approved items exist per docs/site-rules.md
 */

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudyItem {
  title: string;
  summary: string;
  metrics: string;
  link: string;
}

export const approvedProof = {
  testimonials: [] as TestimonialItem[],
  caseStudies: [] as CaseStudyItem[],
};
