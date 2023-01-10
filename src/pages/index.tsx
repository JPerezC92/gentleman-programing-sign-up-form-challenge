import styled from 'styled-components';

import { RegisterForm } from '@/Components/RegisterForm';
import { RegisterHero } from '@/Components/RegisterHero';
import { SEO } from '@/Components/SEO';
import { Theme } from '@/Components/Theme';
import { media } from '@/Theme/breakpoints';
import { colors } from '@/Theme/colors';
import { deviceSize } from '@/Theme/deviceSize';

const MainStyled = styled('main')({
	alignItems: 'center',
	columnGap: '1.5rem',
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem),1fr))',
	marginInline: 'auto',
	maxWidth: deviceSize.desktop,
	minHeight: '100%',
	paddingBlock: '4.55rem',
	paddingInline: '1.5rem',
	rowGap: '2.8rem',
	[media.between('mobile', 'desktop')]: { paddingInline: '5%' },
	[media.up('desktop')]: { paddingInline: '10.25rem' },
});

const Wrapper = styled('div')({
	display: 'grid',
	minHeight: '100vh',
	background: `${colors.background} url("./images/bg-intro-mobile.png")`,
	[media.up('mobile')]: {
		background: `${colors.background} url("./images/bg-intro-desktop.png")`,
	},
});

export default function Home() {
	return (
		<>
			<SEO
				title='Sign in form challenge'
				description='This is a challenge from the Gentleman Programming community'
			/>

			<Theme>
				<Wrapper>
					<MainStyled>
						<RegisterHero />

						<RegisterForm />
					</MainStyled>
				</Wrapper>
			</Theme>
		</>
	);
}
