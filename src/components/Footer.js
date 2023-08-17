import FooterImg from "../images/Logos⁄Icon/LLFooter 20@4x1.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              8619 S Wolcott Ave
              <br />
              Chicago, IL 60620
            </address>
            <a className="footer-block" href="tel:+17732387123">
              (773)&nbsp;238&#45;7123
            </a>
            <br />
            <a className="footer-block" href="mailto: contact@littlelemon.com">
              contact@littlelemon.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 Little Lemon.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
