import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

// Gambar yang akan digunakan untuk permainan
const images = [
  { url: "https://source.unsplash.com/random?cats", name: "kucing" },
  { url: "https://source.unsplash.com/random?dog", name: "anjing" },
  { url: "https://source.unsplash.com/random?bird", name: "burung" },
  { url: "https://source.unsplash.com/random?fish", name: "ikan" },
  { url: "https://source.unsplash.com/random?lion", name: "singa" },
  { url: "https://source.unsplash.com/random?tiger", name: "harimau" },
  { url: "https://source.unsplash.com/random?elephant", name: "gajah" },
  { url: "https://source.unsplash.com/random?monkey", name: "monyet" },
  { url: "https://source.unsplash.com/random?panda", name: "panda" },
  { url: "https://source.unsplash.com/random?zebra", name: "zebra" },
];

// Fungsi untuk mengacak urutan elemen dalam array
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // Selama masih ada elemen yang belum diacak
  while (currentIndex !== 0) {
    // Pilih elemen yang tersisa secara acak
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Tukar elemen tersebut dengan elemen saat ini
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

// Komponen untuk menampilkan button level
const LevelButton = ({ level, unlocked, onClick }) => {
  return (
    <button
      disabled={!unlocked}
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        margin: "10px",
        fontSize: "20px",
        backgroundColor: unlocked ? "green" : "gray",
      }}
    >
      {level}
    </button>
  );
};

// Komponen untuk menampilkan gambar dan pilihan jawaban
const ImageQuestion = ({ image, options, answer, onAnswer }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* <img src={image.url} alt={image.name} style={{ width: "300px", height: "300px" }} /> */}
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Manakah gambar {answer}?</p>
      <div style={{ display: "flex", justifyContent: "space-around", width: "400px" }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            style={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${option.url})`,
              backgroundSize: "cover",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

// Komponen utama untuk game tebak gambar
const Game = () => {
  // State untuk menyimpan level saat ini
  const [level, setLevel] = useState(1);

  // State untuk menyimpan status level yang terbuka
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  // State untuk menyimpan gambar yang akan ditampilkan pada level saat ini
  const [image, setImage] = useState(null);

  // State untuk menyimpan pilihan jawaban yang akan ditampilkan pada level saat ini
  const [options, setOptions] = useState([]);

  // State untuk menyimpan jawaban yang benar pada level saat ini
  const [answer, setAnswer] = useState(null);

  // State untuk menyimpan skor user
  const [score, setScore] = useState(0);

  // Fungsi untuk mengatur level yang dipilih
  const selectLevel = (level) => {
    setLevel(level);
    setImage(null);
    setOptions([]);
    setAnswer(null);
  };

  // Fungsi untuk mengatur gambar, pilihan, dan jawaban yang akan ditampilkan pada level saat ini
  const setupLevel = () => {
    // Mengacak urutan gambar
    const shuffledImages = shuffle(images);

    // Mengambil gambar pertama sebagai gambar yang akan ditampilkan
    const image = shuffledImages[0];

    // Mengambil dua gambar pertama sebagai pilihan jawaban
    const options = shuffledImages.slice(0, 2);

    // Mengacak urutan pilihan jawaban
    const shuffledOptions = shuffle(options);

    // Mengambil nama gambar pertama sebagai jawaban yang benar
    const answer = image.name;

    // Mengatur state dengan nilai yang telah ditentukan
    setImage(image);
    setOptions(shuffledOptions);
    setAnswer(answer);
  };

  // Fungsi untuk menangani jawaban user
  const handleAnswer = (option) => {
    // Jika jawaban user benar
    if (option.name === answer) {
      // Menambah skor user
      setScore((score) => score + 10);

      // Jika level saat ini bukan level terakhir
      if (level < 10) {
        // Membuka level berikutnya
        setUnlockedLevels((unlockedLevels) => [...unlockedLevels, level + 1]);
        Swal.fire({
          icon: "success",
          title: "Yeay Benar",
          text: "Klik Ok Untuk Lanjut",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        // Pindah ke level berikutnya
        setLevel((level) => level + 1);

        // Mengatur ulang gambar, pilihan, dan jawaban
        setImage(null);
        setOptions([]);
        setAnswer(null);
      } else {
        // Jika level saat ini adalah level terakhir, menampilkan pesan selamat
        Swal.fire({
          icon: "info",
          title: "SELAMAT",
          text: "Kamu Berhasil Menjawab Semuanya",
          footer: '<a href="/dashboard">Kembali Ke Menu Permainan?</a>',
        });
      }
    } else {
      // Jika jawaban user salah, menampilkan pesan kesalahan
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Jawaban Kamu Salah",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  // Efek samping untuk mengatur gambar, pilihan, dan jawaban ketika level berubah
  useEffect(() => {
    setupLevel();
  }, [level]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Game Tebak Gambar</h1>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Skor: {score}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {unlockedLevels.map((unlockedLevel) => (
          <LevelButton key={unlockedLevel} level={unlockedLevel} unlocked={true} onClick={() => selectLevel(unlockedLevel)} />
        ))}
        {Array.from({ length: 10 - unlockedLevels.length }, (_, i) => i + unlockedLevels.length + 1).map((lockedLevel) => (
          <LevelButton key={lockedLevel} level={lockedLevel} unlocked={false} onClick={() => {}} />
        ))}
      </div>
      {image && options && answer && <ImageQuestion image={image} options={options} answer={answer} onAnswer={handleAnswer} />}
    </div>
  );
};

export default Game;
