/* eslint-disable no-unused-vars */
import type {ICanvasItem} from '@modules/interfaces/ICanvasItem';

interface ICanvasHelper {
    createCanvasField(
      id: string,
      {iSize, bSize, reserveMessage, parentSelector, styleClass}: {
        iSize: number,
        bSize: number,
        reserveMessage?: string,
        parentSelector?: string,
        styleClass?: string,
      },
    ): ICanvasItem;

    removeCanvasField(id: string): boolean;

    getCanvasById(id: string): ICanvasItem | null;

    get collection(): Array<ICanvasItem>
}

export type {ICanvasHelper};
