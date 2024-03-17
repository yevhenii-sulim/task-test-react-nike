import NavigationCarousel from 'components/NavigationCarousel/NavigationCarousel';
import FeedBackItem from './FeedBackItem';

export default function Feedback({
  total,
  countItem,
  onClickPrevFeed,
  onClickNextFeed,
  feedbacks,
  refListFeedback,
  refContainer,
}) {
  return (
    <div className="container" ref={refContainer}>
      <NavigationCarousel
        total={total}
        countItem={countItem}
        onClickPrev={onClickPrevFeed}
        onClickNext={onClickNextFeed}
        title={'Відгуги наших клієнтів'}
      />
      <div className="container-feedback">
        <ul className="feedback-list" ref={refListFeedback}>
          {feedbacks.map(({ userName, feedback, rating }, index) => {
            return (
              <FeedBackItem
                key={index}
                userName={userName}
                feedback={feedback}
                rating={rating}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
