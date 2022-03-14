import React from "react";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="#">
                  <FaFacebookSquare style={{ color: "white" }} size={20} />
                </a>
                <a href="#">
                  <FaGooglePlusSquare style={{ color: "white" }} size={20} />
                </a>
                <a href="#">
                  <FaInstagramSquare style={{ color: "white" }} size={20} />
                </a>
                <a href="#">
                  <FaYoutubeSquare style={{ color: "white" }} size={20} />
                </a>
                <a href="#">
                  <FaTwitterSquare style={{ color: "white" }} size={20} />
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                Hello, I'm <span className="highlighted-text">Chandresh</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={10}
                    steps={[
                      "Enthusiastic Dev",
                      1000,
                      "Frontend Dev",
                      1000,
                      "MERN Stack Dev",
                      1000,
                      "React Dev",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn" type="button">
                Hire Me{" "}
              </button>
              <a href="resume.pdf" download="Chandresh resume.pdf">
                {" "}
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}
