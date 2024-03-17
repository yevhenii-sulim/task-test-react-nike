import FooterComponent from 'components/FooterComponent/FooterComponent';
import Nav from 'components/Nav/Nav';

export default function Footer() {
  return (
    <>
      <div className="container">
        <ul className="footer-list">
          <FooterComponent
            title={'Контакт - центер'}
            first={'098 900 09 09'}
            second={'Пн - Пт 09:00 - 21:00'}
            third={'Пн - Пт 09:00 - 21:00'}
          >
            <p></p>
          </FooterComponent>
          <FooterComponent
            title={'Покупцям'}
            first={'Оплата і доставка'}
            second={'Поверненя'}
            third={'Питання та відповідь'}
          />
          <FooterComponent
            title={'Особистий кабінет'}
            first={'Мої дані'}
            second={'Історія замовлень'}
            third={'Улюблені'}
            fourth={'Розсилки'}
          />
          <FooterComponent
            title={'Про компанію'}
            first={'Про нас'}
            second={'Новини'}
            third={'Стати партнером'}
            fourth={'Угода користувача'}
          />
        </ul>
      </div>
      <div className="nav-footer">
        <div className="container">
          <Nav />
          <p>© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </>
  );
}
