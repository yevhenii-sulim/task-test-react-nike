import Item from 'components/Item/Item';
import NavigationCarousel from 'components/NavigationCarousel/NavigationCarousel';
export default function ItemList({
  items,
  total,
  countItem,
  onClickPrev,
  onClickNext,
  itemList,
}) {
  return (
    <div className="latest-item container">
      <NavigationCarousel
        total={total}
        countItem={countItem}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        title={'Найгарячіші товари'}
      />
      <div className="container-list">
        <ul className="item-list" ref={itemList}>
          {items.map(({ id, img, alt, titleItem, option, price, section }) => {
            return (
              <Item
                key={id}
                img={img}
                alt={alt}
                titleItem={titleItem}
                option={option}
                price={price}
                section={section}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
