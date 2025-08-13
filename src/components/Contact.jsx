import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xjkolqdq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mt-32 px-8 max-w-4xl mx-auto">
      <h3 className="text-4xl font-bold text-violet-300 mb-8 text-center drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
        Contact Me
      </h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-purple-950 bg-opacity-40 backdrop-blur-lg p-8 rounded-2xl border border-violet-500/30 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-transparent border border-violet-500 text-violet-200 placeholder-violet-400 focus:outline-none focus:border-violet-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-transparent border border-violet-500 text-violet-200 placeholder-violet-400 focus:outline-none focus:border-violet-300"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg bg-transparent border border-violet-500 text-violet-200 placeholder-violet-400 focus:outline-none focus:border-violet-300"
          required
        ></textarea>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-full shadow-lg shadow-violet-500/50 transition"
          >
            {status === "loading"
              ? "Sending..."
              : status === "success"
              ? "Message Sent!"
              : "Send Message"}
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm mt-2 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
