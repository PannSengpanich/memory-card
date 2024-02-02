import styles from "../Styles/GameCard.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function GameCard({ imgSrc, name, select }) {
  return (
    <Card className={styles.container} sx={{ maxWidth: 350 }}>
      <CardActionArea onClick={select} sx={{ border: "red 1px solid" }}>
        <CardMedia component="img" height="200" image={imgSrc} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
