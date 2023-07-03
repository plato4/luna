import * as BABYLON from "babylonjs";

import Component from "./Component";

export interface ILevel {
	models?: IModel[];
	clearColor?: string;
	postBuild?: (gameScene: BABYLON.Scene) => void;
	camera?: ICamera;
}

export interface INamedComponent {
	name?: string;
	component: typeof Component;
}

export interface IModel {
	name: string;
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

export const loadLevel = (scene: BABYLON.Scene, level: ILevel) => {
	scene.clearColor = BABYLON.Color4.FromHexString(
		level.clearColor ?? "#000000"
	);

	level.models?.forEach((m) => {
		BABYLON.SceneLoader.ImportMesh(
			m.modelName ?? "",
			m.folderPath,
			m.fileName,
			this,
			(mesh) => {
				mesh[0].name = m.name;
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

	if (level.camera && scene.getCameraByName("default_camera")) {
		scene.getCameraByName("default_camera")?.dispose();
		new BABYLON.FreeCamera(
			"default_camera",
			level.camera?.position ?? BABYLON.Vector3.Zero(),
			scene,
			true
		).rotation = level.camera?.rotation ?? BABYLON.Vector3.Zero();
	}

	scene.getNodeByName("default_light")?.dispose();
	new BABYLON.HemisphericLight(
		"default_light",
		new BABYLON.Vector3(1, 1, 0),
		scene
	);

	if (level.postBuild)
		try {
			level.postBuild(scene);
		} catch (ex) {
			console.log("LEVEL POST BUILD ERROR: " + ex);
		}
};
