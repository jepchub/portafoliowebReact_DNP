import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import mockData from '../mockData';

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id} >
        <Typography variant="h3">{title}</Typography>

        <Grid container className={classes.grid}>
          {
            mockData.map(({ title, image, link }, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia image={image} className={classes.caratule} titulo="caratule" />
                  <CardContent>
                    <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                      {title}
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
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
  grid: {
    marginTop: theme.spacing(1),
  },
  card: {
    maxWidth: 348,
    minHeight: 248,
    margin: theme.spacing(3),
    borderRadius: "15px"
  },
  caratule: {
    height: 0,
    paddingTop: '56.25%',
  }
}))

export default MyWork

