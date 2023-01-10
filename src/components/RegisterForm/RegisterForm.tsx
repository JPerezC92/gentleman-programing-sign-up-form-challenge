import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Button } from '@/Components/Button';
import { FormControl } from '@/Components/FormControl';
import { FormErrorMessage } from '@/Components/FormErrorMessage';
import { Text } from '@/Components/Text';
import { media } from '@/Theme/breakpoints';
import { colors } from '@/Theme/colors';
import { radii } from '@/Theme/radii';
import { shadow } from '@/Theme/shadow';

import { FormValues, registerSchema } from './registerSchema';

const RegisterFormSyled = styled('div')({
	flexDirection: 'column',
	gap: '1.5rem',
	display: 'flex',
	'& > form': {
		background: colors.formBackground,
		borderRadius: radii.lg,
		boxShadow: shadow.shadow2(colors.neutral1900Alpha15),
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		padding: '1.5rem',
	},
	[`& > form > footer`]: {
		textAlign: 'center',
		marginInline: '1rem',
		'& > a': {
			color: colors.primary1,
			textDecoration: 'none',
			fontWeight: 700,
		},
	},
	[`& > ${Button}`]: { minHeight: '5.6rem' },
	[media.up('mobile')]: {
		[`& > ${Button}`]: { minHeight: '3.7rem' },
		'& > form': { gap: '1.25rem', padding: '2.5rem' },
	},
});

export const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(registerSchema),
		mode: 'onBlur',
	});

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
				autoComplete='off'
			>
				<FormControl
					{...register('firstName')}
					autoFocus
					placeholder='First Name'
					minLength={1}
					maxLength={50}
					isError={!!errors.firstName?.message}
					errorComponent={
						<FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
					}
				/>

				<FormControl
					{...register('lastName')}
					placeholder='Last Name'
					minLength={1}
					maxLength={50}
					isError={!!errors.lastName?.message}
					errorComponent={
						<FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
					}
				/>

				<FormControl
					{...register('email')}
					placeholder='Email Address'
					maxLength={50}
					isError={!!errors.email?.message}
					errorComponent={
						<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
					}
				/>

				<FormControl
					{...register('password')}
					placeholder='Password'
					isError={!!errors.password?.message}
					minLength={8}
					maxLength={50}
					type='password'
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
					color='text200'
					size='xxs'
				>
					By clicking the button, you are agreeing to our{' '}
					<Link href='/'>Terms and Services</Link>
				</Text>
			</form>
		</RegisterFormSyled>
	);
};
