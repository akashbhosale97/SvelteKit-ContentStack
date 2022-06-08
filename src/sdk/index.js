import Contentstack from 'contentstack';

const Stack = Contentstack.Stack({
	api_key: 'blt79138ebfed6f6d81',
	delivery_token: 'csdf2e5a5f2b460cc5615aafd7',
	environment: 'my-test-app'
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
