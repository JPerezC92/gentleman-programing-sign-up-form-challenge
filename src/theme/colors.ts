import {
	generateAlphaPallete,
	generateCssVariables,
	generateCssVariablesKeys,
	generateGradientPallete,
} from '@/Theme/Palette';

const lightColorsDefinition = {
	primary1: '#ff7a7a',
	primary2: '#38cc8c',
	accent: '#6055a5',
	neutral1: '#3e3c49',
	neutral2: '#b9b6d3',
	text: '#fafafa',
	danger: '#ff7a7a',
	background: '#ff7a7a',
	formBackground: '#fafafa',
} as const;

const darkColorsDefinition = {
	primary1: '#ff7a7a',
	primary2: '#38cc8c',
	accent: '#6055a5',
	neutral1: '#3e3c49',
	neutral2: '#b9b6d3',
	text: '#fafafa',
	danger: '#ff7a7a',
	background: '#3e3c49',
	formBackground: '#242526',
} as const;

export type ColorScheme = keyof typeof lightColorsDefinition;

const LightPallete = generateGradientPallete(lightColorsDefinition);
const DarkPallete = generateGradientPallete(darkColorsDefinition);

const LightPalleteWithAlphas = generateAlphaPallete(LightPallete);
const DarkPalleteWithAlphas = generateAlphaPallete(DarkPallete);

export const LightColorsCSSVariables = generateCssVariables(
	LightPalleteWithAlphas,
);
export const DarkColorsCSSVariables = generateCssVariables(
	DarkPalleteWithAlphas,
);

export const colors = generateCssVariablesKeys(LightPalleteWithAlphas);

export type Colors = keyof typeof colors;
