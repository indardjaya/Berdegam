import React, { useEffect } from "react";
import { Navbar, Collapse, IconButton, Tooltip } from "@material-tailwind/react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import LoginIcon from "@mui/icons-material/Login";
import AudioNavbar from "../Audio/AudioNavbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <>
      <Navbar className="sticky mx-auto left-0 right-0 top-3 max-w-screen-xl px-4 py-2 z-10 h-18">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="/dashboard">
            <Tooltip className="bg-white text-blue-700" color="blue" content="Beranda">
              <img src="/berdegam/logo1.png" alt="logo" className="h-[50px] rounded" />
            </Tooltip>
          </a>

          <div className="hidden lg:block"></div>
          <div className="hidden gap-2 lg:flex">
            <AudioNavbar src="/audio/AudioABC.mp3" />
            <a href="/panduan">
              <Tooltip className="bg-white text-blue-700 " color="blue" content="Panduan">
                <IconButton color="green">
                  <AccessibilityIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>
            <a href="/signin">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Masuk">
                <IconButton color="blue">
                  <LoginIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>
          </div>
          <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>

        <Collapse open={openNav}>
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
            <a href="/panduan">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Panduan">
                <IconButton color="green">
                  <AccessibilityIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>
            <a href="/signin">
              <Tooltip className="bg-white text-blue-700" color="blue" content="Masuk">
                <IconButton color="blue">
                  <LoginIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
