import { Card, Typography } from "@material-tailwind/react";
import HomeNavbar from "../Navigation/HomeNavbar";
import FooterPage from "../LandingPage/FooterPage";
import GameSains from "./GameSains";

export default function MenuUmumSains() {
  return (
    <>
      <div className="relative items-center  flex align-center flex-col justify-center text-center " style={{ backgroundImage: `url('https://source.unsplash.com/random?stars')` }}>
        <HomeNavbar />
        <div className=" items-center px-8 lg:py-16">
          <div className="container  items-center justify-center mx-auto">
            <Card variant="gradient" className=" border-1  max-w-screen-2xl ">
              <div className="mb-10 w-full items-center text-center">
                <Typography variant="h5" color="blue" className="m-3 text-center">
                  KATEGORI
                </Typography>
                <Typography variant="h2" color="blue" className="m-3 text-center">
                  UMUM DAN SAINS
                </Typography>
              </div>
              <div className=" mx-auto  items-center">
                <GameSains />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
