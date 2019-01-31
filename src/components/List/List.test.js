import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

Enzyme.configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import { List } from "./List";

describe('List', () => {
	it('should call something', () => {
		const list = shallow(<List />);
	});
});
