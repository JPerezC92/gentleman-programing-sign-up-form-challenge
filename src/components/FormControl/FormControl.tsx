import React, { useId } from 'react';
import styled from 'styled-components';

import { FormErrorMessageProps } from '@/Components/FormErrorMessage/FormErrorMessage';
import { Input, InputProps } from '@/Components/Input';
import { colors } from '@/Theme/colors';
import { radii } from '@/Theme/radii';

const IconError = styled('div').attrs(() => ({ children: '!' }))({
	transition: 'all 0.2s ease-in-out',
	width: '1.5rem',
	borderRadius: radii.full,
	height: '1.5rem',
	textAlign: 'center',
	backgroundColor: colors.primary1,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: colors.text,
	fontWeight: 500,
	position: 'absolute',
	right: '0',
	insetBlock: '30%',
	lineHeight: 0,
	marginInlineEnd: '1.5rem',
});

type FormControlProps = {
	input?: JSX.Element;
	errorComponent?: React.ReactElement<FormErrorMessageProps>;
	isError?: boolean;
} & InputProps;

const InputWrapperStyled = styled('div')({
	position: 'relative',

	[`& > ${Input}`]: {
		display: 'block',
		width: '100%',
	},

	'&[data-error=false]': {
		[`& > ${IconError}`]: { opacity: 0 },
	},
	'&[data-error=true]': {
		borderColor: colors.primary1500,
		color: colors.primary1500,
		[`& > ${IconError}`]: { opacity: 1 },
		[`& > ${Input}`]: { paddingInlineEnd: '3.2rem' },
	},
});

export const FormControl: React.FC<FormControlProps> = React.forwardRef(
	function FormControl({ input, errorComponent, isError, ...tail }, ref) {
		const id = useId();

		return (
			<div>
				<InputWrapperStyled data-error={isError}>
					{input ? (
						React.cloneElement<InputProps>(input, {
							...tail,
							id,
							ref,
							'data-error': isError,
						})
					) : (
						<Input {...tail} ref={ref} id={id} data-error={isError} />
					)}

					<IconError />
				</InputWrapperStyled>

				{errorComponent}
			</div>
		);
	},
);
