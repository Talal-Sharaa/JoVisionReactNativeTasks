import React from "react";
import { shallow } from "enzyme";
import MyFunctionPage from "./MyFunctionPage";

describe("MyFunctionPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyFunctionPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
