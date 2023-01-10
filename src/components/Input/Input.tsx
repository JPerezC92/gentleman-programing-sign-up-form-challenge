import styled, { StyledComponentPropsWithRef } from 'styled-components';

import { Colors, colors, ColorScheme } from '@/Theme/colors';
import { fontSize } from '@/Theme/fonstSize';
import { font } from '@/Theme/font';
import { radii } from '@/Theme/radii';

type InputPropsBase = { colorScheme?: ColorScheme; 'data-error'?: boolean };

export const Input = styled('input').attrs(props => ({
	type: props.type || 'text',
	autoComplete: props.autoComplete || 'off',
}))<InputPropsBase>(({ colorScheme = 'neutral2' }) => {
	const _borderColor: Colors = colorScheme + '100';

	return {
		color: colors.text900,
		padding: '1.2rem',
		border: `1px solid ${colors[_borderColor]}`,
		borderWidth: '0.125rem',
		borderRadius: radii.base,
		fontSize: fontSize.xs,
		fontWeight: '600',
		fontFamily: font.poppins,

		'&:focus': { outline: `2px auto ${colors.accent300}` },
		'&[data-error=true]': {
			borderColor: colors.danger500,
			color: colors.danger500,
		},
	};
});

export type InputProps = StyledComponentPropsWithRef<typeof Input> &
	InputPropsBase;
