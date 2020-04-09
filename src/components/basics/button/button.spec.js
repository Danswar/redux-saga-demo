import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

const getWraper = (props = {}) => {
    let component = shallow(<Button {...props} />)
    return component;
}

const findByTestAtrr = (component, atrr) => {
    const wrapper = component.find(`[data-test="${atrr}"]`);
    return wrapper;
};

describe("Button component", () => {

    let onClickMock;
    let wrapper;
    beforeEach(() => {
        onClickMock = jest.fn();
        let mockProps = {
            onClick: onClickMock,
            isLoading: false,
            text: "Some text",
            className: "test-classname"
        };

        wrapper = getWraper(mockProps);
    });

    it("Should render without errors", () => {
        let tag = findByTestAtrr(wrapper, "button-test")
        expect(tag.length).toBe(1);
    })

    it("Should call onClick function when click", () => {
        wrapper.simulate("click");
        expect(onClickMock.mock.calls.length).toBe(1);
    })
    it("Shouldn't call onClick function when isLoading is true", () => {
        let tempProps = {
            onClick: onClickMock,
            isLoading: true,
            text: "Some text",
        }

        let wrapperLoading = getWraper(tempProps);
        wrapperLoading.simulate("click");

        expect(onClickMock.mock.calls.length).toBe(0);
    })
    it("Should shows loading... when isLoading is true", () => {
        let tempProps = {
            onClick: onClickMock,
            isLoading: true,
            text: "Some text",
        }

        let wrapperLoading = getWraper(tempProps);
        expect(wrapperLoading.text()).toEqual("loading...");
    })
})