import { Box, Typography } from "@mui/material";



const Footer = (props) => {
    return (<>
        <Box sx={{position: "fixed", bottom: 0, height: "5vh", width: "100vw", borderTop: 1, borderColor: '#d2d2d9', backgroundColor:"#e0e0e0"  }} component="footer">
            <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" variant="h6" align="center" gutterBottom>

                <span>Giulio Meuli</span>
                <span>Gabriel Waldvogel</span>
                <span>Marvin Schlüssel</span>
                <span>Manuel Roos</span>
                <span>Shadi Omar</span>
                <span>Corsin Kirchhofer</span>
                <span>Andrin Witschi</span>
            </Typography>
        </Box>
    </>)
}


export default Footer;