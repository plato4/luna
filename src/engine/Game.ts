import * as BABYLON from "babylonjs";
import { GameManager } from "./GameManager";

export class Game extends BABYLON.Engine {
	public scene: BABYLON.Scene;
	public canvas: HTMLCanvasElement;

	constructor(
		canvas: HTMLCanvasElement,
		gameManagerComponent: typeof GameManager
	) {
		super(canvas, true);

		console.log("CREATING GAME");

		this.canvas = canvas;
		this.scene = new BABYLON.Scene(this);

		new BABYLON.FreeCamera(
			"default_camera",
			BABYLON.Vector3.Zero(),
			this.scene,
			true
		);

		new BABYLON.HemisphericLight(
			"default_light",
			new BABYLON.Vector3(1, 1, 0),
			this.scene
		);

		const gameManager = new BABYLON.Node("default_gamemanager", this.scene);
		new gameManagerComponent(this, gameManager);

		window.addEventListener("resize", () => this.resize());
		this.onDisposeObservable.add(() => {
			console.log("DISPOSING GAME");
		});

		this.runRenderLoop(() => this.scene.render());
	}
}
