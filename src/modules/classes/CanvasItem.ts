import type {ICanvasItem} from '@modules/interfaces/ICanvasItem';
import CanvasDrawing from '@modules/classes/CanvasDrawing';
import {encode} from 'js-base64';

class CanvasItem implements ICanvasItem {
	#parentNode: Node;
	#base64ID: string;
	#canvasInstance: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement, id: string, parent: Node) {
		this.#canvasInstance = canvas;
		this.#base64ID = encode(id);
		this.#parentNode = parent;
	}

	public get id(): ICanvasItem['id'] {
		return this.#base64ID;
	}

	public get parent(): ICanvasItem['parent'] {
		return this.#parentNode;
	}

	public get context2D(): ICanvasItem['context2D'] {
		if (this.#canvasInstance.getContext) {
			return this.#canvasInstance.getContext('2d');
		}

		return null;
	}

	public get canvasNode(): ICanvasItem['canvasNode'] {
		return this.#canvasInstance;
	}

	public get draw(): ICanvasItem['draw'] {
		if (this.context2D) {
			return new CanvasDrawing(this.context2D);
		}

		return null;
	}
}

export default CanvasItem;
