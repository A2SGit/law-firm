"use client";
import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const openWidget = () => {
    setSubmitted(false);
    setIsOpen(true);
  };
  const closeWidget = () => setIsOpen(false);

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", date: "", time: "" });
    setSubmitted(false);
  };

  return (
    <BookingContext.Provider
      value={{ isOpen, openWidget, closeWidget, formData, setFormData, submitted, setSubmitted, resetForm }}
    >
      {children}
    </BookingContext.Provider>
  );
}
