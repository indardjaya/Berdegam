// import React, { useState } from "react";

// const GimRambu = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isCorrect, setIsCorrect] = useState(null);

//   const images = [
//     { url: "/images/profesi/nahkoda.jpg", answer: "jawaban_1" },
//     { url: "link_gambar_2", answer: "jawaban_2" },
//     // Tambahkan gambar dan jawaban sesuai kebutuhan
//   ];

//   const handleAnswer = (selectedAnswer) => {
//     const correctAnswer = images[currentImageIndex].answer;
//     const isAnswerCorrect = selectedAnswer === correctAnswer;

//     setIsCorrect(isAnswerCorrect);

//     // Pindah ke gambar berikutnya setelah beberapa detik
//     setTimeout(() => {
//       setIsCorrect(null);
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);
//   };

//   return (
//     <div>
//       <h1>Tebak Gambar</h1>
//       <img src={images[currentImageIndex].url} alt={`Tebak gambar ${currentImageIndex + 1}`} />

//       {isCorrect !== null && <div>{isCorrect ? <p>Anda benar!</p> : <p>Anda salah. Jawaban yang benar: {images[currentImageIndex].answer}</p>}</div>}

//       <div>
//         {images[currentImageIndex].options.map((option, index) => (
//           <button key={index} onClick={() => handleAnswer(option)}>
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GimRambu;
