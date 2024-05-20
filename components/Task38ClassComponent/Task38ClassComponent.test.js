import React from "react";
import { shallow } from "enzyme";
import Task38ClassComponent from "./Task38ClassComponent";

describe("Task38ClassComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task38ClassComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
