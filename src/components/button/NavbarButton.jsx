//
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { ButtonGroup, Button, Tooltip, IconButton } from "@material-tailwind/react";
import AudioNavbar from "../Audio/AudioNavbar";

export default function NavbarButton() {
  return (
    <div className="m-3 fixed flex w-max flex-col gap-4">
      <AudioNavbar src="/audio/AudioMainNavbar.mp3" />
      <ButtonGroup variant="outlined">
        <a href="/panduan">
          <Tooltip className="bg-white text-blue-700" color="blue" content="Panduan">
            <Button color="green">
              <AccessibilityIcon color="secondary" />
            </Button>
          </Tooltip>
        </a>

        <a href="/join">
          <Tooltip className="bg-white text-blue-700" color="blue" content="Masuk">
            <IconButton color="blue">
              <ExitToAppIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </a>
      </ButtonGroup>
    </div>
  );
}
