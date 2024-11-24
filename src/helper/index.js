export const FooterWidget = ({ title, links }) => (
  <div className="footer-widget mb-40">
    <h5 className="footer-widget-title">{title}</h5>
    <ul className="footer-widget-list">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);
