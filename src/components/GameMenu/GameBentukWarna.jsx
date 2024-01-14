import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameBentukWarna() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/bentuk/bentukdatar.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bangun Datar
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Bentuk Datar
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-bangun-datar">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/bentuk/bangunruang.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bangun Ruang
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Bentuk Ruang
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-bangun-ruang">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/bentuk/namawarna1.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Nama Warna
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Nama-Nama Warna
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-nama-warna">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/bentuk/bentukwarna1.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Bentuk Warna
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Bentuk dan Warna
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-bentuk-warna">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
