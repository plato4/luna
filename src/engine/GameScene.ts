import * as BABYLON from "babylonjs";
import Component from "./Component";

export interface ILevel {
	models?: IGameSceneModel[];
	clearColor?: string;
	gameManager?: INamedComponent;
	postBuild?: (gameScene: GameScene) => void;
	camera?: ICamera;
}

export interface INamedComponent {
	name?: string;
	component: typeof Component;
}

export interface IGameSceneModel {
	modelName?: string;
	folderPath: string;
	fileName: string;
	position?: BABYLON.Vector3;
	rotation?: BABYLON.Vector3;
	scale?: BABYLON.Vector3;
	components?: INamedComponent[];
}

export interface ICamera {
	position?: BABYLON.Vector3;
	rotation?: BABYLON.Vector3;
}

export class GameScene extends BABYLON.Scene {
	public load(level: ILevel) {
		this.clearColor = BABYLON.Color4.FromHexString(
			level.clearColor ?? "#000000"
		);
		const gameManager = new BABYLON.Node("default_gamemanager", this);

		if (level.gameManager)
			new level.gameManager.component(
				level.gameManager.name ??
					level.gameManager.component.constructor.toString(),
				gameManager
			);

		level.models?.forEach((m) => {
			BABYLON.SceneLoader.ImportMesh(
				m.modelName ?? "",
				m.folderPath,
				m.fileName,
				this,
				(mesh) => {
					mesh[0].position = m.position ?? BABYLON.Vector3.One();
					mesh[0].rotation = m.rotation ?? BABYLON.Vector3.One();
					mesh[0].scaling = m.scale ?? BABYLON.Vector3.One();
					if (mesh.length > 0)
						m.components?.forEach((c) => {
							new c.component(
								c.name ?? c.component.constructor.toString(),
								mesh[0]
							);
						});
				}
			);
		});

		new BABYLON.FreeCamera(
			"default_camera",
			level.camera?.position ?? BABYLON.Vector3.Zero(),
			this,
			true
		).rotation = level.camera?.rotation ?? BABYLON.Vector3.Zero();

		new BABYLON.HemisphericLight(
			"default_light",
			new BABYLON.Vector3(1, 1, 0),
			this
		);

		if (level.postBuild)
			try {
				level.postBuild(this);
			} catch (ex) {
				console.log("Level postbuild error: " + ex);
			}
	}
	//loadAsync() {}
}
