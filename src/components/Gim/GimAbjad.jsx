import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/abjad/1.png", urls: "/images/huruf/1.png", name: "A" },
  { url: "/images/abjad/2.png", urls: "/images/huruf/2.png", name: "B" },
  { url: "/images/abjad/3.png", urls: "/images/huruf/3.png", name: "C" },
  { url: "/images/abjad/4.png", urls: "/images/huruf/4.png", name: "D" },
  { url: "/images/abjad/5.png", urls: "/images/huruf/5.png", name: "E" },
  { url: "/images/abjad/6.png", urls: "/images/huruf/6.png", name: "F" },
  { url: "/images/abjad/7.png", urls: "/images/huruf/7.png", name: "G" },
  { url: "/images/abjad/8.png", urls: "/images/huruf/8.png", name: "H" },
  { url: "/images/abjad/9.png", urls: "/images/huruf/9.png", name: "I" },
  { url: "/images/abjad/10.png", urls: "/images/huruf/10.png", name: "J" },
  { url: "/images/abjad/11.png", urls: "/images/huruf/11.png", name: "K" },
  { url: "/images/abjad/12.png", urls: "/images/huruf/12.png", name: "L" },
  { url: "/images/abjad/13.png", urls: "/images/huruf/13.png", name: "M" },
  { url: "/images/abjad/14.png", urls: "/images/huruf/14.png", name: "N" },
  { url: "/images/abjad/15.png", urls: "/images/huruf/15.png", name: "O" },
  { url: "/images/abjad/16.png", urls: "/images/huruf/16.png", name: "P" },
  { url: "/images/abjad/17.png", urls: "/images/huruf/17.png", name: "Q" },
  { url: "/images/abjad/18.png", urls: "/images/huruf/18.png", name: "R" },
  { url: "/images/abjad/19.png", urls: "/images/huruf/19.png", name: "S" },
  { url: "/images/abjad/20.png", urls: "/images/huruf/20.png", name: "T" },
  { url: "/images/abjad/21.png", urls: "/images/huruf/21.png", name: "U" },
  { url: "/images/abjad/22.png", urls: "/images/huruf/22.png", name: "V" },
  { url: "/images/abjad/23.png", urls: "/images/huruf/23.png", name: "W" },
  { url: "/images/abjad/24.png", urls: "/images/huruf/24.png", name: "X" },
  { url: "/images/abjad/25.png", urls: "/images/huruf/25.png", name: "Y" },
  { url: "/images/abjad/26.png", urls: "/images/huruf/26.png", name: "Z" },
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
          backgroundColor: unlocked ? "yellow" : "orange",
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

const ImageQuestion = ({ options, image, onAnswer }) => {
  return (
    <>
      <Card className="m-3 w-150">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" color="blue" className="m-2">
            MENGENAL HURUF ABJAD
          </Typography>
          <Typography variant="h6" color="red" className="m-2">
            " HURUF "
          </Typography>
          <img src={image.urls} alt={image.name} style={{ width: "250px", height: "150px", border: "rounded 3px", borderRadius: "3px" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 3, marginTop: 25, border: "rounded" }}>
          {options.map((option, index) => (
            <div backgroundColor="blue">
              <Button
                color="blue"
                key={index}
                onClick={() => onAnswer(option)}
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundImage: `url(${option.url})`,
                  backgroundSize: "cover",
                  margin: 2,
                  border: "1px solid",
                }}
              ></Button>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

const GimAbjad = () => {
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

export default GimAbjad;
