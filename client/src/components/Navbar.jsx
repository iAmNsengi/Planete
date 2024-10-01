import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="#page-top">
            Planete Hotel
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="#about" className="page-scroll">
                About
              </Link>
            </li>
            <li>
              <Link to="#restaurant-menu" className="page-scroll">
                Menu
              </Link>
            </li>
            <li>
              <Link to="#portfolio" className="page-scroll">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="#call-reservation" className="page-scroll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
