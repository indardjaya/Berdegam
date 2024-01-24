import { Button, Typography } from "@material-tailwind/react";
import { Box, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";

export default function GameBilanganHuruf() {
  return (
    <>
      <div className=" mx-auto gap-2 items-center">
        <Box sx={{ flexGrow: 1, alignItems: "center", justifyContent: "ceneter", justifyItems: "center" }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid>
              <div className="items-center ">
                <Card sx={{ maxWidth: 250, margin: 1 }}>
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/angka/angka.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Angka Bilangan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Angka Bilangan
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-angka">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/angka/lambang.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lambang Bilangan
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Lambang Bilangan
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-lambang-bilangan">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/huruf/abjad.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Huruf Abjad
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Huruf Abjad
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-abjad">
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
                  <CardMedia sx={{ maxHeight: 150 }} component="img" alt="buah" src="/images/huruf/kata.jpg" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Kata-Kata
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Menebak Kata-Kata
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <a href="/games/mengenal-kata">
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
