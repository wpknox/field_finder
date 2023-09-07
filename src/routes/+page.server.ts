import { ARMS_API_KEY } from '$env/static/private';
import { SELECTED_FIELDS } from '$lib/utils';
import type { Actions } from '@sveltejs/kit';

type Location = {
	latitude: number;
	longitude: number;
};

type SearchOptions = {
	fields: string[];
	radius: number;
	userLocation: Location;
};

const baseUrl = 'https://api.ers.usda.gov/data/arms/';
const apiKey = `api_key=${ARMS_API_KEY}`;

const stateSearch = async () => {
	const url = `${baseUrl}state?${apiKey}`;
	const call = await fetch(url);
	const json = await call.json();
	console.log(json);
};

const findFields = (searchParams: SearchOptions): boolean => {
	return true;
};

export const actions = {
	default: async ({ request }) => {
		await stateSearch();
		const data = await request.formData();
		const dataObj = Object.fromEntries(data);
		const searchOptions: SearchOptions = {
			fields: data.getAll(SELECTED_FIELDS) as string[],
			radius: parseInt(dataObj.radius as string),
			userLocation: {
				latitude: parseFloat(dataObj.latitude as string),
				longitude: parseFloat(dataObj.longitude as string)
			}
		};

		const result = findFields(searchOptions);
		return {
			fields: result
		};
	}
} satisfies Actions;
