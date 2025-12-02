"use client";

import { useState } from "react";
import ContactCard from "./ContactCard";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setError("Please fill all the fields.");
      setSuccess("");
      return;
    }

    setError("");

    // Send to backend API
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setSuccess("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError("Something went wrong. Try again!");
    }
  };

  return (
    <div id="Contact" className="w-full py-20 px-6 bg-gradient-to-br from-white to-purple-50">

      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-3">
        Get In <span className="text-purple-600">Touch</span>
      </h1>

      <p className="text-center text-gray-600 text-lg mb-16">
        Have a project in mind? Let's work together to create something amazing
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-semibold mb-3">Let's Talk</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects or ideas.
          </p>

          <div className="flex flex-col gap-6">
            <ContactCard
              icon={Mail}
              title="Email"
              value="mohiteakanksha700@gmail.com"
              color="#A855F7"
            />

            <ContactCard
              icon={MapPin}
              title="Location"
              value="India"
              color="#3B82F6"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-lg border">

          {/* Error */}
          {error && (
            <p className="text-red-600 font-medium mb-3">{error}</p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-600 font-medium mb-3">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl bg-gray-100"
            />

            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl bg-gray-100"
            />

            <textarea
              rows="3"
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl bg-gray-100"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
            >
              Send Message <Send size={18} />
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
