"use client";

import { agencyConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formState);
    alert("Message ta3ek wsal! Nraja3oulek fi a9rab wa9t.");
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 font-bold uppercase tracking-widest hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Wali l'Home
          </Link>
          <div className="text-xl font-black tracking-tighter uppercase">
            {agencyConfig.name}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Contactina
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              3andek so2al? Hab treservi? Wala hab ta3ref ktar? 3amar l'formulaire w hna n3aytoulak.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black text-white p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] h-full">
                <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">
                  Ma3loumat
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <Phone className="w-8 h-8 mt-1" />
                    <div>
                      <h3 className="font-bold uppercase tracking-widest text-gray-400 mb-1">Téléphone</h3>
                      <p className="text-xl font-bold">{agencyConfig.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <Mail className="w-8 h-8 mt-1" />
                    <div>
                      <h3 className="font-bold uppercase tracking-widest text-gray-400 mb-1">Email</h3>
                      <p className="text-xl font-bold">{agencyConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <MapPin className="w-8 h-8 mt-1" />
                    <div>
                      <h3 className="font-bold uppercase tracking-widest text-gray-400 mb-1">Adresse</h3>
                      <p className="text-xl font-bold">{agencyConfig.contact.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800">
                  <p className="text-gray-400">
                    Rana hna bach njaoubouk 24/7. Marhba bik fi ay wa9t.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-bold uppercase tracking-wider text-sm">Ismek</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:bg-white transition-colors"
                      placeholder="Foulen Ben Foulen"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-bold uppercase tracking-wider text-sm">Numéro Tél</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:bg-white transition-colors"
                      placeholder="0550..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-bold uppercase tracking-wider text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:bg-white transition-colors"
                    placeholder="example@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-bold uppercase tracking-wider text-sm">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:bg-white transition-colors resize-none"
                    placeholder="Kifach na9der n3awnek?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-black uppercase tracking-widest py-5 hover:bg-gray-900 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Ab3ath Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
