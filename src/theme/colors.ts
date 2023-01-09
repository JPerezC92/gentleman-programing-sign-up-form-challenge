import {
	generateAlphaPallete,
	generateCssVariables,
	generateCssVariablesKeys,
	generateGradientPallete,
} from '@/Theme/Palette';

const colorsDefinition = {
	primary1: '#ff7a7a',
	primary2: '#38cc8c',
	accent: '#6055a5',
	neutral1: '#3e3c49',
	neutral2: '#b9b6d3',
} as const;

export type ColorScheme = keyof typeof colorsDefinition;

const LightPallete = generateGradientPallete(colorsDefinition);

const LightPalleteWithAlphas = generateAlphaPallete(LightPallete);

export const LightColorsCSSVariables = generateCssVariables(
	LightPalleteWithAlphas,
);

export const colors = generateCssVariablesKeys(LightPalleteWithAlphas);

export type Colors = keyof typeof colors;
