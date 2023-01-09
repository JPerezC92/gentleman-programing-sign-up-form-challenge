import 'modern-normalize/modern-normalize.css';

import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import { LightColorsCSSVariables } from '@/Theme/colors';

const Adsa = createGlobalStyle({
	body: {
		'': LightColorsCSSVariables,
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Adsa />
			<Component {...pageProps} />
		</>
	);
}
