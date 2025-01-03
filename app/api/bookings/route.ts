import { NextResponse } from 'next/server';
const bookings = new Map();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const booking = body.date;
    const bookingKey = `${booking.date}_${booking.time}`;

    if (bookings.has(bookingKey)) {
      return NextResponse.json(
        { error: 'Time slot already booked' },
        { status: 409 }
      );
    }

    bookings.set(bookingKey, booking);

    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ bookings: Array.from(bookings.values()) });
}
