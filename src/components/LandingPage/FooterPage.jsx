import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export function FooterPage() {
  return (
    <footer>
      <div className="container   px-8 bg-gray-50 rounded mx-auto">
        <div className="mt-4 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <div className="text-center md:text-start">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Bermain Dengan Gambar
            </Typography>
            <Typography color="gray" className="font-normal">
              Gim Edukasi Meningkatkan Kemampuan Kognitif Anak Usia Dini Dengan Standar Tingkat Pencapaian Perkembangan.
            </Typography>
          </div>
          <Typography color="gray" className="text-center font-normal">
            &copy; {currentYear} Berdegam by Indar Jaya
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default FooterPage;
