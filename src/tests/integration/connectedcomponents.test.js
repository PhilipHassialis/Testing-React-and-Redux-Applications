import "jsdom-global/register";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "../../components/App";
import rootReducer from "../../reducers";
import { render, fireEvent } from "@testing-library/react";

const store = createStore(rootReducer);

describe("connected component full app integration tests", () => {
    it("should add Todo using fireEvent", () => {
        const { getByTestId, getByText, container } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const inputElement = getByTestId("add-todo-input");
        fireEvent.change(inputElement, { target: { value: "go walking" } });
        fireEvent.click(getByText("Add Todo"));
        expect(store.getState().todos.length).toEqual(1);

        const liElement = container.querySelector("li");
        expect(liElement.textContent).toBe("go walking");
    });
});
