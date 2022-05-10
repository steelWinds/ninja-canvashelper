/* eslint-disable no-unused-vars */
import type {ICanvasItem} from '@modules/interfaces/ICanvasItem';

interface ICanvasHelper {
    createCanvasField(
      id: string,
      {iSize, bSize, parentSelector, styleClass}: {
        iSize: number,
        bSize: number,
        parentSelector?: string,
        styleClass?: string,
      },
    ): ICanvasItem;

    removeCanvasField(id: string): boolean;

    getCanvasById(id: string): ICanvasItem | null;

    get collection(): Map<string, ICanvasItem>
}

export type {ICanvasHelper};
