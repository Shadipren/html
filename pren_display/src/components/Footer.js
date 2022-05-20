import { Box, Typography, Grid} from "@mui/material";

const Footer = (props) => {
    return (<>
        <Box  sx={{position: 'fixed', bottom: 0, height: "auto", width: "100vw", borderTop: 1, borderColor: '#d2d2d9', backgroundColor:"#eeeeee"  }} component="footer">
            <Grid container marginX={2} paddingX={2}>
                <Grid item xs={12} lg={3}>
                    <Typography className="footerTypo" sx={{pt:"10px"}} fontWeight="light" align="center" gutterBottom>Marvin Schlüssel</Typography>
                    <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" align="center" gutterBottom>Gabriel Waldvogel</Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" align="center" gutterBottom>Andrin Witschi</Typography>
                    <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" align="center" gutterBottom>Manuel Roos</Typography>
                    <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" align="center" gutterBottom>Corsin Kirchhofer</Typography>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" align="center" gutterBottom>Giulio Meuli</Typography>
                    <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" align="center" gutterBottom>Shadi Omar</Typography>
                </Grid>
            </Grid>
        </Box>
    </>)
}

export default Footer;