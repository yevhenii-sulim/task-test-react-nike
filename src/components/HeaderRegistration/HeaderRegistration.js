import { Link } from 'react-router-dom';

export default function HeaderRegistration() {
  return (
    <div className="header-header">
      <div className="container">
        <div className="help">
          <p className="tel-help">098 900 09 09</p>
          <Link to="#" className="link-header">
            Допомога
          </Link>
        </div>
        <div className="registration">
          <Link to="#" className="link-header">
            Увійти
          </Link>
          /
          <Link to="#" className="link-header">
            Зареєструватися
          </Link>
        </div>
      </div>
    </div>
  );
}
