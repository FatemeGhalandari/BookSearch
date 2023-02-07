import { React } from 'react'
import main_bg from "./main_bg.jpg"
const Main = () => {
    return (
        <div className="header">
            <div className="row1">
                <h1>Here are a list of books for you to read!</h1>
            </div>
            <div className="row2">
                <h2>Book List</h2>
                <div className="search">
                    <input type="text" placeholder='Enter the book name' />
                    <button><i className="fas fa-search"></i></button>
                </div>
                
            <img src={main_bg} alt="bg" />
            </div>
        </div>
    )
}
export default Main