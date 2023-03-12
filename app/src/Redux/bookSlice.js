import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { useEffect } from "react";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (type) => { 
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LgGpQsQpbEHlA1rGv2C40o9qgkfKeWgL`)
        console.log(type)
        return response

    }
) 
export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        data: [],
        generalCategories: 'on-sale',
        FeatureCategories: 'on-sale',
        ReleasesCategories: 'business',
        bookDetailsCategories : '',
        dataTester : []
    },
    reducers: {
        getFeatureCategories: (state, { payload }) => {
            state.FeatureCategories = payload
            state.generalCategories = payload
        },
        getReleasesCategories: (state, { payload }) => {
            state.ReleasesCategories = payload
            state.generalCategories = payload
        },
        getBestSellingCategories: (state, { payload }) => {
            state.generalCategories = 'best-selling'
        },
        getBookDetailsCategories : (state , {payload}) => {
            state.bookDetailsCategories = payload 
        }
    },
    extraReducers: {
        // fulfilled  , pending , rejected

        [fetchBooks.fulfilled]: (state, { payload }) => {
            state.dataTester = payload
            console.log(state.dataTester)
        }
    }
})

export const { getFeatureCategories, getReleasesCategories, getBestSellingCategories ,getBookDetailsCategories , testerApi , dataTester } = bookSlice.actions
export default bookSlice.reducer 
