import React from "react";
import { useParams } from "react-router";
import data from './data.json'
import { Stack , Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function BookDetails(){
    const typeOfCategories = useSelector( state => state.books.categories)
    const { bookId } = useParams()
    const thisBook = data.myData.filter( item => item.type === `${typeOfCategories}`).find( item => item.id == bookId)
     
    return(
        <Stack> 
            <h3>{thisBook.title}</h3>
            <h3>{thisBook.author}</h3> 
        </Stack>
    )
}