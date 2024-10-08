import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameUmum() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 2, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center m-2">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/bendera/bendera.jpg" />
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
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/emoji/emoji.jpg" />
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
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="hewan" src="/images/kendaraan/kendaraan.jpg" />
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
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="profesi" src="/images/rambu/rambu.jpg" />
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
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="bentuk" src="/images/profesi/profesi.jpg" />
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
