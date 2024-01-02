import React from "react";
import FooterPage from "../LandingPage/FooterPage";
import MainNavbar from "../Navigation/MainNavbar";
import GamePage from "../GameMenu/GamePage";

export function DashboardPage() {
  return (
    <>
      <div className="relative items-center  flex align-center flex-col justify-center text-center " style={{ backgroundImage: `url('https://source.unsplash.com/random?toy')` }}>
        <MainNavbar />
        <GamePage />
      </div>
      <FooterPage />
    </>
  );
}

export default DashboardPage;
