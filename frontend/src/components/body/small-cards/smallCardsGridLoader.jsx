import React, { useState } from "react";
import SmallCard from "./smallCard";
import { Typography, Box,Link, CardActions,Button } from "@material-ui/core";

const SmallCardGridLoader = (props) => {
  const { contentItems, contentTitle } = props;
  const [slice,setSlice] = useState(contentItems.length>6? 6:contentItems.length);
  const [start,setStart] = useState(0);
 
  // console.log(props,"Loader...");
 // console.log(contentItems? contentItems.length:null);
  const contentSlice = contentItems.slice(start,slice);

  function handleClick(buttonName){
    let nextPos = slice;
    let newStart = start;
    switch(buttonName){
      case "Next" :{
       const rem = contentItems.length-slice;
       newStart = slice-1;
       rem > 5 ? nextPos+=5 : nextPos+=rem
       break;
      }
      case "Prev" :{
        const rem = start-5;
        nextPos = start+1;
        rem >0 ? newStart-=5 : newStart=0;
        break;
      }
     
    }
    //console.log(nextPos);
    setSlice(nextPos);
    setStart(newStart);
  }

  return (
   
   <Box>
      <Typography>{contentTitle}</Typography>
      <Box style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
      {contentSlice.map((content,index) => (
        <SmallCard key={content._id} content={content} generIndex={props.generIndex} bookIndex = {index}/>
      ))}
      </Box>
      <CardActions>
        <Button size="medium" color="primary"  onClick = {()=> handleClick("Prev")} disabled ={start===0}>
        &#10094;
        </Button>
        <Button size="medium" color="primary" onClick = {()=> handleClick("Next")} disabled ={slice>=contentItems.length}>
          &#10095;
        </Button>
      </CardActions>
      </Box>

  );
};

export default SmallCardGridLoader;
