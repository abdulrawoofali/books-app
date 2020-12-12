import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "15vw",
    hight: "40vw",
    wordWrap: "break-word",
    marginLeft: 1.5,
    marginRigh: 1.5,
  },
  media: {
    height: 100,
  },
});

export default function SmallCard(props) {
  const classes = useStyles();
  const history = useHistory();
  console.log();
  const { content } = props;
  return (
    <Card
      className={classes.root}
      onClick={() => {
        history.push({
          pathname: "/book/" + content._id,
          state: {
            ...props,
          },
        });
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={content.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content.title.slice(0, 8) + "..."}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.objective ? content.objective.slice(0, 25) : "by ...."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          add to shevels
        </Button>
      </CardActions>
    </Card>
  );
}
