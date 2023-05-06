import "./coder.css";

import React, { useEffect } from "react";
import { useGameContext } from "../app/App";
import { Instructions } from "./instructions/Instructions";
import Operations from "./operations/Operations";

const Coder: React.FC = () => {
	const { game } = useGameContext();

	return (
		<div className="coder">
			<div className="bit-container instructions-container">
				<Instructions />
			</div>
			<div className="operations-container">
				<Operations />
			</div>
		</div>
	);
};

export default Coder;
