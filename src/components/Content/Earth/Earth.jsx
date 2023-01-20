import React from "react";
import "../contentStyle.css";
import { motion } from "framer-motion";
import PlanetsSeparator from "../PlanetsSeparator";

function Earth() {
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
						Our home planet is the third planet from the Sun, and the only place
						we know of so far that’s inhabited by living things.
					</p>
					<p>
						While Earth is only the fifth largest planet in the solar system, it
						is the only world in our solar system with liquid water on the
						surface. Just slightly larger than nearby Venus, Earth is the
						biggest of the four planets closest to the Sun, all of which are
						made of rock and metal.
					</p>
					<p>
						The name Earth is at least 1,000 years old. All of the planets,
						except for Earth, were named after Greek and Roman gods and
						goddesses. However, the name Earth is a Germanic word, which simply
						means “the ground.”
					</p>
				</motion.div>
			</div>

			<div className="row pt-5 planet-facts">
				<div className="row text-center ">
					<h1 className="pb-5">SIX things to know About Earth</h1>
				</div>
				{/* ********************************************************************* */}

				<div className="col-lg-5 ">
					<motion.div
						className="fact1 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: true, amount: 0.8 }}
					>
						<h3>THIRD ROCK</h3>
						<p>
							Earth orbits our Sun, a star. Earth is the third planet from the
							Sun at a distance of about 93 million miles (150 million km).
						</p>
					</motion.div>

					<motion.div
						className="fact2 col-lg-12 text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>WE'RE ON IT</h3>
						<p>
							Earth is a rocky planet with a solid and dynamic surface of
							mountains, canyons, plains and more. Most of our planet is covered
							in water.
						</p>
					</motion.div>

					<motion.div
						className="fact3 col-lg-12  text-end pt-5"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>BREATHE EASY</h3>
						<p>
							Earth's atmosphere is 78 percent nitrogen, 21 percent oxygen and 1
							percent other ingredients—the perfect balance to breathe and live.
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
						<h3>HOME, SWEET HOME</h3>
						<p>Earth is the perfect place for life as we know it.</p>
					</motion.div>

					<motion.div
						className="fact5 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>PROTECTIVE SHIELD</h3>
						<p>
							Our atmosphere protects us from incoming meteoroids, most of which
							break up in our atmosphere before they can strike the surface.
						</p>
					</motion.div>
					<motion.div
						className="fact6 col-lg-12 pt-5 text-start"
						initial={fadeAnime.offscreen}
						whileInView={fadeAnime.onscreen}
						viewport={{ once: false, amount: 0.8 }}
					>
						<h3>ORBITAL SCIENCE</h3>
						<p>
							Many orbiting spacecraft study the Earth from above as a whole
							system—observing the atmosphere, ocean, glaciers, and the solid
							earth.
						</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Earth;
