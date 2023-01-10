import React from 'react';
import styled from 'styled-components';

import { Text } from '@/Components/Text';
import { media } from '@/Theme/breakpoints';
import { fontSize } from '@/Theme/fonstSize';

const RegisterHeroStyled = styled('div')({
	color: 'white',
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
