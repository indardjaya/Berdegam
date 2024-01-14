import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import { Button, Typography } from "@material-tailwind/react";
import HomeNavbar from "../Navigation/HomeNavbar";

const images = [
  { url: "/images/bentuk/lingkaran.png", name: "LINGKARAN" },
  { url: "/images/bentuk/segi5.png", name: "SEGI 5" },
  { url: "/images/bentuk/hati.png", name: "HATI" },
  { url: "/images/bentuk/ketupat.pnG", name: "KETUPAT" },
  { url: "/images/bentuk/bintang4.png", name: "BINTANG 4" },
  { url: "/images/bentuk/segi6.png", name: "SEGI 6" },
  { url: "/images/bentuk/arahpanah.png", name: "ARAH PANAH" },
  { url: "/images/bentuk/persegi.png", name: "PERSEGI" },
  { url: "/images/bentuk/segitiga.png", name: "SEGITIGA" },
  { url: "/images/bentuk/bintang5.png", name: "BINTANG 5" },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const LevelButton = ({ level, unlocked, onClick }) => {
  return (
    <div className="flex ">
      <button
        disabled={!unlocked}
        onClick={onClick}
        style={{
          width: "50px",
          height: "50px",
          margin: "10px",
          fontSize: "20px",
          backgroundColor: unlocked ? "green" : "red",
          borderRadius: 5,
        }}
      >
        <Typography variant="lead" color="red" className="m-1 font-semibold">
          {level}
        </Typography>
      </button>
    </div>
  );
};

const ImageQuestion = ({ image, options, answer, onAnswer }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5" color="orange" className="m-2">
          Pilih Bentuk
        </Typography>
        <img src={image.url} alt={image.name} style={{ width: "100px", height: "100px" }} />
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 3, border: "rounded" }}>
          {options.map((option, index) => (
            <div>
              <Button
                key={index}
                onClick={() => onAnswer(option)}
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: `url(${option.url})`,
                  backgroundSize: "cover",
                  margin: 2,
                  marginBottom: 3,
                  border: 1,
                }}
              ></Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const GimBangunDatar = () => {
  const [level, setLevel] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const selectLevel = (level) => {
    setLevel(level);
    setImage(null);
    setOptions([]);
    setAnswer(null);
  };

  const setupLevel = () => {
    const shuffledImages = shuffle(images);
    const image = shuffledImages[0];
    const options = shuffledImages.slice(0, 4);
    const shuffledOptions = shuffle(options);
    const answer = image.name;
    setImage(image);
    setOptions(shuffledOptions);
    setAnswer(answer);
  };

  const handleAnswer = (option) => {
    if (option.name === answer) {
      setScore((score) => score + 10);

      if (level < 10) {
        setUnlockedLevels((unlockedLevels) => [...unlockedLevels, level + 1]);
        Swal.fire({
          icon: "success",
          title: "Yeay Benar",
          text: "Klik Ok Untuk Lanjut",
        });
        setLevel((level) => level + 1);

        setImage(null);
        setOptions([]);
        setAnswer(null);
      } else {
        Swal.fire({
          icon: "info",
          title: "SELAMAT",
          text: "Kamu Berhasil Menjawab Semuanya",
          footer: '<a href="/dashboard">Kembali Ke Menu Permainan?</a>',
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Jawaban Kamu Salah",
      });
    }
  };

  useEffect(() => {
    setupLevel();
  }, [level]);

  return (
    <>
      <div className="items-center  flex align-center flex-col justify-center text-center bg-cover " style={{ backgroundImage: `url('https://source.unsplash.com/random?toy')` }}>
        <div style={{ marginBottom: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <HomeNavbar />
          <Card sx={{ mt: 2 }}>
            <Typography className="m-3" variant="h4" color="blue">
              Pilih Gambar Bangun Datar
            </Typography>
          </Card>
          <Card style={{ display: "flex", flexWrap: "wrap", margin: 3 }}>
            {unlockedLevels.map((unlockedLevel) => (
              <LevelButton key={unlockedLevel} level={unlockedLevel} unlocked={true} onClick={() => selectLevel(unlockedLevel)} />
            ))}
            {Array.from({ length: 10 - unlockedLevels.length }, (_, i) => i + unlockedLevels.length + 1).map((lockedLevel) => (
              <LevelButton key={lockedLevel} level={lockedLevel} unlocked={false} onClick={() => {}} />
            ))}
          </Card>
          <Card>
            <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
              <Grid container>
                <Grid>
                  <Box sx={{ m: 2, flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
                    <ScoreboardIcon fontSize="large" color="primary" height="50px" />
                    <Typography className="m-2" variant="h5" color="amber">
                      SKOR POIN:
                    </Typography>
                    <Typography className="m-2" variant="h5" color="red">
                      " {score} "
                    </Typography>
                  </Box>
                </Grid>
                <Grid>
                  <div sx={{ m: 3 }}>{image && options && answer && <ImageQuestion image={image} options={options} answer={answer} onAnswer={handleAnswer} />}</div>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </div>
        <FooterPage />
      </div>
    </>
  );
};

export default GimBangunDatar;
