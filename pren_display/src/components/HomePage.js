import { blue } from '@mui/material/colors';
import React from 'react';
import { Avatar, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Paper, Button } from '@mui/material';


import Hslu from '../images/hsluCampus1.jpg';
import Robot from '../images/robot.jpg'; import Robot2 from '../images/Elektro.jpg';
import './NavBar.css';
import { borderRadius, color, margin, padding } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

const styles = {
    paperContainer1: {
        height: 500,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${Hslu})`,
        filter: "brightness(45%)",
        filter: "contrast(80%)"
    },

    paperContainer2: {
        height: 500,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${Robot})`,
    },

    paperContainer3: {
        height: 800,
        Width: 500,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${Robot2})`,
    },
};

export default class Home extends React.Component {
    render() {
        return (
            <box maxWidth="xl">
                <Grid style={styles.paperContainer1} direction="row" spacing={1}>
                    <Typography variant= '3' className='backgroundText'>Pflanzenerkennung ganz Autonom</Typography>
                    <Typography variant="overline" className='titleSpan'>Loerm Ipsum</Typography>
                </Grid>
                <Grid container spacing={0} row sx={{mr: 16, py: 8, my: 8}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h1' class='projekt-discreption'>Unser Projekt</Typography>
                        <Typography className='projekt-discreption'>
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

                <Grid container gridRow={2}  sx={{
                    bgcolor: '#6d8a70',  color: 'white',
                    fontFamily: 'News Cycle,sans-serif',
                    mb: 9
                    }}>
                    <Grid item style={styles.paperContainer3} xs={12} md={6} sx={{gridRow: '1 / 3'}}></Grid>
                    <Grid item xs={12} md={6} sx={{pb:2}}>
                        <Typography varaint="h1"
                        sx={{
                            fontSize: 34,
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

                <box container display="block">
                    <Typography variant='h5' sx={{
                    textAlign: 'center',
                    pb: 6,
                    m: 2,
                }}>Galerie</Typography>
                    <Typography  sx={{
                        textAlign: 'center',
                        fontSize: 22,
                        lineHeight: 1.6,
                        color: '#323335', fontWeight: 'bold',
                        mx: 20, mb: 5, fontFamily: 'Catamaran, sans-serif'
                    }}>Sie sind neugierig auf uns und unsere Arbeit?
                        Schauen Sie sich in unserer Galerie um und bekommen Sie
                        ein Gefühl für unsere Werke und was unsere Kunden daran so fasziniert.
                        Wenn Sie nicht das finden, was Sie suchen, melden Sie sich bitte bei
                        uns - wir helfen Ihnen gerne weiter.
                    </Typography>
                </box>
            </box>           
        )
    }
}