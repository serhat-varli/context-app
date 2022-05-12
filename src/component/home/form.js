import React, { useContext, useState } from "react";
import { BookContext } from "../../context/bookContext";

export default function Form() {
    const { dispatch } = useContext(BookContext);
    const [name, setName] = useState('');
    const [outhor, setOuthor] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK',
            book: {
                name,
                outhor
            }
        })
    }
    return (
        <div className="container">
            <h1>Yeni Yazı Ekle</h1>
            <form onSubmit={handelSubmit}>
                <div className="form-item">
                    <label>Kitap Adı: </label>
                    <input type="text" name="name" placeholder="Kitap Adı" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-item">
                    <label>Yazar Adı: </label>
                    <input type="text" name="name" placeholder="Kisap Adı" value={outhor} onChange={(e) => setOuthor(e.target.value)} />
                </div>
                <div className="form-item">
                    <button>Kaydet</button>
                </div>
            </form>
        </div>
    )
}