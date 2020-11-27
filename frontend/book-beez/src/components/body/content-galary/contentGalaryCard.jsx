import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {Box,Typography,Link} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 140,
  },
});

function ContentGalaryCard(props) {
  const classes = useStyles();

  const {content} = props;

  return (
    
    <Link href ={ `/book/${content._id}`} ><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="h2">
           {content.title} 
          </Typography>
          <Typography variant="h5" component="h2">
          ❤️{content.likes}

          </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
           {content.summary}
          </Typography>
  
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}

export default ContentGalaryCard;