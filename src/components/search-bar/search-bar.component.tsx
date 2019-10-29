import React from 'react';
import { Input } from 'antd';
import './search-bar.component.styles.scss';

const Search = Input.Search;

interface ISearchBarProps {
	onChangeSearchTerm: Function;
	placeholder?: string;
}
const SearchBar: React.FC<ISearchBarProps> = ({
	onChangeSearchTerm,
	placeholder = 'angular | angular@1.7.8'
}) => {
	return (
		<div>
			<Search
				placeholder={placeholder}
				onSearch={searchTerm => onChangeSearchTerm(searchTerm)}
				className="search-input"
			/>
		</div>
	);
};

export default SearchBar;
