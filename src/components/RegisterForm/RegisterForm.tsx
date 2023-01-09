import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { z } from 'zod';

import { Button } from '@/Components/Button';
import { FormControl } from '@/Components/FormControl';
import { FormErrorMessage } from '@/Components/FormErrorMessage';
import { Text } from '@/Components/Text';
import { media } from '@/Theme/breakpoints';
import { colors } from '@/Theme/colors';
import { radii } from '@/Theme/radii';
import { shadow } from '@/Theme/shadow';

const RegisterFormSyled = styled('div')({
	flexDirection: 'column',
	gap: '1.5rem',
	display: 'flex',
	'& > form': {
		background: 'white',
		borderRadius: radii.xl,
		boxShadow: shadow.shadow2(colors.neutral1900Alpha15),
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		padding: '1.5rem',
	},
	[`& > form > footer`]: {
		textAlign: 'center',
		marginInline: '1rem',
		'& > b': { color: colors.primary1 },
	},
	[`& > ${Button}`]: { minHeight: '5.6rem' },
	[media.up('mobile')]: {
		[`& > ${Button}`]: { minHeight: '3.7rem' },
		'& > form': { gap: '1.25rem', padding: '2.5rem' },
	},
});

const schema = z.object({
	firstName: z.string().min(2, { message: 'First Name cannot be empty' }),
	lastName: z.string().min(2, { message: 'Last Name cannot be empty' }),
	email: z.string().email({ message: 'Looks like this is not an email' }),
	password: z.string().min(8, { message: 'Password cannot be empty' }),
});

type FormValues = z.infer<typeof schema>;

export const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver: zodResolver(schema), mode: 'onChange' });

	return (
		<RegisterFormSyled>
			<Button
				colorScheme='accent'
				shadowSize='shadow2'
				shadowColor='accent900Alpha15'
				rounded='lg'
				fontWeight='400'
			>
				<b>Try it free 7 days</b> then $20/mo. thereafter
			</Button>

			<form
				onSubmit={handleSubmit(values =>
					alert(JSON.stringify(values, null, 2)),
				)}
			>
				<FormControl
					{...register('firstName')}
					placeholder='First Name'
					errorComponent={
						<FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
					}
				/>

				<FormControl
					{...register('lastName')}
					placeholder='Last Name'
					errorComponent={
						<FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
					}
				/>

				<FormControl
					{...register('email')}
					placeholder='Email Address'
					errorComponent={
						<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
					}
				/>

				<FormControl
					{...register('password')}
					placeholder='Password'
					errorComponent={
						<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
					}
				/>

				<Button colorScheme='primary2' textTransform='uppercase' type='submit'>
					Claim your free trial
				</Button>

				<Text
					as='footer'
					weight={500}
					lineHeight={1.6}
					color='neutral2'
					size='xxs'
				>
					By clicking the button, you are agreeing to our{' '}
					<b>Terms and Services</b>
				</Text>
			</form>
		</RegisterFormSyled>
	);
};
