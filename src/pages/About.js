import "./About.css";
import AboutPic1 from "../images/Logos⁄Icon/ResAbout.jpg";
import AboutPic2 from "../images/Logos⁄Icon/Mario and Adrian b.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="emon-primary-dark">Chicago</h3>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
              The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally.
              The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
            </p>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
              To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
              Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
            <p>
              Overall Little Lemon is a charming neighborhood bistro that serves simple food in a lively but casual environment.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
