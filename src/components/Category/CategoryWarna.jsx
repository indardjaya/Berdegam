import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function Categorywarna() {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray" className="max-h-[15rem]">
        <img src="https://source.unsplash.com/random?colors" alt="warna" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-5 flex items-center justify-content-center">
          <Typography variant="h5" color="blue" className="font-medium">
            Mengenal Bentuk dan Warna
          </Typography>
        </div>
        <div className="mb-3 flex items-center justify-content-center h-5">
          <Typography className="text-center" color="gray">
            Mengenal berbagai macam bentuk dan warna.
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-2">
        <a href="./home/bentuk_dan_warna" className=" no-underline">
          <Button color="green" size="lg" fullWidth={true}>
            Pilih Permainan
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
