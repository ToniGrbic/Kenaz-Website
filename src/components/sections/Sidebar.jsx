import React from "react";
import "../../styles/Sidebar.scss";
import Banner from "../Banner"
const Sidebar = () => {
  return (
    <div className="sidebarItems">
      <section className="purpleDiv">
        <div className="options">
          <p style={{ color: "#FCC44D" }}>Popular</p>
          <p>Top Rated</p>
          <p>Comments</p>
        </div>
        <div className="itemsListSidebar">
          {["1", "2", "3", "4", "5"].map((item) => {
            return (
              <div className="itemContent" key={item}>
                <div className="itemTextSidebar">
                  <p className="date">August 26, 2013</p>
                  <p>Palestinians call off peace talks after clash</p>
                </div>
                <img src="/Layer 5.png" />
                <div className="commentsSidebar">
                  <img src="comment copy 3.png" />
                  <div>
                    <p>5</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="social">
        <h3>Socials</h3>
        <div className="links">
          <div className="linkItem">
            <img src="/Facebook40x40.png" />
            <div className="like">
              <p>Like</p>
            </div>
            <div className="following">
              <p>25041 Fans</p>
            </div>
          </div>
          <div className="linkItem">
            <img src="/Twitter40x40.png" />
            <div className="like">
              <p>Follow</p>
            </div>
            <div className="following">
              <p>25041 Fans</p>
            </div>
          </div>
          <div className="linkItem">
            <img src="/Youtube40x40.png" />
            <div className="like">
              <p>Subscribe</p>
            </div>
            <div className="following">
              <p>25041 Fans</p>
            </div>
          </div>
        </div>
      </section>
      <section className="kenazTvDiv">
        <div className="heading3">
          <h3>KenazTV</h3>
        </div>
        <div className="videoDiv">
          <img src="/Layer 27.png" />
          <div className="playButton">
            <div className="polygon">
              <img src="Polygon 1.png" />
            </div>
          </div>
        </div>
        <div className="itemTextVideo">
          <p>August 26, 2013</p>
          <p>ASA releases portrait of a planet waving at Saturn</p>
        </div>
      </section>
      <section className="bannerSection">
        <div className="bannerContainer">
          <Banner width={128} height={128} />
          <Banner width={128} height={128} />
        </div>
      </section>
      <section className="socialMediaSection">
          <img src="/Layer 34.png"/>
      </section>
    </div>
  );
};

export default Sidebar;
