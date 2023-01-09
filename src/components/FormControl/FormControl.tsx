import React, { useId } from 'react';
import styled from 'styled-components';

import { FormErrorMessageProps } from '@/Components/FormErrorMessage/FormErrorMessage';
import { Input, InputProps } from '@/Components/Input';

type FormControlProps = {
	input?: JSX.Element;
	errorComponent?: React.ReactElement<FormErrorMessageProps>;
} & InputProps;

export const FormControlStyled = styled('div')({
	[`& > ${Input}`]: {
		display: 'block',
		width: '100%',
	},
});

export const FormControl: React.FC<FormControlProps> = React.forwardRef(
	function FormControl({ input, errorComponent, ...tail }, ref) {
		const id = useId();

		return (
			<FormControlStyled>
				{input ? (
					React.cloneElement<InputProps>(input, {
						...tail,
						id,
						ref,
						hasError: !!errorComponent?.props.children,
					})
				) : (
					<Input
						{...tail}
						ref={ref}
						id={id}
						hasError={!!errorComponent?.props.children}
					/>
				)}

				{errorComponent}
			</FormControlStyled>
		);
	},
);
