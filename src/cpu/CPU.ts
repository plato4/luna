import { InstructionSet, Instructions, ParseResult } from "./Instruction";
import { Memory } from "./Memory";

export interface ActionResult {
	success: boolean;
	description: string;
	line: number;
}

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

	private code: string;

	public instructions: Instructions = [];

	constructor(memory: Memory, instructionSet: InstructionSet, code: string) {
		this._memory = memory;
		this.instructionSet = instructionSet;
		this.code = code;
		this.parse();
	}

	public step(): ActionResult {
		this.pointer++;
		return {
			success: true,
			description: "",
			line: this.pointer,
		};
	}

	private parse(): ParseResult {
		this.instructions = [];
		const split = this.code.split("\n");

		for (const line in split) {
			const definition = this.instructionSet.find((v) => v.check(line));
			if (!definition)
				return {
					success: false,
					description: "SYNTAX ERROR",
					line: split.findIndex((v) => v === line),
				};

			const instruction = definition.parse(line);
			if (!instruction.success) return instruction;
			if (instruction.instruction)
				this.instructions.push(instruction.instruction);
		}

		return { success: true, description: "COMPILED SUCCESSFULLY" };
	}
}
