import React from "react";
import image from "../src/download.webp";
import { NavLink } from "react-router-dom";
import SchoolIcon from "@material-ui/icons/School";

const Home = () => {
  return (
    <>
      <div className="headerr d-flex align-items-center ">
        <div className=" col-10 mx-auto order-1 order-lg-1 d-flex justify-content-center flex-column ">
          <div className="row">
            <div className="col-md-6 pt-lg-0 col-xsm-12">
              <div className="container">
                <div class="alert alert-primary col-xsm-12" role="alert">
                  Get instant access for cuionline portal
                  <a
                    href="https://cuonline.cuilahore.edu.pk:8090/"
                    target="_blank"
                    className="text-center text-warning font-weight-bold pl-2"
                  >
                    Cuionline <SchoolIcon />
                  </a>
                </div>
                <h1 className="head">
                  The probems related messed classes is here now
                  <h1 className="text-primary head">See All your class</h1>
                </h1>
                <h3 className=""> content at one place</h3>
                <button className="btn btn-outline-primary  mt-3 ">
                  <NavLink className="nav-link" to="/Enroll">
                    Enroll Now
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="col-lg-6  order-1 order-lg-2 pt-3 ">
              <img
                src={image}
                className="img-fluid animated"
                alt="This is Home Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
