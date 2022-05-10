import type {ICanvasHelper} from '@modules/interfaces/ICanvasHelper';
import CanvasItem from '@modules/classes/CanvasItem';
import {encode} from 'js-base64';

class CanvasHelper implements ICanvasHelper {
	#canvasesCollection: Map<string, InstanceType<typeof CanvasItem>>;

	constructor() {
		this.#canvasesCollection = new Map();
	}

	public get collection(): ICanvasHelper['collection'] {
		return Array.from(this.#canvasesCollection.values());
	}

	public getCanvasById(
		id: string,
	): ReturnType<ICanvasHelper['getCanvasById']> {
		return this.#canvasesCollection.get(encode(id)) ?? null;
	}

	public createCanvasField(
		id: string,
		{iSize, bSize, reserveMessage, parentSelector, styleClass}: {
      iSize: number,
      bSize: number,
      reserveMessage?: string
      parentSelector?: string,
      styleClass?: string,
    },
	): ReturnType<ICanvasHelper['createCanvasField']> {
		const canvas = document.createElement('canvas');

		// Create reserve message for unsupported browsers
		const warningMessage = document.createElement('output');
		warningMessage.insertAdjacentText(
			'beforeend',
			reserveMessage ?? 'Your browser not supported Canvas',
		);
		canvas.appendChild(warningMessage);

		canvas.width = iSize;
		canvas.height = bSize;

		if (styleClass) {
			canvas.classList.add(styleClass);
		}

		const parentNode = <Node>document.querySelector(
			parentSelector ?? 'body',
		);

		parentNode.appendChild(canvas);

		const canvasItem = new CanvasItem(canvas, id, parentNode);

		const base64ID = encode(id);

		this.#canvasesCollection.set(base64ID, canvasItem);

		return canvasItem;
	}

	public removeCanvasField(
		id: string,
	): ReturnType<ICanvasHelper['removeCanvasField']> {
		const idBase64 = encode(id);

		if (!this.#canvasesCollection.has(idBase64)) {
			return false;
		}

		const canvasItem = this.#canvasesCollection.get(idBase64);

		canvasItem?.parent.removeChild(canvasItem.canvasNode);

		return this.#canvasesCollection.delete(idBase64);
	}
}

export default CanvasHelper;
