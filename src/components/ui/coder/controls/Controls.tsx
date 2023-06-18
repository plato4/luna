import "./controls.css";

import React from "react";

import { Guy } from "../../../../game/components/Guy";

interface ControlsProps {
	guy: Guy;
	rerender: () => void;
	setStatus: (status: string) => void;
}

const Controls: React.FC<ControlsProps> = ({ guy, rerender, setStatus }) => {
	return (
		<div className="container controls">
			<div
				className="button"
				onClick={() => {
					const r = guy.step();
					setStatus(r.toString() + " - " + guy.interpreter.getMemory(0));
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
