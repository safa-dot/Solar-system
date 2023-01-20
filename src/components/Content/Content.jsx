import React from "react";
import { Routes } from "react-router";
import { Route, Navigate } from "react-router";
import Mercury from "../Content/Mercury/Mercury";
import Venus from "../Content/Venus/Venus";
import Earth from "../Content/Earth/Earth";
import Mars from "../Content/Mars/Mars";
import Jupiter from "../Content/Jupiter/Jupiter";
import Saturn from "../Content/Saturn/Saturn";
import Neptune from "../Content/Neptune/Neptune";
import Uranus from "../Content/Uranus/Uranus";
function Content() {
	return (
		<>
			<Routes >
				<Route path="/earth" element={<Earth />} />
				<Route path="/" element={<Navigate to="/earth" />} />  {/*redirect to earth page */}
				<Route path="/mercury" element={<Mercury />} />
				<Route path="/venus" element={<Venus />} />
				<Route path="/mars" element={<Mars />} />
				<Route path="/jupiter" element={<Jupiter />} />
				<Route path="/saturn" element={<Saturn />} />
				<Route path="/uranus" element={<Uranus />} />
				<Route path="/neptune" element={<Neptune />} />
			</Routes>
		</>
	);
}

export default Content;
