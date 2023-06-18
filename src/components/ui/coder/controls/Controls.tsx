import "./controls.css";

import React from "react";

import { Guy } from "../../../../game/components/Guy";

interface ControlsProps {
	guy: Guy;
	rerender: () => void;
}

const Controls: React.FC<ControlsProps> = ({ guy, rerender }) => {
	return (
		<div className="container controls">
			<div
				className="button"
				onClick={() => {
					guy.interpreter.step();
					rerender();
				}}
			>
				Play
			</div>
			<div className="button">Pause</div>
			<div className="button">Reset</div>
		</div>
	);
};

export default Controls;
