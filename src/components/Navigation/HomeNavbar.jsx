import React, { useEffect } from "react";
import { Navbar, Collapse, Typography, IconButton, List, ListItem, Tooltip } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, BeakerIcon } from "@heroicons/react/24/outline";
import LogoutIcon from "@mui/icons-material/Logout";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SettingsIcon from "@mui/icons-material/Settings";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import ElevenMpOutlinedIcon from "@mui/icons-material/ElevenMpOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AudioNavbar from "../Audio/AudioNavbar";

function NavList() {
  return (
    <List className="mt-2 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 no-underline">
      <Typography as="a" href="/home/umum_dan_sains" variant="small" color="blue" className="font-normal no-underline">
        <ListItem className="flex items-center gap-2 py-2 pr-4 no-underline">
          <BeakerIcon color="blue" className="h-[20px] w-[20px]" />
          Umum dan Sains
        </ListItem>
      </Typography>
      <Typography as="a" href="/home/bentuk_dan_warna" variant="small" color="red" className="font-normal no-underline">
        <ListItem className="flex items-center gap-2 py-2 pr-4 no-underline">
          <InterestsOutlinedIcon className="h-[20px] w-[20px]" />
          Bentuk dan Warna
        </ListItem>
      </Typography>
      <Typography as="a" href="/home/bilangan_dan_huruf" variant="small" color="amber" className="font-normal no-underline">
        <ListItem className="flex items-center gap-2 py-2 pr-4 no-underline">
          <ElevenMpOutlinedIcon className="h-[20px] w-[20px]" />
          Bilangan dan Huruf
        </ListItem>
      </Typography>
    </List>
  );
}

export default function HomeNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <>
      <Navbar className="sticky mx-auto left-0 right-0 top-3 max-w-screen-xl px-4 py-2 z-10 h-18">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="/home">
            <Tooltip className="bg-white text-blue-700" color="blue" content="Beranda">
              <img src="/berdegam/logo2.png" alt="logo" className="h-[50px] rounded" />
            </Tooltip>
          </a>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <AudioNavbar src="/audio/AudioHome.mp3" />
            <a href="/panduan">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Panduan">
                <IconButton color="green">
                  <AccessibilityIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>
            <a href="/settings">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Pengaturan">
                <IconButton color="amber">
                  <SettingsIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>

            <Tooltip className="bg-white text-blue-700" color="blue" content="Keluar">
              <IconButton color="red">
                <LogoutIcon onClick={Logout} color="secondary" />
              </IconButton>
            </Tooltip>
          </div>
          <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
            <a href="/panduan">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Panduan">
                <IconButton color="green">
                  <AccessibilityIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>
            <a href="/signin">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Pengaturan">
                <IconButton color="amber">
                  <SettingsIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>

            <Tooltip className="bg-white text-blue-700" color="blue" content="Keluar">
              <IconButton color="red">
                <LogoutIcon onClick={Logout} color="secondary" />
              </IconButton>
            </Tooltip>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
