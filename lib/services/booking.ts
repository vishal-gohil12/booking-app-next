import { bookingSchema } from '../validators/booking';

export async function createBooking(bookingData: {
  date: Date;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
}) {
  const formattedData = {
    ...bookingData,
    date: bookingData.date.toISOString(),
  };

  const response = await fetch('/api/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formattedData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create booking');
  }

  return response.json();
}