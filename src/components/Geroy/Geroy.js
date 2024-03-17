import ArrowNextGeroy from 'components/ArrowsSvg/ArrowNextGeroy';
import ArrowPrevGeroy from 'components/ArrowsSvg/ArrowPrevGeroy';

export default function Geroy() {
  return (
    <div className="geroy">
      <div className="img">
        <img
          className="img-geroy"
          src={require('../../img/img/slider-image.jpg')}
          alt="border"
        />
        <div className="arrow-next arrow">
          <ArrowNextGeroy />
        </div>
        <div className="arrow-prev arrow">
          <ArrowPrevGeroy />
        </div>
        <div className="buttons">
          <button type="button" className="active"></button>
          <button type="button"></button>
          <button type="button"></button>
        </div>
      </div>
    </div>
  );
}
