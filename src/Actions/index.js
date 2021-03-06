import "../Constants/action-types";

export const addTodo = (payload) => {
    return {
        type: "ADD_TODO",
        payload: payload,
    };
};

export const completeTodo = (payload) => {
    return {
        type: "COMPLETE_TODO",
        payload: payload,
    };
};

export const editTodo = (payload) => {
    return {
        type: "EDIT_TODO",
        payload: payload,
    };
};
