import * as actions from "./index";
describe("Test suite for actions", () => {
    it("should create an action to add Todo", () => {
        const text = "go walking";
        const expectedAction = {
            type: "ADD_TODO",
            id: 0,
            text,
        };
        expect(actions.addTodo(text)).toEqual(expectedAction);
    });

    it("should create an action to set visibility filter", () => {
        // const filter="SHOW_ALL";
        expect(
            actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_ALL)
                .filter
        ).toEqual(actions.VisibilityFilters.SHOW_ALL);
    });

    it("should create an action to toggle Todo", () => {
        const expectedAction = { type: "TOGGLE_TODO", id: 0 };
        expect(actions.toggleTodo(0)).toEqual(expectedAction);
    });
});
