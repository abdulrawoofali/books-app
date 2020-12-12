import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box/Box";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AuthorSmallCard = (props) => {
  const classes = useStyles();
  const { author } = props;
  return (
    <Box>
      <Avatar
        alt="Remy Sharp"
        src={author.avatar_url}
        className={classes.large}
      />
      <Typography variant="subtitle1">{author.first_name}</Typography>
      {props.children}
    </Box>
  )
};

export default AuthorSmallCard;
