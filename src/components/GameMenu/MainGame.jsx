import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function MainGame() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="./images/buah/buah.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Buah
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Buah
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/game/mengenal-buah">
                      <Button color="green" size="sm">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="hewan" src="./images/hewan/hewan.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Hewan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Hewan
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/game/mengenal-hewan">
                      <Button color="green" size="sm">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="profesi" src="./images/profesi/profesi.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Profesi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Profesi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/game/mengenal-profesi">
                      <Button color="green" size="sm">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="bentuk" src="./images/bentuk/bentuk.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Bentuk
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Bentuk
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/game/mengenal-bentuk">
                      <Button color="green" size="sm">
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
