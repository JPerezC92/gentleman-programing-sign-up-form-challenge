import styled from 'styled-components';

import { Colors, colors } from '@/Theme/colors';
import { FontSize, fontSize } from '@/Theme/fonstSize';
import { font, FontWeigth } from '@/Theme/font';

type TextProps = {
	size?: FontSize;
	color?: Colors;
	weight?: FontWeigth;
	lineHeight?: number;
	letterSpacing?: number;
};

export const Text = styled('p')<TextProps>(
	({
		size = 'sm',
		weight = 400,
		color = 'white',
		lineHeight = 1.72,
		letterSpacing = 0.0,
	}) => ({
		fontFamily: font.poppins,
		fontSize: fontSize[size],
		fontWeight: weight,
		color: colors[color],
		letterSpacing: `${letterSpacing}rem`,
		lineHeight,
	}),
);
