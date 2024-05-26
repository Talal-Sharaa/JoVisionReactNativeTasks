import React from 'react';
import {shallow} from 'enzyme';
import Task38 from './ComponentOne';

describe('Task39', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Task39 />);
    expect(wrapper).toMatchSnapshot();
  });
});
