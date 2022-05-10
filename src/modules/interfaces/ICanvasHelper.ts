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
    ): Promise<ICanvasItem>;

    removeCanvasField(id: string): Promise<boolean>;

    get collection(): Map<string, ICanvasItem>
}

export type {ICanvasHelper};
