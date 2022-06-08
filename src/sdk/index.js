import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
	api_key: import.meta.env.VITE_API_KEY,
	delivery_token: import.meta.env.VITE_DELIVERY_TOKEN,
	environment: import.meta.env.VITE_ENVIRONMENT
});

export const getEntry = (ctype) => {
	return new Promise((resolve, reject) => {
		const Query = Stack.ContentType(ctype).Query();
		Query.includeCount()
			.toJSON()
			.find()
			.then(
				(result) => {
					resolve(result[0]);
				},
				(err) => {
					reject(err);
				}
			);
	});
};

export const getEntryByRef = (ctype, refFieldPath) => {
	return new Promise((resolve, reject) => {
		const Query = Stack.ContentType(ctype).Query();
		Query.includeReference([...refFieldPath])
			.toJSON()
			.find()
			.then(
				(result) => {
					resolve(result[0][0]);
				},
				(err) => {
					reject(err);
				}
			);
	});
};
