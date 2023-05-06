/* eslint-disable @typescript-eslint/no-empty-function */

import { Level } from "./Level";
import Component from "../Component";
import { Interpreter } from "./Interpreter";

export class Guy extends Component {
	constructor(level: Level, gameObject: Phaser.GameObjects.GameObject) {
		super(gameObject, "guy");
	}

	public onStart(): void {}
	public onUpdate(): void {
		const interpreter = (this.gameObject as any)["Interpreter"] as Interpreter;
		if (interpreter) interpreter.step()

	}
	public onDestroy(): void {}
}
