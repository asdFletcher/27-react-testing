import React from "react";

import renderer from "react-test-renderer";

import counter from "../../../components/counter/counter.js";

describe("<counter />", () => {
  it("is alive", () => {
    expect(true).toBeTruthy();
  });

  xit("changes state on a click", () => {
    expect(true).toBeTruthy();
    let component = mount(<Thing />);
    let button = component.find("button");
    button.simulate("click");
    expect(component.state("stuff")).toBe(false);
    expect(component.find("span").text()).toContain("false");
  });

  xit("renders correctly", () => {
    const tree = renderer.create(<Thing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
