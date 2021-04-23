import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Todo from "./Todo";

configure({ adapter: new Adapter() });

describe("<Todo/> Component unit tests", () => {
    const mockFn = jest.fn();

    const todoText = "do something";

    const props = {
        onClick: mockFn,
        completed: false,
        text: todoText,
    };

    it("should render one <Todo /> component", () => {
        const component = shallow(<Todo {...props} />);
        expect(component).toHaveLength(1);
        expect(component.find("li")).toHaveLength(1);
    });

    it(`should contain text ${todoText}`, () => {
        const component = shallow(<Todo {...props} />);
        // console.log(component.props());
        expect(component.props().children).toEqual(todoText);
    });

    it(`should set props correctly`, () => {
        const component = shallow(<Todo {...props} />);
        component.setProps({ text: "hello" });
        expect(component.props().children).not.toEqual(todoText);
    });

    it(`should call onClick handler`, () => {
        const component = shallow(<Todo {...props} />);
        component.simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
