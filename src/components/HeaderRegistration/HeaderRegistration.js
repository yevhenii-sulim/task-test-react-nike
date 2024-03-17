import { NavLink } from 'react-router-dom';

export default function HeaderRegistration() {
  return (
    <div className="header-header">
      <div className="container">
        <div className="help">
          <p className="tel-help">098 900 09 09</p>
          <NavLink to="#" className="link-header">
            Допомога
          </NavLink>
        </div>
        <div className="registration">
          <NavLink to="#" className="link-header">
            Увійти
          </NavLink>
          /
          <NavLink to="#" className="link-header">
            Зареєструватися
          </NavLink>
        </div>
      </div>
    </div>
  );
}
