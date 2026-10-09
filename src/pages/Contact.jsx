import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Your message has been sent successfully.");
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#172033] md:text-5xl">
            Let's find your next home
          </h1>

          <p className="mt-5 leading-7 text-[#667085]">
            Have a question about a property or need help finding the right
            home? Our team is ready to help.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact Information */}
          <div className="rounded-3xl bg-[#172033] p-7 text-white md:p-9">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B77A]">
              Get in touch
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              We would love to hear from you.
            </h2>

            <p className="mt-4 leading-7 text-white/60">
              Reach out to our team and we will help you with property
              information, viewings and general questions.
            </p>

            <div className="mt-10 space-y-7">

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Email
                  </p>

                  <p className="mt-1 font-medium">
                    info@realestate.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Phone
                  </p>

                  <p className="mt-1 font-medium">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    Office
                  </p>

                  <p className="mt-1 font-medium">
                    Hyderabad, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-[#E7E5E0] bg-white p-7 shadow-sm md:p-9">

            <h2 className="text-2xl font-semibold text-[#172033]">
              Send us a message
            </h2>

            <p className="mt-2 text-[#667085]">
              Fill out the form and our team will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#172033]">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#172033]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="w-full rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-[#172033]">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-[#E7E5E0] bg-[#FAFAF8] px-4 py-3 outline-none transition focus:border-[#B08D57]"
                />
              </div>

              {/* Success Message */}
              {message && (
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#F0F9F4] px-4 py-3 text-sm text-[#176B45]">
                  <CheckCircle size={17} />
                  {message}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#172033] px-5 py-3.5 font-medium text-white transition hover:bg-[#26344D]"
              >
                Send Message
                <ArrowRight size={18} />
              </button>

            </form>

          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-[#E7E5E0] bg-white p-6">
            <p className="text-sm text-[#667085]">
              Response Time
            </p>

            <h3 className="mt-2 text-lg font-semibold text-[#172033]">
              Within 24 hours
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E7E5E0] bg-white p-6">
            <p className="text-sm text-[#667085]">
              Availability
            </p>

            <h3 className="mt-2 text-lg font-semibold text-[#172033]">
              Monday - Saturday
            </h3>
          </div>

          <div className="rounded-2xl border border-[#E7E5E0] bg-white p-6">
            <p className="text-sm text-[#667085]">
              Property Support
            </p>

            <h3 className="mt-2 text-lg font-semibold text-[#172033]">
              Expert Assistance
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}

