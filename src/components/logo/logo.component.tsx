import React from 'react';
import { ReactComponent as SVG } from '../../assets/npm.svg';
import './logo.component.styles.scss';

const Logo: React.FC = () => {
	return (
		<div className="logo">
			<SVG />
		</div>
	);
};

export default Logo;
