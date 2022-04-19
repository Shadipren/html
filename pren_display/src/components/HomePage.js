import * as React from 'react';
import { Avatar, Container, Grid, Typography, Paper, Button, Box} from '@mui/material';
import { borderRadius, color, margin, padding } from '@mui/system';
import Image from 'material-ui-image';

import './NavBar.css';


const styles = {
    paperContainer1: {
        height: 500,
        Width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${"/static/hsluCampus2.jpg"})`,
        filter: "brightness(250%)",
        filter: "contrast(125%)",
        objectFit: 'cover',
    },

    paperContainer2: {
        height: 500,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundImage: `url(${"/static/robot.jpg"})`,
        display: "block"
    },

    paperContainer3: {
        height: 800,
        Width: 500,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${"/static/Elektro.jpg"})`,
    },
};

export default class Home extends React.Component {
    render() {
        return (
            <box maxWidth="xl" textAlign="center">
                <Grid container justifyContent="center" style={styles.paperContainer1} direction="row" spacing={1}>
                    <Typography variant= '3' className='backgroundText'
                     >Pflanzenerkennung ganz Autonom</Typography>
                </Grid>
                
                <Grid container spacing={0} row sx={{mr: 16, py: 8, my: 8}}>
                    <Grid container justifyContent='center' item xs={12} md={6}>
                        <Typography variant='h1' class='projekt-discreption' id="unser">Unser Projekt</Typography>
                        <Typography className='projekt-discreption' sx={{ fontSize: 22,
                                lineHeight: 1.6}}>
                        Ich habe immer ein Projekt, an dem ich arbeite
                        Meistens für meine Kunden. Von Zeit zu Zeit ist es
                        aber auch ein persönliches Vorhaben, das mich neue
                        Inspiration gewinnen lässt.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className="images">
                        <Paper style={styles.paperContainer2}></Paper>
                    </Grid>
                </Grid>

                <Grid container row={2}  sx={{
                    bgcolor: '#6d8a70',  color: 'white',
                    fontFamily: 'News Cycle,sans-serif',
                    mb: 9
                    }}>
                    <Grid item style={styles.paperContainer3} xs={12} md={6} sx={{gridRow: '1 / 3'}}></Grid>
                    <Grid item xs={12} md={6} sx={{pb:2}}>
                        <Typography className='liveSteam' variant='h1'
                        sx={{
                            fontWeight: '500',
                            textAlign: 'center',
                            pt: 10
                        }}>Live Stream Parcour</Typography>
                        <Button variant='zum Stream' sx={{
                            color: 'black',
                            bgcolor: 'white',
                            mt: 20,
                            mx: 10,
                            p: '16px 30px',
                            display: 'block',
                            borderRadius: 6,
                            '&:hover': {
                                background: "green",
                                color: 'white'
                            }
                        }}>zum Stream</Button>
                    </Grid>
                </Grid>

                <Grid container display={'inline-flex'} row>
                    <Grid item container justifyContent="center" justifyItems= 'center' xs={'12'}>
                        <Typography variant='h5' sx={{
                            textAlign: 'center',
                            pb: 6, m: 2,
                            fontSize: 32
                            }}>Galerie
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: 22,
                                lineHeight: 1.6,
                                color: '#323335',
                                mb: 5, p: 2, fontFamily: 'Catamaran, sans-serif'
                            }}>Sie sind neugierig auf uns und unsere Arbeit?
                            Schauen Sie sich in unserer Galerie um und bekommen Sie
                            ein Gefühl für unsere Werke und was unsere Kunden daran so fasziniert.
                            Wenn Sie nicht das finden, was Sie suchen, melden Sie sich bitte bei
                            uns - wir helfen Ihnen gerne weiter.
                        </Typography>
                        <Button variant="contained"
                            sx={{
                                color: 'white',
                                bgcolor: 'black', px: 4, py: 2.5,
                                mt: 6,  mx: 10,
                                borderRadius: 6,
                                '&:hover': {
                                    background: "green",
                                    color: 'white'
                                }
                            }}>zur Galerie
                        </Button>
                    </Grid>
                </Grid>
            </box>           
        )
    }
}