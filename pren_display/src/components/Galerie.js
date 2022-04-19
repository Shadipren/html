import * as React from "react";
import {
  Box, ImageList, Grid, ImageListItemBar, ListSubheader,
  IconButton, createTheme, ThemeProvider, ImageListItem, 
  imageListItemClasses, Typography
 } from "@mui/material";



const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 360,
      bigMobile: 414,
      tablet: 600,
      desktop: 1024,
    }
  }
});

export default function TitlebarImageList() {
  return (
    <ThemeProvider theme={theme}  sx= {{textAlign: 'center'}}>
       <Typography display= "block" align="center" sx={{textDecorationStyle: 'double', textDecorationLine: "underline", fontSize: 45, fontStretch: 'expanded', fontWeight: 700, p: 4, m: 4, mb: 0, pb: 2}}>Unsere Arbeiten</Typography>
      <Box container xs={'12'} md={'4'}
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
          <Grid container item justifyContent={'center'} justifyItems={'center'}>
            {itemData.map((item) => (
                  <ImageListItem container key={item.img} sx={{m: 3}}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}
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
    img: "./static/logo.png",
    title: "Pfalnze",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze"
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze"
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze",
    cols: 2
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze",
    cols: 2
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze",
    rows: 2,
    cols: 2,
    featured: true
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze"
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze",
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze",
    rows: 2,
    cols: 2
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze"
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze"
  },
  {
    img: "./static/logo.png",
    title: "Pfalnze",
    cols: 2
  }
];
