import { InstructionDefinition } from "./InstructionDefinition";

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
