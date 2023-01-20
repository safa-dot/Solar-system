import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Mars() {
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
						Mars is the fourth planet from the Sun – a dusty, cold, desert world
						with a very thin atmosphere. Mars is also a dynamic planet with
						seasons, polar ice caps, canyons, extinct volcanoes, and evidence
						that it was even more active in the past.
					</p>
					<p>
						Mars is one of the most explored bodies in our solar system, and
						it's the only planet where we've sent rovers to roam the alien
						landscape.
					</p>
					<p>
						NASA currently has two rovers (Curiosity and Perseverance), one
						lander (InSight), and one helicopter (Ingenuity) exploring the
						surface of Mars.
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Mars</h1>
				</div>
				{/* ********************************************************************* */}

				<div className="col-lg-5 ">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>FOURTH ROCK</h3>
						<p>
							Mars orbits our Sun, a star. Mars is the fourth planet from the
							Sun at an average distance of about 228 million km (142 million
							miles) or 1.52 AU.
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>LONGER DAYS</h3>
						<p>
							One day on Mars takes a little over 24 hours. Mars makes a
							complete orbit around the Sun (a year in Martian time) in 687
							Earth days.
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>RUGGED TERRAIN</h3>
						<p>
							Mars is a rocky planet. Its solid surface has been altered by
							volcanoes, impacts, winds, crustal movement and chemical
							reactions.
						</p>
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
						<h3>TWO MOONS</h3>
						<p>Mars has two moons named Phobos and Deimos.</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>MANY MISSIONS</h3>
						<p>
							Several missions have visited this planet, from flybys and
							orbiters to rovers on the surface.The first true Mars mission
							success was the Mariner 4 flyby in 1965.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>TOUGH PLACE FOR LIFE</h3>
						<p>
							At this time, Mars' surface cannot support life as we know it.
							Current missions are determining Mars' past and future potential
							for life.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Mars;
