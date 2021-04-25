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
    let component;

    beforeEach(() => {
        component = shallow(<Todo {...props} />);
    });

    it("should render one <Todo /> component", () => {
        expect(component).toHaveLength(1);
        expect(component.find("li")).toHaveLength(1);
    });

    it(`should contain text ${todoText}`, () => {
        expect(component.props().children).toEqual(todoText);
    });

    it(`should set props correctly`, () => {
        component.setProps({ text: "hello" });
        expect(component.props().children).not.toEqual(todoText);
    });

    it(`should call onClick handler`, () => {
        component.simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});

describe("<Todo /> Styling behaviour", () => {
    const mockFn = jest.fn();
    it("should not have a linethrough style when Todo is incomplete", () => {
        const component = shallow(
            <Todo onClick={mockFn} completed={false} text="walk" />
        );
        expect(component.props().style).toEqual({ textDecoration: "none" });
    });

    it("should  have a linethrough style when Todo is complete", () => {
        const component = shallow(
            <Todo onClick={mockFn} completed={true} text="walk" />
        );
        expect(component.props().style).toEqual({
            textDecoration: "line-through",
        });
    });
});
