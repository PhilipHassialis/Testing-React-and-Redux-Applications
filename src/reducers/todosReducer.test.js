import todos from "./todos";

describe("Todos Reducer Unit Test", () => {
    it("should return an empty array when initial state and action is undefined", () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    it("should update state with a new Todo to the list", () => {
        const addTodoAction = {
            type: "ADD_TODO",
            id: 1,
            text: "go walking",
        };
        expect(todos([], addTodoAction)).toHaveLength(1);
        expect(todos([], addTodoAction)).toEqual([
            {
                id: 1,
                text: "go walking",
                completed: false,
            },
        ]);
    });

    it("should update state by adding the second Todo", () => {
        const initialState = [
            {
                id: 1,
                text: "go walking",
                completed: false,
            },
        ];

        const addTodoAction = {
            type: "ADD_TODO",
            id: 2,
            text: "go shitting",
        };
        expect(todos(initialState, addTodoAction)).toHaveLength(2);
        expect(todos(initialState, addTodoAction)).toEqual([
            {
                id: 1,
                text: "go walking",
                completed: false,
            },
            {
                completed: false,
                id: 2,
                text: "go shitting",
            },
        ]);
    });

    it("should should toggle incomplete Todo to completed", () => {
        const initialState = [
            {
                id: 1,
                text: "go walking",
                completed: false,
            },
        ];

        const toggleTodoAction = {
            type: "TOGGLE_TODO",
            id: 1,
        };

        expect(todos(initialState, toggleTodoAction)).toEqual([
            {
                id: 1,
                text: "go walking",
                completed: true,
            },
        ]);
    });
});
