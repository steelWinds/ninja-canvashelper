import type {ICanvasItem} from '@modules/interfaces/ICanvasItem';
import CanvasDrawing from '@modules/classes/CanvasDrawing';

class CanvasItem implements ICanvasItem {
	#parentNode: Node;
	#base64ID: string;
	#canvasInstance: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement, hashID: string, parent: Node) {
		this.#canvasInstance = canvas;
		this.#base64ID = hashID;
		this.#parentNode = parent;
	}

	public get id(): string {
		return this.#base64ID;
	}

	public get parent(): Node {
		return this.#parentNode;
	}

	public get context2D(): CanvasRenderingContext2D | null {
		if (this.#canvasInstance.getContext) {
			return this.#canvasInstance.getContext('2d');
		}

		return null;
	}

	public get canvasNode(): HTMLCanvasElement {
		return this.#canvasInstance;
	}

	public get draw(): InstanceType<typeof CanvasDrawing> | null {
		if (this.context2D) {
			return new CanvasDrawing(this.context2D);
		}

		return null;
	}
}

export default CanvasItem;
