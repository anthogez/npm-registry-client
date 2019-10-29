import React from 'react';
import { ErrorMessage, NodeTreeView, LoadingRequest } from '..';

import './content-result.component.styles.scss';
import config from '../../config';
const { loadingRequestProps } = config.components;

const ContentResult: React.FC<any> = ({
	errorMessage,
	nodePackage,
	isLoading
}) => {
	return (
		<div>
			{isLoading ? <LoadingRequest {...loadingRequestProps} /> : null}
			{!isLoading && errorMessage ? (
				<ErrorMessage errorMessage={errorMessage} />
			) : null}
			{nodePackage ? <NodeTreeView nodePackage={nodePackage} /> : null}
		</div>
	);
};

export default ContentResult;
