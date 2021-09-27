import logo from "./logo.svg";
import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  Container,
  CardMedia,
  CssBaseline,
  Grid,
  CardContent,
  Toolbar,
  Button,
  collapseClasses,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createStyles, makeStyles } from "@mui/styles";
import useStyles from "./styles";
import img1 from "../src/assets/img1.jpeg";
function App() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleIcon />
          <Typography variant="h6">Accounts</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.main}
            >
              Accounts Album
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined">See All Accounts</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained">One Account</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary Button</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div>
          <Container maxWidth="xl">
            <Grid container className={classes.cardGrid} spacing={4}>
              {cards.map(() => (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                  <Card className={classes.card}>
                    <CardMedia image={img1} className={classes.cardMedia} />
                    <CardContent>
                      <Typography variant="h3">Heading</Typography>
                      <Typography paragraph>This is media card</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Copyright to Rapidev Developer Fouzia Noor
        </Typography>
      </footer>
    </>
  );
}

export default App;
