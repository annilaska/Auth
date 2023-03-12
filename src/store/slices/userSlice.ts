import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null as string | null,
    token: null as string | null,
    id: null as string | null,
    name: null as string | null,
    image: null as string | null
}

type InitialStateType = typeof initialState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.image = action.payload.image;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.name = null;
            state.image = null;
        }
    }
})


export const { setUser, removeUser} = userSlice.actions
export default userSlice.reducer