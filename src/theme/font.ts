/* eslint-disable camelcase */
import { Poppins } from '@next/font/google';

export const fontWeigthList = [300, 400, 500, 600, 700] as const;

export type FontWeigth = typeof fontWeigthList[number];

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-poppins',
	display: 'block',
});

export const font = {
	poppins: poppins.style.fontFamily,
} as const;
