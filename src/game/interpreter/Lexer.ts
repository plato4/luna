import { OperatorType, ParamType } from "./Enums";

export enum LexerStatus {
	Error = -1,
	Success,
}

export interface LexerResult {
	lexerStatus: LexerStatus;
	line: number;
	instructions: Instructions;
}

export type Instruction = number[];
export type Instructions = Instruction[];
type Line = string[];
type Preprocessed = Line[];
type Oper = number;
type Params = number[];

export const lex = (code: string): LexerResult => {
	const preprocessed = preprocess(code);
	const lexerResult = process(preprocessed);

	return lexerResult;
};

const preprocess = (code: string): Preprocessed => {
	return code.split("\n").map((x) => {
		if (x.includes("//")) x = x.replace(x.substring(x.indexOf("//") - 1), "");

		return x.split(" ").filter((s) => s !== "");
	});
};

const process = (code: Preprocessed): LexerResult => {
	let instructions: Instructions = [];

	for (let i = 0; i < code.length; i++) {
		const line = code[i];

		const operator = getOperator(line);
		if (operator === null)
			return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
		const params = getParams(line);
		if (params === null)
			return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };

		switch (operator) {
			case OperatorType.NON:
				if (params.length !== 0)
					return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
				break;
			case OperatorType.LBL:
				if (params.length !== 2)
					return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
				break;
			case OperatorType.JMP:
			case OperatorType.JLT:
			case OperatorType.JGT:
			case OperatorType.JET:
				if (params.length !== 2)
					return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
				break;
			case OperatorType.CMP:
				if (params.length !== 4)
					return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
				break;
			case OperatorType.SET:
			case OperatorType.ADD:
			case OperatorType.SUB:
				if (params.length !== 4)
					return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
				if (params[0] !== ParamType.INDIRECT && params[0] !== ParamType.MEMORY)
					return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
				break;
			default:
				return { lexerStatus: LexerStatus.Error, line: i, instructions: [] };
		}
		const instruction: Instruction = [operator, ...params];
		instructions.push(instruction);
	}
	instructions = instructions.filter((x) => x.length > 0);

	return {
		lexerStatus: LexerStatus.Success,
		line: 0,
		instructions: instructions,
	};
};

const getOperator = (line: Line): OperatorType | null => {
	let operator: Oper;
	if (line.length === 0 || line[0] === "") operator = OperatorType.NON;
	else
		operator = Object.keys(OperatorType)
			.filter((x) => !(parseInt(x) >= 0))
			.findIndex((x) => x === line[0]);

	return operator;
};

const getParams = (line: Line): Params | null => {
	const params: Params = [];

	//nothing has more than 3
	if (line.length > 3) return null;

	let valid = true;
	line.forEach((v, i) => {
		if (i === 0) return;
		const is_indirect = v.startsWith(">");
		if (is_indirect) v = v.substring(1, v.length);

		const is_memory = v.startsWith("#");
		if (is_memory) v = v.substring(1, v.length);
		const is_data = v.length > 0;

		if (!is_memory && is_indirect) valid = false;
		if (!is_data) valid = false;

		if (!v.match(/^\d+$/) /*&& !v.match(/^[-+]?[0-9]+\.[0-9]+$/)*/)
			valid = false;
		if (is_memory && !v.match(/^\d+$/)) valid = false;

		if (valid) {
			let val = 0;
			if (is_memory) val = parseInt(v);
			else val = parseFloat(v);
			if (val !== undefined) {
				if (is_indirect) params.push(ParamType.INDIRECT);
				else if (is_memory) params.push(ParamType.MEMORY);
				else params.push(ParamType.CONST);
				params.push(val);
			} else valid = false;
		}
	});
	if (!valid) return null;
	return params;
};
