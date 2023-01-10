import React from 'react';
import styled from 'styled-components';

import {
	colors,
	DarkColorsCSSVariables,
	LightColorsCSSVariables,
} from '@/Theme/colors';
import { fontSize } from '@/Theme/fonstSize';
import { radii } from '@/Theme/radii';

type ThemeProps = {
	children: React.ReactNode;
};

const ThemeStyled = styled('div')({
	position: 'relative',
	'&[data-theme=light]': { '': LightColorsCSSVariables },
	'&[data-theme=dark]': { '': DarkColorsCSSVariables },
	'@media (prefers-color-scheme: ligth)': { '': LightColorsCSSVariables },
	'@media (prefers-color-scheme: dark)': { '': DarkColorsCSSVariables },
});

const ButtonThemeStyled = styled('button')({
	position: 'absolute',
	border: 'none',
	right: 0,
	margin: '1rem',
	width: '3rem',
	height: '3rem',
	borderRadius: radii.full,
	fontSize: fontSize.xl2,
	transition: 'all 0.2s ease-in-out',
	background: colors.background800Alpha80,
});

export const Theme: React.FC<ThemeProps> = ({ children }) => {
	const [theme, setTheme] = React.useState<'dark' | 'light' | ''>('');

	React.useEffect(() => {
		const darkQuery = '(prefers-color-scheme: dark)';
		const darkMQL = window.matchMedia(darkQuery);

		if (darkMQL.media === darkQuery && darkMQL.matches) {
			return setTheme('dark');
		}
		return setTheme('light');
	}, []);

	return (
		<ThemeStyled data-theme={theme}>
			<ButtonThemeStyled
				onClick={() => setTheme(s => (s === 'dark' ? 'light' : 'dark'))}
			>
				{theme === 'dark' ? '☀️' : '🌒'}
			</ButtonThemeStyled>
			{children}
		</ThemeStyled>
	);
};
