import request from 'request-promise-native';

import config from '../config';

const { apiUrl } = config.dev;

const RequestNodePackage: any = async (
	searchTerm: string,
	setIsLoading: Function,
	setNodePackage: Function,
	setErrorMessage: Function
) => {
	setIsLoading(true);
	try {
		const requestUrl = `${apiUrl}/${searchTerm}`;
		const options = { resolveWithFullResponse: false, json: true };
		const response = await request(requestUrl, options);
		setNodePackage(response.body);
	} catch (e) {
		console.log(e);
		setErrorMessage(e.error.message);
	}
	setIsLoading(false);
};

export { RequestNodePackage };
