import "./memory.css";

import React from "react";

import { Guy } from "../../../../game/components/Guy";

interface MemoryProps {
	guy: Guy;
}

const Memory: React.FC<MemoryProps> = ({ guy }) => {
	return (
		<div className="container memory">
			<div className="memory-inner">
				{guy.interpreter.getAllMemory().map((v, i) => (
					<div key={i} className="textbox memory-value">
						{v}
					</div>
				))}
			</div>
		</div>
	);
};

export default Memory;
