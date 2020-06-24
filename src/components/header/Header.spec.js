import React from 'react';
import {shallow} from 'enzyme';
import {Header} from './Header';

describe('Test Header', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.getElements()).toMatchSnapshot();
    })
});