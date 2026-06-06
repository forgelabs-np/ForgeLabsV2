'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
    {
        title: "Mobile App Development",
        description: "We build scalable and secure apps for businesses of different industries, be it edtech, healthcare, or ecommerce. Our mobile app development team has created dozens of native and cross-platform solutions used all over the world.",
        features: [
            "Native iOS & Android Apps",
            "Cross-Platform (React Native, Flutter)",
            "Backend & API Development",
            "UI/UX Design for Mobile"
        ]
    },
    {
        title: "Web Development",
        description: "Our web development services include building sites from scratch, customizing various CMS environments, making web apps, and providing post-release maintenance. We stay in tune with the latest technologies to build fast, feature-rich, and beautiful websites.",
        features: [
            "Custom Web Applications",
            "E-commerce Solutions",
            "CMS Development (WordPress, etc.)",
            "Progressive Web Apps (PWAs)"
        ]
    },
    {
        title: "UX/UI Design",
        description: "We provide UX/UI design services for any software project. We can audit your existing designs, improve and expand them, as well as develop new UX flows and interfaces for apps and websites based on your requirements.",
        features: [
            "User Research & Analysis",
            "Wireframing & Prototyping",
            "Visual & Interaction Design",
            "Usability Testing"
        ]
    },
    {
        title: "Software Testing",
        description: "We offer a full cycle of software testing for web and mobile solutions. Our team will meticulously identify, document, and fix all issues of your software product, ensuring its high quality and fail-safe performance.",
        features: [
            "Manual & Automated Testing",
            "Performance & Load Testing",
            "Security Testing",
            "Compatibility Testing"
        ]
    },
    {
        title: "Graphic Design",
        description: "We create stunning visual identities, branding materials, and graphics that captivate audiences. From logos and marketing collateral to website visuals and print designs, our graphic design team delivers pixel-perfect assets tailored to your brand's unique voice and goals.",
        features: [
            "Branding & Identity",
            "Marketing & Advertising Materials",
            "Digital & Print Design",
            "Illustration & Iconography"
        ]
    },
    {
        title: "Email Marketing",
        description: "We design high-converting email campaigns that drive engagement and sales. Our email marketing services include template creation, automation workflows, audience segmentation, A/B testing, and performance analytics to maximize your ROI across platforms like Mailchimp and Klaviyo.",
         features: [
            "Campaign Strategy & Management",
            "Template Design & Coding",
            "Automation & Drip Campaigns",
            "Analytics & Reporting"
        ]
    },
    {
        title: "DevOps",
        description: "We streamline your development pipeline with robust DevOps practices, including CI/CD automation, cloud infrastructure setup, containerization with Docker/Kubernetes, and monitoring solutions. Our team ensures reliable deployments, scalability, and minimal downtime for your applications.",
        features: [
            "CI/CD Pipeline Automation",
            "Cloud Infrastructure (AWS, GCP, Azure)",
            "Containerization (Docker, Kubernetes)",
            "Monitoring & Logging"
        ]
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesContent() {
  return (
    <div className="w-full py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground font-headline">
                    Our Services
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We offer a comprehensive suite of services to build, launch, and grow your digital products. Explore our expertise below.
                </p>
            </div>
            <motion.div 
                className="flex flex-wrap justify-center gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-card p-8 rounded-2xl shadow-lg border border-primary/10 transition-shadow duration-300 flex flex-col w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)]"
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                        <div className="space-y-3">
                            {service.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span className="text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  );
}
