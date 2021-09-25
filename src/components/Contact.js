import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  // const [value, setValue] = useState("Say Hi");

  // const handleChange = (e) => {
  //   setValue(e.target.value)
  // }

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id} >

        <Typography variant="h3">{title}</Typography>

        <Paper className={classes.root}>
          <div className={classes.titleandCoices} >
            <Typography variant="h5">CONTACT ME</Typography>
            {/* <div className={classes.choices} >
              <span>Say Hello</span>
              <Radio
                value="Say Hi"
                checked={value === "Say Hi"}
                color="primary"
                onChange={handleChange}
              />
              <span>Get a Quote</span>
              <Radio
                value="Get a Quote"
                checked={value === "Get a Quote"}
                color="primary"
                onChange={handleChange}
              />
            </div> */}
          </div>
          {/* <form className={classes.form} noValidate autoComplete="off">
            <TextField label="Your name" />
            <TextField label="Your e-mail" />
            {/* {
              value === "Get a Quote" ? (
                <>
                  <TextField label="Needed Services" />
                  <TextField label="Estimated Budget" />
                </>
              ) : null
            } */}
          {/* <TextField label="Write a message" />
          </form>
          <Button variant="contained">Submit</Button>
        </Paper>
        <Paper className={classes.social} > */}
          <div className={classes.social} >
            <a href="https://api.whatsapp.com/send?phone=59175378522&text=Jose%20Enrique%20Peña%20Cuellar%2C%20necesito%20su%20servicio" target="_blank" rel="noopener noreferrer" >
              <WhatsAppIcon fontSize="large" className={classes.light} />
            </a>
            <a href="https://twitter.com/Jepc54992100" target="_blank" rel="noopener noreferrer" ><TwitterIcon fontSize="large" color="primary" /></a>
            <a href="https://www.facebook.com/je.pc.393/" target="_blank" rel="noopener noreferrer" ><FacebookIcon fontSize="large" color="primary" /></a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-e-pe%C3%B1a-c-a46a461a3/" target="_blank" rel="noopener noreferrer" ><LinkedInIcon fontSize="large" color="primary" /></a>
          </div>
        </Paper>

      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  light: {
    color: "#28E546"
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  root: {
    marginTop: theme.spacing(4),
    fontSize: "1,2rem",
    backgroundColor: "#E4E4E4",
    border: "2px solid #568FFF",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    // "& button": {
    //   backgroundColor: "#fff",
    //   color: "#568FFF",
    //   fontWeight: 900,
    //   fontSize: "1.2rem",
    //   marginTop: theme.spacing(4),
    //   border: "2px solid #568FFF",
    //   borderRadius: "10px",
    // },
    // "& button:hover": {
    //   backgroundColor: "#568FFF",
    //   color: "#fff",
    //   border: "2px solid #fff"
    // }
  },
  sectioncontent: {
    maxWidth: "80vw",
    "& h3": {
      paddingTop: "8px",
      color: "#707071"
    }
  },
  titleandCoices: {
    "& h5": {
      color: "#707071",
      paddingLeft: theme.spacing(3),
      // [theme.breakpoints.down("sm")]: {
      //   padding: theme.spacing(0.5)
      // },
    }
  },
  // form: {
  //   display: "flex",
  //   flexDirection: "column",
  //   color: "#568FFF",
  //   fontWeight: 900,
  //   "& input": {
  //     marginBottom: theme.spacing(2),
  //     color: "black"
  //   }
  // },
  social: {
    marginTop: "8px",
    backgroundColor: "#E4E4E4",
    // border: "2px solid #568FFF",
    paddingTop: theme.spacing(1),
    "& a": {
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1)
      },
    }
  }
}))

export default Contact

