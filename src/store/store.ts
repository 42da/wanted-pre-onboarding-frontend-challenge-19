import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice
let contentSlice = createSlice({
    name: 'content',
    initialState: [],
    reducers: {
        addContent: (state: any, action: any) => {
            console.log(state, action);
            state.push(action.payload);
        },
        deleteContent: (state: any, action: any) => {
            const idx = state.findIndex((item: any) => item.id === action.payload);
            state.splice(idx, 1);
        }
    }
});

export default configureStore({
    reducer: {
        content: contentSlice.reducer
    }
}) 

export const { addContent, deleteContent } = contentSlice.actions;