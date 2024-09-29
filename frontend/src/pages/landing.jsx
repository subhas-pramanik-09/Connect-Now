import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Connect Now</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/aljk23");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#5203fc" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Connect Now</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/undraw_Video_call_re_4p26.png" alt="" />
        </div>
      </div>
    </div>
  );
}
