import type {ICanvasHelper} from '@modules/interfaces/ICanvasHelper';
import CanvasItem from '@modules/classes/CanvasItem';
import {encode} from 'js-base64';

class CanvasHelper implements ICanvasHelper {
	#canvasesCollection: Map<string, InstanceType<typeof CanvasItem>>;

	constructor() {
		this.#canvasesCollection = new Map();
	}

	public get collection(): Map<string, InstanceType<typeof CanvasItem>> {
		return this.#canvasesCollection;
	}

	public getCanvasById(
		id: string,
	): ReturnType<ICanvasHelper['getCanvasById']> {
		return this.collection.get(encode(id)) ?? null;
	}

	public createCanvasField(
		id: string,
		{iSize, bSize, parentSelector, styleClass}: {
      iSize: number,
      bSize: number,
      parentSelector?: string,
      styleClass?: string,
    },
	): ReturnType<ICanvasHelper['createCanvasField']> {
		const canvas = document.createElement('canvas');

		// Create reserve message for unsupported browsers
		const warningMessage = document.createElement('output');
		warningMessage.insertAdjacentText(
			'beforeend',
			'Your browser not supported Canvas',
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

		const idBase64 = encode(id);

		const canvasItem = new CanvasItem(canvas, idBase64, parentNode);

		this.#canvasesCollection.set(idBase64, canvasItem);

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
