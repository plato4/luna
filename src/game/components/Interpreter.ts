/* eslint-disable @typescript-eslint/no-empty-function */
import Component from "../Component";
import { Level } from "./Level";

export class Interpreter extends Component {
	private _instructions: IInstruction[] = [];
	private get instructions(): IInstruction[] {
		return this._instructions;
	}
	private set instructions(value: IInstruction[]) {
		this._instructions = value;
	}

	private _pointer = 0;
	public get pointer(): number {
		return this._pointer;
	}
	public set pointer(value: number) {
		this._pointer = value;
	}

	private _memory: number[] = [3];
	public get memory(): number[] {
		return this._memory;
	}
	private set memory(value: number[]) {
		this._memory = value;
	}

	private _level: Level;
	public get level(): Level {
		return this._level;
	}
	private set level(value: Level) {
		this._level = value;
	}

	constructor(level: Level, gameObject: Phaser.GameObjects.GameObject) {
		super(gameObject, "Intepreter");
		this._level = level;
	}

	public onStart(): void {}
	public onUpdate(): void {}
	public onDestroy(): void {}

	public step() {
		if (this.pointer > this.instructions.length)
			return new Status(true, "End of code");

		const currentInstruction = this.instructions[this.pointer];
		switch (currentInstruction.constructor) {
			case ADD:
				break;
			case SUB:
				break;
			case IF:
				break;
			case JUMP:
				break;
			case MOVE:
				break;
			case PICK:
				break;
			case DROP:
				break;
			case USE:
				break;
			case ATTACK:
				break;
		}
	}

	public addInstruction(instruction: IInstruction) {
		if (!this.instructions.find((i) => i === instruction))
			this.instructions.push(instruction);
	}

	public removeInstruction(instruction: IInstruction) {
		this.instructions = this.instructions.filter((v) => v !== instruction);
	}

	public getInstructions(): IInstruction[] {
		return this.instructions;
	}
}

export class Status {
	private _error: boolean;
	public get error(): boolean {
		return this._error;
	}

	private _statement: string;
	public get statement(): string {
		return this._statement;
	}

	constructor(error: boolean, statement: string) {
		this._error = error;
		this._statement = statement;
	}
}

export enum Operations {
	ADD,
	SUB,
	IF,
	JUMP,
	MOVE,
	PICK,
	DROP,
	USE,
	ATTACK,
}

export interface IInstruction {
	operation: Operations;
}
export class ADD implements IInstruction {
	operation = Operations.ADD;
}
export class SUB implements IInstruction {
	operation = Operations.SUB;
}
export class IF implements IInstruction {
	operation = Operations.IF;
}
export class JUMP implements IInstruction {
	operation = Operations.JUMP;
}
export class MOVE implements IInstruction {
	operation = Operations.MOVE;
}
export class PICK implements IInstruction {
	operation = Operations.PICK;
}
export class DROP implements IInstruction {
	operation = Operations.DROP;
}
export class USE implements IInstruction {
	operation = Operations.USE;
}
export class ATTACK implements IInstruction {
	operation = Operations.ATTACK;
}
