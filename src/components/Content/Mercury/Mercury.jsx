import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Mercury() {
	const fadeAnime = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
			transition: {
				type: "spring",
				duration: 4,
			},
		},
	};

	return (
		<div className="container content-container">
			<div className="row ">
				<motion.div
					initial={fadeAnime.offscreen}
					whileInView={fadeAnime.onscreen}
					viewport={{ once: false, amount: 0.8 }}
					className=" text-zone col-lg-6 offset-lg-6"
				>
					<p>
						The smallest planet in our solar system and nearest to the Sun,
						Mercury is only slightly larger than Earth's Moon.
					</p>
					<p>
						From the surface of Mercury, the Sun would appear more than three
						times as large as it does when viewed from Earth, and the sunlight
						would be as much as seven times brighter. Despite its proximity to
						the Sun, Mercury is not the hottest planet in our solar system –
						that title belongs to nearby Venus, thanks to its dense atmosphere.
					</p>
					<p>
						Because of Mercury's elliptical – egg-shaped – orbit, and sluggish
						rotation, the Sun appears to rise briefly, set, and rise again from
						some parts of the planet's surface. The same thing happens in
						reverse at sunset.
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Mercury</h1>
				</div>
				{/* ********************************************************************* */}
				<div className="col-lg-5">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>CAN'T BREATHE THERE</h3>
						<p>
							Mercury's thin atmosphere, or exosphere, is composed mostly of
							oxygen (O2), sodium (Na), hydrogen (H2), helium (He), and
							potassium (K).
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>ROUGH SURFACE</h3>
						<p>
							Mercury is a rocky planet, also known as a terrestrial planet.
							Mercury has a solid, cratered surface, much like the Earth's moon.
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>MOONLESS, RINGLESS</h3>
						<p>Mercury has no moons. There are no rings around Mercury. </p>
					</motion.div>
				</div>
				{/* *****************************MIDDLE ICONS PLANETS**************************************** */}
				<div className="col-lg-1 d-none d-lg-block">
					<PlanetsSeparator />
				</div>
				{/* ********************************************************************* */}
				<div className="col-lg-5  ">
					<motion.div
						className="fact4 col-lg-12  text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>SMALL WORLD</h3>
						<p>
							Mercury is the smallest planet in our solar system – only slightly
							larger than Earth's Moon.
						</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>BIG SUN</h3>
						<p>
							Standing on Mercury's surface at its closest approach to the Sun,
							our star would appear more than three times larger than it does on
							Earth.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>INSIDE TRACK</h3>
						<p>Mercury is the planet that orbits the closest to the Sun.</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Mercury;
