import React, { useContext } from "react"
import { BookContext } from "../../context/bookContext"

export default function Items({ book }) {

    const { dispatch } = useContext(BookContext)
    return (
        <div className="items" onClick={() => dispatch({ type: 'REMOVE_BOOK',  id: book.id})}>
            <a>
                <h3>Kitap Adı : {book.name}</h3>
                <p>Yazar Adı : {book.outhor}</p>
            </a>
        </div>
    )
}