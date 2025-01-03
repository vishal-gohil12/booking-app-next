import { CheckCircle } from 'lucide-react';

interface ThankYouMessageProps {
  name: string | null;
}

export function ThankYouMessage({ name }: ThankYouMessageProps) {
  return (
    <div className="text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
      <h1 className="mt-4 text-3xl font-bold">Thank You, {name}!</h1>
      <p className="mt-2 text-gray-600">
        Your reservation has been confirmed. We look forward to serving you.
      </p>
    </div>
  );
}