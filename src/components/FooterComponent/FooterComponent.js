import { Link } from 'react-router-dom';

export default function FooterComponent({
  children,
  title,
  first,
  second,
  third,
  fourth = null,
}) {
  return (
    <li className="component-footer">
      <h3 className="title-footer">{title}</h3>
      <div>
        <ul>
          <li>
            <Link to="#">{first}</Link>
          </li>
          <li>
            <Link to="#">{second}</Link>
          </li>
          <li>
            <Link to="#">{third}</Link>
          </li>
          <li>
            <Link to="#">{fourth}</Link>
          </li>
        </ul>
        {children}
      </div>
    </li>
  );
}
