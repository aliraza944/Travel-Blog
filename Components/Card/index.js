import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Trees from "../../public/Images/Trees-for-Life.jpg";
import Image from "next/image";
import useStyles from "./Styles";
export default function ContentCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.media}>
          <Image layout="responsive" src={Trees}></Image>
        </div>
        <div>
          {" "}
          <Typography
            variant="h3"
            className={`${classes.sideTitle} verticleText`}
          >
            {" "}
            Trees are monago
          </Typography>
        </div>
      </CardContent>
      <div className={classes.tagesandtitles}>
        <Typography className={classes.bottomTag} variant="h3">
          {" "}
          my journey
        </Typography>

        <Typography className={classes.bottomTitle} variant="h3">
          {" "}
          The journey so far{" "}
        </Typography>
      </div>
    </Card>
  );
}
