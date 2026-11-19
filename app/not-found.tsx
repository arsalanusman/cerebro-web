import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Cerebro DNano",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <div className="py-24 lg:py-36 min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-small font-semibold text-brand mb-3 uppercase tracking-wider">
            404 Error
          </p>
          <h1 className="text-h1-mobile lg:text-h1 font-heading font-semibold text-ink tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-body-lg text-muted max-prose-72ch mx-auto mb-10">
            The page you are looking for does not exist or has been moved. You can return to our homepage, explore our platform capabilities, or get in touch.
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4">
            <Button href="/" variant="primary" size="lg">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Return Home
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Platform Overview
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Us <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
