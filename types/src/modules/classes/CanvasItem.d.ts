import type { ICanvasItem } from '@modules/interfaces/ICanvasItem';
import CanvasDrawing from '@modules/classes/CanvasDrawing';
declare class CanvasItem implements ICanvasItem {
    #private;
    constructor(canvas: HTMLCanvasElement, hashID: string, parent: Node);
    get id(): string;
    get parent(): Node;
    get context2D(): CanvasRenderingContext2D | null;
    get canvasNode(): HTMLCanvasElement;
    get draw(): InstanceType<typeof CanvasDrawing> | null;
}
export default CanvasItem;
