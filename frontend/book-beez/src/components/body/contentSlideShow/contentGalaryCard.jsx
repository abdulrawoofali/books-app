import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import AuthorSmallCard from "../author/authorSmallCard"

import {Box,Typography,Link,Button} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    display:"flex",
    alignContent:"stretch",
    width:"100%"

  },
  media: {
    height: 300,
    width:200,
    borderRadius: 10

  },
  row:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  }
  
});

function ContentGalaryCard(props) {
  const classes = useStyles();

  const {content} = props;
  const {children} = props;

  return (
    
    <Link href ={ `/book/${content._id}`} style={{ textDecoration: 'none', color: 'white' }}><Card>
      <CardActionArea  className={classes.row} >
        <CardMedia 
          className={classes.media}
          image={content.avatar_url}
          title={content.title}
        />

        <CardContent>
          {children != null && typeof children[Symbol.iterator] === 'function' ? children[0]:children}  
          <Box>
          <Typography gutterBottom variant="h5" component="h2">
           {content.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {content.objective}
          </Typography>
          </Box>
          <Typography variant="h5" component="h2">
          ❤️{content.likes}
          </Typography>
          {props.showSummary ?  <Typography variant="body2" component="h2">
            {content.summary}
          </Typography> : null}

  
        </CardContent>
        <CardActions>
        {children != null && typeof children[Symbol.iterator] === 'function' ? children[1]:null}
        </CardActions>
      </CardActionArea>
    </Card>
    </Link>
  );
}

export default ContentGalaryCard;