import { React } from "react";
const Card = ({ bookData }) => {
  console.log(bookData);
  return bookData.map((item) => {
    let book_img =
      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let book_title = item.volumeInfo.title;
    let book_price = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    if (book_img !== undefined && book_price !== undefined) {
      return (
        <>
          <div className="card" key={item.id}>
            <img src={book_img} alt="" />
            <div className="bottom">
              <h3 className="title">{book_title}</h3>
              <p className="amount">$ {book_price}</p>
            </div>
          </div>
        </>
      );
    } else {
      console.log("book image or price is undefined");
      return null;
    }
  });
};
export default Card;
