/* eslint-disable @typescript-eslint/no-empty-function */
import * as BABYLON from "babylonjs";
import { Level } from "./Level";
import Component from "../Component";
import { Interpreter } from "./Interpreter";

export class Guy extends Component {
	constructor(level: Level, node: BABYLON.Node) {
		super("guy", node);
	}

	public onStart(): void {}
	public onUpdate(): void {
		const interpreter = (this.node as any)["Interpreter"] as Interpreter;
		if (interpreter) interpreter.step();
	}
	public onDestroy(): void {}
}
