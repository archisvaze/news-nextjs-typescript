import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';

// declaring the types for our state
export type myState = {
    isLoading: boolean;
};

const initialState: myState = {
    isLoading: true
};

export const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
    setLoading,
} = mySlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const isLoading = (state: RootState) => state.slice.isLoading;

// exporting the reducer here, as we need to add this to the store
export default mySlice.reducer;