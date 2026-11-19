import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Thank You",
  description: "Your demo request has been received.",
  path: "/demo/thank-you",
  noIndex: true, // Disallowed from indexing per requirements
});

export default function DemoThankYouPage() {
  return (
    <div className="py-24 lg:py-36 min-h-[60vh] flex items-center bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-brand-soft text-brand flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-small font-semibold text-brand mb-2 uppercase tracking-wider">
            Request confirmed
          </p>
          <h1 className="text-h1-mobile lg:text-h1 font-heading font-semibold text-ink tracking-tight mb-4">
            Thank you for requesting a demo.
          </h1>
          <p className="text-body-lg text-muted max-prose-72ch mx-auto mb-10">
            A member of our product engineering team will review your channel requirements and reach out via email within one business day.
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4">
            <Button href="/" variant="primary" size="lg">
              Return Home
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Explore platform features <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
