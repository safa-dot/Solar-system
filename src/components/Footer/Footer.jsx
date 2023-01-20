import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="container footer-container ">
			<div className="row  justify-content-center pb-5">
				<div className="col-6 col-sm-6 col-lg-8 text-center  ">
					Created with<span className="ps-2 pe-2">&#9829;</span> by
					<a
						className="ps-2"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/safa-dot"
					>
						safa dhm
					</a>
				</div>
				<div className=" col-6 col-sm-6 col-lg-4 ">
					<ul className=" row col-12 col-sm-12 col-lg-6  m-0">
						<li className="col-4 col-sm-4 col-lg-4">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/safa-dot"
							>
								<FontAwesomeIcon icon={faGithub} size="x" />
							</a>
						</li>

						<li className="col-4 col-sm-4 col-lg-4">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.instagram.com/safa__dhm/"
							>
								<FontAwesomeIcon icon={faInstagram} size="x" />
							</a>
						</li>

						<li className="col-4 col-sm-4 col-lg-4">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/safa-de-1b8b85198"
							>
								<FontAwesomeIcon icon={faLinkedin} size="x" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
