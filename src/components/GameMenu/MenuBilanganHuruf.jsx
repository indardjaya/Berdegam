import { Button, Card, Typography } from "@material-tailwind/react";
import MainGame from "./MainGame";
import HomeNavbar from "../Navigation/HomeNavbar";
import FooterPage from "../LandingPage/FooterPage";

export default function MenuBilanganHuruf() {
  return (
    <>
      <div className="relative items-center  flex align-center flex-col justify-center text-center " style={{ backgroundImage: `url('https://source.unsplash.com/random?toy')` }}>
        <HomeNavbar />
        <div className=" items-center px-8 lg:py-16">
          <div className="container  items-center justify-center mx-auto">
            <Card variant="gradient" className=" border-1  max-w-screen-2xl ">
              <div className="mb-10 w-full items-center text-center">
                <Typography variant="h5" color="blue" className="m-4 text-center">
                  KATEGORI
                </Typography>
                <Typography variant="h2" color="blue" className="m-4 text-center">
                  BILANGAN DAN HURUF
                </Typography>
              </div>
              <div className=" mx-auto gap-2 items-center">
                <MainGame />
              </div>
              <div className="w-auto mx-auto m-5">
                <a href="./signin" className=" no-underline">
                  <div className="flex items-center">
                    <Button color="amber" size="lg" className="w-full z-10">
                      Permainan Lainnya
                    </Button>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <FooterPage />
      </div>
    </>
  );
}
