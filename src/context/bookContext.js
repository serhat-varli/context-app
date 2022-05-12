import React, { createContext, useReducer } from "react";
import BookReducer from "../reducer/BookReducer";

export const BookContext = createContext()

export default function BookContextProvider(props) {
    const [books, dispatch] = useReducer(BookReducer, [])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}