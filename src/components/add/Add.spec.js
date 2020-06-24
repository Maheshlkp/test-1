import React from 'react';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux'
import {Add} from './Add';

const mockStore = configureMockStore();

describe('Test Add', () => {

    it('should render correctly', () => {
        const store = mockStore({
            input:[], total: 0
        })
        const wrapper = shallow(<Provider store={store}><Add /></Provider>);
        expect(wrapper.getElements()).toMatchSnapshot();
    });
});