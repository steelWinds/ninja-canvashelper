import type { ICanvasDrawing } from '@modules/interfaces/ICanvasDrawing';
interface ICanvasItem {
    get canvasNode(): HTMLCanvasElement;
    get context2D(): CanvasRenderingContext2D | null;
    get parent(): Node;
    get draw(): ICanvasDrawing | null;
    get id(): string;
}
export type { ICanvasItem };
