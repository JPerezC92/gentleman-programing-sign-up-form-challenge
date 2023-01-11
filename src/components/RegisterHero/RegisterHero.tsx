import React from 'react';
import styled from 'styled-components';

import { Text } from '@/Components/Text';
import { media } from '@/Theme/breakpoints';
import { colors } from '@/Theme/colors';
import { fontSize } from '@/Theme/fonstSize';
import { font } from '@/Theme/font';

const RegisterHeroStyled = styled('div')({
	fontFamily: font.poppins,
	color: colors.text,
	textAlign: 'left',
	[`& > h1`]: { fontSize: fontSize.xl3, letterSpacing: '-0.015rem' },
	[`& > h1 + ${Text}`]: { marginBlockStart: '1.5rem' },
	[media.down('mobile')]: { textAlign: 'center' },
	[media.up('mobile')]: { [`& > h1`]: { fontSize: fontSize.xl5 } },
});

export const RegisterHero: React.FC = () => {
	return (
		<RegisterHeroStyled>
			<h1>Learn to code by watching others</h1>

			<Text letterSpacing={0.04}>
				See how experienced developers solve problems in real-time. Watching
				scripted tutorials is great, but underestanding how developers think is
				invaluable
			</Text>
		</RegisterHeroStyled>
	);
};
