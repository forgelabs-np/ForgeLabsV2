'use client';
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        title: "Mobile App Development",
        description: "We build scalable and secure apps for businesses of different industries, be it edtech, healthcare, or ecommerce. Our mobile app development team has created dozens of native and cross-platform solutions used all over the world.",
        value: "item-1"
    },
    {
        title: "Web Development",
        description: "Our web development services include building sites from scratch, customizing various CMS environments, making web apps, and providing post-release maintenance. We stay in tune with the latest technologies to build fast, feature-rich, and beautiful websites.",
        value: "item-2"
    },
    {
        title: "UX/UI Design",
        description: "We provide UX/UI design services for any software project. We can audit your existing designs, improve and expand them, as well as develop new UX flows and interfaces for apps and websites based on your requirements.",
        value: "item-3"
    },
    {
        title: "Software Testing",
        description: "We offer a full cycle of software testing for web and mobile solutions. Our team will meticulously identify, document, and fix all issues of your software product, ensuring its high quality and fail-safe performance.",
        value: "item-4"
    },
    {
        title: "Graphic Design",
        description: "We create stunning visual identities, branding materials, and graphics that captivate audiences. From logos and marketing collateral to website visuals and print designs, our graphic design team delivers pixel-perfect assets tailored to your brand's unique voice and goals.",
        value: "item-5"
    },
    {
        title: "Email Marketing",
        description: "We design high-converting email campaigns that drive engagement and sales. Our email marketing services include template creation, automation workflows, audience segmentation, A/B testing, and performance analytics to maximize your ROI across platforms like Mailchimp and Klaviyo.",
        value: "item-6"
    },
    {
        title: "DevOps",
        description: "We streamline your development pipeline with robust DevOps practices, including CI/CD automation, cloud infrastructure setup, containerization with Docker/Kubernetes, and monitoring solutions. Our team ensures reliable deployments, scalability, and minimal downtime for your applications.",
        value: "item-7"
    },
];

const Accordion = AccordionPrimitive.Root;
const AccordionItem = AccordionPrimitive.Item;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between py-6 font-medium transition-all hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
      <div className="relative h-5 w-5">
          <Plus className="h-5 w-5 shrink-0 transition-all duration-300 ease-in-out group-data-[state=open]:opacity-0 group-data-[state=open]:-rotate-90" />
          <Minus className="absolute inset-0 h-5 w-5 shrink-0 transition-all duration-300 ease-in-out opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export function Services() {
    const [openValue, setOpenValue] = React.useState<string>('');

    return (
        <section id="services" className="w-full py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
                    <Image 
                        src="/services.png" 
                        alt="Our Services" 
                        fill
                        className="object-contain rounded-xl"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="mb-12">
                        <h2 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl font-headline">
                            Services<span className="text-primary">.</span>
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full" value={openValue} onValueChange={setOpenValue}>
                        {services.map((service) => (
                            <AccordionItem key={service.value} value={service.value} className="border-b">
                                <AccordionTrigger>
                                    <span className={cn("text-xl font-medium text-left", openValue === service.value && "text-primary")}>
                                        {service.title}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                                    <p>{service.description}</p>
                                    <Link href="/services" className="text-primary font-medium hover:underline mt-4 inline-block">
                                        Read more
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
