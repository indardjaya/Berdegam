import React from "react";
import { Button, Tooltip } from "@material-tailwind/react";

import DeckIcon from "@mui/icons-material/Deck";

export default function MainButton() {
  return (
    <>
      <div className="sticky mx-auto left-0 right-0 top-1 max-w-screen-2xl px-4 py-2 z-10 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="/dashboard">
            <Tooltip className="bg-white text-blue-700" color="blue" content="Beranda">
              <Button variant="" color="amber">
                <DeckIcon sx={{ fontSize: 30 }} color="primary" />
              </Button>
            </Tooltip>
          </a>
        </div>
      </div>
    </>
  );
}
