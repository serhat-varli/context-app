import React, { useContext } from "react";
import { BookContext } from "../../context/bookContext";
import Form from "./form";
import Items from "./items";

export default function Home() {
    const { books } = useContext(BookContext);

    return books.length ? (
        <div className="item-wrap">
            {
                books.map(book => {
                    return (
                        <Items book={book} key={book.id} />
                    )
                })
            }
          <Form />
        </div>
    ) : (<div className="">Kitap Bulunamadı  <Form /></div> )
}