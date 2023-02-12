import { React } from 'react'
import Card from './Card'
const Main = () => {
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>Here are a list of books<br/> for you to read!</h1>
                </div>
                <div className="row2">
                    <h2>Book List</h2>
                    <div className="search">
                        <input type="text" placeholder='Enter the book name' />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div className="container">
                <Card />
            </div>
        </>
    )
}
export default Main