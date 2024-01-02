import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../Navigation/MainNavbar";
import { Card, CardHeader, CardBody, Input, Button, Typography, Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import { EnvelopeIcon, LockClosedIcon, PencilSquareIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon } from "@heroicons/react/24/outline";

export default function JoinPage() {
  const [mail, setMail] = useState("");
  const [sandi, setSandi] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [type, setType] = useState("card");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: mail,
        password: sandi,
      });
      navigate("/home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/signin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="  justify-center text-center bg-cover" style={{ backgroundImage: `url('https://source.unsplash.com/random?toys')` }}>
        <div className="my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32 xl:py-24">
          <Card className="w-full max-w-[50rem]">
            <CardHeader color="green" floated={false} shadow={false} className="m-0 grid place-items-center px-4 py-8 text-center">
              <div className="mb-3 h-12 p-4 text-white">{type === "signin" ? <PuzzlePieceIcon className="h-10 w-10 text-white" /> : <PhotoIcon className="h-10 w-10 text-white" />}</div>
              <Typography className="mt-3" variant="h5" color="white">
                Bermain Dengan Gambar
              </Typography>
            </CardHeader>
            <CardBody>
              <Tabs value={type} className="overflow-visible">
                <TabsHeader className="relative z-0 ">
                  <Tab className="text-blue-700 " value="signin" onClick={() => setType("signin")}>
                    Masuk
                  </Tab>
                  <Tab className="text-yellow-900 " value="signup" onClick={() => setType("signup")}>
                    Daftar
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="!overflow-x-hidden !overflow-y-visible"
                  animate={{
                    initial: {
                      x: type === "signin" ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: type === "signin" ? 400 : -400,
                    },
                  }}
                >
                  <TabPanel value="signin" className="p-0">
                    <Typography className="font-normal mb-8 text-red-800">{msg}</Typography>
                    <form className="mt-8 flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <Input value={mail} onChange={(e) => setMail(e.target.value)} color="green" icon={<EnvelopeIcon className=" absolute left-0 h-4 w-4 text-blue-gray-300" />} type="email" size="small" label="E-Mail:" />
                        <Input value={sandi} onChange={(e) => setSandi(e.target.value)} color="green" icon={<LockClosedIcon className=" absolute left-0 h-4 w-4 text-blue-gray-300" />} type="password" size="small" label="Sandi:" />
                      </div>
                      <Button onClick={Auth} disabled={!mail || !sandi} color="blue" size="lg">
                        Masuk
                      </Button>
                    </form>
                  </TabPanel>
                  <TabPanel value="signup" className="p-0">
                    <form className="mt-4 flex flex-col gap-4">
                      <div className="flex flex-col gap-3">
                        <Input value={name} onChange={(e) => setName(e.target.value)} color="green" icon={<PencilSquareIcon className=" absolute left-0 h-4 w-4 text-blue-gray-300" />} type="name" size="small" label="Nama:" />
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} color="green" icon={<EnvelopeIcon className=" absolute left-0 h-4 w-4 text-blue-gray-300" />} type="email" size="small" label="E-Mail:" />
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} color="green" icon={<LockClosedIcon className=" absolute left-0 h-4 w-4 text-blue-gray-300" />} type="password" size="small" label="Sandi:" />
                        <Input
                          value={confPassword}
                          onChange={(e) => setConfPassword(e.target.value)}
                          color="green"
                          icon={<LockClosedIcon className=" absolute left-0 h-4 w-4 text-blue-gray-300" />}
                          type="password"
                          size="small"
                          label="Konfirmasi Sandi:"
                        />
                      </div>
                      <Button onClick={Register} disabled={!name || !email || !password || !confPassword} color="orange" size="smaal">
                        Mendaftar
                      </Button>
                    </form>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
        {/* <img src="https://source.unsplash.com/random?kids" alt="backgroundimage" className="hidden h-screen w-full object-cover lg:block" /> */}
      </div>
    </>
  );
}
