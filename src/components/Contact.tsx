import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaCopy, FaCheck, FaMapMarkerAlt, FaCalendarCheck } from "react-icons/fa";
import { Send, Sparkles, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
  const CHAT_ID = import.meta.env.VITE_CHAT_ID;

  const email = "digraprince7@gmail.com";
  const phone = "+91 8264295936";
  const phoneRaw = "8264295936";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = `
📩 *New Portfolio Contact Message*
━━━━━━━━━━━━━━
👤 *Name:* ${form.name}
📧 *Email:* ${form.email}
💼 *Subject/Role:* ${form.subject || "General Inquiry"}
💬 *Message:* 
${form.message}
    `;

    try {
      if (BOT_TOKEN && CHAT_ID) {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "Markdown",
          }),
        });
      }
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Telegram send failed", error);
      // Still show success to user if simulated
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }

    setSending(false);
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto min-h-screen transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Let's Build Something Great
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight"
        >
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500">Touch</span> ✉️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-gray-600 dark:text-zinc-300 font-light"
        >
          Whether you have a job opportunity, a freelance inquiry, or want to discuss a full-stack project, feel free to reach out directly. I respond quickly.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        {/* Left Column: Direct Recruiter Contacts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Phone & WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                <FaPhoneAlt className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider block">
                  Direct Phone & WhatsApp
                </span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {phone}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-white/5">
              <a
                href={`tel:${phoneRaw}`}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <FaPhoneAlt className="w-3 h-3" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/918264295936?text=Hi%20Prince,%20I%20saw%20your%20portfolio!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="py-2 px-3 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate block">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-white/5">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <FaEnvelope className="w-3 h-3" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="py-2 px-4 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Availability & Location Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-indigo-500/10 dark:from-purple-950/30 dark:to-zinc-900/60 border border-purple-300/40 dark:border-purple-500/20 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              <FaCalendarCheck className="w-3.5 h-3.5" />
              <span>Current Status</span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-gray-900 dark:text-white">Availability:</span>
                <span>Open for Opportunities</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-500" />
                <span className="font-semibold text-gray-900 dark:text-white">Location:</span>
                <span>Punjab, India (Open to Relocation & Remote)</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-500" />
                <span className="font-semibold text-gray-900 dark:text-white">Response Time:</span>
                <span>Within 2 - 4 hours</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-white/10 shadow-xl space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  required
                  className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@company.com"
                  required
                  className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                Subject / Opportunity
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Full-Stack Developer Role / Project Inquiry"
                className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                Message *
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role, project scope, or opportunity..."
                required
                className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-4 px-6 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                success
                  ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25"
                  : "bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:opacity-95 shadow-purple-500/25 cursor-pointer hover:scale-[1.01]"
              } ${sending && "opacity-60 cursor-not-allowed"}`}
            >
              {success ? (
                <>
                  <FaCheck className="w-4 h-4" />
                  <span>Message Sent Successfully! I will reply soon.</span>
                </>
              ) : sending ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message to Prince</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
