import CatchShare from 'components/CatchShare/CatchShare';
import Feedback from 'components/Feedback/Feedback';
import Geroy from 'components/Geroy/Geroy';
import ItemList from 'components/ItemList/ItemList';
import ToCatalog from 'components/ToCatalog/ToCatalog';
import data from 'data.json';
import dataFeedback from 'feedbackData.json';
import { useRef, useState } from 'react';
export default function Latest() {
  const [count, setCount] = useState(1);
  const [countItem, setCountItem] = useState(1);
  const refListFeedback = useRef();
  const itemList = useRef();
  const refContainer = useRef();

  function onClickPrevFeed() {
    if (countItem === 1) {
      return;
    }
    setCountItem(prev => {
      if (prev === 2) {
        refListFeedback.current.style.left =
          (prev - 2) * -refContainer.current.offsetWidth + `px`;
      } else {
        refListFeedback.current.style.left =
          (prev - 2) * -refContainer.current.offsetWidth - 30 + `px`;
      }
      return prev - 1;
    });
  }
  function onClickNextFeed() {
    if (countItem >= dataFeedback.length / 4) {
      return;
    }
    setCountItem(prev => {
      if (prev === 2) {
        refListFeedback.current.style.left =
          prev * -refContainer.current.offsetWidth - 60 + `px`;
      } else {
        refListFeedback.current.style.left =
          prev * -refContainer.current.offsetWidth - 30 + `px`;
      }
      return prev + 1;
    });
  }
  function onClickPrev() {
    if (count === 1) {
      return;
    }
    setCount(prev => {
      if (prev === 2) {
        itemList.current.style.left =
          (prev - 2) * -refContainer.current.offsetWidth + `px`;
      } else {
        itemList.current.style.left =
          (prev - 2) * -refContainer.current.offsetWidth - 30 + `px`;
      }
      return prev - 1;
    });
  }
  function onClickNext() {
    if (count >= data.length / 3) {
      return;
    }
    setCount(prev => {
      if (prev === 2) {
        itemList.current.style.left =
          prev * -refContainer.current.offsetWidth - 60 + `px`;
      } else {
        itemList.current.style.left =
          prev * -refContainer.current.offsetWidth - 30 + `px`;
      }
      return prev + 1;
    });
  }
  return (
    <div>
      <Geroy />
      <ToCatalog />
      <ItemList
        itemList={itemList}
        items={data}
        total={data.length / 3}
        countItem={count}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
      <CatchShare />
      <Feedback
        refContainer={refContainer}
        refListFeedback={refListFeedback}
        total={dataFeedback.length / 4}
        countItem={countItem}
        onClickPrevFeed={onClickPrevFeed}
        onClickNextFeed={onClickNextFeed}
        feedbacks={dataFeedback}
      />
    </div>
  );
}
