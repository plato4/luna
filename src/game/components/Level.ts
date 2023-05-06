/* eslint-disable @typescript-eslint/no-empty-function */
import { Guy } from "./Guy";
import Component from "../Component";

export enum Tile {
	Floor,
	Hole,
	Wall,
	Enemy,
}

export class Level extends Component {
	private _guys: Guy[] = [];
	public get guys(): Guy[] {
		return this._guys;
	}

	private _tiles: Tile[] = [];
	public get tiles(): Tile[] {
		return this._tiles;
	}

	public onStart(): void {}
	public onUpdate(): void {}
	public onDestroy(): void {}
}
