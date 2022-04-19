import * as React from 'react';
import {
    ImageList, ImageListItem, ImageListItemBar,
    Box, Typography, imageListItemClasses, Grid
} from '@mui/material';
import { color, style } from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 360,
        bigMobile: 414,
        tablet: 600,
        desktop: 1024
      }
    }
});

export default function TitlebarBelowImageList() {
  return (
    <ThemeProvider theme={theme}>
      <Typography display= "block" align="center" sx={{textDecorationStyle: 'double', textDecorationLine: "underline",fontSize: 45, fontStretch: 'expanded', fontWeight: 700, p: 4, m: 4}}>Team 28</Typography>
      <Box container textAlign= "center" xs={'12'} md={'4'}
        sx={{
            backgroundColor: "white",
            display: "inline-block",
            m:2, p: 2,
            gridTemplateColumns: {
                mobile: "repeat(1, 1fr)",
                bigMobile: "repeat(2, 1fr)",
                tablet: "repeat(3, 1fr)",
                desktop: "repeat(4, 1fr)"
            },
            [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
            }
        }}
      >
        <Grid container row>
          <Grid item container justifyItems={'center'} justifyContent={'center'}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} container sx={{m: 3}}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar sx={{ml: 2}}
                    title={<Typography sx={{
                        color: "black", fontWeight: 600, fontSize: 28, fontFamily: " Arial"
                    }}> {item.title} </Typography>}
                    subtitle= {<Typography>{item.Beruf}</Typography>}
                    position="below"
                />
                </ImageListItem>
            ))}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    );
}

const itemData = [
  {
    img: './static/team-fotos/Giulio.jpg',
    title: 'Giulio Meuli',
    Beruf: 'Projektleitung / Maschineningenieur',
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img:  './static/team-fotos/Gabriel.jpg',
    title: 'Gabriel Waldvogel',
    Beruf: 'Maschineningenieur'
  },
  {
    img: './static/team-fotos/Marvin.jpg',
    title: 'Marvin Schlüssel',
    Beruf: 'Elektrotechnik / Programmierung'
  },
  {
    img: './static/team-fotos/Manuel.jpg',
    title: 'Manuel Roos',
    Beruf: 'Elektrotechnik / Programmierung',
    cols: 2
  },
  {
    img: './static/team-fotos/Shadi.jpg',
    title: 'Shadi Omar',
    Beruf: 'Webtechnologie / Programmierung',
    cols: 2,
  },
  
  {
    img: './static/team-fotos/Corsin.jpg',
    title: 'Corsin Kirchhofer',
    Beruf: 'Softwareentwicklung / Machine Learning',
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: './static/team-fotos/Andrin.jpg',
    title: 'Andrin Witschi',
    Beruf: 'Softwareentwicklung / Computer Vision'
  }
];
