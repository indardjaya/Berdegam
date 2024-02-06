import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/angka/1.png", urls: "/images/bilangan/1.png", name: "nol" },
  { url: "/images/angka/2.png", urls: "/images/bilangan/2.png", name: "satu" },
  { url: "/images/angka/3.png", urls: "/images/bilangan/3.png", name: "dua" },
  { url: "/images/angka/4.png", urls: "/images/bilangan/4.png", name: "tiga" },
  { url: "/images/angka/5.png", urls: "/images/bilangan/5.png", name: "empat" },
  { url: "/images/angka/6.png", urls: "/images/bilangan/6.png", name: "lima" },
  { url: "/images/angka/7.png", urls: "/images/bilangan/7.png", name: "enam" },
  { url: "/images/angka/8.png", urls: "/images/bilangan/8.png", name: "tujuh" },
  { url: "/images/angka/9.png", urls: "/images/bilangan/9.png", name: "delapan" },
  { url: "/images/angka/10.png", urls: "/images/bilangan/10.png", name: "sembilan" },
  { url: "/images/angka/11.png", urls: "/images/bilangan/11.png", name: "sepuluh" },
  { url: "/images/angka/12.png", urls: "/images/bilangan/12.png", name: "sebelas" },
  { url: "/images/angka/13.png", urls: "/images/bilangan/13.png", name: "dua belas" },
  { url: "/images/angka/14.png", urls: "/images/bilangan/14.png", name: "tiga belas" },
  { url: "/images/angka/15.png", urls: "/images/bilangan/15.png", name: "empat belas" },
  { url: "/images/angka/16.png", urls: "/images/bilangan/16.png", name: "lima belas" },
  { url: "/images/angka/17.png", urls: "/images/bilangan/17.png", name: "enam belas" },
  { url: "/images/angka/18.png", urls: "/images/bilangan/18.png", name: "tujuh belas" },
  { url: "/images/angka/19.png", urls: "/images/bilangan/19.png", name: "delapan belas" },
  { url: "/images/angka/20.png", urls: "/images/bilangan/20.png", name: "sembilan belas" },
  { url: "/images/angka/21.png", urls: "/images/bilangan/21.png", name: "dua puluh" },
  { url: "/images/angka/22.png", urls: "/images/bilangan/22.png", name: "tiga puluh" },
  { url: "/images/angka/23.png", urls: "/images/bilangan/23.png", name: "empat puluh" },
  { url: "/images/angka/24.png", urls: "/images/bilangan/24.png", name: "lima puluh" },
  { url: "/images/angka/25.png", urls: "/images/bilangan/25.png", name: "enam puluh" },
  { url: "/images/angka/26.png", urls: "/images/bilangan/26.png", name: "tujuh puluh" },
  { url: "/images/angka/27.png", urls: "/images/bilangan/27.png", name: "delapan puluh" },
  { url: "/images/angka/28.png", urls: "/images/bilangan/28.png", name: "sembilan puluh" },
  { url: "/images/angka/29.png", urls: "/images/bilangan/29.png", name: "seratus" },
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
            MENGENAL ANGKA BILANGAN
          </Typography>
          <Typography variant="h6" color="red" className="m-2">
            " ANGKA "
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

const GimAngka = () => {
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

export default GimAngka;
