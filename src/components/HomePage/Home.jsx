import React from "react";
import Menu from "../menu/Menu";
import LandingPage from "../LandingPage/LandingPage";
import Reviews from "../reviews/Reviews";
import SpecialitiesPage from "../SpecialitiesPage/Specialities";
import TeamDetails from "../team-details/TeamDetails";
import About from "../about/About";
import Footer from "../footer/Footer";
import "./Home.scss";

// export default function Home() {
//   return (
//     <div className="bsa-home-page">
//       <LandingPage />
//       <Menu/>
//       <SpecialitiesPage />
//       <Reviews />
//       <TeamDetails />
//       <About />
//       <Footer />
//     </div>
//   );
// }

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.specialities = React.createRef();
    this.reviews = React.createRef();
    this.about = React.createRef();
    this.scrollToSpecialities = this.scrollToSpecialities.bind(this);
    this.scrollToReviews = this.scrollToReviews.bind(this);
    this.scrollToAbout = this.scrollToAbout.bind(this);
  }
  scrollToSpecialities(content) {
    this.specialities.current.scrollIntoView({ behavior: "smooth" });
  }
  scrollToReviews(content) {
    this.reviews.current.scrollIntoView({ behavior: "smooth" });
  }
  scrollToAbout(content) {
    this.about.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="bsa-home-page">
        <LandingPage />
        <Menu
          specialitiesClick={this.scrollToSpecialities}
          reviewsClick={this.scrollToReviews}
          aboutClick={this.scrollToAbout}
        />
        <SpecialitiesPage ref={this.specialities} />
        <Reviews ref={this.reviews} />
        <TeamDetails />
        <About ref={this.about} />
        <Footer />
      </div>
    );
  }
}
