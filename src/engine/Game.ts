import * as BABYLON from "babylonjs";
import { GameScene, ILevel } from "./GameScene";

export class Game extends BABYLON.Engine {
	public scene: GameScene;
	public canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement, level: ILevel) {
		super(canvas, true);

		console.log("Creating game");

		this.canvas = canvas;
		this.scene = new GameScene(this, {});
		this.scene.load(level);

		window.addEventListener("resize", () => this.resize());
		this.onDisposeObservable.add(() => {
			console.log("Disposing game");
		});

		this.runRenderLoop(() => this.scene.render());
	}
}
