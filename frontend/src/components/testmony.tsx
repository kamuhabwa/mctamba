"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "CEO at InnovateX",
		quote: "Working with this team was a game-changer. They delivered beyond our expectations!",
		image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
	},
	{
		name: "James Lee",
		role: "CTO at FutureCloud",
		quote: "Professional, reliable, and incredibly creative. Our platform has never been better.",
		image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&dpr=2&q=80",
	},
	{
		name: "Emily Tran",
		role: "Product Manager at BrightTech",
		quote: "They truly understand what collaboration means. Highly recommended.",
		image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&dpr=2&q=80",
	},
]

export default function TestimonialSection() {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
		}, 6000)
		return () => clearInterval(interval)
	}, [])

	const testimonial = testimonials[index]

	return (
		<section
			className="relative min-h-screen flex items-center justify-center px-4 py-12 md:px-8 overflow-hidden"
			style={{ backgroundColor: "#584910" }}
		>
			{/* Testimonial Content */}
			<div className="relative z-10 w-full max-w-xl flex flex-col items-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={testimonial.name}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col items-center"
					>
						{/* Circular Avatar */}
						<img
							src={testimonial.image}
							alt={testimonial.name}
							className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg mb-6"
						/>

						{/* Quote */}
						<p className="text-2xl md:text-3xl font-light text-white italic mb-6 text-center leading-relaxed">
							“{testimonial.quote}”
						</p>

						{/* Name and Role */}
						<div className="text-center">
							<h4 className="text-lg text-white font-semibold">{testimonial.name}</h4>
							<span className="text-sm text-yellow-200">{testimonial.role}</span>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	)
}
