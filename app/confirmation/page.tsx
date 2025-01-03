"use client";

import { useSearchParams } from "next/navigation";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { ThankYouMessage } from "@/components/booking/ThankYouMessage";
import { Suspense } from "react";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const bookingDetails = {
    name: searchParams.get("name"),
    date: searchParams.get("date"),
    time: searchParams.get("time"),
    guests: searchParams.get("guests"),
    email: searchParams.get("email"),
    phone: searchParams.get("phone"),
  };

  return (
    <Suspense fallback={<div>Loading confirmation details...</div>}>
      <div className="container mx-auto px-4 py-16">
        <ThankYouMessage name={bookingDetails.name} />
        <BookingSummary booking={bookingDetails} />
      </div>
    </Suspense>
  );
}
