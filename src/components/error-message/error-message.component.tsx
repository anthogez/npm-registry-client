import React from 'react';
import { Icon, Typography } from 'antd';
import './error-message.styles.scss';

const { Paragraph, Text } = Typography;

interface IErrorMessageProps {
	errorMessage: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ errorMessage }) => {
	const innerMessage = 'The content you submitted has the following error'; // this could be a prop and not nested here
	return (
		<div className="error-container">
			<Paragraph>
				<Text strong style={{ fontSize: 16 }}>
					{innerMessage}
				</Text>
			</Paragraph>
			<Paragraph>
				<Icon style={{ color: 'red' }} type="close-circle" /> {errorMessage}
			</Paragraph>
		</div>
	);
};

export default ErrorMessage;
