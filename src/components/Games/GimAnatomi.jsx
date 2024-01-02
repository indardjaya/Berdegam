// import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react";

// export function GimAnatomi() {
//   return (
//     <div className="items-center gap-2">
//       <Card className="w-80 items-center m-2">
//         <CardHeader floated={false} className="h-60">
//           <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile" />
//         </CardHeader>
//         <CardBody className="text-center">
//           <Typography variant="h4" color="blue-gray" className="mb-2">
//             Natalie Paisley
//           </Typography>
//           <Typography color="blue-gray" className="font-medium" textGradient>
//             CEO / Co-Founder
//           </Typography>
//         </CardBody>
//         <CardFooter className="flex justify-center gap-7 pt-2">
//           <Tooltip content="Like">
//             <Typography as="a" href="#facebook" variant="lead" color="blue" textGradient>
//               <i className="fab fa-facebook" />
//             </Typography>
//           </Tooltip>
//           <Tooltip content="Follow">
//             <Typography as="a" href="#twitter" variant="lead" color="light-blue" textGradient>
//               <i className="fab fa-twitter" />
//             </Typography>
//           </Tooltip>
//           <Tooltip content="Follow">
//             <Typography as="a" href="#instagram" variant="lead" color="purple" textGradient>
//               <i className="fab fa-instagram" />
//             </Typography>
//           </Tooltip>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@material-tailwind/react";

export function GimAnatomi() {
  return (
    <div className="items-center ">
      <Card sx={{ maxWidth: 250, margin: 1 }}>
        <CardMedia component="img" alt="green iguana" height="50" src="https://docs.material-tailwind.com/img/team-3.jpg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button color="green" size="sm">
            MAINKAN
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
