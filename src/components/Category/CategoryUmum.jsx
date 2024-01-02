import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function CategoryUmum() {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray" className="max-h-[15rem]">
        <img src="https://source.unsplash.com/random?knowledge" alt="sains" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-5 flex items-center justify-content-center">
          <Typography variant="h5" color="blue" className="font-medium">
            Pengetahuan Umum dan Sains
          </Typography>
        </div>
        <div className="mb-3 flex items-center justify-content-center h-5">
          <Typography className="text-center" color="gray">
            Mengenal tentang nama buah, sayur,pekerjaan, anggota tubuh, dan masih banyak lagi.{" "}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-2">
        <a href="./home/umum_dan_sains" className=" no-underline">
          <Button color="green" size="lg" fullWidth={true}>
            Pilih Permainan
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
