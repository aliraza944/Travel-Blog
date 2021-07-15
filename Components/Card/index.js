import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import useStyles from "./Styles";
export default function ContentCard({
  sideTitle,
  imgsrc,
  bottomTag,
  bottomTitle,
  featured,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.media}>
          <Image
            layout="responsive"
            width={500}
            height={featured ? 600 : 400}
            src={`/${imgsrc}`}
          ></Image>
        </div>
        <div className={classes.sideTitleContainer}>
          {" "}
          <Typography className={classes.sideTitle}> {sideTitle}</Typography>
        </div>
      </CardContent>
      <div className={classes.tagesandtitles}>
        <Typography className={classes.bottomTag}>{bottomTag}</Typography>

        <Typography className={classes.bottomTitle}>{bottomTitle}</Typography>
      </div>
    </Card>
  );
}
