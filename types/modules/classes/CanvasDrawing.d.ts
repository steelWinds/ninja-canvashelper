import type { ICanvasDrawing } from "../interfaces/ICanvasDrawing";
declare class CanvasDrawing implements ICanvasDrawing {
    #private;
    constructor(ctx: CanvasRenderingContext2D);
    clear(full: boolean, { startPoints, sizes }?: {
        startPoints?: [number, number];
        sizes?: [number, number];
        full?: boolean;
    }): void;
    drawRect({ startPoints, sizes, rotate, scale, mode, style }: {
        startPoints: [number, number];
        sizes: [number, number];
        mode: 'fill' | 'stroke';
        fillStyle?: string;
        rotate?: number;
        scale?: [number, number];
        style?: string;
    }): void;
    drawLine({ startPoints, linePoints, rotate, scale, mode, style }: {
        startPoints: [number, number];
        linePoints: Array<[...[number, number]]>;
        mode: 'fill' | 'stroke';
        rotate?: number;
        scale?: [number, number];
        style?: string;
    }, lineStyle?: {
        size?: number;
        cap?: 'butt' | 'round' | 'square';
        join?: 'round' | 'bevel' | 'miter';
    }): void;
    drawArc({ startPoints, radius, anglePoints, rotate, scale, clockwise, mode, style, }: {
        startPoints: [number, number];
        anglePoints: [number, number];
        radius: number;
        clockwise?: boolean;
        mode: 'fill' | 'stroke';
        rotate?: number;
        scale?: [number, number];
        style?: string;
    }): void;
}
export default CanvasDrawing;
