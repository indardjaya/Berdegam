import React, { useState, useEffect } from "react";
import "./index.css";

// Buat array untuk menyimpan gambar yang tersedia
const images = [
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  "https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
];

// Buat komponen Card untuk menampilkan kartu dan gambar
function Card({ image, isOpen, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      {/* Jika kartu terbuka, tampilkan gambar, jika tidak, tampilkan gambar default */}
      {isOpen ? <img src={image} alt="gambar" className="image" /> : <img src="https://i.ibb.co/bv9NWsH/question.png" alt="question" className="image" />}
    </div>
  );
}

// Buat komponen Game untuk menampilkan game tebak gambar
function Editprofil() {
  // Buat state untuk menyimpan gambar yang dipilih
  const [selectedImages, setSelectedImages] = useState([]);

  // Buat state untuk menyimpan kartu yang terbuka
  const [openedCards, setOpenedCards] = useState([]);

  // Buat state untuk menyimpan skor pemain
  const [score, setScore] = useState(0);

  // Buat state untuk menyimpan level game
  const [level, setLevel] = useState(1);

  // Buat state untuk menyimpan status game (mulai atau berhenti)
  const [isPlaying, setIsPlaying] = useState(false);

  // Buat fungsi untuk mengacak urutan gambar
  const shuffleImages = () => {
    // Buat array baru untuk menyimpan gambar yang diacak
    let shuffledImages = [];

    // Buat array untuk menyimpan indeks gambar yang tersedia
    let availableIndexes = [];

    // Isi array dengan indeks dari 0 sampai jumlah gambar
    for (let i = 0; i < images.length; i++) {
      availableIndexes.push(i);
    }

    // Lakukan perulangan sebanyak dua kali jumlah gambar
    for (let i = 0; i < images.length * 2; i++) {
      // Pilih indeks acak dari array indeks yang tersedia
      let randomIndex = Math.floor(Math.random() * availableIndexes.length);

      // Ambil gambar dari array gambar sesuai dengan indeks acak
      let image = images[availableIndexes[randomIndex]];

      // Masukkan gambar ke array gambar yang diacak
      shuffledImages.push(image);

      // Hapus indeks acak dari array indeks yang tersedia
      availableIndexes.splice(randomIndex, 1);

      // Jika array indeks yang tersedia kosong, isi kembali dengan indeks dari 0 sampai jumlah gambar
      if (availableIndexes.length === 0) {
        for (let i = 0; i < images.length; i++) {
          availableIndexes.push(i);
        }
      }
    }

    // Kembalikan array gambar yang diacak
    return shuffledImages;
  };

  // Buat fungsi untuk memeriksa apakah gambar yang dipilih cocok
  const checkMatch = () => {
    // Jika ada dua gambar yang dipilih
    if (selectedImages.length === 2) {
      // Jika gambar yang dipilih sama, tambahkan skor 10
      if (selectedImages[0] === selectedImages[1]) {
        setScore((prevScore) => prevScore + 10);
      } else {
        // Jika gambar yang dipilih berbeda, tutup kembali kartu yang terbuka
        setTimeout(() => {
          setOpenedCards((prevOpenedCards) => prevOpenedCards.filter((card) => card !== selectedImages[0] && card !== selectedImages[1]));
        }, 1000);
      }

      // Kosongkan array gambar yang dipilih
      setSelectedImages([]);
    }
  };

  // Buat fungsi untuk menangani klik pada kartu
  const handleCardClick = (image) => {
    // Jika kartu belum terbuka dan gambar belum dipilih
    if (!openedCards.includes(image) && !selectedImages.includes(image)) {
      // Buka kartu dan masukkan gambar ke array gambar yang dipilih
      setOpenedCards((prevOpenedCards) => [...prevOpenedCards, image]);
      setSelectedImages((prevSelectedImages) => [...prevSelectedImages, image]);
    }
  };

  // Buat fungsi untuk menangani klik pada tombol next
  const handleNextClick = () => {
    // Jika semua kartu terbuka
    if (openedCards.length === selectedImages.length) {
      // Naikkan level game
      setLevel((prevLevel) => prevLevel + 1);

      // Jika level game masih kurang dari 12
      if (level < 12) {
        // Acak kembali urutan gambar
        setSelectedImages(shuffleImages());

        // Tutup kembali semua kartu
        setOpenedCards([]);
      } else {
        // Jika level game sudah 12, berhentikan game dan tampilkan pesan selamat
        setIsPlaying(false);
        alert("Selamat, Anda telah menyelesaikan semua level!");
      }
    } else {
      // Jika masih ada kartu yang tertutup, tampilkan pesan peringatan
      alert("Anda harus membuka semua kartu sebelum lanjut ke level berikutnya!");
    }
  };

  // Buat fungsi untuk menangani klik pada tombol mulai
  const handleStartClick = () => {
    // Mulai game dan atur ulang state game
    setIsPlaying(true);
    setSelectedImages(shuffleImages());
    setOpenedCards([]);
    setScore(0);
    setLevel(1);
  };

  // Buat efek untuk memeriksa apakah gambar yang dipilih cocok setiap kali state gambar yang dipilih berubah
  useEffect(() => {
    checkMatch();
  }, []);

  return (
    <div className="container">
      {/* Tampilkan skor dan level pemain */}
      <h1>Skor: {score}</h1>
      <h1>Level: {level}</h1>

      {/* Tampilkan tombol mulai jika game berhenti */}
      {!isPlaying && <button onClick={handleStartClick}>Mulai</button>}

      {/* Tampilkan grid kartu */}
      <div className="grid">
        {selectedImages.map((image, index) => (
          <Card key={index} image={image} isOpen={openedCards.includes(image)} onClick={() => handleCardClick(image)} />
        ))}
      </div>

      {/* Tampilkan tombol next jika game berjalan */}
      {isPlaying && <button onClick={handleNextClick}>Next</button>}
    </div>
  );
}

export default Editprofil;
