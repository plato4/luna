/* eslint-disable @typescript-eslint/no-empty-function */
import Component from "../Component";
import { Game } from "../Game";
import { Rotate } from "./Rotate";
import * as BABYLON from "babylonjs";

export class GameManager extends Component {
	public game: Game;
	constructor(node: BABYLON.Node, game: Game) {
		super("gamemanager", node);
		this.game = game;
		this.boxScene();
	}

	public onStart(): void {}
	public onUpdate(): void {}
	public onDestroy(): void {}

	public boxScene() {
		const box = BABYLON.MeshBuilder.CreateBox(
			"default_box",
			{ width: 0.1, height: 0.1, depth: 0.1 },
			this.node.getScene()
		);

		const camera = this.node.getScene().getCameraByName("default_camera");

		if (camera) camera.attachControl(this.game.canvas, true);
		const light = new BABYLON.HemisphericLight(
			"default_light",
			new BABYLON.Vector3(1, 1, 0),
			this.game.scene
		);
		new Rotate("Rotate", box);
	}
}
