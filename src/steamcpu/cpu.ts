export interface Memory {
	getAt(index: number): number | null;
	getAtIndirect(index: number): number | null;
	getAll(): number[];
	setAt(index: number, value: number): boolean;
	setAtIndirect(index: number, value: number): boolean;
}

export interface ActionResult {
	success: boolean;
	description: string;
	line: number;
}

export interface ParseResult {
	success: boolean;
	description: string;
	instruction?: Instruction;
}

export type ParameterMapping = ParameterType[];

export interface InstructionDefinition {
	label: string;
	name: string;
	description: string;
	parameterMapping: ParameterMapping;
	action: (cpu: CPU) => ActionResult;
	is: (line: string) => boolean;
	parse: (line: string) => ParseResult;
}

export enum ParameterType {
	CONSTANT,
	LOCATION,
	BOTH,
}

export interface Parameter {
	value: number;
	type: ParameterType;
	indirect: boolean;
}

export interface Instruction {
	definition: InstructionDefinition;
}

export type InstructionSet = InstructionDefinition[];
export type Instructions = Instruction[];

export class CPU {
	private _memory: Memory;
	public get memory() {
		return this._memory;
	}

	private instructionSet: InstructionSet;

	private _pointer = 0;

	public get pointer() {
		return this._pointer;
	}

	private code: string;

	public instructions: Instructions = [];

	constructor(memory: Memory, instructionSet: InstructionSet, code: string) {
		this._memory = memory;
		this.instructionSet = instructionSet;
		this.code = code;
	}

	public step(): ActionResult {
		this._pointer++;
		return {
			success: true,
			description: "",
			line: this.pointer,
		};
	}
}

export const LBL: InstructionDefinition = {
	label: "LBL",
	name: "Label",
	description: "A point for a jump statement to reference",
	parameterMapping: [ParameterType.LOCATION],
	action: function (cpu: CPU): ActionResult {
		return { success: false, description: "temporary", line: cpu.pointer };
	},
	is: function (line: string): boolean {
		return new RegExp("^" + this.label, "i").test(line);
	},
	parse: function (line: string): ParseResult {
		return { success: true, description: "", instruction: { definition: LBL } };
	},
};
