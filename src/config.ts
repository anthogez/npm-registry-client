const config = {
	dev: {
		apiUrl: 'http://localhost:5000/api/node-package'
	},
	// placed here for demo purpose
	components: {
		loadingRequestProps: {
			title: "Don't worry!",
			description:
				'When the requested dependency was never called in our systems, it may take few minutes to prepare it for the first time.'
		}
	}
};

export default config;
