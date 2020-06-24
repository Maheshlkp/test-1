import React from 'react';
import {shallow} from 'enzyme';
import {Sidebar} from './Sidebar';

describe('Test Sidebar', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper.getElements()).toMatchSnapshot();
    })
});