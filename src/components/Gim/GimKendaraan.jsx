import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/kendaraan/1.jpg", name: "SEPEDA" },
  { url: "/images/kendaraan/2.jpg", name: "MOBIL" },
  { url: "/images/kendaraan/3.jpg", name: "MOTOR" },
  { url: "/images/kendaraan/4.jpg", name: "BUS" },
  { url: "/images/kendaraan/5.jpg", name: "KERETA API" },
  { url: "/images/kendaraan/6.jpg", name: "PESWAT" },
  { url: "/images/kendaraan/7.jpg", name: "KAPAL" },
  { url: "/images/kendaraan/8.jpg", name: "HELIKOPTER" },
  { url: "/images/kendaraan/9.jpg", name: "BECAK" },
  { url: "/images/kendaraan/10.jpg", name: "DELMAN" },
  { url: "/images/kendaraan/11.jpg", name: "BAJAJ" },
  { url: "/images/kendaraan/12.jpg", name: "PERAHU" },
  { url: "/images/kendaraan/13.jpg", name: "BECAK" },
  { url: "/images/kendaraan/14.jpg", name: "SEKUTER" },
  { url: "/images/kendaraan/15.jpg", name: "MOBIL PEMADAM" },
  { url: "/images/kendaraan/16.jpg", name: "MOBIL AMBULAN" },
  { url: "/images/kendaraan/17.jpg", name: "KERETA GANTUNG" },
  { url: "/images/kendaraan/18.jpg", name: "TAKSI" },
  { url: "/images/kendaraan/19.jpg", name: "MOBIL TRUK" },
  { url: "/images/kendaraan/20.jpg", name: "MOBIL BARANG" },
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
          backgroundColor: unlocked ? "blue" : "yellow",
          borderRadius: 5,
        }}
      >
        <Typography variant="lead" color="green" className="m-1 font-semibold">
          {level}
        </Typography>
      </button>
    </div>
  );
};

const ImageQuestion = ({ options, image, answer, onAnswer }) => {
  return (
    <>
      <Card className="m-3 w-150">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" color="blue" className="m-2">
            TEBAK GAMBAR
          </Typography>
          <Typography variant="h6" color="red" className="m-2">
            KENDARAAN
          </Typography>
          <img src={image.url} alt={image.name} style={{ width: "250px", height: "180px", borderRadius: "3px", border: "1px solid" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 3, marginTop: 25, border: "rounded" }}>
          {options.map((option, index) => (
            <div backgroundColor="blue">
              <Button
                color="blue"
                key={index}
                onClick={() => onAnswer(option)}
                style={{
                  width: "200px",
                  height: "50px",
                  margin: 2,
                  border: 1,
                  backgroundColor: "blue",
                  fontSize: "15px",
                }}
              >
                {option.name}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

const GimKendaraan = () => {
  const [level, setLevel] = useState(1);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

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

      if (score === 90) {
        navigate("/score");
      }

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

        if (score === 30) {
          Swal.fire({
            icon: "success",
            title: "Selamat, Benar berturut-turut yeayyy !!!",
            text: "Klik Ok Untuk Lanjut",
          });
        }
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
      <div className="items-center  flex align-center flex-col justify-center text-center bg-cover " style={{ backgroundImage: `url('https://source.unsplash.com/random?vehicle')` }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <HomeNavbar />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: 3 }}>{image && options && answer && <ImageQuestion image={image} options={options} answer={answer} onAnswer={handleAnswer} />}</div>
        <Card>
          <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
            <Grid container>
              <Grid>
                <Box sx={{ m: 2, flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
                  <Typography className="m-2" variant="h5" color="amber">
                    SKOR POIN: " {score} "
                  </Typography>
                </Box>
              </Grid>
              <Grid></Grid>
            </Grid>
          </Box>
        </Card>
        <Card style={{ display: "flex", flexWrap: "wrap", margin: 3 }}>
          {unlockedLevels.map((unlockedLevel) => (
            <LevelButton key={unlockedLevel} level={unlockedLevel} unlocked={true} onClick={() => selectLevel(unlockedLevel)} />
          ))}
          {Array.from({ length: 10 - unlockedLevels.length }, (_, i) => i + unlockedLevels.length + 1).map((lockedLevel) => (
            <LevelButton key={lockedLevel} level={lockedLevel} unlocked={false} onClick={() => {}} />
          ))}
        </Card>
      </div>
      <FooterPage />
    </>
  );
};

export default GimKendaraan;
