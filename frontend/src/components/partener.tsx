import { Marquee } from "./magicui/marquee";

const partners = [
	{
		name: "Serena Hotel Hall",
		logo: "/halls/serena.png",
	},
	{
		// name: "Julius Nyerere Convention Centre",
		logo: "/halls/udsm.jpeg",
	},
	{
		// name: "African Print Dress Designers",
		logo: "/halls/udom.png",
	},
	{
		name: "Bridal Glow Designers",
		logo: "/designers/bridalglow.png",
	},
	{
		name: "Classic Decorators",
		logo: "/decorators/classicdecor.png",
	},
	{
		name: "Royal Wealers",
		logo: "/wealers/royalwealers.png",
	},
	{
		name: "Elite Event Planners",
		logo: "/planners/eliteplanner.png",
	},
	{
		name: "Funguo Events",
		logo: "/planners/funguo.png",
	},
];

export default function OurPartners() {
	return (
		<section className="relative py-16 px-4 sm:px-6 lg:px-8">
			{/* Only background image */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				<img
					src="/parteners.png"
					alt="Partners background"
					className="w-full h-full object-cover object-center"
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl font-bold mb-10 ">
					Our Partners
				</h2>
				<Marquee pauseOnHover className="[--duration:30s]">
					{partners.map((partner, index) => (
						<div
							key={index}
							className="mx-32 flex flex-col items-center"
						>
							<img
								src={partner.logo}
								alt={partner.name}
								className="h-20 sm:h-28 object-contain rounded-lg shadow-lg bg-white/80 p-2"
							/>
							{/* <span className="mt-3 text-base font-semibold drop-shadow">
								{partner.name}
							</span> */}
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
}
