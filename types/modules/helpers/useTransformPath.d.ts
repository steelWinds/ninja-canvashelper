declare const useTranslatePath: (ctx: CanvasRenderingContext2D, fn: Function, { translatePoints, rotate, scale, }: {
    translatePoints?: [number, number] | undefined;
    rotate?: number | undefined;
    scale?: [number, number] | undefined;
}) => void;
export default useTranslatePath;
