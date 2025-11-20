"use client";

import { agencyConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { Plane, Hotel, Map, Moon, Phone, Mail, MapPin, Instagram, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const IconMap: Record<string, any> = {
    Plane: Plane,
    Hotel: Hotel,
    Map: Map,
    Moon: Moon,
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter uppercase"
          >
            {agencyConfig.name}
          </motion.div>
          
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
            <a href="#services" className="hover:underline decoration-2 underline-offset-4">Services</a>
            <a href="#destinations" className="hover:underline decoration-2 underline-offset-4">Destinations</a>
            <a href="#contact" className="hover:underline decoration-2 underline-offset-4">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="md:hidden bg-black text-white overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-bold uppercase">
              <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            {agencyConfig.hero.title}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {agencyConfig.hero.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a 
              href="#destinations"
              className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-gray-900 transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              {agencyConfig.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y-2 border-black bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {agencyConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-5xl md:text-7xl font-black mb-2">{stat.value}</div>
                <div className="text-lg font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-20 uppercase tracking-tighter"
          >
            Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agencyConfig.services.map((service, index) => {
              const Icon = IconMap[service.icon] || Plane;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-black p-8 hover:bg-black hover:text-white transition-colors group"
                >
                  <Icon className="w-12 h-12 mb-6 stroke-[1.5]" />
                  <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                  <p className="font-medium text-gray-600 group-hover:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-32 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-20 uppercase tracking-tighter"
          >
            Destinations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agencyConfig.destinations.map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-2">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                    <p className="font-bold text-lg mb-2">{dest.duration}</p>
                    <p className="text-3xl font-black">{dest.price}</p>
                  </div>
                </div>
                <h3 className="text-3xl font-black mt-6 uppercase">{dest.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 border-t-2 border-black">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {agencyConfig.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-black text-white p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
              >
                <div className="text-6xl font-serif mb-4">"</div>
                <p className="text-xl font-medium mb-6 leading-relaxed">{testimonial.text}</p>
                <p className="font-bold uppercase tracking-widest text-gray-400">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            {agencyConfig.ctaSection.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            {agencyConfig.ctaSection.subtitle}
          </p>
          <a 
            href="#contact"
            className="inline-block bg-white text-black px-12 py-5 text-xl font-black uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            {agencyConfig.ctaSection.button}
          </a>
        </motion.div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-white text-black pt-20 pb-10 px-6 border-t-2 border-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
            <div>
              <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">Contact</h3>
              <div className="space-y-6 text-xl font-bold">
                <a href={`tel:${agencyConfig.contact.phone}`} className="flex items-center gap-4 hover:text-gray-600">
                  <Phone className="w-6 h-6" />
                  {agencyConfig.contact.phone}
                </a>
                <a href={`mailto:${agencyConfig.contact.email}`} className="flex items-center gap-4 hover:text-gray-600">
                  <Mail className="w-6 h-6" />
                  {agencyConfig.contact.email}
                </a>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  {agencyConfig.contact.address}
                </div>
                <a href="#" className="flex items-center gap-4 hover:text-gray-600">
                  <Instagram className="w-6 h-6" />
                  {agencyConfig.contact.instagram}
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-end">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter opacity-10 uppercase">
                {agencyConfig.name}
              </h2>
            </div>
          </div>
          
          <div className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center font-bold text-sm uppercase tracking-widest">
            <p>&copy; 2025 {agencyConfig.name}. All rights reserved.</p>
            <p>Designed with ❤️ in Algeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
