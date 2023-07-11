export interface Memory {
	getAt(index: number): number | null;
	getAtIndirect(index: number): number | null;
	getAll(): number[];
	setAt(index: number, value: number): boolean;
	setAtIndirect(index: number, value: number): boolean;
}

export enum ReturnCode {
	OK,
	ERROR,
	EOP,
}

export enum ParseCode {
	OK,
	ERROR,
}

export interface ActionResult {
	code: ReturnCode;
	description: string;
	line: number;
}

export interface ParseResult {
	code: ParseCode;
	description: string;
}

export interface InstructionDefinition {
	label: string;
	name: string;
	description: string;
	action: (cpu: CPU) => ActionResult;
	parse: (line: string) => ParseResult;
}

export interface Instruction {
	definition: InstructionDefinition;
}

export type InstructionSet = InstructionDefinition[];
export type Instructions = Instruction[];

export class CPU {
	private instructionSet: InstructionSet;
	private memory: Memory;

	public instructions: Instructions = [];

	constructor(memory: Memory, instructionSet: InstructionSet) {
		this.memory = memory;
		this.instructionSet = instructionSet;
	}
}
