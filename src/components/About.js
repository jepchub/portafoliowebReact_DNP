import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import woman from "../img/yoedt.png"
import TypeWriterEffect from "react-typewriter-effect"
import cv from "../img/CVJepc.pdf"

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id} >
        <Typography variant="h3" >{title}</Typography>

        <Card className={classes.card} >
          <CardMedia image={woman} className={classes.media} title="picture" />

          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text="Hi, I am Jose Enrique Peña Cuellar"
              textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "tomato" }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text="And I am an awensome Front End Developer"
              textStyle={{ fontSize: "1.2rem", fontWeight: "700px" }}
              startDelay={3700}
              cursorColor="black"
              typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary" >
              Soy actualmente estudiante de la carrera de "Ingenieria en sistemas" cursando los ultimos semestres de la carrera,
              tengo conocimietos en diseño y desarrollo de software. Tambien adquiri conocimiento y experiencia en diseño UX/UI,
              diseño de logos, iconos, tarjetas, interfaces movil y web en figma,
              tengo experiencia en desarrollo frontend y backend.
            </Typography>
          </CardContent>
          <CardActions>
            {/* <span variant="contained" className={classes.pdfbutton} > */}
            <a className={classes.pdfbutton} href={cv} download>
              Download CV
            </a>
            {/* </span> */}
          </CardActions>

        </Card>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
    "& h3": {
      paddingTop: "8px",
      color: "#DCDCDC "
    }
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  cardcontent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      }
    }
  },
  media: {
    width: "80vw",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
  pdfbutton: {
    position: "absolute",
    color: "#fff",
    fontWeight: "900",
    bottom: "2.3rem",
    right: "30%",
    [theme.breakpoints.down("sm")]: {
      bottom: "2rem",
      right: "1rem"
    },
    backgroundColor: "tomato",
    padding: theme.spacing(3),
    borderRadius: "20px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#fff",
      border: "2px solid tomato",
      color: "tomato"
    },
    // "& a": {
    //   color: "#fff",
    //   textDecoration: "none",
    //   fontWeight: "900",
    //   margin: "0px",
    //   width: "100px",
    //   padding: theme.spacing(3),
    //   border: "2px solid tomato",
    //   borderRadius: "20px",
    // },
    // "& a:hover": {
    //   color: "tomato",
    // }
  },
}))

export default About

