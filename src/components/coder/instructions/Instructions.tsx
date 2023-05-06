import "./instructions.css";
import React from "react";

import Instruction from "./Instruction";

export const Instructions = () => {
	return (
		<div className="bit-container indent instructions">
			<Instruction />
			<Instruction />
			<Instruction />
			<Instruction />
			<Instruction />
		</div>
	);
};
