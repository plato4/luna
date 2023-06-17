import "./controls.css";

import React from "react";

import Interpreter from "../../../../game/interpreter/Interpreter";

interface ControlsProps {
	interpreter: Interpreter;
}

const Controls: React.FC<ControlsProps> = ({ interpreter }) => {
	return (
		<div className="container controls">
			<div className="button">Play</div>
			<div className="button">Pause</div>
			<div className="button">Reset</div>
		</div>
	);
};

export default Controls;
