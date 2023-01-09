const sizes = ['mobile', 'desktop'] as const;

export type Device = typeof sizes[number];

export const deviceSize = {
	mobile: 375,
	desktop: 1440,
} as const satisfies Record<Device, number>;
