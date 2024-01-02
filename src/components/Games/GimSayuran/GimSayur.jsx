import { Button, Typography } from "@material-tailwind/react";

export default function GimSayur() {
  return (
    <figure className="relative h-96 w-full">
      <img className="h-full w-full rounded-xl object-cover object-center" src="https://source.unsplash.com/random?Vegetables" alt="fuits" />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div className="justify-content-center text-center">
          <Typography variant="h5" color="blue-gray">
            SAYURAN
          </Typography>
          <a href="/permainan/Gim-Sayur/01">
            <Button size="sm" color="amber" variant="filled">
              BERMAIN
            </Button>
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
