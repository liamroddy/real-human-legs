import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import * as images from './images';

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

export default MainArticleContent;
