import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@narsinghsarees.com", "support@narsinghsarees.com"],
      link: "mailto:info@narsinghsarees.com"
    },
    {
      icon: MapPin,
      title: "Store Address",
      details: ["123 Textile Market", "Mumbai, Maharashtra 400001"],
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: 11:00 AM - 6:00 PM"],
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-primary/10 to-gold/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="text-primary" size={32} />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary">
              Get in Touch
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or inquiries
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-gold/20">
              <h2 className="font-heading text-2xl font-bold mb-6 text-primary">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold mb-6 text-primary">
              Contact Information
            </h2>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-gold/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm mb-1">
                        {info.link !== "#" ? (
                          <a href={info.link} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg border border-gold/20 mb-12">
          <h2 className="font-heading text-2xl font-bold mb-6 text-primary">
            Visit Our Store
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-gold/10 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-primary" size={48} />
              <p className="font-heading text-xl font-semibold text-primary mb-2">
                Narsingh Sarees - Main Store
              </p>
              <p className="text-muted-foreground">
                123 Textile Market, Mumbai, Maharashtra 400001
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-primary to-gold rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Find quick answers to common questions about our products, shipping, and services
          </p>
          <Button size="lg" variant="secondary" className="px-8">
            View FAQ
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
