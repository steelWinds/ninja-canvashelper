const useCreatePath2D = (
	ctx: CanvasRenderingContext2D,
	mode: 'fill' | 'stroke',
	path?: Path2D,
): void => {
	const fillFn = ctx.fill.bind(ctx);
	const strokeFn = ctx.stroke.bind(ctx);

	switch (mode) {
		case 'fill':
			if (path) {
				fillFn(path);
			} else {
				fillFn();
			}

			break;

		case 'stroke':
			if (path) {
				path.closePath();
				strokeFn(path);
			} else {
				ctx.closePath();
				strokeFn();
			}

			break;

		default:
	}
};

export default useCreatePath2D;
