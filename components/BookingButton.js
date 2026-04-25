"use client";
import { useBooking } from "@/lib/BookingContext";

export default function BookingButton({ className, children }) {
  const { openWidget } = useBooking();
  return (
    <button onClick={openWidget} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
