import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/LandingPage/MainPage";
import HomePage from "./components/Home/HomePage";
import DashboardPage from "./components/Home/DashboardPage";
import Signup from "./components/Authentication/SignupPage";
import Signin from "./components/Authentication/SigninPage";
import Pengaturan from "./components/Navigation/Settings";
import JoinPage from "./components/Authentication/JoinPage";
import MenuUmumSains from "./components/GameMenu/MenuUmumSains";
import MenuBentukWarna from "./components/GameMenu/MenuBentukWarna";
import MenuBilanganHuruf from "./components/GameMenu/MenuBilanganHuruf";
import GimSayur from "./components/Gim/GimSayur";
import GimHewan from "./components/Gim/GimHewan";
import GameHewan from "./components/Game/GameHewan";
import GameBuah from "./components/Game/GameBuah";
import GameProfesi from "./components/Game/GameProfesi";
import GameBentuk from "./components/Game/GameBentuk";
import GimBangunDatar from "./components/Gim/GimBangunDatar";
import Guide from "./components/Navigation/Guide";
import Panduan from "./components/Navigation/Panduan";
import GimBangunRuang from "./components/Gim/GimBangunRuang";
import GimBuah from "./components/Gim/GimBuah";
import GimAnatomi from "./components/Gim/GimAnatomi";
import GimAstronomi from "./components/Gim/GimAstronomi";
import GimBendera from "./components/Gim/GimBendera";
import GimKendaraan from "./components/Gim/GimKendaraan";
import GimRambu from "./components/Gim/GimRambu";
import GimProfesi from "./components/Gim/GimProfesi";
import ScorePage from "./components/Home/ScorePage";
import GimWarna from "./components/Gim/GimNamaWarna";
import GimBentukWarna from "./components/Gim/GimBentukWarna";
import GimIlmuwan from "./components/Gim/GimIlmuwan";
import GimAngka from "./components/Gim/GimAngka";
import GimAbjad from "./components/Gim/GimAbjad";

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
            <Route path="/score" element={<ScorePage />} />
            <Route path="/games/mengenal-anatomi" element={<GimAnatomi />} />
            <Route path="/games/mengenal-buah" element={<GimBuah />} />
            <Route path="/games/mengenal-hewan" element={<GimHewan />} />
            <Route path="/games/mengenal-sayur" element={<GimSayur />} />
            <Route path="/games/mengenal-astronomi" element={<GimAstronomi />} />
            <Route path="/games/mengenal-animasi" element={<GimSayur />} />
            <Route path="/games/mengenal-bendera" element={<GimBendera />} />
            <Route path="/games/mengenal-ilmuwan" element={<GimIlmuwan />} />
            <Route path="/games/mengenal-kendaraan" element={<GimKendaraan />} />
            <Route path="/games/mengenal-rambu" element={<GimRambu />} />
            <Route path="/games/mengenal-profesi" element={<GimProfesi />} />
            <Route path="/games/mengenal-bangun-datar" element={<GimBangunDatar />} />
            <Route path="/games/mengenal-bangun-ruang" element={<GimBangunRuang />} />
            <Route path="/games/mengenal-nama-warna" element={<GimWarna />} />
            <Route path="/games/mengenal-bentuk-warna" element={<GimBentukWarna />} />
            <Route path="/games/mengenal-angka" element={<GimAngka />} />
            <Route path="/games/mengenal-abjad" element={<GimAbjad />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
