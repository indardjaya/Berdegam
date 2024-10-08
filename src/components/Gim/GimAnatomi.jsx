import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { CardBody, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/anatomi/gigi.jpg", name: "GIGI" },
  { url: "/images/anatomi/mulut.png", name: "MULUT" },
  { url: "/images/anatomi/hidung.jpg", name: "HIDUNG" },
  { url: "/images/anatomi/telinga.png", name: "TELINGA" },
  { url: "/images/anatomi/jari.png", name: "JARI TANGAN" },
  { url: "/images/anatomi/jantung2.jpg", name: "JANTUNG" },
  { url: "/images/anatomi/kaki.jpg", name: "KAKI" },
  { url: "/images/anatomi/lambung.jpg", name: "LAMBUNG" },
  { url: "/images/anatomi/lidah.jpg", name: "LIDAH" },
  { url: "/images/anatomi/mata.png", name: "MATA" },
  { url: "/images/anatomi/otak.jpg", name: "OTAK" },
  { url: "/images/anatomi/paru.jpg", name: "PARU-PARU" },
  { url: "/images/anatomi/rambut.jpg", name: "RAMBUT" },
  { url: "/images/anatomi/tangan.jpg", name: "TANGAN" },
  { url: "/images/anatomi/tulang.jpg", name: "TULANG" },
  { url: "/images/anatomi/kepala.png", name: "KEPALA" },
  { url: "/images/anatomi/lutut.png", name: "LUTUT" },
  { url: "/images/anatomi/usus.png", name: "USUS" },
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

const ImageQuestion = ({ options, answer, onAnswer }) => {
  return (
    <>
      <Card className="m-3 w-150">
        <div className=" w-full items-center text-center">
          <Typography variant="h4" color="blue" className="m-2">
            TEBAK GAMBAR ANATOMI
          </Typography>
        </div>
        <CardBody>
          <Typography variant="h3" color="green" className=" text-center">
            " {answer} "
          </Typography>
        </CardBody>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 3, border: "rounded" }}>
          {options.map((option, index) => (
            <div backgroundColor="blue">
              <Button
                className="bg-transparent"
                key={index}
                onClick={() => onAnswer(option)}
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundImage: `url(${option.url})`,
                  backgroundSize: "cover",
                  margin: 2,
                  border: 1,
                }}
              ></Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

const GimAnatomi = () => {
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
      <div className="items-center  flex align-center flex-col justify-center text-center bg-cover " style={{ backgroundImage: `url('https://source.unsplash.com/random?anatomy')` }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <HomeNavbar />
        </div>
        <div sx={{ m: 3 }}>{image && options && answer && <ImageQuestion image={image} options={options} answer={answer} onAnswer={handleAnswer} />}</div>
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
        </Card>{" "}
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

export default GimAnatomi;
