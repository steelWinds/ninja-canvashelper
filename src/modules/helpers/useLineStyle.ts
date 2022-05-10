const useLineStyle = (
	ctx: CanvasRenderingContext2D,
	styles?: {
    size?: number,
    cap?: 'butt' | 'round' | 'square',
    join?: 'round' | 'bevel' | 'miter',
  },
): void => {
	if (!styles) {
		return;
	}

	ctx.lineWidth = styles.size ?? 1;
	ctx.lineJoin = styles.join ?? 'miter';
	ctx.lineCap = styles.cap ?? 'butt';
};

export default useLineStyle;
