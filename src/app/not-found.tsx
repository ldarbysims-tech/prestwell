import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-cream-50">
      <div className="text-center max-w-md">
        <p className="font-display text-[8rem] font-medium text-cream-300 leading-none
                       select-none">
          404
        </p>
        <h1 className="font-display text-3xl font-medium text-navy-700 -mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-base text-slate-mid leading-relaxed mb-8">
          The page you're looking for doesn't exist. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
