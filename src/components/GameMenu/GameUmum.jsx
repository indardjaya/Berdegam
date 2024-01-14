import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameUmum() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="https://source.unsplash.com/random?patrick" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Animasi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Animasi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-buah">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="https://source.unsplash.com/random?fruit" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Bendera
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Bendera
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-buah">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="hewan" src="https://source.unsplash.com/random?animal" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Superhero
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Superhero
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-hewan">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="profesi" src="https://source.unsplash.com/random?vegetable" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Pahlawan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Pahlawan
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-profesi">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="bentuk" src="https://source.unsplash.com/random?star" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Profesi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Profesi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-bentuk">
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
