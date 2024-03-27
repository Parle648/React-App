import { createSlice } from "@reduxjs/toolkit";

const Tasks = createSlice({
    name: 'Tasks',
    initialState: {
        value: [],
    },
    reducers: {
        setTasks(state, {payload}) {
            state.value = payload;
        },
    }
})

export const { setTasks } = Tasks.actions;

export default Tasks.reducer;