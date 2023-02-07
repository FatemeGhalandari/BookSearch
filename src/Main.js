import { React } from 'react'
const Main = () => {
    return (
        <div className="header">
            <div className="col1">
                <h1>Here are a list of books for you to read!</h1>
            </div>
            <div className="col2">
                <h2>Book List</h2>
                <input type="text" placeholder='Enter the book name' />
                <button><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}
export default Main