import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import ContentGalaryCard from "./contentGalaryCard";
import AuthorSmallCard from "../author/authorSmallCard";
export default function(props){
  //console.log(props.contents.length === 0 ? " no Data " : "Data Recived... ---> ");

  const [slide_no, setSlide_no] = useState(0);
 
  useEffect(() => {
    let intervalId = null;
    intervalId = setInterval(() => {
      if (slide_no < props.contents.length - 1) {
        setSlide_no(slide_no + 1);
      } else {
        clearInterval(intervalId);
        setSlide_no(0);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
      //api call for new data;
      //console.log("dont worry am cleaning stuff for you....");
    };
  });

  return (
    <>
      <Typography variant="h6">{props.contentType}</Typography>
      {props.contents.length === 0 ? (
        <p>Loading....</p>
      ) : (
        <ContentGalaryCard content={props.contents[slide_no]} >
          <AuthorSmallCard author={props.contents[slide_no].author}></AuthorSmallCard>
        </ContentGalaryCard>
      )}
    </>
  );
};
