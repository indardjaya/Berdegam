import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import FooterPage from "../LandingPage/FooterPage";
import { Box, Card, Grid } from "@mui/material";
import HomeNavbar from "../Navigation/HomeNavbar";
import { Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const images = [
  { url: "/images/ilmuwan/albert.jpeg", urls: "/images/ilmuwan/relativitas.jpg", name: "Albert Einstein", info: "Penemu Teori Relativitas" },
  { url: "/images/ilmuwan/charles.jpeg", urls: "/images/ilmuwan/evolusi.jpg", name: "Charles Darwin", info: "Penemu Teori Evolusi" },
  { url: "/images/ilmuwan/isaac.jpeg", urls: "/images/ilmuwan/gravitasi.jpg", name: "Isaac Newton", info: "Penemu Hukum Gravitasi" },
  { url: "/images/ilmuwan/nikola.jpeg", urls: "/images/ilmuwan/arus.jpg", name: "Nikola Tesla", info: "Penemu Sistem arus listrik bolak-balik" },
  { url: "/images/ilmuwan/Faraday.jpg", urls: "/images/ilmuwan/listrik.jpg", name: "Michael Faraday", info: "Penemu Listrik dan Elektromagnetik" },
  { url: "/images/ilmuwan/galileo.jpg", urls: "/images/ilmuwan/teleskop.jpg", name: "Galileo Galilei", info: "Penyempurna Teleskop" },
  { url: "/images/ilmuwan/edison.jpg", urls: "/images/ilmuwan/bohlam.jpg", name: "Thomas A. Edison", info: "Penemu Bohlam" },
  { url: "/images/ilmuwan/alexander.jpg", urls: "/images/ilmuwan/telegraf.jpg", name: "Alexander G. Bell", info: "Penemu Telegraf" },
  { url: "/images/ilmuwan/antonio.jpg", urls: "/images/ilmuwan/telepon.jpg", name: "Antonio Meucci", info: "Penemu Telepon" },
  { url: "/images/ilmuwan/alfred.jpg", urls: "/images/ilmuwan/wallace.jpg", name: "Alfred R. Wallace", info: "Dikenal Dengan Penemuan Garis Wallace" },
  { url: "/images/ilmuwan/james.jpg", urls: "/images/ilmuwan/uap.jpg", name: "James Watt", info: "Dikenal Sebagai Penyempurna Mesin Uap" },
  { url: "/images/ilmuwan/oppenheimer.jpg", urls: "/images/ilmuwan/atom.jpg", name: "J. Robert Oppenheimer", info: "dijuluki sebagai bapak bom atom" },
  { url: "/images/ilmuwan/wegener.jpg", urls: "/images/ilmuwan/benua.jpg", name: "  Alfred Wegener ", info: "dikenal dengan gagasan pergeseran benua" },
  { url: "/images/ilmuwan/euklides.jpeg", urls: "/images/ilmuwan/geometri.png", name: "Euklides", info: "Bapak Geometri" },
  { url: "/images/ilmuwan/Archimedes.jpg", urls: "/images/ilmuwan/prinsiparsi.png", name: "Archimedes", info: "Dikenal Dengan Teori Gaya Apung" },
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

const ImageQuestion = ({ options, image, onAnswer }) => {
  return (
    <>
      <Card className="m-3 w-150">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" color="blue" className="m-2">
            TEBAK GAMBAR ILMUWAN
          </Typography>
          <Typography variant="h6" color="red" className="m-2">
            " {image.info} "
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
              <Typography color="green">{option.name}</Typography>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

const GimIlmuwan = () => {
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

export default GimIlmuwan;
