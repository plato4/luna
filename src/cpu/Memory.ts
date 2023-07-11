export class Memory {
	private data: number[];

	constructor(size: number) {
		this.data = new Array<number>(size).fill(0);
	}

	public getAt(index: number): number | null {
		if (!this.isValidLocation(index)) return null;
		return this.data[index];
	}

	public getAtIndirect(index: number): number | null {
		const newIndex = this.getAt(index);
		if (newIndex === null) return null;
		return this.getAt(newIndex);
	}

	public getAll(): number[] {
		return this.data;
	}

	public setAt(index: number, value: number): boolean {
		if (!this.isValidLocation(index)) return false;
		this.data[index] = value;
		return true;
	}

	public setAtIndirect(index: number, value: number): boolean {
		const newIndex = this.getAt(index);
		if (newIndex === null) return false;
		return this.setAt(newIndex, value);
	}

	private isValidLocation(index: number): boolean {
		return !(index < 0 || index >= this.data.length);
	}
}

export const memoryTest = () => {
	const memory = new Memory(8);
	console.log(
		memory.getAll().every((v) => v === 0),
		"get all, all are zero"
	);
	console.log(memory.getAt(-1) === null, "get bounds check [-1]");
	console.log(memory.getAt(1) === 0, "get at [1] == 0");
	console.log(memory.getAt(8) === null, "get bounds check > length");
	console.log(!memory.setAt(-1, 1), "set bounds check [-1]");
	console.log(memory.setAt(1, 1) && memory.getAt(1) === 1, "set at [1] == 1");
	console.log(!memory.setAt(8, 1), "set bounds check > length");

	memory.setAt(1, 1);
	memory.setAt(0, 1);
	console.log(memory.getAtIndirect(0) === 1, "get indirect [0]->[1] == 1");

	memory.setAt(1, 0);
	console.log(
		memory.setAtIndirect(1, 1) && memory.getAt(0) === 1,
		"set indirect [1]->[0] to 1, [0] == 6"
	);
};
