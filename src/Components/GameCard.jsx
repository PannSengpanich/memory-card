import styles from "../Styles/GameCard.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function GameCard({ imgSrc, name, select }) {
  return (
    <Card className={styles.container}>
      <CardActionArea onClick={select}>
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
