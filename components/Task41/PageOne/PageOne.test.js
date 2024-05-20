import React from "react";
import { shallow } from "enzyme";
import PageOne from "./PageOne";

describe("PageOne", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PageOne />);
    expect(wrapper).toMatchSnapshot();
  });
});
