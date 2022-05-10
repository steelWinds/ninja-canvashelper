import type {ICanvasHelper} from '@modules/interfaces/ICanvasHelper';
import CanvasItem from '@modules/classes/CanvasItem';
import {sha256} from 'crypto-hash';

class CanvasHelper implements ICanvasHelper {
	#canvasesCollection: Map<string, InstanceType<typeof CanvasItem>>;

	constructor() {
		this.#canvasesCollection = new Map();
	}

	public get collection(): Map<string, InstanceType<typeof CanvasItem>> {
		return this.#canvasesCollection;
	}

	public async createCanvasField(
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

		const idHash = await sha256(id);

		const canvasItem = new CanvasItem(canvas, idHash, parentNode);

		this.#canvasesCollection.set(idHash, canvasItem);

		return canvasItem;
	}

	public async removeCanvasField(
		id: string,
	): ReturnType<ICanvasHelper['removeCanvasField']> {
		const idHash = await sha256(id);

		if (!this.#canvasesCollection.has(idHash)) {
			return false;
		}

		const canvasItem = this.#canvasesCollection.get(idHash);

		canvasItem?.parent.removeChild(canvasItem.canvasNode);

		return this.#canvasesCollection.delete(idHash);
	}
}

export default CanvasHelper;
