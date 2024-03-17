import { Link } from 'react-router-dom';

export default function Item({ img, alt, titleItem, option, price, section }) {
  return (
    <li className="container-item">
      <Link to="#">
        <img className="img-title" src={img} alt={alt} />
        <h4 className="title-clothes">{titleItem}</h4>
        <div className="discrabe">
          <p className="section">{section}</p>
          <p className="option">{option}</p>
        </div>
        <p className="price">{price}</p>
        <div className="like sprite"></div>
      </Link>
    </li>
  );
}
