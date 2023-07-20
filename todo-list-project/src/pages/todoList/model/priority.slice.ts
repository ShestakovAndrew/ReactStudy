import {createSlice} from '@reduxjs/toolkit'
import {changeTodoPriority} from "./changeTodoPriority.action"
import {priorityState} from "./priority.state"

const prioritySlice = createSlice({
    name: 'priority',
    initialState: priorityState,
    reducers: {
        changePriorityAction: changeTodoPriority
    }
})

export default prioritySlice.reducer
export const {changePriorityAction} = prioritySlice.actions