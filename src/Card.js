import { React } from 'react'
import b1 from './b2.jpg'
const Card = (bookData) => {
    return (
        <>
            {bookData.items.map((item) => {
                return (
                    <div className="card">
                        <img src={b1} alt="" />
                        <div className="bottom">
                            <h3 className="title">In Search of Lost Time</h3>
                            <p className="amount">$18.87</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default Card