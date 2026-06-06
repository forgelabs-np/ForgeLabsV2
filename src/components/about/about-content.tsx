'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { ChevronRight } from 'lucide-react';

export function AboutContent() {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


	const images = [
		{
			src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Modern architecture building',
		},
		{
			src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Urban cityscape at sunset',
		},
		{
			src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Abstract geometric pattern',
		},
		{
			src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Mountain landscape',
		},
		{
			src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Minimalist design elements',
		},
		{
			src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Ocean waves and beach',
		},
		{
			src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Forest trees and sunlight',
		},
	];

	return (
		<main className="w-full">
			<div className="relative flex h-[50vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground))_/_0.1,transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="text-center text-4xl font-bold">
					Our Team, Our Strength
				</h1>
			</div>
			<ZoomParallax images={images} />
			<div className="bg-background py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Mission and vision</h2>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col gap-y-3">
                            <h3 className="text-lg font-semibold leading-6 text-foreground">Vision</h3>
                            <div className="flex gap-x-3">
                                <ChevronRight className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                <p className="text-base leading-7 text-muted-foreground">Our company's vision is succinctly captured in a simple yet comprehensive phrase – We Develop the World.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h3 className="text-lg font-semibold leading-6 text-foreground">Mission</h3>
                             <div className="flex gap-x-3">
                                <ChevronRight className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                <p className="text-base leading-7 text-muted-foreground">We develop software and collaborate closely with our clients to make the world a better place for everyone.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h3 className="text-lg font-semibold leading-6 text-foreground">Values</h3>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex gap-x-3">
                                    <ChevronRight className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    <p className="text-base leading-7 text-muted-foreground">We do what we love, and we do it well.</p>
                                </div>
                                <div className="flex gap-x-3">
                                    <ChevronRight className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    <p className="text-base leading-7 text-muted-foreground">We take pride in our team and are committed to continuous growth.</p>
                                </div>
                                <div className="flex gap-x-3">
                                    <ChevronRight className="mt-1 h-5 w-5 flex-none text-primary" aria-hidden="true" />
                                    <p className="text-base leading-7 text-muted-foreground">We work flexibly and transparently to achieve the results that matter.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</main>
	);
}
