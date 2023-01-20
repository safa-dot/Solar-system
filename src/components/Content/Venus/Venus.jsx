import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Venus() {
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
					className=" text-zone col-sm-12  col-lg-6 offset-lg-6"
				>
					<p>
						Venus is the second planet from the Sun and is Earth’s closest
						planetary neighbor. It’s one of the four inner, terrestrial (or
						rocky) planets, and it’s often called Earth’s twin because it’s
						similar in size and density. These are not identical twins, however
						– there are radical differences between the two worlds.
					</p>
					<p>
						Venus was the first planet to be explored by a spacecraft – NASA’s
						Mariner 2 successfully flew by and scanned the cloud-covered world
						on Dec. 14, 1962. Since then, numerous spacecraft from the U.S. and
						other space agencies have explored Venus, including NASA’s Magellan,
						which mapped the planet's surface with radar. Soviet spacecraft made
						the most successful landings on the surface of Venus to date, but
						they didn’t survive long due to the extreme heat and crushing
						pressure. An American probe, one of NASA's Pioneer Venus
						Multiprobes, survived for about an hour after impacting the surface
						in 1978.
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Venus</h1>
				</div>
				{/* ********************************************************************* */}
				<div className="col-lg-5">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>TOXIC TWIN</h3>
						<p>
							Venus is often called "Earth’s twin" because they’re similar in
							size and structure, but Venus has extreme surface heat and a
							dense, toxic atmosphere
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>SECOND ROCK</h3>
						<p>
							Venus is the second closest planet to the Sun, orbiting at a
							distance of about 67 million miles (108 million kilometers)
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>LONG DAYS, SHORT YEARS</h3>
						<p>
							Venus rotates very slowly on its axis – one day on Venus lasts 243
							Earth days. The planet orbits the Sun faster than Earth, however,
							so one year on Venus takes only about 225 Earth days, making a
							Venusian day longer than its year!
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
						<h3>STINKY CLOUDS</h3>
						<p>
							Venus is permanently shrouded in thick, toxic clouds of sulfuric
							acid that start at an altitude of 28 to 43 miles (45 to 70
							kilometers). The clouds smell like rotten eggs!
						</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>BACKWARD SUNRISE</h3>
						<p>
							Venus rotates backward on its axis compared to most planets in our
							solar system. This means the Sun rises in the west and sets in the
							east, opposite of what we see on Earth.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>DIVERSE TERRAIN</h3>
						<p>
							Venus has a solid surface covered in dome-like volcanoes, rifts,
							and mountains, with expansive volcanic plains and vast, ridged
							plateaus.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Venus;
