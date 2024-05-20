import React from "react";
import { shallow } from "enzyme";
import Task38FunctionComponent from "./Task38FunctionComponent";

describe("Task38FunctionComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task38FunctionComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
