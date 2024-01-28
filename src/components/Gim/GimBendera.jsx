import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/bendera/1.jpg", name: "AUSTRALIA" },
  { url: "/images/bendera/2.jpg", name: "AMERIKA SERIKAT" },
  { url: "/images/bendera/3.jpg", name: "BELANDA" },
  { url: "/images/bendera/4.jpg", name: "BELGIA" },
  { url: "/images/bendera/5.jpg", name: "CHINA" },
  { url: "/images/bendera/6.jpg", name: "KANADA" },
  { url: "/images/bendera/7.jpg", name: "DENMARK" },
  { url: "/images/bendera/8.jpg", name: "REPUBLIK CEKO" },
  { url: "/images/bendera/9.jpg", name: "DOMINIKA" },
  { url: "/images/bendera/10.jpg", name: "EKUADOR" },
  { url: "/images/bendera/11.png", name: "EL SAVADOR" },
  { url: "/images/bendera/12.jpg", name: "FIJI" },
  { url: "/images/bendera/13.jpg", name: "FILIPINA" },
  { url: "/images/bendera/14.jpg", name: "ARGENTINA" },
  { url: "/images/bendera/15.jpg", name: "BRAZIL" },
  { url: "/images/bendera/16.jpg", name: "GABON" },
  { url: "/images/bendera/17.jpg", name: "GAMBIA" },
  { url: "/images/bendera/18.jpg", name: "HAITI" },
  { url: "/images/bendera/19.jpg", name: "HONDURAS" },
  { url: "/images/bendera/20.jpg", name: "INDIA" },
  { url: "/images/bendera/21.jpg", name: "INDONESIA" },
  { url: "/images/bendera/22.jpg", name: "JAMAIKA" },
  { url: "/images/bendera/23.jpg", name: "JEPANG" },
  { url: "/images/bendera/24.jpg", name: "KAMBOJA" },
  { url: "/images/bendera/25.jpg", name: "KENYA" },
  { url: "/images/bendera/26.jpg", name: "LAOS" },
  { url: "/images/bendera/27.jpg", name: "MADAGASKAR" },
  { url: "/images/bendera/28.jpg", name: "MALADEWA" },
  { url: "/images/bendera/29.jpg", name: "NIGERIA" },
  { url: "/images/bendera/30.jpg", name: "OMAN" },
  { url: "/images/bendera/31.jpg", name: "QATAR" },
  { url: "/images/bendera/32.jpg", name: "VENEZUELA" },
  { url: "/images/bendera/33.jpg", name: "WALES" },
  { url: "/images/bendera/34.jpg", name: "YAMAN" },
  { url: "/images/bendera/35.jpg", name: "ZIMBABWE" },
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
            TEBAK BENDERA
          </Typography>
          <Typography variant="h5" color="red" className="m-2">
            {answer}
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 3, border: "rounded" }}>
          {options.map((option, index) => (
            <div backgroundColor="blue">
              <Button
                className="bg-transparent"
                key={index}
                onClick={() => onAnswer(option)}
                style={{
                  width: "250px",
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

const GimBendera = () => {
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
      <div className="items-center  flex align-center flex-col justify-center text-center bg-cover " style={{ backgroundImage: `url('https://source.unsplash.com/random?flags')` }}>
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

export default GimBendera;
