// src/components/TebakGambar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import kucing from "../../../public/images"

const GimBuah = () => {
  const [gambarIndex, setGambarIndex] = useState(0);
  const [jawaban, setJawaban] = useState("");
  const gambarList = ["kucing", "burung", "bunga"]; // Ganti dengan daftar nama gambar Anda
  const navigate = useNavigate();

  const handleNext = () => {
    setGambarIndex((prevIndex) => (prevIndex + 1) % gambarList.length);
    setJawaban("");
  };

  const handleJawabanChange = (e) => {
    setJawaban(e.target.value);
  };

  const handleCheck = () => {
    const jawabanBenar = jawaban.toLowerCase() === gambarList[gambarIndex];
    // Swal.fire(jawabanBenar ? "Jawaban Benar!" : "Jawaban Salah!");
    // const handleGoHome = () => {
    Swal.fire({
      title: "Apakah Anda yakin ingin ke halaman utama?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      showCloseButton: true,
      focusConfirm: false,
      preConfirm: () => {
        return new Promise((resolve) => {
          navigate("/");
          resolve();
        });
      },
    });
  };

  const data = [
    {
      imageLink: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div>
      {/* <img
        // src={`${data.imageLink} ${gambarList[gambarIndex]}`} // Ganti dengan direktori gambar Anda
        // alt={gambarList[gambarIndex]}
        style={{ maxWidth: "300px", maxHeight: "300px" }}
      /> */}
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img className="h-40 w-full max-w-full rounded-lg object-cover object-center" src={`${imageLink} ${gambarList[gambarIndex]}`} alt="gallery-photo" />
        </div>
      ))}
      <br />
      <input type="text" placeholder="Tebak gambar apa ini?" value={jawaban} onChange={handleJawabanChange} />
      <button onClick={handleCheck}>Periksa Jawaban</button>
      <button onClick={handleNext}>Gambar Berikutnya</button>
    </div>
  );
};

export default GimBuah;
