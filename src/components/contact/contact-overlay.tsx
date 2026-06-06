'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface ContactOverlayProps {
  onClose: () => void;
}

const interestButtons = [
  'Mobile Development',
  'WEB Development',
  'Web UI/UX Design',
  'Software testing',
  'Digital Marketing',
  'Graphic Design',
  'Email Marketing',
];

const addresses = [
    {
        country: 'Nepal (HQ)',
        address: 'Kathmandu, Nepal',
        phone: '+977 9765142241'
    }
];

export function ContactOverlay({ onClose }: ContactOverlayProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleInterestClick = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const generateMailtoLink = () => {
    const subject = 'Contact Form Submission from ForgeLabs Website';
    const body = `Name: ${name}
Email: ${email}
Interests: ${selectedInterests.join(', ')}

Project Description:
${project}`;
    
    return `mailto:forgelabs.np@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const overlayVariants = {
    hidden: {
      clipPath: 'circle(0% at 95% 5%)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    visible: {
      clipPath: 'circle(150% at 95% 5%)',
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        restDelta: 2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={overlayVariants}
      className="fixed inset-0 bg-primary text-primary-foreground z-[100] p-4 sm:p-8 overflow-y-auto"
    >
      <div className="relative w-full h-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full z-[110] text-primary-foreground hover:bg-white hover:text-primary"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="container mx-auto flex items-center justify-center min-h-full py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl w-full">
            {/* Left side: Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-headline">How can we help you?</h2>
                <p className="mt-4 text-primary-foreground/80 text-lg">
                  Fill out and send a form. Our Team will contact you promptly.
                </p>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold">Addresses</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {addresses.map(addr => (
                        <div key={addr.country}>
                            <p className="font-semibold">{addr.country}</p>
                            <p className="text-primary-foreground/80 mt-2">{addr.address}</p>
                            <p className="text-primary-foreground/80 mt-2">{addr.phone}</p>
                        </div>
                    ))}
                </div>
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col space-y-8"
            >
              <div>
                  <h3 className="text-lg font-semibold mb-4">I'm Interested In...</h3>
                  <div className="flex flex-wrap gap-2">
                      {interestButtons.map(interest => (
                          <Button 
                            key={interest} 
                            variant="outline" 
                            onClick={() => handleInterestClick(interest)}
                            className={cn(
                                "bg-transparent border-primary-foreground/50 text-primary-foreground rounded-full hover:bg-primary-foreground/10",
                                selectedInterests.includes(interest) && "bg-primary-foreground/20"
                            )}
                          >
                              {interest}
                          </Button>
                      ))}
                  </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-lg font-semibold">Tell us about yourself</h3>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className="text-sm text-primary-foreground/80">Your name *</label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent border-0 border-b border-primary-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary-foreground transition" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-primary-foreground/80">Email address *</label>
                        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent border-0 border-b border-primary-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary-foreground transition" />
                    </div>
                    <div>
                        <label htmlFor="project" className="text-sm text-primary-foreground/80">Tell us about your project (optional)</label>
                        <Textarea id="project" value={project} onChange={(e) => setProject(e.target.value)} className="bg-transparent border-0 border-b border-primary-foreground/30 rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-primary-foreground transition min-h-[40px]" />
                    </div>
                </form>
              </div>

                <div className="flex flex-col gap-8">
                    <p className="text-xs text-primary-foreground/60">
                        By clicking send, you'll open your default email client. Your data are safe with us. We take your privacy seriously and we will never share your data.
                    </p>

                    <a href={generateMailtoLink()} className="flex items-center gap-4 group no-underline text-primary-foreground hover:text-primary-foreground">
                        <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center hover:bg-gray-200 transition-colors group">
                            <ArrowRight className="h-6 w-6 transform transition-transform group-hover:rotate-[-45deg]" />
                        </div>
                        <span className="text-lg text-primary-foreground/80">
                            Send request
                        </span>
                    </a>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
