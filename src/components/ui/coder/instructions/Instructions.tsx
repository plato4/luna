import "./instructions.css";

import React, { useState } from "react";

import Interpreter from "../../../../game/interpreter/Interpreter";
import { LexerStatus, lex } from "../../../../game/interpreter/Lexer";

interface InstructionsProps {
	interpreter: Interpreter;
}

const Instructions: React.FC<InstructionsProps> = ({ interpreter }) => {
	const [hasError, setHasError] = useState(false);

	return (
		<div className="container instructions">
			<textarea
				spellCheck="false"
				className={`textbox textarea ${hasError ? "error" : ""}`}
				onChange={(e) => {
					const r = lex(e.target.value);
					setHasError(r.lexerStatus !== LexerStatus.Success);
				}}
			></textarea>
		</div>
	);
};

export default Instructions;
