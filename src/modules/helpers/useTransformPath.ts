const useTranslatePath = (
	ctx: CanvasRenderingContext2D,
	fn: Function,
	{
		translatePoints = [0, 0],
		rotate = 0,
		scale = [1, 1],
	}:
  {
    translatePoints?: [number, number],
    rotate?: number,
    scale?: [number, number],
  },
): void => {
	const rotateDegrees = (Math.PI / 180) * rotate;

	ctx.save();

	ctx.translate(...translatePoints);
	ctx.scale(...scale);
	ctx.rotate(rotateDegrees);

	fn();

	ctx.restore();
};

export default useTranslatePath;
