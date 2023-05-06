import * as BABYLON from "babylonjs";
import { GameManager } from "./components/GameManager";

export const createGame = (canvas: HTMLCanvasElement): Game => {
	return new Game(canvas);
};

export class Game extends BABYLON.Engine {
	public scene: BABYLON.Scene;
	public canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		super(canvas, true);
		this.canvas = canvas;
		this.scene = new BABYLON.Scene(this);

		new BABYLON.ArcRotateCamera(
			"default_camera",
			Math.PI / 2,
			Math.PI / 2,
			2,
			BABYLON.Vector3.Zero(),
			this.scene
		);

		const gamemanager = new BABYLON.Node("gamemanager");
		new GameManager(gamemanager, this);

		this.runRenderLoop(() => this.scene.render());
		window.addEventListener("resize", () => this.resize());
		this.onDisposeObservable.add(() => {
			console.log("disposing game");
		});
	}
}
