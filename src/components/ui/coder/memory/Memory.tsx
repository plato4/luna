import "./memory.css";

import React from "react";

import Interpreter from "../../../../game/interpreter/Interpreter";

interface MemoryProps {
	interpreter: Interpreter;
}

const Memory: React.FC<MemoryProps> = ({ interpreter }) => {
	return (
		<div className="container memory">
			<div className="memory-inner">
				{interpreter.getAllMemory().map((v, i) => (
					<div key={i} className="textbox memory-value">
						{v}
					</div>
				))}
			</div>
		</div>
	);
};

export default Memory;
