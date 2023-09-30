export const SELECTED_FIELDS = 'selectedFields';

export type LatLong = {
	value: number;
	direciton: string;
};

export const toMapValue = (input: LatLong | number): number => {
	if (typeof input === 'number') {
		return input;
	}
	const upper = input.direciton.toLocaleUpperCase().charAt(0);
	if ((upper === 'S' || upper === 'W') && input.value > 0) {
		input.value *= -1;
	}
	return input.value;
};
