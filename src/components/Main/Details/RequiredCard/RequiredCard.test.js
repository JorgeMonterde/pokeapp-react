import React from "react";
import { shallow } from "enzyme";
import RequiredCard from "./RequiredCard";

describe("RequiredCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RequiredCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
