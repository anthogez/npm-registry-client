import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ContentResult from './';
import { mockedNodePackage } from './content-result.mocks';

configure({ adapter: new Adapter() });

it('Test if ContentResult Component renders without crash', () => {
	const contentResult = shallow(
		<ContentResult
			errorMessage="RIP, Not Found :)"
			nodePackage={null}
			isLoading={false}
		/>
	);
	expect(contentResult).toMatchSnapshot();
});

describe('This is a group of inner tests of ContentResult Component', () => {
	it('Test if on set isLoading as <false> and assigning a value to errorMessage props, ErrorMessage component will be displayed', () => {
		const contentResult = shallow(
			<ContentResult
				errorMessage="RIP, Not Found :)"
				nodePackage={null}
				isLoading={false}
			/>
		);
		expect(contentResult.find('ErrorMessage')).toHaveLength(1);
	});

	it('Test if on set isLoading <true> LoadingRequest Component will be rendered', () => {
		const contentResult = shallow(
			<ContentResult errorMessage="" nodePackage={null} isLoading={true} />
		);
		expect(contentResult.find('LoadingRequest')).toHaveLength(1);
	});

	it('Test if on set isLoading <false> LoadingRequest Component will be rendered', () => {
		const contentResult = shallow(
			<ContentResult errorMessage="" nodePackage={null} isLoading={false} />
		);
		expect(contentResult.find('LoadingRequest')).toHaveLength(0);
	});

	it('Test if on set isLoading <false>, LoadingRequest Component will be rendered', () => {
		const contentResult = shallow(
			<ContentResult errorMessage="" nodePackage={{}} isLoading={false} />
		);
		expect(contentResult.find('LoadingRequest')).toHaveLength(0);
	});

	it('Test if on set a mocked object <mockedNodePackage> on nodePackage props, NodeTreeView Component will be rendered', () => {
		const contentResult = shallow(
			<ContentResult
				errorMessage=""
				nodePackage={mockedNodePackage}
				isLoading={false}
			/>
		);
		expect(contentResult.find('NodeTreeView')).toHaveLength(1);
	});
});
