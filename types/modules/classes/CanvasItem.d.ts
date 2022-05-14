import type { ICanvasItem } from "../interfaces/ICanvasItem";
declare class CanvasItem implements ICanvasItem {
    #private;
    constructor(canvas: HTMLCanvasElement, id: string, parent: Node);
    get id(): ICanvasItem['id'];
    get parent(): ICanvasItem['parent'];
    get context2D(): ICanvasItem['context2D'];
    get canvasNode(): ICanvasItem['canvasNode'];
    get draw(): ICanvasItem['draw'];
}
export default CanvasItem;
