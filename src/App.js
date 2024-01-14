import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/LandingPage/MainPage";
import HomePage from "./components/Home/HomePage";
import DashboardPage from "./components/Home/DashboardPage";
import Signup from "./components/Authentication/SignupPage";
import Signin from "./components/Authentication/SigninPage";
import Pengaturan from "./components/Navigation/Settings";
import EditProfil from "./components/Frontend/EditProf";
import JoinPage from "./components/Authentication/JoinPage";
import MenuUmumSains from "./components/GameMenu/MenuUmumSains";
import MenuBentukWarna from "./components/GameMenu/MenuBentukWarna";
import MenuBilanganHuruf from "./components/GameMenu/MenuBilanganHuruf";
import SayurSatu from "./components/Gim/Sayuran_1";
import Game from "./components/Frontend/Game";
import GimSayur from "./components/Gim/GimSayur";
import GimHewan from "./components/Gim/GimHewan";
import GameHewan from "./components/Game/GameHewan";
import GameBuah from "./components/Game/GameBuah";
import GameProfesi from "./components/Game/GameProfesi";
import GameBentuk from "./components/Game/GameBentuk";
import GimBangunDatar from "./components/Gim/GimBangundatar";
import Guide from "./components/Navigation/Guide";
import Panduan from "./components/Navigation/Panduan";
import GimBangunRuang from "./components/Gim/GimBangunRuang";

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
            <Route path="/buku-panduan" element={<Guide />} />
            <Route path="/panduan" element={<Panduan />} />
            <Route path="/category/umum_dan_sains" element={<MenuUmumSains />} />
            <Route path="/category/bentuk_dan_warna" element={<MenuBentukWarna />} />
            <Route path="/category/bilangan_dan_huruf" element={<MenuBilanganHuruf />} />
            <Route path="/game/mengenal-buah" element={<GameBuah />} />
            <Route path="/game/mengenal-hewan" element={<GameHewan />} />
            <Route path="/game/mengenal-profesi" element={<GameProfesi />} />
            <Route path="/game/mengenal-bentuk" element={<GameBentuk />} />

            <Route path="/games/mengenal-anatomi" element={<GimSayur />} />
            <Route path="/games/mengenal-buah" element={<GimSayur />} />
            <Route path="/games/mengenal-hewan" element={<GimHewan />} />
            <Route path="/games/mengenal-sayur" element={<GimSayur />} />
            <Route path="/games/mengenal-astronomi" element={<GimHewan />} />
            <Route path="/games/mengenal-animasi" element={<GimSayur />} />
            <Route path="/games/mengenal-bendera" element={<GimHewan />} />
            <Route path="/games/mengenal-superhero" element={<GimSayur />} />
            <Route path="/games/mengenal-pahlawan" element={<GimHewan />} />
            <Route path="/games/mengenal-pahlawan" element={<GimHewan />} />
            <Route path="/games/mengenal-bangun-datar" element={<GimBangunDatar />} />
            <Route path="/games/mengenal-bangun-ruang" element={<GimBangunRuang />} />

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
