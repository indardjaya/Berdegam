import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import AudioPlayer from "../Audio/AudioPlayer";
export function MainPage() {
  return (
    <ThemeProvider>
      <div className="relative items-center h-screen flex align-center flex-col justify-center text-center bg-cover" style={{ backgroundImage: `url('https://source.unsplash.com/random?toys')` }}>
        <div className="my-auto items-center mx-a  text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
          <Card className="mt-6   max-w-[70rem]  items-center">
            <CardHeader color="blue-gray" className="h-20">
              <img src="./berdegam/6.png" className="h-20" alt="logo" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="green" className="mb-4 !leading-tight lg:text-7xl z-20">
                "Bermain Dengan Gambar"
              </Typography>
              <Typography variant="h4" color="blue">
                BerdeGam adalah game online yang membuat kamu bermain dengan gambar!
              </Typography>
              <Typography variant="h6" color="blue">
                Game ini dibuat untuk meningkatkan kemampuan anak usia dini sesuai dengan standar tingkat pencapaian perkembangan.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="./dashboard" className=" no-underline">
                <div className="flex items-center">
                  <Button color="green" size="lg" className="flex h-12 items-center justify-center" fullWidth>
                    Ayo Bermain
                  </Button>
                </div>
              </a>
            </CardFooter>
            <div className="items-center justify-center mx-auto mb-2">
              <AudioPlayer src="/audio/AudioMain.mp3" />
            </div>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainPage;
