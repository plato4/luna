import { Instruction } from "./Instruction";
import { InstructionDefinition } from "./InstructionDefinition";
import { Memory } from "./Memory";
import { LBL } from "./sets/Basic";

export interface ActionResult {
	success: boolean;
	description: string;
	line: number;
}

export interface ParseResult {
	success: boolean;
	description: string;
	line?: number;
	instruction?: Instruction;
}

export type InstructionSet = InstructionDefinition[];
export type Instructions = Instruction[];

export class CPU {
	private _memory: Memory;
	public get memory() {
		return this._memory;
	}

	private instructionSet: InstructionSet;

	public get pointer() {
		return this.memory.getAt(0) ?? 0;
	}

	private set pointer(value: number) {
		this.memory.setAt(0, value);
	}

	public instructions: Instructions = [];

	constructor(memory: Memory, instructionSet: InstructionSet) {
		this._memory = memory;
		this.instructionSet = instructionSet;
	}

	public step(): ActionResult {
		this.pointer++;
		return {
			success: true,
			description: "",
			line: this.pointer,
		};
	}

	public parse(code: string): ParseResult {
		this.instructions = [];
		const split = code.split("\n");

		for (const line in split) {
			const definition = this.instructionSet.find((v) => v.check(line));
			if (!definition)
				return {
					success: false,
					description: "SYNTAX ERROR",
					line: split.findIndex((v) => v === line),
				};

			const instruction = definition.parse(line);
			if (!instruction.success) {
				instruction.line = split.findIndex((v) => v === line);
				return instruction;
			}
			if (instruction.instruction)
				this.instructions.push(instruction.instruction);
		}

		return { success: true, description: "COMPILED SUCCESSFULLY" };
	}
}

export const CPUTest = () => {
	const cpu = new CPU(new Memory(32), [LBL]);
	console.log(cpu.parse("LBL"));
};
