const usePathStyle = (
	ctx: CanvasRenderingContext2D,
	mode: 'fill' | 'stroke',
	style?: string,
): void => {
	if (!style) {
		return;
	}

	switch (mode) {
		case 'fill':
			ctx.fillStyle = style;
			break;
		case 'stroke':
			ctx.strokeStyle = style;
			break;
		default:
	}
};

export default usePathStyle;

