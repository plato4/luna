import { ActionResult, CPU, ParseResult } from "./CPU";
import { ParameterType } from "./Instruction";

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
