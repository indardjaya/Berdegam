import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Typography, Alert, Card, CardHeader, CardBody } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import HomeNavbar from "./HomeNavbar";

export function Pengaturan() {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="relative h-screen  bg-cover" style={{ backgroundImage: `url('https://source.unsplash.com/random?toys')` }}>
      <HomeNavbar />

      <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        <Card>
          <CardHeader color="transparent" floated={false} shadow={false} className="m-0 p-4">
            <Typography variant="h5" color="blue">
              Halo, {name} Apa Kabar?
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-4">
            {users.map((color) => (
              <Alert
                key={color}
                open={showAlertsWithIcon[color]}
                color={color}
                icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
                onClose={() =>
                  setShowAlertsWithIcon((current) => ({
                    ...current,
                    [color]: false,
                  }))
                }
              >
                A simple {color} alert with an <a href="yy">example link</a>. Give it a click if you like.
              </Alert>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Pengaturan;
