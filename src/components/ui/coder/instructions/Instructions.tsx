import "./instructions.css";

import React, { useState } from "react";

import { LexerStatus, lex } from "../../../../game/interpreter/Lexer";
import { Guy } from "../../../../game/components/Guy";

interface InstructionsProps {
	guy: Guy;
}

const Instructions: React.FC<InstructionsProps> = ({ guy }) => {
	const [hasError, setHasError] = useState(false);

	return (
		<div className="container instructions">
			<textarea
				spellCheck="false"
				className={`textbox textarea ${hasError ? "error" : ""}`}
				onChange={(e) => {
					const r = lex(e.target.value);

					if (r.lexerStatus !== LexerStatus.Success) setHasError(true);
					else {
						guy.interpreter.setInstructions(r.instructions);
						setHasError(false);
					}
				}}
			></textarea>
		</div>
	);
};

export default Instructions;
