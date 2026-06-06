"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Award,
  Users,
  TrendingUp,
} from "lucide-react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

const stats = [
    { icon: <Award />, value: 8, label: "Projects", suffix: "+" },
    { icon: <Users />, value: 10, label: "Clients", suffix: "+" },
    { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ]


interface StatCounterProps {
    icon: React.ReactNode
    value: number
    label: string
    suffix: string
    delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)
  
    const springValue = useSpring(0, {
      stiffness: 60,
      damping: 15,
      mass: 1,
    })
  
    useEffect(() => {
      if (isInView && !hasAnimated) {
        springValue.set(value)
        setHasAnimated(true)
      } else if (!isInView && hasAnimated) {
        springValue.set(0)
        setHasAnimated(false)
      }
    }, [isInView, value, springValue, hasAnimated])
  
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest))
  
    return (
      <motion.div
        className="bg-background/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: [0.6, 0.05, 0.01, 0.9] },
          },
        }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <motion.div
          className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/10 transition-colors duration-300"
          whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
        >
          {icon}
        </motion.div>
        <motion.div ref={countRef} className="text-3xl font-bold text-foreground flex items-center">
          <motion.span>{displayValue}</motion.span>
          <span>{suffix}</span>
        </motion.div>
        <p className="text-muted-foreground text-sm mt-1">{label}</p>
        <motion.div className="w-10 h-0.5 bg-primary mt-3 group-hover:w-16 transition-all duration-300" />
      </motion.div>
    )
}

export function Stats() {
    const statsRef = useRef<HTMLDivElement>(null)
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

    return (
        <section className="py-16">
            <motion.div
                ref={statsRef}
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate={isStatsInView ? "visible" : "hidden"}
                variants={containerVariants}
                >
                {stats.map((stat, index) => (
                    <StatCounter
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    delay={index * 0.1}
                    />
                ))}
            </motion.div>
        </section>
    )
}
