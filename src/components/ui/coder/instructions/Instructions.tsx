import { LexerStatus, lex } from "../../../../game/interpreter/Lexer";
import "./instructions.css";

import { useState } from "react";

const Instructions = () => {
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
