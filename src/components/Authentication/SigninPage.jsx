import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../Navigation/MainNavbar";
import { Card, CardHeader, CardBody, Input, Button, Typography, CardFooter } from "@material-tailwind/react";

export function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate("/home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="relative items-center h-screen flex align-center flex-col justify-center text-center bg-cover" style={{ backgroundImage: `url('https://source.unsplash.com/random?toys')` }}>
        <MainNavbar />
        <div className="my-auto items-center mx-a  text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
          <Card className="mt-16 max-w-[40rem]  items-center">
            <CardHeader color="blue-gray" className="h-20">
              <img src="./berdegam/6.png" className="h-20" alt="logo" />
            </CardHeader>
            <CardBody>
              <Typography color="red"> {msg} </Typography>
              <Typography>Silakan Masukan Data Kamu.</Typography>
              <form className=" w-[24rem] text-left">
                <div className="mb-4">
                  <Input color="blue" size="lg" label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                  <Input color="blue" size="lg" label="Sandi" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button onClick={Auth} disabled={!email || !password} color="blue" variant="gradient" fullWidth>
                  Masuk
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="./signup" className=" no-underline">
                <div className="flex items-center">
                  <Button variant="outlined" color="green" size="lg" className="flex h-12 items-center justify-center" fullWidth>
                    Buat Akun Baru?
                  </Button>
                </div>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SigninPage;
