const sizes = ['mobile', 'desktop', 'tablet'] as const;

export type Device = typeof sizes[number];

export const deviceSize = {
	mobile: 375,
	tablet: 768,
	desktop: 1440,
} as const satisfies Record<Device, number>;
