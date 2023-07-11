import { ActionResult, CPU } from "./CPU";

export interface ParseResult {
	success: boolean;
	description: string;
	line?: number;
	instruction?: Instruction;
}

export type ParameterMapping = ParameterType[];

export interface InstructionDefinition {
	label: string;
	name: string;
	description: string;
	parameterMapping: ParameterMapping;
	action: (cpu: CPU) => ActionResult;
	check: (line: string) => boolean;
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
