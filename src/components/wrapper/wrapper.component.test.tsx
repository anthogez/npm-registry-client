import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Wrapper from './';

configure({ adapter: new Adapter() });

describe('Trying render Wrapper Component and its children without crash.', () => {
	it('Check if Wrapper Component corrently Renders', () => {
		const wrapper = shallow(<Wrapper />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Check if Header Component corrently renders', () => {
		const wrapper = shallow(<Wrapper />);
		expect(wrapper.find('Header')).toHaveLength(1);
	});

	it('Check if ContentResult Component corrently renders', () => {
		const wrapper = shallow(<Wrapper />);
		expect(wrapper.find('ContentResult')).toHaveLength(1);
	});
});
