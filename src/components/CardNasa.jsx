import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function CardNasa({ img, title, explanation }) {
  return (
      <Card sx={{ maxWidth: "80%",height:650,marginTop:2 }}>
        <CardMedia sx={{ height: 180 }} image={img} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {explanation}
          </Typography>
        </CardContent>
      </Card>
  );
}
