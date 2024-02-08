import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/simbol/1.png", urls: "/images/lambang/1.png", name: "Penjumlahan" },
  { url: "/images/simbol/2.png", urls: "/images/lambang/2.png", name: "Pengurangan" },
  { url: "/images/simbol/3.png", urls: "/images/lambang/3.png", name: "Perkalian" },
  { url: "/images/simbol/4.png", urls: "/images/lambang/4.png", name: "Pembagian" },
  { url: "/images/simbol/5.png", urls: "/images/lambang/5.png", name: "Sama Dengan" },
  { url: "/images/simbol/6.png", urls: "/images/lambang/6.png", name: "Tidak Sama Dengan" },
  { url: "/images/simbol/7.png", urls: "/images/lambang/7.png", name: "Tanda kurung" },
  { url: "/images/simbol/8.png", urls: "/images/lambang/8.png", name: "Kurung Kurwal" },
  { url: "/images/simbol/9.png", urls: "/images/lambang/9.png", name: "Kurung Siku" },
  { url: "/images/simbol/10.png", urls: "/images/lambang/10.png", name: "Faktorial" },
  { url: "/images/simbol/11.png", urls: "/images/lambang/11.png", name: "Persen" },
  { url: "/images/simbol/12.png", urls: "/images/lambang/12.png", name: "Lebih Besar" },
  { url: "/images/simbol/13.png", urls: "/images/lambang/13.png", name: "Lebih Kecil" },
  { url: "/images/simbol/14.png", urls: "/images/lambang/14.png", name: "Simbol Akar" },
  { url: "/images/simbol/15.png", urls: "/images/lambang/15.png", name: "Simbol Pi" },
  { url: "/images/simbol/16.png", urls: "/images/lambang/16.png", name: "Integral" },
  { url: "/images/simbol/17.png", urls: "/images/lambang/17.png", name: "Sigma" },
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
            MENGENAL SIMBOL MATEMATIKA
          </Typography>
          <Typography variant="h6" color="red" className="m-2">
            " SIMBOL "
          </Typography>
          <img src={image.urls} alt={image.name} style={{ width: "200px", height: "100px", border: "rounded 3px", borderRadius: "3px" }} />
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
                  height: "200px",
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

const GimSimbol = () => {
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
      <div className="items-center  flex align-center flex-col justify-center text-center bg-cover " style={{ backgroundImage: `url('https://source.unsplash.com/random?letters')` }}>
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

export default GimSimbol;
