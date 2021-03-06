import { createStore } from "redux";
import { addTodo, toggleTodo } from "../../actions";
import rootReducer from "../../reducers";

describe("Redux store integration tests", () => {
    let store;
    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it("should add one Todo", () => {
        store.dispatch(addTodo("go walking"));
        // console.log(store.getState());
        const todo = store
            .getState()
            .todos.find((x) => x.text === "go walking");
        expect(todo.text).toEqual("go walking");
        expect(todo.completed).toEqual(false);
    });

    it("should toggle one Todo", () => {
        store.dispatch(addTodo("go walking"));
        store.dispatch(toggleTodo(1));

        const todo = store.getState().todos.find((x) => x.id === 1);
        expect(todo.completed).toEqual(true);
    });
});
