import React from "react";
import { shallow } from "enzyme";
import PageTwo from "./PageTwo";

describe("PageTwo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PageTwo />);
    expect(wrapper).toMatchSnapshot();
  });
});
