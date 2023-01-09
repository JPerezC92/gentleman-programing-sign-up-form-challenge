export type ShadowType = 'shadow1' | 'shadow2';

type Typote<DD extends ShadowType = ShadowType> = {
	[k in DD]: (color: string) => string;
};

export const shadow: Typote = {
	shadow1: color => `0px 3px 0px 1px ${color}` as const,
	shadow2: color => `0px 6px 0px 1px ${color}` as const,
};
