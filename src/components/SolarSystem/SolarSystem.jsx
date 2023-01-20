import React from "react";
import "./solarSystem.css";
import solarSystem from "../../assets/images/planet-stellar-universe.png";
import SwiperGallery from "../Swiper/Swiper";
import { SwiperSlide } from "swiper/react";

function SolarSystem() {
	const myths = [
		{
			mythName: "Gaea",
			planetName: "Earth",
			theMythp1:
				"Gaea, or Mother Earth, was the great goddess of the early Greeks. She represented the Earth and was worshipped as the universal mother. In Greek mythology, she created the Universe and gave birth to both the first race of gods the Titans and the first humans.",
			theMythp2:
				" She was known as the supreme goddess by humans and gods alike. She presided over marriages and oaths and was honored as a prophetess.",
		},
		{
			mythName: "Apollo",
			planetName: "Sun",
			theMythp1:
				"In Greek mythology, Apollo was the son of Zeus (Jupiter) and Leto (Letona). He was the twin brother of the goddess Artemis. He was the god of the Sun, logic, and reason, and was also a fine musician and healer.",
			theMythp2:
				"Apollo was known as the god who could foretell the future. His most famous sacred place was at Delphi, site of the Oracle of Delphi.",
		},
		{
			mythName: "Artemis",
			planetName: "Moon",
			theMythp1:
				"Artemis was the twin sister of the god Apollo. Her father and mother were Zeus and Latona. Artemis and her brother Apollo had fierce tempers. According to a Greek legend, they killed most of the children of Niobe, who had insulted her mother Leto comparing favorably her children with the twins Artemis and Apollo.",
			theMythp2:
				"Artemis was the goddess of the Moon. She was also known as the goddess of the hunt. Romans identified Artemis with the Greek goddess Diana.",
		},
		{
			mythName: "Mercury",
			planetName: "Mercury",
			theMythp1:
				"Mercury was the messenger-god of Jupiter, and was the god of games, of business, and of story telling. He was the offspring of the god Jupiter and Maia. Maia herself was and one of the Pleiades, daughters of the titan Atlas. Mercury was identified with the Greek god Hermes.",
			theMythp2: "",
		},
		{
			mythName: "Aphrodite",
			planetName: "Venus",
			theMythp1:
				"Venus was the goddess of love and beauty. To her perfect figure and pure features she added an innocent manner. On her sweet face she always wore a smile",
			theMythp2: "",
		},
		{
			mythName: "Mars",
			planetName: "Mars",
			theMythp1:
				"Ares was the Greek god of war, was identified with the Roman god, Mars. He always acted like a strong warrior and a strong desire for violence. He enjoyed the great noise of battle, and he loved bloody warfare. Conflict and mindless killing was how he liked to spend the day.",
			theMythp2:
				"Mars was the father of the famous Roman heroes Romulus and Remus who founded the city of Rome. For that reason, He was believed to come to the aid of Romans in times of crisis.",
		},
		{
			mythName: "Jupiter",
			planetName: "Jupiter",
			theMythp1:
				"In Roman mythology, Jupiter was the king of heaven and Earth and of all the Olympian gods. He was also known as the god of justice. He was named king of the gods in the special meeting that followed his overthrow of the god Saturn and the Titans.",
			theMythp2:
				"Jupiter granted Neptune dominion over the Sea, and his other brother Pluto dominion over the underworld. Jupiter's wife was Juno, who was very jealous of the attention that he paid to other goddesses and women.",
		},
	];

	return (
		<div className="container solarsystm-container">
			<h3 className="text-center m-0"> Mythology about the planets</h3>
			<div className="row align-items-center  ">
				<div className=" col-lg-7 solarsystem d-none d-lg-block">
					<img className=" col-lg-12" src={solarSystem} alt="" />
				</div>
				<div className="col-lg-4 myths ">
					<SwiperGallery>
						{myths.map((myth) => (
							<SwiperSlide>
								<div class="card text-bg-dark">
									<div class="card-body">
										<h5 class="card-title">{myth.mythName}</h5>
										<h6 class="card-subtitle mb-2 text-muted">
											{myth.planetName}
										</h6>
										<p class="card-text">{myth.theMythp1}</p>
										<p class="card-text">{myth.theMythp2}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</SwiperGallery>
				</div>
			</div>
		</div>
	);
}

export default SolarSystem;
