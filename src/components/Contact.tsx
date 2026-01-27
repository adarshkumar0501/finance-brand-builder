import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Download, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_lwghpoh',
        'template_kkkweml',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Adarsh Kumar'
        },
        'qNsXiO1na7VEZExFS'
      );

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll respond within 24 hours.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or reach out via email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/adarshkumar-',
      href: 'https://www.linkedin.com/in/adarshkumar-',
      primary: true
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'adarshkumar05012002@gmail.com',
      href: 'mailto:adarshkumar05012002@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8789211917',
      href: 'tel:+918789211917'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 finance-grid opacity-50"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-primary mb-4">Get in Touch</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Connect for opportunities, analytical projects, or discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Links */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
              >
                <a 
                  href="https://www.linkedin.com/in/adarshkumar-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent/5 hover:border-accent flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                const isAccent = index % 2 === 1;
                const content = (
                  <Card className={`border-border bg-card hover:shadow-sm transition-all duration-200 ${
                    isAccent ? 'hover:border-accent/30' : 'hover:border-primary/30'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${isAccent ? 'bg-accent/10' : 'bg-primary/10'}`}>
                          <Icon className={`w-5 h-5 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{link.label}</p>
                          <p className="text-foreground font-medium">{link.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return link.href ? (
                  <a 
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={link.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="border-border focus:border-primary focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="border-border focus:border-primary focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can I help?"
                    rows={4}
                    className="border-border focus:border-primary focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Adarsh Kumar. Financial Analyst | BBA Finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;