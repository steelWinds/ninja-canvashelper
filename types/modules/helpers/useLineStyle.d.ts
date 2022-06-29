declare const useLineStyle: (ctx: CanvasRenderingContext2D, styles?: {
    size?: number;
    cap?: 'butt' | 'round' | 'square';
    join?: 'round' | 'bevel' | 'miter';
}) => void;
export default useLineStyle;
