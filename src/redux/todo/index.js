import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {
            id: 1,
            title: 'Task 1',
            body: "Lorem ipsum dolor sit amet constictip",
            completed: false
        }
    ],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action ) => {state.todos.push(action.payload)},
        deleteTodo: (state, action) => {state.todos = state.todos.filter(todo => todo.id !== action.payload )},
        updateTodo: (state, action) =>  {state.todos.forEach((item) => {if(item.id === action.payload){if (item.completed) {item.completed = false} else{ item.completed = true; }}})}
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;