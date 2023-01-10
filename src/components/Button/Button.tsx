import styled from 'styled-components';

import { media } from '@/Theme/breakpoints';
import { Colors, colors, ColorScheme } from '@/Theme/colors';
import { fontSize } from '@/Theme/fonstSize';
import { font, FontWeigth } from '@/Theme/font';
import { Raddi, radii } from '@/Theme/radii';
import { shadow, ShadowType } from '@/Theme/shadow';

type ButtonProps = {
	colorScheme?: ColorScheme;
	shadowSize?: ShadowType;
	shadowColor?: Colors;
	rounded?: Raddi;
	textTransform?: 'uppercase';
	fontWeight?: FontWeigth | `${FontWeigth}`;
};

export const Button = styled('button').attrs(props => ({
	type: props.type || 'button',
}))<ButtonProps>(
	({
		colorScheme = 'primary1',
		shadowColor,
		shadowSize = 'shadow1',
		rounded = 'base',
		fontWeight = 500,
		textTransform,
	}) => {
		const _shadowColor: string = shadowColor || colorScheme + '500Alpha95';

		return {
			background: colors[colorScheme],
			border: 'none',
			borderRadius: radii[rounded],
			boxShadow: shadow[shadowSize](colors[_shadowColor] || 'black'),
			color: colors.text,
			fontFamily: font.poppins,
			fontSize: fontSize.sm,
			letterSpacing: '0.05rem',
			lineHeight: 1.7,
			paddingBlock: '0.8rem',
			paddingInline: '2.2rem',
			transition: 'all 0.2s ease-in-out',
			fontWeight,
			textTransform,

			'&:focus': { outline: `2px auto ${colors.accent300}` },
			'&:hover': { cursor: 'pointer', background: colors[colorScheme + '300'] },
			[media.up('desktop')]: { fontSize: fontSize.lg },
		};
	},
);
