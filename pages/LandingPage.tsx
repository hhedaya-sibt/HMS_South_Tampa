import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import { Check, Shield, Clock, Search, FileText, Wrench, Star, ArrowRight, MapPin, ChevronDown, ChevronUp, Phone, Loader2 } from 'lucide-react';

// --- Subcomponents ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-stone-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop" 
          alt="Luxury Home Exterior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-brand-sage/20 text-brand-sage-light border border-brand-sage/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            South Tampa's Premier Home Care
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-6 shadow-sm">
            Monthly Home Maintenance Service for South Tampa Homeowners
          </h1>
          <p className="text-lg md:text-xl text-stone-200 font-light leading-relaxed mb-10 max-w-xl">
            HMS provides preventative home maintenance and concierge care for busy professionals and families in Tampa, FL. From HVAC filter changes to roof inspections, we handle the monthly tasks that protect your home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-sage text-white px-8 py-4 rounded-sm font-medium text-lg hover:bg-emerald-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Join the Founding Member Program
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="px-8 py-4 rounded-sm font-medium text-lg text-white border border-white/30 hover:bg-white/10 transition-all text-center"
            >
              How It Works
            </button>
          </div>

          <div className="flex items-center gap-3 text-stone-400 text-sm">
            <Shield className="w-5 h-5 text-brand-sage-light" />
            <p>Trusted preventative home care serving Hyde Park, Davis Islands, Palma Ceia, and Beach Park</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureList = () => {
  return (
    <Section id="services" bg="cream">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
          What HMS Home Maintenance Service Includes
        </h2>
        <p className="text-stone-600 leading-relaxed text-lg">
          HMS is a subscription-based preventative home maintenance program for Tampa homeowners who want their property professionally maintained every month. A trained technician visits your home, completes a customized maintenance checklist, identifies potential issues early, and coordinates with licensed contractors when specialized work is needed.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
         {[
            { title: "Routine Maintenance", icon: <Check className="w-6 h-6 text-brand-sage" />, desc: "Regular tasks like HVAC filter replacement and gutter cleaning done for you." },
            { title: "Detailed Reporting", icon: <FileText className="w-6 h-6 text-brand-sage" />, desc: "Receive a comprehensive report with photos after every visit." },
            { title: "Contractor Coordination", icon: <Wrench className="w-6 h-6 text-brand-sage" />, desc: "We handle the headache of scheduling licensed professionals when repairs are needed." }
         ].map((item, i) => (
           <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
             <div className="bg-brand-sage-light/30 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                {item.icon}
             </div>
             <h3 className="text-xl font-serif font-bold text-brand-navy mb-3">{item.title}</h3>
             <p className="text-stone-600">{item.desc}</p>
           </div>
         ))}
      </div>
    </Section>
  );
};

const HiddenCost = () => {
  return (
    <Section bg="white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] hidden md:block rounded-sm overflow-hidden shadow-lg">
             <img 
              src="https://storage.googleapis.com/msgsndr/Z9VkbpvTwFPgODZUYAw7/media/6929d95d32bffb1a4ca2a8bc.png" 
              alt="South Tampa Mediterranean Estate" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/5"></div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
            The Hidden Cost of Skipping Regular Home Maintenance in Florida
          </h2>
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              Florida's climate is tough on homes. Heat, humidity, tropical storms, and heavy rain accelerate wear on roofs, HVAC systems, plumbing, and exterior surfaces. Most Tampa homeowners know they should check air filters, clean gutters, inspect for leaks, and maintain their irrigation systems. But between work, family, and daily life, these tasks get pushed aside.
            </p>
            <p>
              That's when small issues become expensive problems. A clogged AC drain line becomes water damage. A missed roof inspection after a storm becomes a $15,000 replacement. A slow leak goes unnoticed until mold appears.
            </p>
            <p className="font-medium text-brand-navy border-l-4 border-brand-sage pl-4 italic">
              Preventative home maintenance exists to catch these issues early. HMS provides monthly service visits that protect your Tampa home from the wear Florida weather causes.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, children }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-brand-navy text-white font-serif font-bold text-xl flex items-center justify-center">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-brand-navy mb-2">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{children}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <Section id="process" bg="cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Our Monthly Home Care Process</h2>
          <div className="h-1 w-20 bg-brand-sage mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          <ProcessStep number="1" title="Scheduled Monthly Home Visit">
            Your HMS technician arrives at your Tampa home on the same day each month. We prioritize consistency so you always know when to expect us.
          </ProcessStep>
          <ProcessStep number="2" title="Complete Your Home Maintenance Checklist">
            We perform your customized preventative maintenance tasks: HVAC filter replacement, plumbing fixture inspections, gutter cleaning, door and window seal checks, irrigation system testing, and garage door maintenance.
          </ProcessStep>
          <ProcessStep number="3" title="Early Problem Detection">
            While completing your checklist, we inspect for early warning signs. Roof damage from recent storms. Slow plumbing leaks. Worn weather stripping. HVAC issues. Anything requiring attention gets documented.
          </ProcessStep>
          <ProcessStep number="4" title="Detailed Reporting and Contractor Coordination">
            After each visit, you receive a report with photos and notes about your home's condition. If we identify issues requiring licensed professionals (plumbers, electricians, roofers), we coordinate repairs for you.
          </ProcessStep>
        </div>
      </div>
    </Section>
  );
};

const Pricing = () => {
  return (
    <Section id="pricing" bg="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">
          Choose Your Monthly Home Maintenance Plan
        </h2>
        <p className="text-stone-600">Transparent pricing for comprehensive peace of mind.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Essentials Plan */}
        <div className="bg-white border border-stone-200 rounded-sm p-8 shadow-sm hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">The Essentials</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-sm text-stone-500">Starting at</span>
            <span className="text-3xl font-bold text-brand-navy">$149</span>
            <span className="text-stone-500">/mo</span>
          </div>
          <p className="text-sm text-stone-600 mb-8 pb-8 border-b border-stone-100">
            Our basic preventative home maintenance plan for Tampa homeowners who want consistent care without the worry.
          </p>
          <ul className="space-y-4">
            {[
              "HVAC filter inspection & maintenance",
              "Light bulb inspection & replacement",
              "Smoke & CO detector testing",
              "Plumbing fixture leak inspection",
              "Exterior door seals",
              "Fridge filter inspection & change",
              "Kitchen appliance Inspection",
              "Washer/dryer vent inspection",
              "Garage door & lube inspection",
              "Monthly report with photos",
              "24/7 emergency hotline"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-700">
                <Check className="w-5 h-5 text-brand-sage flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Steward Plan */}
        <div className="bg-brand-navy text-white border-none rounded-sm p-8 shadow-xl relative transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-brand-sage text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Most Popular</div>
          <h3 className="text-2xl font-serif font-bold mb-2">The Steward</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-sm text-stone-300">Starting at</span>
            <span className="text-3xl font-bold text-white">$249</span>
            <span className="text-stone-300">/mo</span>
          </div>
          <p className="text-sm text-stone-300 mb-8 pb-8 border-b border-white/10">
            Comprehensive preventative maintenance for Tampa homeowners who want to avoid surprise repairs.
          </p>
          <ul className="space-y-4">
            <li className="font-semibold text-brand-sage-light">Everything in Essentials, plus:</li>
            {[
              "Water leak & trend monitoring",
              "Interior door hinge lube",
              "Electric audit & monitoring",
              "Drain inspection & monitoring",
              "Annual water heater flush",
              "Roof & attic inspection",
              "Lower exterior caulk inspection",
              "Pest entry point inspection",
              "Annual gutter inspection",
              "Priority repair scheduling"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-200">
                <Check className="w-5 h-5 text-brand-sage-light flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Estate Plan */}
        <div className="bg-white border border-stone-200 rounded-sm p-8 shadow-sm hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">The Estate</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-sm text-stone-500">Starting at</span>
            <span className="text-3xl font-bold text-brand-navy">Custom</span>
            <span className="text-stone-500">/mo</span>
          </div>
          <p className="text-sm text-stone-600 mb-8 pb-8 border-b border-stone-100">
            Full-service home custom stewardship for larger Tampa properties or discerning homeowners.
          </p>
          <ul className="space-y-4">
            <li className="font-semibold text-brand-navy">Everything in Steward, plus:</li>
            {[
              "Custom requests",
              "Vendor appointment supervision",
              "Mail & package processing",
              "WIFI Dead zone monitoring",
              "Landscape irrigation inspection",
              "Pool equipment inspection",
              "Outdoor lighting inspection",
              "Deck, fence, & pergola inspection",
              "Whole-home systems monitoring",
              "Quarterly walk-through with owner",
              "Dedicated voice/SMS concierge"
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-stone-700">
                <Check className="w-5 h-5 text-brand-sage flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

const ConciergeSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
         <img 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop" 
          alt="Family walking in a park near home" 
          className="w-full h-full object-cover opacity-40 grayscale mix-blend-multiply"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Concierge-Level Home Care in South Tampa</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-light leading-relaxed text-stone-200">
          <p>
            Most handyman services in Tampa only show up when something breaks. HMS provides proactive monthly maintenance designed to prevent expensive repairs before they happen. Our technicians are trained specifically in Florida home care: humidity control, hurricane preparation, HVAC efficiency in Tampa's heat, and the unique maintenance challenges South Tampa homes face.
          </p>
          <p>
            You don't chase contractors. You don't manage a maintenance calendar. You don't wonder if your home is being properly cared for. HMS provides white-glove service that makes homeownership effortless.
          </p>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <Section id="testimonials" bg="cream">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">What South Tampa Homeowners Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { text: "I didn't realize how much mental energy I was spending worrying about home maintenance until HMS took it all off my plate.", author: "Sarah T.", location: "Hyde Park" },
          { text: "They found a roof leak during a routine visit that would have cost me tens of thousands if it had gone unnoticed another month.", author: "Michael R.", location: "Davis Islands" },
          { text: "It's like having a property manager for your own home. I can't imagine going back to the old way.", author: "Jennifer and Paul K.", location: "Palma Ceia" }
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-stone-100 flex flex-col">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-brand-gold fill-current" />)}
            </div>
            <p className="text-stone-600 italic mb-6 flex-grow">"{t.text}"</p>
            <div>
              <p className="font-bold text-brand-navy font-serif">{t.author}</p>
              <p className="text-xs uppercase tracking-wide text-brand-sage">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

interface FaqItemProps {
  q: string;
  a: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-stone-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif font-bold text-brand-navy pr-8">{q}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-sage" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-stone-600 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What does preventative home maintenance include?", a: "Preventative home maintenance includes monthly inspections and maintenance tasks designed to catch problems early and extend the life of your home's systems. This includes HVAC filter changes, plumbing inspections, gutter cleaning, roof checks, appliance maintenance, and more depending on your plan level." },
    { q: "How often do you visit my Tampa home?", a: "HMS provides monthly home maintenance visits. We schedule the same day each month so you always know when to expect us." },
    { q: "Do you service homes outside South Tampa?", a: "Currently, HMS serves South Tampa, Hyde Park, Davis Islands, Palma Ceia, Beach Park, and immediately surrounding neighborhoods. We're expanding throughout Tampa Bay in 2025." },
    { q: "What if you find a problem that needs a licensed contractor?", a: "We coordinate with licensed plumbers, electricians, roofers, and other specialists on your behalf. You approve any work before it's scheduled, and we ensure it's completed properly." },
    { q: "How much does home maintenance service cost in Tampa?", a: "Our preventative maintenance plans start at $149/month for essential care, $249/month for comprehensive maintenance, and $399/month for full estate-level service." },
    { q: "Is HMS a handyman service?", a: "No. HMS is a preventative maintenance program, not a reactive repair service. We focus on consistent monthly care that prevents expensive problems rather than fixing things after they break." },
    { q: "Can I cancel my home maintenance plan?", a: "Yes. We require 30 days notice for cancellation. Founding Members receive special pricing guarantees during their initial 12-month period." },
  ];

  return (
    <Section bg="white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div>
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>
      </div>
    </Section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Convert FormData to JSON for better handling if needed, 
    // but Formspree accepts FormData directly via fetch as well.
    
    try {
      const response = await fetch('https://formspree.io/f/mkglkvpe', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" bg="cream">
      <div className="grid md:grid-cols-12 gap-12 bg-white rounded-sm shadow-xl overflow-hidden border border-stone-100">
        <div className="md:col-span-5 bg-brand-navy text-white p-12 flex flex-col justify-between">
          <div>
            <span className="text-brand-gold font-bold tracking-wider uppercase text-xs mb-4 block">Limited Spots Available</span>
            <h2 className="text-3xl font-serif font-bold mb-6">Join Our Tampa Founding Member Program</h2>
            <p className="text-stone-300 mb-8 leading-relaxed">
              HMS is launching with limited Founding Member spots for South Tampa homeowners. Early members receive priority scheduling, locked introductory pricing, and first access to expanded services.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Priority monthly scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">Introductory pricing locked for 12 months</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-gold" />
                <span className="text-sm">First access to new maintenance services</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-serif text-lg mb-2">Contact Us</p>
             <div className="flex items-center gap-2 text-stone-300">
                <Phone size={18} />
                <span className="font-medium">(813) 705-5705</span>
              </div>
          </div>
        </div>

        <div className="md:col-span-7 p-12">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-brand-sage/20 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-brand-sage" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">You're on the list!</h3>
              <p className="text-stone-600 max-w-md">
                Thank you for your interest in the HMS Founding Member Program. We have received your inquiry and will be in touch shortly to discuss your home maintenance needs.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-brand-sage font-medium hover:text-brand-navy transition-colors underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-serif font-bold text-brand-navy mb-2">Schedule Your Service</h2>
              <p className="text-stone-500 mb-8">
                Ready to protect your South Tampa home? Get on the waitlist or{' '}
                <a 
                  href="https://booking.hmssouthtampa.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-sage underline hover:text-brand-navy"
                >
                  schedule a consultation
                </a>.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                    <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone</label>
                    <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none" placeholder="(813) 555-0123" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none" placeholder="john@example.com" />
                </div>
                
                 <div>
                  <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-1">South Tampa Property Address</label>
                  <input type="text" name="address" id="address" required className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none" placeholder="123 Bayshore Blvd" />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-stone-700 mb-1">Plan Interest</label>
                  <select name="plan" id="plan" className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none bg-white">
                    <option value="">Select a plan...</option>
                    <option value="essentials">Essentials Plan ($149/mo)</option>
                    <option value="steward">Steward Plan ($249/mo)</option>
                    <option value="estate">Custom Estate Plan</option>
                    <option value="unsure">Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message (Optional)</label>
                  <textarea name="message" id="message" rows={3} className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" name="consent" id="consent" required className="mt-1 w-4 h-4 text-brand-sage border-stone-300 rounded focus:ring-brand-sage" />
                  <label htmlFor="consent" className="text-xs text-stone-500 leading-normal">
                    By providing my phone number, I agree to receive text messages from Homeowners Maintenance Services (HMS) about my inquiry, appointment scheduling, service updates, and promotional offers. Message and data rates may apply. Message frequency varies. Reply STOP to opt out or HELP for help. See our <Link to="/privacy-policy" className="underline text-brand-navy">Privacy Policy and Terms of Service</Link>.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-sage text-white font-medium py-3 rounded-sm hover:bg-emerald-800 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get on the Waitlist'
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <p className="text-[10px] text-stone-400 text-center leading-normal">
                  By submitting this form, you consent to receive marketing text messages and phone calls from Homeowners Maintenance Services at the phone number provided, including messages sent by autodialer. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply STOP to cancel or HELP for help.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

const LandingPage = () => {
  return (
    <>
      <Hero />
      <FeatureList />
      <HiddenCost />
      <HowItWorks />
      <Pricing />
      <ConciergeSection />
      <Section id="area" bg="white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Serving South Tampa's Premier Neighborhoods</h2>
            <div className="flex flex-wrap justify-center gap-4 text-stone-600">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-sage" /> Hyde Park</span>
                <span className="hidden md:inline text-stone-300">|</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-sage" /> Davis Islands</span>
                <span className="hidden md:inline text-stone-300">|</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-sage" /> Palma Ceia</span>
                <span className="hidden md:inline text-stone-300">|</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-sage" /> Beach Park</span>
                <span className="hidden md:inline text-stone-300">|</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-brand-sage" /> South Tampa</span>
            </div>
        </div>
      </Section>
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default LandingPage;