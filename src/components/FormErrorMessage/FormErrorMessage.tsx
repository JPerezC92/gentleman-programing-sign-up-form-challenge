import styled from 'styled-components';

import { colors } from '@/Theme/colors';
import { fontSize } from '@/Theme/fonstSize';
import { font } from '@/Theme/font';

export type FormErrorMessageProps = {
	children?: string;
};

export const FormErrorMessage = styled('p')<FormErrorMessageProps>(
	({ children }) => ({
		fontFamily: font.poppins,
		marginBlock: '0.7rem 0.2rem',
		fontSize: fontSize.xxs,
		fontStyle: 'italic',
		textAlign: 'right',
		color: colors.primary1500,
		fontWeight: 500,
		transition: 'all 0.3s ease-in-out',
		transform: children ? 'scaleX(1)' : 'scaleX(0)',
	}),
);
