export interface LogoProof {
  name: string;
  file: string;
  approved: boolean;
}

export interface TestimonialProof {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: string;
  approved: boolean;
}

export interface CaseStudyProof {
  slug: string;
  company: string;
  industry: string;
  summary: string;
  results: string[];
  quote?: string;
  approved: boolean;
}

export interface ProofData {
  logos: LogoProof[];
  testimonials: TestimonialProof[];
  caseStudies: CaseStudyProof[];
}

export const proof: ProofData = {
  logos: [],
  testimonials: [],
  caseStudies: [],
};

export const approvedProof = {
  logos: proof.logos.filter((l) => l.approved),
  testimonials: proof.testimonials.filter((t) => t.approved),
  caseStudies: proof.caseStudies.filter((c) => c.approved),
};
