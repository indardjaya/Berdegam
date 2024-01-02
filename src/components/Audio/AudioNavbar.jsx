import React, { Component } from "react";
import { IconButton, Tooltip } from "@material-tailwind/react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

class AudioNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      muted: false,
    };

    this.audioRef = React.createRef();
  }

  togglePlay = () => {
    const audio = this.audioRef.current;

    if (audio.paused) {
      audio.play();

      this.setState({ playing: true });
    } else {
      audio.pause();

      this.setState({ playing: false });
    }
  };

  toggleMute = () => {
    const audio = this.audioRef.current;

    if (audio.muted) {
      audio.muted = false;

      this.setState({ muted: false });
    } else {
      audio.muted = true;

      this.setState({ muted: true });
    }
  };

  render() {
    const { playing } = this.state;
    const { src } = this.props;

    return (
      <div className="flex w-max flex-col ">
        <audio ref={this.audioRef} src={src} autoPlay loop />
        <div className="flex items-center justify-between text-blue-gray-900">
          <Tooltip className="bg-white text-blue-700" color="blue" content="Music">
            <IconButton onClick={this.togglePlay} color="cyan">
              {playing ? <MusicNoteIcon color="success" className="h-[20px] w-[20px]" /> : <MusicOffIcon color="error" className="h-[20px] w-[20px]" />}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default AudioNavbar;
