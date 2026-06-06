import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Globe } from "@/components/ui/globe";

const faqs = [
    {
        question: "What services does ForgeLabs specialize in?",
        answer: "ForgeLabs specializes in building enterprise-grade web applications, custom software solutions, graphic design, and digital transformation services tailored for your business needs."
    },
    {
        question: "Can ForgeLabs help with data management and analytics?",
        answer: "Yes, we can help you anticipate future analytical trends and align with best practices in your industry. Our solutions are designed to handle data management and provide valuable analytics."
    },
    {
        question: "What kind of AI solutions does ForgeLabs provide?",
        answer: "We leverage modern AI technologies to build intelligent applications that can automate processes, provide insights, and enhance user experiences. Contact us to discuss your specific AI needs."
    },
    {
        question: "How does team augmentation work with ForgeLabs?",
        answer: "Our team augmentation services allow you to hire our expert developers, designers, and project managers to complement your existing team, providing the flexibility and expertise you need to scale your projects."
    },
    {
        question: "How does ForgeLabs approach UI/UX design?",
        answer: "We focus on crafting stunning and highly functional user interfaces. Our design process is user-centric, ensuring a seamless and engaging experience that keeps users coming back."
    }
]

export function Faq() {
    return (
        <section className="w-full py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col mb-12 text-center">
                     <h2 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl font-headline">
                        FAQs<span className="text-primary">.</span>
                    </h2>
                    <p className="mt-2 text-xl text-muted-foreground">
                        Have questions?
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex w-full justify-center items-center">
                        <div className="relative w-full max-w-[400px] aspect-square">
                            <Globe />
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <Accordion type="single" collapsible className="w-full max-w-2xl">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index + 1}`} className="border-b">
                                    <AccordionTrigger className="py-6 text-lg font-medium text-left hover:no-underline [&[data-state=open]>svg]:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
