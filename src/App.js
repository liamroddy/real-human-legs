import React from 'react';

import { Container, useMediaQuery, useTheme, CssBaseline, Grid, Paper, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import * as images from './images';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function ArticleSection({imageUri, imageAlt, sectionHeading, sectionText}) {
  return (
    <Grid item xs={6} xl={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={imageAlt}
            height="50%"
            image={imageUri}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {sectionHeading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {sectionText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function MainArticleContent() {
  return (
    <Grid container spacing={3}>
      <ArticleSection 
        sectionHeading="Need Legs?"
        sectionText={<>
                      <p>Do you have trouble reaching high shelves? Do you have two left feet, or none or at all? Or do you maybe just want a change of pace?</p>
                      <p>Well you've come to the right site! </p>
                      <p>Here at Doctor Jeff's Real Human Legs clinic we have available a wide range of new and pre-owned <a href="https://en.wikipedia.org/wiki/Leg">legs</a> in various lengths, colours and degrees of hairiness.</p>
                    </>}
        imageUri={images.peopleInCircleDiscussingLegsImage}
        imageAlt="A group of people gathered in a circle, happily discussing legs."/>

      <ArticleSection
        sectionHeading="Sounds Kinda Dodgy..."
        sectionText={<>
                      <p>People often ask us:</p>
                      <ul>
                        <li>Is this legal?</li>
                        <li>Is this ethical?</li>
                        <li>Where are you getting these legs from?</li>
                      </ul>
                      <p>The answer to all these questions is <strong>YES!</strong></p></>}
        imageUri={images.talkingToDoctorImage}
        imageAlt={"A person talking to a doctor about their leg options."}/>

      <ArticleSection
        sectionHeading="Who is Doctor Jeff?"
        sectionText={<>
                      <p>Doctor Jeff is a medically aware person dedicated to getting you the best deal he can on legs!</p>                           
                      <p>To show how dedicated he is to this noble task he even legally had his first name changed to Doctor!</p></>}
        imageUri={images.doctorJeffImage}
        imageAlt={"Doctor Jeff"}/>

      <ArticleSection
        sectionHeading="Where are We Based?"
        sectionText={<>
                      <p>Our clinic is based right in the heart of Galway City.
                      <br></br>Your surgery, meanwhile, will be performed in the heart of a small fishing vessel fifteen kilometres offshore.</p>                           
                      <p>Our services are not recommended for patients with seafood allergies.</p></>}
        imageUri={images.surgeonOnBoatImage}
        imageAlt={"Doctor Jeff"}/>
    </Grid>
            
  );
}

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