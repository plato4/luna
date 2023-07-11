import { CPU, ActionResult } from "../CPU";
import {
	InstructionDefinition,
	ParameterType,
	ParseResult,
} from "../Instruction";

export const LBL: InstructionDefinition = {
	label: "LBL",
	name: "Label",
	description: "A reference point for a jump statement",
	parameterMapping: [ParameterType.LOCATION],
	action: (cpu: CPU): ActionResult => {
		return {
			success: true,
			description: "",
			line: cpu.pointer,
		};
	},
	check: (line: string): boolean => line.startsWith("LBL"),
	parse: (line: string): ParseResult => {
		const elements = line.split(" ");
		if (elements.length !== 2)
			return { success: false, description: "incorrent number of parameters" };
		return {
			success: true,
			description: "",
		};
	},
};
