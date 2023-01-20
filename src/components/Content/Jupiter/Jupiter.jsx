import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Jupiter() {
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
						Jupiter has a long history of surprising scientists – all the way
						back to 1610 when Galileo Galilei found the first moons beyond
						Earth. That discovery changed the way we see the universe.
					</p>
					<p>
						Fifth in line from the Sun, Jupiter is, by far, the largest planet
						in the solar system – more than twice as massive as all the other
						planets combined.
					</p>
					<p>
						Jupiter's familiar stripes and swirls are actually cold, windy
						clouds of ammonia and water, floating in an atmosphere of hydrogen
						and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger
						than Earth that has raged for hundreds of years.
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Jupiter</h1>
				</div>
				{/* ********************************************************************* */}

				<div className="col-lg-5 ">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>THE GRANDEST PLANET</h3>
						<p>
							Eleven Earths could fit across Jupiter’s equator. If Earth were
							the size of a grape, Jupiter would be the size of a basketball.
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>FIFTH PLANET FROM OUR STAR</h3>
						<p>
							Jupiter orbits about 484 million miles (778 million kilometers) or
							5.2 Astronomical Units (AU) from our Sun (Earth is one AU from the
							Sun).
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>SHORT DAY/LONG YEAR</h3>
						<p>
							Jupiter rotates once about every 10 hours (a Jovian day), but
							takes about 12 Earth years to complete one orbit of the Sun (a
							Jovian year).
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
						<h3>MASSIVE WORLD, LIGHT ELEMENTS</h3>
						<p>
							Jupiter's atmosphere is made up mostly of hydrogen (H2) and helium
							(He).
						</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>RINGED WORLD</h3>
						<p>
							In 1979 the Voyager mission discovered Jupiter’s faint ring
							system. All four giant planets in our solar system have ring
							systems.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>WORLDS GALORE</h3>
						<p>Jupiter has more than 75 moons.</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Jupiter;
