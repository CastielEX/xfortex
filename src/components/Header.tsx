import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="layout-header">
      <Link to="/" className="home">
        <div className="home-text mx-2">FORTEX LOG SUPPORT SYSTEM</div>
      </Link>
      <ul className="header-list">
        <li className="home-text-list">
          <Link to="Activity">ACTIVITY</Link>
        </li>
        <li className="home-text-list">AUDIT</li>
        <li className="home-text-list">DOT INSPECTION</li>
        <li className="home-text-list">SUBSCRIPTION</li>
        <li className="home-text-list">DRIVER REQUESTS</li>
        <li className="home-text-list">
          <Link to="Companies">COMPANIES</Link>
        </li>
      </ul>
      <div className="user-logo">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="arcs"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </button>
        <h1 className="user-name">Username...</h1>{" "}
        <Link to="Account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="arcs"
          >
            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
            <circle cx="12" cy="10" r="3" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </Link>
      </div>
    </header>
  );
};
export default Header;
