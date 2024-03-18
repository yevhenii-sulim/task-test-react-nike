import Star from 'components/Star/Star';
import StarGood from 'components/Star/StarGood';

function renderGoodStar(rating) {
  const spans = [];
  for (let i = 0; i < rating; i++) {
    spans.push(
      <span className="star" key={i}>
        <StarGood />
      </span>
    );
  }
  return spans;
}

export default function FeedBackItem({ userName, feedback, rating }) {
  return (
    <li className="users-feedback">
      <div className="avatar">
        <img src={require('img/img/avatar.png')} alt="avatar" />
        <div className="user">
          <div className="rating">
            {renderGoodStar(rating)}
            <span className="star">
              <Star />
            </span>
            <span className="star">
              <Star />
            </span>
            <span className="star">
              <Star />
            </span>
            <span className="star">
              <Star />
            </span>
            <span className="star">
              <Star />
            </span>
          </div>
          <h3 className="name-user">{userName}</h3>
        </div>
      </div>
      <div className="review">{feedback}</div>
    </li>
  );
}
