import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function GimSayur() {
  const navigate = useNavigate();

  const benar = () => {
    Swal.fire({
      title: "Yeaay Kamu Benar",
      icon: "success",
      showCancelButton: true,
      cancelButtonText: "Tidak",
      confirmButtonText: "Lanjut?",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      focusConfirm: false,
      // showCloseButton: true,
      preConfirm: () => {
        return new Promise((resolve) => {
          navigate("/");
          resolve();
        });
      },
    });
  };

  const salah = () => {
    Swal.fire("Maaf!", "Jawabanmu Salah :( ", "error");
  };

  // Swal.fire({
  //   title: "The Internet?",
  //   text: "That thing is still around?",
  //   icon: "question",
  // });

  return (
    <header className="h-screen min-h-screen w-screen  bg-white">
      <div className="relative justify-content-center h-screen flex align-center  justify-center text-center bg-cover" style={{ backgroundImage: `url('https://source.unsplash.com/random?toys')` }}>
        <Card className="m-6 w-150">
          <div className="mb-6 w-full items-center text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2 mt-10">
              SILAKAN TEBAK MANA GAMBAR
            </Typography>
          </div>
          <CardBody>
            <Typography variant="h3" color="green" className=" text-center">
              "BROKOLI"
            </Typography>
          </CardBody>
          <div className=" m-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Button onClick={benar} className="bg-transparent">
              <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="brokoli" />
            </Button>
            <Button onClick={salah} className="bg-transparent">
              <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="wortel" />
            </Button>{" "}
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>{" "}
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="c" />
          </CardHeader>
          <CardBody>
            <Typography>The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </header>
  );
}
