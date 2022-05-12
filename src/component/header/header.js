import React, { useContext } from "react";
import { BookContext } from "../../context/bookContext";

export default function Header() {
    const { books } = useContext(BookContext);
    return (
        <div className="home">
            <div className="container">
                <header className="header">

                    <a className="logo" to="/"><h1 >AOS Blog</h1></a>
                    <ul className="nav">
                        <li><a to="/">Anasayfa</a></li>
                        <li><a to="/">Hakkımızda</a></li>
                        <li><a to="/">İletişim</a></li>
                    </ul>
                </header>
                <p>Toplam {books && books.length} Kitap Bulunmaktadır</p>
            </div>
        </div>
    )
}