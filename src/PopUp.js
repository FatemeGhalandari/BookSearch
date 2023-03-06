import { React } from "react";
const PopUp = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let book_img =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={book_img} alt="" />
            <div className="info">
              <h2>{item.volumeInfo.title}</h2>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};
export default PopUp;
