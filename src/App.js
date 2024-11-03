import React from 'react';

import { Container, useMediaQuery, useTheme, CssBaseline, Grid, Paper } from '@mui/material';
import MainArticleContent from './MainArticleContent';

import * as images from './images';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function MainArticle() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid className="doctor-top-container" item xs={3} md={4}>
          <img className='doctor-top-image' src={images.doctorTopImage} alt="A very trustworthy and not at all shady-looking doctor, photographed from the waist up, emerging from below text box." />          
        </Grid>
        <Grid className="site-title" xs={9} md={8}>
          <div className="top-quote">
            <h1>Real Human Legs</h1>
            <p>at prices that won't cost you an arm!</p>
            <p className='quote-signature'>- Doctor Jeff</p>
          </div>
        </Grid>

        <Grid item xs={12} spacing={24}>
          <Paper className='main-article-paper' >
            <MainArticleContent />
          </Paper>
        </Grid>

        <Grid className="doctor-legs" item xs={3} md={4}>
          <img className='doctor-legs-image' src={images.doctorLegsImage} alt="Doctor" />
        </Grid>
        <Grid className="empty-spacer" xs={9} md={8}>
        <footer>
            <p>© 2024 Real Human Legs. Several rights reserved.
            <br></br>Website designed by Liam Roddy, who does not condone the buying and selling of legs.
            <br></br>View source code on <a href="https://github.com/liamroddy/real-human-legs">Github</a>.</p>
          </footer>
        </Grid>
      </Grid>
    </div>
  
  );
}

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  return (
    <>
      <CssBaseline />
      <Container style={{ paddingLeft: matches ? '8%' : '2%', paddingRight: matches ? '8%' : '2%' }}>
        <MainArticle />
      </Container>
    </>
  );
}

export default App;