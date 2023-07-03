export interface ITile {
	name: string;
	type: TileType;
	data: {
		modelName?: string;
		folderPath: string;
		fileName: string;
		position?: BABYLON.Vector3;
		rotation?: BABYLON.Vector3;
		scale?: BABYLON.Vector3;
	};
}

export interface ITileset {
	name: string;
	tiles: ITile[];
}

export enum TileType {
	Floor,
	Wall,
	Hole,
}

export const GameTileset: ITileset = {
	name: "GameTileset",
	tiles: [
		{
			name: "floor",
			type: TileType.Floor,
			data: {
				modelName: "",
				folderPath: "./",
				fileName: "Floor.gltf",
				position: new BABYLON.Vector3(0, 0, 0),
				rotation: new BABYLON.Vector3(0, 0, 0),
				scale: new BABYLON.Vector3(1, 1, 1),
			},
		},
	],
};
