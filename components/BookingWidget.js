"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";

const TIME_SLOTS = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function BookingWidget() {
  const { isOpen, openWidget, closeWidget, formData, setFormData, submitted, setSubmitted } = useBooking();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = "Valid email required";
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length < 10) e.phone = "Valid phone required";
    if (!formData.date) e.date = "Pick a date";
    if (!formData.time) e.time = "Pick a time";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field) => (ev) => {
    setFormData((prev) => ({ ...prev, [field]: ev.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Get tomorrow as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <>
      {/* Floating trigger button — always visible when widget is closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={openWidget}
            className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-[#ff5339] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Book a consultation"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Widget panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (mobile only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeWidget}
              className="fixed inset-0 bg-black/40 z-50 md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 
                bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto rounded-t-2xl
                md:bottom-6 md:right-6 md:left-auto md:w-[380px] md:max-h-[85vh] md:rounded-2xl
                bg-white border border-neutral-200 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-neutral-200 bg-primary rounded-t-2xl md:rounded-t-2xl">
                <h3 className="text-lg font-serif font-bold text-white">Book a Free Consultation</h3>
                <button onClick={closeWidget} className="text-white/70 hover:text-white transition-colors cursor-pointer" aria-label="Close">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-5">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-primary mb-2">Booking Confirmed!</h4>
                    <p className="text-neutral-600 mb-1">Thank you, {formData.name}.</p>
                    <p className="text-neutral-600 mb-6 text-sm">We will contact you at <span className="font-medium">{formData.email}</span> to confirm your appointment on <span className="font-medium">{formData.date}</span> at <span className="font-medium">{formData.time}</span>.</p>
                    <button onClick={() => { closeWidget(); }} className="text-sm text-primary font-semibold underline underline-offset-4 cursor-pointer">Close</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="bw-name" className="block text-sm font-medium text-neutral-800 mb-1">Full Name *</label>
                      <input id="bw-name" type="text" value={formData.name} onChange={handleChange("name")} placeholder="e.g. Ravi Kumar" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="bw-email" className="block text-sm font-medium text-neutral-800 mb-1">Email *</label>
                      <input id="bw-email" type="email" value={formData.email} onChange={handleChange("email")} placeholder="you@example.com" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="bw-phone" className="block text-sm font-medium text-neutral-800 mb-1">Phone *</label>
                      <input id="bw-phone" type="tel" value={formData.phone} onChange={handleChange("phone")} placeholder="+91 98765 43210" className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    {/* Date */}
                    <div>
                      <label htmlFor="bw-date" className="block text-sm font-medium text-neutral-800 mb-1">Preferred Date *</label>
                      <input id="bw-date" type="date" value={formData.date} onChange={handleChange("date")} min={minDate} className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition" />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    {/* Time */}
                    <div>
                      <label htmlFor="bw-time" className="block text-sm font-medium text-neutral-800 mb-1">Preferred Time *</label>
                      <select id="bw-time" value={formData.time} onChange={handleChange("time")} className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition bg-white">
                        <option value="">Select a time slot</option>
                        {TIME_SLOTS.map((t) => (<option key={t} value={t}>{t}</option>))}
                      </select>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>
                    {/* Submit */}
                    <button type="submit" className="w-full bg-accent hover:bg-[#c09463] text-white font-bold py-3 rounded-lg transition-colors shadow-sm cursor-pointer">
                      Confirm Booking
                    </button>
                    <p className="text-xs text-neutral-400 text-center">100% free · No obligation · Confidential</p>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
