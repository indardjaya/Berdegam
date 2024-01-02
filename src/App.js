import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/LandingPage/MainPage";
import HomePage from "./components/Home/HomePage";
import DashboardPage from "./components/Home/DashboardPage";
import Signup from "./components/Authentication/SignupPage";
import Signin from "./components/Authentication/SigninPage";
import Pengaturan from "./components/Navigation/Settings";
import Panduan from "./components/Navigation/Guide";
import EditProfil from "./components/Frontend/EditProf";
import JoinPage from "./components/Authentication/JoinPage";
import MenuUmumSains from "./components/GameMenu/MenuUmumSains";
import MenuBentukWarna from "./components/GameMenu/MenuBentukWarna";
import MenuBilanganHuruf from "./components/GameMenu/MenuBilanganHuruf";
import SayurSatu from "./components/Games/Sayuran_1";
import Game from "./components/Frontend/Game";
import GimBuah from "./components/Games/GimBuah";
import GimSayur from "./components/Games/GimSayur";
import GimHewan from "./components/Games/GimHewan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/settings" element={<Pengaturan />} />
            <Route path="/guide" element={<Panduan />} />
            <Route path="/home/umum_dan_sains" element={<MenuUmumSains />} />
            <Route path="/home/bentuk_dan_warna" element={<MenuBentukWarna />} />
            <Route path="/home/bilangan_dan_huruf" element={<MenuBilanganHuruf />} />
            <Route path="/games/mengenal-buah" element={<GimBuah />} />
            <Route path="/games/mengenal-sayur" element={<GimSayur />} />
            <Route path="/games/mengenal-hewan" element={<GimHewan />} />
            <Route path="/permainan/Gim-Sayur/01" element={<SayurSatu />} />

            <Route path="/edit" element={<EditProfil />} />
            <Route path="/g" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
