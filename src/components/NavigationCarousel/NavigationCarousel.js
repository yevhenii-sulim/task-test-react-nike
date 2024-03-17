import ArrowNext from 'components/ArrowsSvg/ArrowNext';
import ArrowPrev from 'components/ArrowsSvg/ArrowPrev';

export default function NavigationCarousel({
  countItem,
  total,
  onClickPrev,
  onClickNext,
  title,
}) {
  return (
    <div className="nav-carousel">
      <h3 className="tytle-carousel">{title}</h3>
      <div className="turn-carousel">
        <p>
          {countItem} / {total}
        </p>
        <div className="navigation-carousel">
          <ArrowPrev onClickPrev={onClickPrev} />
          <ArrowNext onClickNext={onClickNext} />
        </div>
      </div>
    </div>
  );
}
