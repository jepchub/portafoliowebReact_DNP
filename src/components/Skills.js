import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Technologies from './Technologies';

const Skills = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id} >
        <Typography variant="h4">{title}</Typography>
        <Technologies />
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
    "& h4": {
      paddingTop: "8px",
      marginBottom: theme.spacing(4),
      color: "#707071"
    }
  }
}))

export default Skills

