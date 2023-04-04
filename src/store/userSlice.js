import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [

    ] 
}

const userSlice = createSlice({
     
    name: "userData",
    initialState,
    reducers: {
        restoreUsers: (state) => {
            if (localStorage.hasOwnProperty("users")) {
                state.users = JSON.parse(localStorage.getItem("users"))
                return
            }
            state.users = []
        },
          addUsers: (state, action) => {
            const newUser = {
                ...action.payload,
                id: Date.now(),
            };
            state.users = [newUser, ...state.users];
            localStorage.setItem("users", JSON.stringify(state.users))
        },

        updateUser: (state, {payload}) => {
            state.users = state.users.map(user => {
                if (user.id === payload.id) {
                    return payload
                } else {
                    return user
                }
            })
            localStorage.setItem("users", JSON.stringify(state.users))
        },
          deleteUsers: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
            localStorage.setItem("users", JSON.stringify(state.users))
        },
    }
})

export const {setUsers, updateUsers, addUsers, deleteUsers, restoreUsers} = userSlice.actions

export default userSlice.reducer
