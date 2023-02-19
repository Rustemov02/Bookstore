import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { useEffect } from "react";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (type) => {
        // https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LgGpQsQpbEHlA1rGv2C40o9qgkfKeWgL
        // https://www.googleapis.com/books/v1/volumes?q=${name}&key=AIzaSyBJnpf3R7eCWw2bmjWBfc-62XYOEMOD1IA
        // https://www.googleapis.com/books/v1/volumes?q=hardcover-fiction=books&key=AIzaSyBJnpf3R7eCWw2bmjWBfc-62XYOEMOD1IA
        // https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyBJnpf3R7eCWw2bmjWBfc-62XYOEMOD1IA
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LgGpQsQpbEHlA1rGv2C40o9qgkfKeWgL`)
        // return response.data.items[0].volumeInfo
        console.log(type)
        return response
        // return response.data.results.books   

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