import type {ICanvasDrawing} from '@modules/interfaces/ICanvasDrawing';
import useCreatePath2D from '@modules/helpers/useCreatePath2D';
import usePathStyle from '@modules/helpers/usePathStyle';
import useLineStyle from '@modules/helpers/useLineStyle';
import useTransformPath from '@modules/helpers/useTransformPath';

class CanvasDrawing implements ICanvasDrawing {
	#canvasCtx: CanvasRenderingContext2D;

	constructor(ctx: CanvasRenderingContext2D) {
		this.#canvasCtx = ctx;
	}

	public clear(
		full: boolean,
		{startPoints, sizes}:
    {
      startPoints?: [number, number],
      sizes?: [number, number],
      full?: boolean,
    } = {},
	): void {
		if (full) {
			this.#canvasCtx.clearRect(
				0,
				0,
				this.#canvasCtx.canvas.clientWidth,
				this.#canvasCtx.canvas.clientHeight,
			);

			return;
		}

		if (!startPoints || !sizes) {
			return;
		}

		useTransformPath(
			this.#canvasCtx,
			() => {
				this.#canvasCtx.clearRect(
					0,
					0,
					...sizes,
				);
			},
			{
				translatePoints: startPoints,
			},
		);
	}

	public drawRect(
		{startPoints, sizes, rotate, scale, mode, style}:
    {
      startPoints: [number, number],
      sizes: [number, number],
      mode: 'fill' | 'stroke',
      fillStyle?: string,
      rotate?: number,
      scale?: [number, number],
      style?: string,
    },
	): void {
		usePathStyle(this.#canvasCtx, mode, style);

		useTransformPath(
			this.#canvasCtx,
			() => {
				this.#canvasCtx[`${mode}Rect`](
					0,
					0,
					...sizes,
				);
			},
			{
				translatePoints: startPoints,
				rotate,
				scale,
			},
		);
	}

	public drawLine(
		{startPoints, linePoints, rotate, scale, mode, style}:
    {
      startPoints: [number, number],
      linePoints: Array<[...[number, number]]>,
      mode: 'fill' | 'stroke',
      rotate?: number,
      scale?: [number, number],
      style?: string,
    },
		lineStyle?: {
      size?: number,
      cap?: 'butt' | 'round' | 'square',
      join?: 'round' | 'bevel' | 'miter',
    },
	): void {
		useLineStyle(this.#canvasCtx, lineStyle);
		usePathStyle(this.#canvasCtx, mode, style);

		this.#canvasCtx.beginPath();

		useTransformPath(
			this.#canvasCtx,
			() => {
				this.#canvasCtx.moveTo(...startPoints);

				linePoints.forEach(points => {
					this.#canvasCtx.lineTo(...points);
				});
			},
			{
				rotate,
				scale,
			},
		);

		useCreatePath2D(this.#canvasCtx, mode);
	}

	public drawArc(
		{
			startPoints,
			radius,
			anglePoints,
			rotate,
			scale,
			clockwise,
			mode,
			style,
		}:
    {
      startPoints: [number, number],
      anglePoints: [number, number],
      radius: number,
      clockwise?: boolean,
      mode: 'fill' | 'stroke',
      rotate?: number,
      scale?: [number, number],
      style?: string,
    },
	): void {
		usePathStyle(this.#canvasCtx, mode, style);

		this.#canvasCtx.beginPath();

		useTransformPath(
			this.#canvasCtx,
			() => {
				this.#canvasCtx.arc(
					0,
					0,
					radius,
					...anglePoints,
					clockwise ?? false,
				);
			},
			{
				translatePoints: startPoints,
				rotate,
				scale,
			},
		);

		useCreatePath2D(this.#canvasCtx, mode);
	}
}

export default CanvasDrawing;
