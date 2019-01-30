
const util = require('util');

import React from "react";

import renderer from "react-test-renderer";

import Counter from "../../../components/counter/counter.js";

describe("<counter />", () => {
  it("is alive", () => {
    expect(true).toBeTruthy();
  });

  it("correctly renders", () => {
    let component = mount(<Counter />);
    expect(component.find(".count").exists()).toBeTruthy();
    expect(component.find(".up").exists()).toBeTruthy();
    expect(component.find(".down").exists()).toBeTruthy();
  });

  it("changes state on a click", () => {
    let component = mount(<Counter />);
    let button = component.find(".down");
    
    expect(component.state("count")).toBe(0);
    button.simulate("click");
    expect(component.state("count")).toBe(-1);
    expect(component.find(".count").text()).toContain("-1");
  });

  it("changes state on a click", () => {
    let component = mount(<Counter />);
    let button = component.find(".up");
    
    expect(component.state("count")).toBe(0);
    button.simulate("click");
    expect(component.state("count")).toBe(1);
    expect(component.find(".count").text()).toContain("1");
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
