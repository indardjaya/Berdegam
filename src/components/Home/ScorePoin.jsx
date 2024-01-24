import { Button, Card, Typography } from "@material-tailwind/react";

export function ScorePoin() {
  return (
    <>
      <div className=" items-center px-8 lg:py-16">
        <div className="container  items-center justify-center mx-auto">
          <Card variant="gradient" className=" border-1  max-w-screen-xl ">
            <div className="mb-10 w-full items-center text-center">
              <Typography variant="lead" className=" mt-4 l:px-20 text-light-green-800">
                SELAMAT
              </Typography>
              <Typography variant="h2" color="orange" className="m-2 text-center">
                KAMU BERHASIL
              </Typography>
              <Typography variant="lead" className="  l:px-20 text-light-blue-800">
                Skor Kamu
              </Typography>
              <Typography variant="h1" className=" m-2 l:px-20 text-red-800">
                100
              </Typography>
            </div>

            <div className="w-auto mx-auto m-3">
              <a href="./home" className=" no-underline">
                <div className="flex items-center">
                  <Button color="blue" size="lg" className="w-full z-10">
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

export default ScorePoin;
