import { fetchBooks } from "./Redux/bookSlice"
import { useDispatch } from "react-redux"

function TestApi(){

    const dispatch = useDispatch()

    return(
        <div>
            {/* <button onClick={()=> dispatch(fetchBooks())}>Search</button> */}
        </div>
    )
}

export default TestApi