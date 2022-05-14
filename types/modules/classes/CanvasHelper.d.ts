import type { ICanvasHelper } from "../interfaces/ICanvasHelper";
declare class CanvasHelper implements ICanvasHelper {
    #private;
    constructor();
    get collection(): ICanvasHelper['collection'];
    getCanvasById(id: string): ReturnType<ICanvasHelper['getCanvasById']>;
    createCanvasField(id: string, { iSize, bSize, reserveMessage, parentSelector, styleClass }: {
        iSize: number;
        bSize: number;
        reserveMessage?: string;
        parentSelector?: string;
        styleClass?: string;
    }): ReturnType<ICanvasHelper['createCanvasField']>;
    removeCanvasField(id: string): ReturnType<ICanvasHelper['removeCanvasField']>;
}
export default CanvasHelper;
