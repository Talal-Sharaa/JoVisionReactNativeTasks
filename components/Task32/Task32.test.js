import React from 'react';
import {shallow} from 'enzyme';
import Task32 from './Task32';

describe('Task32', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Task32 />);
    expect(wrapper).toMatchSnapshot();
  });
});
