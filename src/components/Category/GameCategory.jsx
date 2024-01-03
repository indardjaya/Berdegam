import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameCategory() {
  return (
    <>
      <div className=" mx-auto mt-10 gap-2 items-center border-spacing-1">
        <Card>
          <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center", justifyItems: "center" }}>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid>
                <div className="items-center ">
                  <Card sx={{ maxWidth: 400, margin: 1 }}>
                    <CardMedia sx={{ Height: 200 }} component="img" alt="hewan" src="./images/menu/science.jpg" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        UMUM DAN SAINS
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Menebak Gambar Kategori Umum dan Sains
                      </Typography>
                    </CardContent>
                    <a href="/category/umum_dan_sains">
                      <Button color="blue" size="md" fullWidth>
                        PILIH KATEGORI
                      </Button>
                    </a>
                  </Card>
                </div>
              </Grid>
              <Grid>
                <div className="items-center ">
                  <Card sx={{ maxWidth: 400, margin: 1 }}>
                    <CardMedia sx={{ Height: 200 }} component="img" alt="profesi" src="./images/menu/color.jpg" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        BENTUK DAN WARNA
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Menebak Gambar Kategori Bentuk dan Warna
                      </Typography>
                    </CardContent>
                    <a href="/category/bentuk_dan_warna">
                      <Button color="blue" size="md" fullWidth>
                        PILIH KATEGORI
                      </Button>
                    </a>
                  </Card>
                </div>
              </Grid>
              <Grid>
                <div className="items-center ">
                  <Card sx={{ maxWidth: 400, margin: 1 }}>
                    <CardMedia sx={{ Height: 200 }} component="img" alt="bentuk" src="./images/menu/letter.jpg" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        BILANGAN DAN HURUF
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Menebak Gambar Kategori Bilangan dan Huruf
                      </Typography>
                    </CardContent>
                    <a href="/category/bilangan_dan_huruf">
                      <Button color="blue" size="md" fullWidth>
                        PILIH KATEGORI
                      </Button>
                    </a>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </div>
    </>
  );
}
