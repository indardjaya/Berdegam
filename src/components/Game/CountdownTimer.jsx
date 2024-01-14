import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import AlarmIcon from "@mui/icons-material/Alarm";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [shouldStop, setShouldStop] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      if (shouldStop) {
        // If shouldStop is true, break out of the loop
        clearInterval(timerId);
        return;
      }

      if (timeLeft === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Jawaban Kamu Salah",
        });
        window.location.reload();
      } else {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    };

    const timerId = setInterval(updateCountdown, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, [timeLeft, shouldStop]);

  return (
    <div>
      <AlarmIcon fontSize="large" />
      <div>{timeLeft}</div>
      {/* <button onClick={() => setShouldStop(true)}>Stop Countdown</button> */}
    </div>
  );
};

export default CountdownTimer;
