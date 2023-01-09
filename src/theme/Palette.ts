import hexRgb from 'hex-rgb';
import { generate } from 'smart-swatch/lib/generate';

import { ColorScheme } from '@/Theme/colors';

export type ColorsDefinitions = Record<ColorScheme, string>;

export type ColorScale =
	| '50'
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900';

export type AlphaScale =
	| '05'
	| '10'
	| '15'
	| '20'
	| '25'
	| '30'
	| '35'
	| '40'
	| '45'
	| '50'
	| '55'
	| '60'
	| '65'
	| '70'
	| '75'
	| '80'
	| '85'
	| '90'
	| '95';

export type GradientColorScale = Record<ColorScale, string>;

export const AlphasObject: Record<AlphaScale, number> = {
	'05': 0.05,
	'10': 0.1,
	'15': 0.15,
	'20': 0.2,
	'25': 0.25,
	'30': 0.3,
	'35': 0.35,
	'40': 0.4,
	'45': 0.45,
	'50': 0.5,
	'55': 0.55,
	'60': 0.6,
	'65': 0.65,
	'70': 0.7,
	'75': 0.75,
	'80': 0.8,
	'85': 0.85,
	'90': 0.9,
	'95': 0.95,
};

export function generateGradientPallete<
	Keys extends `${ColorScheme}${ColorScale}`,
	Result extends Record<Keys, string> & ColorsDefinitions,
>(colorsDefinitions: ColorsDefinitions): Result {
	const entries = Object.entries(colorsDefinitions)
		.map(([colorPrefix, value]) => {
			const gradients = generate(value.trim()) as GradientColorScale;

			return Object.entries(gradients).map(
				([colorScale, value]) => [colorPrefix + colorScale, value] as const,
			);
		})
		.flat();
	return { ...Object.fromEntries(entries), ...colorsDefinitions } as Result;
}

export function generateAlphaPallete<
	Pallete extends Record<string, string>,
	PalleteKeys extends keyof Pallete & string,
	Keys extends `${PalleteKeys}Alpha${AlphaScale}`,
	PalleteWithAlpha extends Record<Keys, string> & Pallete,
>(pallete: Pallete): PalleteWithAlpha {
	const entries = Object.entries(pallete)
		.map(([palleteKey, color]) => {
			const alphas = Object.entries(AlphasObject).map(
				([key, alpha]) =>
					[
						palleteKey + 'Alpha' + key,
						hexRgb(color, { format: 'css', alpha }),
					] as const,
			);

			return alphas;
		})
		.flat();

	return {
		...Object.fromEntries(entries),
		...pallete,
	} as unknown as PalleteWithAlpha;
}

export function generateCssVariables<Pallete extends Record<string, string>>(
	pallete: Pallete,
) {
	return Object.entries(pallete).reduce(
		(accum, [key, value]) => accum + `--${key}:${value};`,
		'',
	);
}

export function generateCssVariablesKeys<
	Pallete extends Record<string, string>,
	PalleteKeys extends keyof Pallete,
>(
	pallete: Pallete,
): Record<PalleteKeys | (Omit<string, PalleteKeys> & string), string> {
	const entries = Object.entries(pallete).map(([key]) => [
		key,
		`var(--${key})`,
	]);

	return Object.fromEntries(entries);
}
