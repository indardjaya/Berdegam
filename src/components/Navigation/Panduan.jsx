import { Button, Card, Typography } from "@material-tailwind/react";
import MainGame from "../GameMenu/MainGame";
import FooterPage from "../LandingPage/FooterPage";
import HomeNavbar from "./HomeNavbar";

export function Panduan() {
  return (
    <>
      <div className="relative items-center  flex align-center flex-col justify-center text-center " style={{ backgroundImage: `url('https://source.unsplash.com/random?toy')` }}>
        <HomeNavbar />
        <div className=" items-center px-8 lg:py-16">
          <div className="container  items-center justify-center mx-auto">
            <Card variant="gradient" className=" border-1  max-w-screen-xl ">
              <div className="mb-10 w-full items-center text-center">
                <Typography variant="h2" color="blue" className="m-2 text-center">
                  PANDUAN
                </Typography>
                <Typography variant="lead" className=" m-1 l:px-20 text-light-blue-800">
                  Bermain Dengan Gambar
                </Typography>
              </div>
              <div className=" mx-auto gap-2 items-center">
                <Typography className="m-2 text-center">
                  Bermain Dengan Gambar “Berdegam” merupakan gim edukasi yang diperuntukkan pendukung dalam pembelajaran anak usia dini dengan metode gambar. Tujuan gim ini untuk membantu anak usia dini dalam meningkatkan kemampuan kognitif
                  anak sesuai dengan standar tingkat pencapaian perkembangan.
                </Typography>
                <Typography className="m-2 text-center">
                  Penggunaan gim ini membutuhkan perangkat elektronik serta tersedianya jaringan internet. Penggunaan gim ini dalam kegiatan pembelajaran dapat dilaksanakan secara mandiri ataupun bersama-sama di dalam kelas. Secara mandiri
                  dapat melalui perangkat elektronik seperti, smartphone, laptop, atau komputer. Sedangkan penggunaan secara bersama di dalam kelas dapat melalui perangkat elektronik berupa laptop yang disambungkan dengan alat proyeksi
                  (proyektor) dan pengeras suara (speaker). Selama menggunakan gim ini, orang tua dan pendidik harus selalu mendampingi dan mengawasi anak. Gim ini akan menjadi lebih bermakna, apabila anak berada dekat dengan orang tua atau
                  pendidik agar dapat bertanya dan berdiskusi.
                </Typography>
                <Typography variant="h5" color="blue" className="m-2 text-center">
                  PANDUAN PENGGUNAAN
                </Typography>
                <Typography variant="h6" color="blue-sky" className="m-2 text-justify">
                  <ol>
                    <li> 1. Untuk memulai game ini, silakan memilih kategori dan jenis game yang diinginkan.</li>
                    <li> 2. Anda diharapkan untuk menekan tombol "mainkan".</li>
                    <li> 3. Halaman game yang anda pilih akan ditampilkan.</li>
                    <li> 4. Pilih gambar yang ingin dijawab sesuai pertanyaan.</li>
                    <li> 5. Di dalam Halaman game ini, akan menampilkan beberapa tampilan di antaranya:</li>
                    <ul>
                      <li>- Logo Berdegam untuk kembali ke Beranda.</li>
                      <li>- Tombol Menu untuk memilih kategori game.</li>
                      <li>- Tombol Musik untuk memutar atau mematikan musik.</li>
                      <li>- Tombol Logout untuk keluar dari game.</li>
                      <li>- Tombol Panduan untuk melihat panduan penggunaan game.</li>
                      <li>- Tombol Masuk untuk masuk ke web game ini untuk melihat jenis game laiinnya.</li>
                      <li>- Tampilan Judul Game.</li>
                      <li>- Tombol level game.</li>
                      <li>- Tampilan Skor.</li>
                      <li>- Tampilan pertanyaan.</li>
                      <li>- Tampilan gambar yang akan dipilih sesuai pertanyaan.</li>
                    </ul>
                  </ol>
                </Typography>
              </div>
              <div className="w-auto mx-auto m-5">
                <a href="./home" className=" no-underline">
                  <div className="flex items-center">
                    <Button color="blue" size="lg" className="w-full z-10">
                      Saya Paham
                    </Button>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default Panduan;
