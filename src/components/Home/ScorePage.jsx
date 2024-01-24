import React from "react";
import FooterPage from "../LandingPage/FooterPage";
import ScorePoin from "./ScorePoin";
import HomeNavbar from "../Navigation/HomeNavbar";

export function ScorePage() {
  return (
    <>
      <div className="relative items-center  flex align-center flex-col justify-center text-center " style={{ backgroundImage: `url('https://source.unsplash.com/random?toy')` }}>
        <HomeNavbar />
        <ScorePoin />
      </div>
      <FooterPage />
    </>
  );
}

export default ScorePage;
