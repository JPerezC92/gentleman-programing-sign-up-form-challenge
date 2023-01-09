import styled, { StyledComponentPropsWithRef } from 'styled-components';

import { Colors, colors, ColorScheme } from '@/Theme/colors';
import { fontSize } from '@/Theme/fonstSize';
import { font } from '@/Theme/font';
import { radii } from '@/Theme/radii';

type InputPropsBase = {
	colorScheme?: ColorScheme;
	hasError?: boolean;
};

export const Input = styled('input').attrs(props => ({
	type: props.type || 'text',
}))<InputPropsBase>(({ colorScheme = 'neutral2', hasError }) => {
	const _borderColor: Colors = hasError ? 'primary1500' : colorScheme + '100';
	const _color: Colors = hasError ? 'primary1500' : 'neutral1';

	return {
		color: colors[_color],
		padding: '1.2rem',
		border: `1px solid ${colors[_borderColor]}`,
		borderWidth: '0.125rem',
		borderRadius: radii.base,
		fontSize: fontSize.xs,
		fontWeight: '600',
		fontFamily: font.poppins,
		outlineColor: colors.accent700,
	};
});

export type InputProps = StyledComponentPropsWithRef<typeof Input> &
	InputPropsBase;
