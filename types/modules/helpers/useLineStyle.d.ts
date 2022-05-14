declare const useLineStyle: (ctx: CanvasRenderingContext2D, styles?: {
    size?: number | undefined;
    cap?: "square" | "butt" | "round" | undefined;
    join?: "round" | "bevel" | "miter" | undefined;
} | undefined) => void;
export default useLineStyle;
