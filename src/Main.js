import { React, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (e) => {
        if (e.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='
                + search +
                '&key=AIzaSyDumNH8oyTQXjmCmfjcLn1II64OHJdXfkU' +
                '&maxResults=40')
            .then(res => console.log(setBookData(res.data.items)))
            .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>Here are a list of books for you to read!</h1>
                </div>
                <div className="row2">
                    <h2>Book List</h2>
                    <div className="search">
                        <input type="text"
                            placeholder='Enter the book name' 
                            value={search}
                            onChange={
                                e => {setSearch(e.target.value)}
                            }
                            onKeyDown={searchBook}
                        />
                        <button >
                            <i className="fas fa-search">                            </i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Card bookData={bookData } />
            </div>
        </>
    )
}
export default Main