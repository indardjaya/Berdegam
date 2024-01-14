import { Button, Card, Typography } from "@material-tailwind/react";
import MainGame from "./MainGame";

export function GamePage() {
  return (
    <>
      <div className=" items-center px-8 lg:py-16">
        <div className="container  items-center justify-center mx-auto">
          <Card variant="gradient" className=" border-1  max-w-screen-xl ">
            <div className="mb-10 w-full items-center text-center">
              <Typography variant="h2" color="green" className="m-4 text-center">
                BERMAIN DENGAN GAMBAR
              </Typography>
              <Typography variant="lead" className=" m-2 l:px-20 text-light-green-800">
                Mengenal Pengetahuan Umum dan Sains - Mengenal Bentuk dan Warna - Mengenal Bilangan dan Huruf
              </Typography>
            </div>
            <div className=" mx-auto gap-2 items-center">
              <MainGame />
            </div>
            <div className="w-auto mx-auto m-5">
              <a href="./signin" className=" no-underline">
                <div className="flex items-center">
                  <Button color="yellow" size="lg" className="w-full z-10">
                    Permainan Lainnya
                  </Button>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default GamePage;
