import React from "react";
import "./homemain.scss";
import { FaPlayCircle } from "react-icons/fa";

const HomeMain = () => {
  return (
    <>
      <div className="homewrapper">
        <div className="homeleft">
          <img src="./left.png" alt="" />
        </div>
        <div className="homemiddle">
          <div className="homecontainer">
            <h2>Give Loves,<br />
                Spread the Goodness</h2>
            <p>
              The world's first crowdfunding platform that implements Open Data
              technology for more transparent transactions
            </p>

            <div className="homebtn">
              <button className="homebtn1">Donate Now</button>
              <button className="homebtn2">
                <FaPlayCircle />
                &nbsp;
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="homeright">
          <img src="./right.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeMain;
