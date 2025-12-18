"use client";
import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const Contact = () => {
  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      // TS FIX: Removed the unused (error) variable
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    // SPACING FIX: Changed 'py-32' to 'pt-32 pb-10' to minimize gap to footer
    <section id="contact" className="pt-32 pb-10 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
                Talk
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              I&apos;m currently open for internships and freelance projects.
              Send me a message directly here, or connect on socials.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {/* THE EMAIL WINDOW FRAME */}
          <div className="relative group perspective-1000">
            {/* Abstract Glow Background */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>

            <div className="relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="bg-zinc-800/50 border-b border-white/5 p-4 flex items-center justify-between backdrop-blur-md">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                  <Mail size={12} />
                  New Message
                </div>
                <div className="w-12"></div>
              </div>

              {/* Email Content Area */}
              <div className="p-6 md:p-8 bg-zinc-950/50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* To Field */}
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <label className="text-zinc-500 text-sm font-medium w-16">
                      To:
                    </label>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                        M
                      </div>
                      <span className="text-blue-200 text-sm">
                        Matthew Insigne
                      </span>
                    </div>
                  </div>

                  {/* From Field */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-white/5 pb-4">
                    <label className="text-zinc-500 text-sm font-medium w-16">
                      From:
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-700 outline-hidden focus:placeholder-zinc-500 text-sm transition-colors"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <label className="text-zinc-500 text-sm font-medium w-16">
                      Subject:
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project Inquiry..."
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-700 outline-hidden focus:placeholder-zinc-500 text-sm font-medium transition-colors"
                    />
                  </div>

                  {/* Message Body */}
                  <div className="pt-2">
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Hi Matthew, I'd like to talk about..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent text-zinc-300 placeholder-zinc-700 outline-hidden resize-none text-sm leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Footer / Send Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    {/* Status Messages */}
                    <div className="text-sm">
                      {status === "success" && (
                        <span className="text-green-400 flex items-center gap-2">
                          <CheckCircle size={16} /> Sent successfully!
                        </span>
                      )}
                      {status === "error" && (
                        <span className="text-red-400 flex items-center gap-2">
                          <XCircle size={16} /> Something went wrong.
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all
                        ${
                          isSubmitting
                            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Alternative Social Links */}
        <Reveal delay={200}>
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="mailto:mjacobinsigne@gmail.com"
              className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <Mail size={16} /> mjacobinsigne@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-jacob-insigne-8639b2312/"
              target="_blank"
              className="text-zinc-500 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
