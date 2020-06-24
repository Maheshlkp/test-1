import React from 'react';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import { Provider } from 'react-redux'
import {Result} from './Result';

const mockStore = configureMockStore();

describe('Test Result', () => {

    it('should render correctly', () => {
        const store = mockStore({
            input:[1,5,10], total: 16
        })
        const wrapper = shallow(<Provider store={store}><Result /></Provider>);
        expect(wrapper.getElements()).toMatchSnapshot();
    });
});