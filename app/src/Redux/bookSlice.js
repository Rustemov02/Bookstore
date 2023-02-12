import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { useEffect } from "react";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        // https://www.googleapis.com/books/v1/volumes?q=son&key=AIzaSyBIndGObE8Z2Lqt9yVIJQTaNo88Ce8QNdM 
        const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LgGpQsQpbEHlA1rGv2C40o9qgkfKeWgL')
        return response
    }
)



export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        data: [],
        categories : 'on-sale' 
    },
    reducers: {
        getCategories : (state , {payload}) => { 
            state.categories = payload 
        }
    },
    extraReducers: {
        // fulfilled  , pending , rejected

        [fetchBooks.fulfilled]: (state, { payload }) => {
            
        }
    }
})

export const { getCategories } = bookSlice.actions
export default bookSlice.reducer 