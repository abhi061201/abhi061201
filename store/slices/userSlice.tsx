import { createSlice, PayloadAction } from "../../node_modules/@reduxjs/toolkit/dist/index"
import { RootState } from "../store"

// Define a type for the slice state
interface user {

}

// Define the initial state using that type
const initialState = {
    userLoaging: false,
    userId: undefined,
    userName: undefined
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUser: (state, action) => {

        }
    },
})

export const { } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer