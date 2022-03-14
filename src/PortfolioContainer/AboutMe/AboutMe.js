import React from "react";
import "./AboutMe.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import library from "../../images/library.jpg";
function Skills() {
  return (
    <>
      <div className="d-flex justify-content-center align-item-center mt-5">
        <div className="text-white">
          <h5>Skills</h5>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-item-center"
        style={{ marginTop: "-2.5%" }}
      >
        <div
          className="skills d-flex flex-wrap justify-content-center align-item-center w-75 mt-5 border rounded"
          //   style={{ backgroundColor: "#5a88a9" }}
        >
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>HTML</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={70}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${70 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>70%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>CSS</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={66}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${66 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>66%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>Bootstrap</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={60}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${60 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>60%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>JS</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={60}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${60 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>60%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>ReactJS</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={65}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${65 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>65%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>Java</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={75}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${75 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>75%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>C++</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={65}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${65 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>65%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>DynamoDB</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={45}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(62, 152, 199, ${45 / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  >
                    <strong>45%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1 text-white">
            <div
              className="card border"
              style={{ width: "10rem", backgroundColor: "#05595B" }}
            >
              <h5>NodeJS</h5>
              <div className="card-body d-flex justify-content-center align-item-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <CircularProgressbarWithChildren
                    value={50}
                    // text={`${percentage}%`}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 0.1,

                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",

                      // Text size
                      textSize: "16px",

                      // How long animation takes to go from one percentage to another, in seconds
                      //   pathTransitionDuration: 1.5,

                      // Can specify path transition in more detail, or remove it entirely
                      // pathTransition: 'none',

                      // Colors
                      pathColor: `rgba(77, 143, 172, ${100 / 100})`,
                      textColor: "white",
                      trailColor: "white",
                      backgroundColor: "white",
                    })}
                  >
                    <strong>50%</strong>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AboutMeDescription() {
  return (
    <>
      <h4 className="text-white">About Me</h4>
      <div className="d-flex justify-content-center align-item-center">
        <div
          className="w-25 d-flex justify-content-center align-item-center"
          style={{ height: "2px", backgroundColor: "white" }}
        >
          <div
            className="rounded"
            style={{
              height: "12px",
              width: "25%",
              backgroundColor: "white",
              marginTop: "-1.3%",
            }}
          ></div>
        </div>
      </div>{" "}
      <div className="d-flex justify-content-center align-item-center">
        {" "}
        <div
          //   style={{ backgroundColor: "#5D8CAE" }}
          className="w-75 text-black rounded mt-5 p-2 shadow border d-flex justify-content-center align-item-center"
        >
          <div
            className="border p-2 rounded shadow text-white"
            style={{ width: "99.5%", backgroundColor: "#05595B" }}
          >
            <p>
              I am a 4th year student pursuing Bachelor's of Technology in
              Computer Science at{" "}
              <strong>Lovely Professional University</strong> Jalandhar, Punjab
              and an intern at <strong>LeadSquared</strong>. I am an avid
              learner and always curious to learn about new technologies. I
              enjoy the process of learning and building stuff.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <h5 className="text-white mt-5">Education</h5>
      <div className="d-flex justify-content-center align-items-center mt-3 text-white">
        <div
          className="w-75 d-flex p-2 border rounded"
          //   style={{ backgroundColor: "#5D8CAE" }}
        >
          <div className="d-flex flex-wrap wrap-reverse w-100 justify-content-between">
            <div
              className="ml-5 border rounded text-start p-2"
              style={{ width: "32%", backgroundColor: "#05595B" }}
            >
              <span>B. Tech :</span>{" "}
              <strong> Lovely Professional University</strong>
              <div>
                <span>Stream : </span>
                <strong>Computer Science</strong>
              </div>
              <div>
                <span>Grade : </span>
                <strong>8.21 CGPA</strong>
              </div>
              <div>
                <span>Year : </span>
                <strong>2018 - 2022</strong>
              </div>
            </div>
            <div
              className="ml-5 border rounded text-start p-2"
              style={{ width: "32%", backgroundColor: "#05595B" }}
            >
              <span>Intermediate :</span>
              <strong> St. Joseph's School</strong>
              <div>
                <span>Stream : </span>
                <strong>Science</strong>
              </div>
              <div>
                <span>Grade : </span>
                <strong>77.67 %</strong>
              </div>
              <div>
                <span>Year : </span>
                <strong> 2016 - 2018 </strong>
              </div>
            </div>
            <div
              className="ml-5 border rounded text-start p-2"
              style={{ width: "32%", backgroundColor: "#05595B" }}
            >
              <span>Metric :</span>
              <strong> St. Joseph's School</strong>
              <div>
                <span>Stream : </span>
                <strong>Science</strong>
              </div>
              <div>
                <span>Grade : </span>
                <strong>87.67 %</strong>
              </div>
              <div>
                <span>Year : </span>
                <strong>2014 - 2016</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      {" "}
      <div className="d-flex justify-content-center align-item-center mt-5">
        <div className="text-white w-75">
          <h5>Projects</h5>
          <div className="d-flex justify-content-center align-items-center mt-3 text-white border rounded">
            <div className="d-flex justify-content-center align-items-center rounded ">
              <div className="p-1 text-white">
                <div
                  className="card border"
                  style={{
                    width: "18rem",
                    backgroundColor: "#05595B",
                  }}
                >
                  <h5>Library Management System</h5>
                  <div className="card-body d-flex justify-content-center align-item-center">
                    <img
                      src={library}
                      className="w-100 h-100 position-relative"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center rounded">
              <div className="p-1 text-white">
                <div
                  className="card border"
                  style={{
                    width: "18rem",
                    backgroundColor: "#05595B",
                  }}
                >
                  <h5>Library Management System</h5>
                  <div className="card-body d-flex justify-content-center align-item-center">
                    <img
                      src={library}
                      className="w-100 h-100 position-relative"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AboutMe() {
  return (
    <div className="mt-5">
      {AboutMeDescription()}
      {Education()}
      {Skills()}
      {Projects()}
    </div>
  );
}
