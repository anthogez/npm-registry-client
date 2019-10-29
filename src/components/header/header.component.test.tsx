import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Header from './';

configure({ adapter: new Adapter() });

it('Test if Header Component renders without crash', () => {
	const wrapper = shallow(
		<Header searchTerm="" isLoading={false} setSearchTerm={() => null} />
	);
	expect(wrapper).toMatchSnapshot();
});

describe('This is a group of inner tests of Header Component', () => {
	it('Test if on set isLoading <false> SearchBar Component will be rendered', () => {
		const header = shallow(
			<Header
				searchTerm=""
				isLoading={false}
				setSearchTerm={() => null}
			/>
		);
		expect(header.find('SearchBar')).toHaveLength(1);
	});

	it('Test if on set isLoading <true> SearchBar Component will not be rendered', () => {
		const header = shallow(
			<Header
				searchTerm=""
				isLoading={true}
				setSearchTerm={() => null}
			/>
		);
		expect(header.find('SearchBar')).toHaveLength(0);
	});

	it('Test if on set searchTerm value as <snyk> it will be rendered inside the unique available <h2> element on component', () => {
		const header = shallow(
			<Header
				searchTerm="snyk"
				isLoading={false}
				setSearchTerm={() => null}
			/>
		);
		expect(header.find('h2').text()).toEqual('snyk');
	});
});
