import cplus from "../img/c++.png";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/javascript.png";
import react from "../img/react.png";
import flutter from "../img/flutter.png"

import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from "@material-ui/lab";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import StarRating from "./StarRating";

const Technologies = () => {
  const classes = useStyles();
  const skills = [
    {
      year: "2015",
      src: cplus,
      title: "C++",
      stars: 4,
    },
    {
      year: "2016",
      src: html,
      title: "HTML 5",
      stars: 5,
    },
    {
      year: "2017",
      src: css,
      title: "CSS 3",
      stars: 4,
    },
    {
      year: "2018",
      src: js,
      title: "Javascript ES6",
      stars: 5,
    },
    {
      year: "2019",
      src: react,
      title: "React js",
      stars: 4,
    },
    {
      year: "2020",
      src: flutter,
      title: "Flutter",
      stars: 3,
    },

  ]
  return (
    <Timeline align="left" >
      {
        skills.map(({ year, src, title, stars }, index) => (
          <TimelineItem key={index}>
            {/* <TimelineOppositeContent>
              <Typography variant="h6" color="textSecondary" >
                {year}
              </Typography>
            </TimelineOppositeContent> */}
            <TimelineSeparator>
              <img src={src} alt={title} className={classes.customlogo} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper} >
                <Typography variant="h6" component="h1">
                  {title}
                </Typography>
                <StarRating stars={stars} />
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  )
}

const useStyles = makeStyles((theme) => ({
  customlogo: {
    width: "40px"
  },
  paper: {
    padding: "6px 16px",
    maxWidth: "15rem"
  },
}))

export default Technologies
