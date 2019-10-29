import React from 'react';
import Logo from '../logo/logo.component';
import { SearchBar } from '..';

import './header.component.styles.scss';

interface IHeaderProps {
	searchTerm: string;
	isLoading: boolean;
	setSearchTerm: Function;
}

const Header: React.FC<IHeaderProps> = ({
	searchTerm,
	isLoading,
	setSearchTerm
}) => {
	return (
		<div>
			<Logo />
			{searchTerm ? <h2>{searchTerm}</h2> : null}
			{!isLoading ? (
				<SearchBar
					onChangeSearchTerm={setSearchTerm}
					placeholder="express | express@4.17.1"
				/>
			) : null}
		</div>
	);
};

export default Header;
