
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const defaultTabs: Tab[] = [
  {
    value: "tab-1",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Boost Revenue",
    content: {
      badge: "Modern Tactics",
      title: "Make your site a true standout.",
      description:
        "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
      buttonText: "See Plans",
      imageSrc: "https://picsum.photos/seed/feature1/600/400",
      imageAlt: "Abstract design representing revenue boost",
      imageWidth: 600,
      imageHeight: 400,
    },
  },
  {
    value: "tab-2",
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: "Higher Engagement",
    content: {
      badge: "Expert Features",
      title: "Boost your site with top-tier design.",
      description:
        "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
      buttonText: "See Tools",
      imageSrc: "https://picsum.photos/seed/feature2/600/400",
      imageAlt: "Abstract design representing user engagement",
      imageWidth: 600,
      imageHeight: 400,
    },
  },
  {
    value: "tab-3",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Stunning Layouts",
    content: {
      badge: "Elite Solutions",
      title: "Build an advanced web experience.",
      description:
        "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
      buttonText: "See Options",
      imageSrc: "https://picsum.photos/seed/feature3/600/400",
      imageAlt: "Abstract design representing stunning layouts",
      imageWidth: 600,
      imageHeight: 400,
    },
  },
];

const Feature108 = ({
  badge = "Features",
  heading = "Discover What We Can Do For You",
  description = "Explore our powerful features that help you build, launch, and grow.",
  tabs = defaultTabs,
}: Feature108Props) => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">
            {heading}
          </h2>
          <p className="text-primary-foreground/80">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground/60 data-[state=active]:bg-background/20 data-[state=active]:text-primary-foreground"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl p-6 lg:p-16" style={{ backgroundColor: '#3497FA' }}>
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-primary-foreground/80 lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg" variant="secondary">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <Image
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  width={tab.content.imageWidth}
                  height={tab.content.imageHeight}
                  className="rounded-xl"
                  data-ai-hint="abstract design"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
