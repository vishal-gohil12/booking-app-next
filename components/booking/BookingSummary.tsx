import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface BookingSummaryProps {
  booking: {
    name?: string | null;
    date?: string | null;
    time?: string | null;
    guests?: string | null;
    email?: string | null;
    phone?: string | null;
  };
}

export function BookingSummary({ booking }: BookingSummaryProps) {
  const formattedDate = booking.date
    ? format(new Date(booking.date), "MMMM d, yyyy")
    : "";

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Booking Details</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-4">
          <div className="flex justify-between">
            <dt className="font-medium">Name:</dt>
            <dd>{booking.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Date:</dt>
            <dd>{formattedDate}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Time:</dt>
            <dd>{booking.time}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Guests:</dt>
            <dd>{booking.guests}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Email:</dt>
            <dd>{booking.email}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium">Phone:</dt>
            <dd>{booking.phone}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
