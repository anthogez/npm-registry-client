import React, { useState, useEffect } from 'react';

import './wrapper.component.styles.scss';
import { Header, ContentResult } from '../';
import { RequestNodePackage } from '../../services/node-package.service';

const Wrapper: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [nodePackage, setNodePackage] = useState();

	useEffect(() => {
		if (searchTerm) {
			// Reset
			setNodePackage(null);
			setErrorMessage('');
			//Trying Fetch
			RequestNodePackage(
				searchTerm,
				setIsLoading,
				setNodePackage,
				setErrorMessage
			);
		}
	}, [searchTerm]);

	return (
		<div className="wrapper">
			<Header
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				isLoading={isLoading}
			/>
			<ContentResult
				errorMessage={errorMessage}
				nodePackage={nodePackage}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default Wrapper;
