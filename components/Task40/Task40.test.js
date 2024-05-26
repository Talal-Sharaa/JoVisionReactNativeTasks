import React from 'react';
import {shallow} from 'enzyme';
import Task40 from './Task40App';

describe('Task40', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Task40 />);
    expect(wrapper).toMatchSnapshot();
  });
});
