import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameSains() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="buah" src="/images/anatomi/anatomi.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Anatomi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Anatomi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-anatomi">
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
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="buah" src="/images/buah/gimbuah.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Buah
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Buah
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
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="hewan" src="/images/hewan/hewan1.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Hewan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Hewan
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
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="profesi" src="https://source.unsplash.com/random?vegetable" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Sayur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Sayuran
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-sayur">
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
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="bentuk" src="/images/astronomi/astronomi.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Astronomi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Astronomi
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-astronomi">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>

            <Grid>
              <div className="items-center m-2">
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="buah" src="/images/bendera/bendera.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Bendera
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Bendera
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-bendera">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>

            <Grid>
              <div className="items-center m-2">
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="buah" src="/images/emoji/emoji.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Emoji
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Emoji
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-emoji">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>

            <Grid>
              <div className="items-center m-2">
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="hewan" src="/images/kendaraan/kendaraan.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Kendaraan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Kendaraan
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-kendaraan">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>

            <Grid>
              <div className="items-center m-2">
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="profesi" src="/images/rambu/rambu.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Rambu
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Rambu
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-rambu">
                      <Button color="blue" size="sm">
                        MAINKAN
                      </Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid>
              <div className="items-center m-2">
                <Card sx={{ maxWidth: 200, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 100 }} component="img" alt="bentuk" src="/images/profesi/profesi.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gim Profesi
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Gambar Profesi
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
          </Grid>
        </Box>
      </div>
    </>
  );
}
