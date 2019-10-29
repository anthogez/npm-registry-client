import React from 'react';
import { Spin } from 'antd';
import './loading-request.component.styles.scss';

interface ILoadingRequestProps {
	title?: string;
	description?: string;
}

const LoadingRequest: React.FC<ILoadingRequestProps> = ({
	title,
	description
}) => {
	return (
		<div className="loading-container">
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div>
				<Spin tip="Loading... " />
			</div>
		</div>
	);
};

export default LoadingRequest;
