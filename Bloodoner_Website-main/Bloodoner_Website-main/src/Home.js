import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="home-page">
        <div className="content-div">
          <div className="home-heading">
            <h4>Who we are</h4>
            <p>
              Bloodoner Foundation was established in 2000 as a Blood
              Transfusion Center. Before this institution many people started
              unequipped and unauthorized blood banks on commercial basis. Such
              blood banks provided unscreened and contaminated blood unfit for
              the very purpose of transfusion. After the establishment of
              Foundation all such quacks have vanished: that is the major
              service, which we have rendered to community. During the period of
              22 years Foundation supplied more than 500,000 units of healthy
              and screened blood and blood products.
            </p>
          </div>

          {/* 2nd column image */}

          <div className="home-img-container">
            <img className="home-img" src={require("./img/hm.jpg")} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
