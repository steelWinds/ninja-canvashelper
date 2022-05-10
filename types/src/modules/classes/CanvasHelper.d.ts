import type { ICanvasHelper } from '@modules/interfaces/ICanvasHelper';
import CanvasItem from '@modules/classes/CanvasItem';
declare class CanvasHelper implements ICanvasHelper {
    #private;
    constructor();
    get collection(): Map<string, InstanceType<typeof CanvasItem>>;
    createCanvasField(id: string, { iSize, bSize, parentSelector, styleClass }: {
        iSize: number;
        bSize: number;
        parentSelector?: string;
        styleClass?: string;
    }): ReturnType<ICanvasHelper['createCanvasField']>;
    removeCanvasField(id: string): ReturnType<ICanvasHelper['removeCanvasField']>;
}
export default CanvasHelper;
