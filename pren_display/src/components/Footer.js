import { Box, Typography } from "@mui/material";



const Footer = (props) => {
    return (<>
        <Box sx={{position: "fixed", bottom: 0, height: "5vh", width: "100vw", borderTop: 1, borderColor: '#d2d2d9', backgroundColor:"white"  }} component="footer">
            <Typography className="footerTypo" sx={{pt:"5px"}} fontWeight="light" variant="h6" align="center" gutterBottom>
                <span>Test Person 1</span>
                <span>Test Person 2</span>
                <span>Test Person 3</span>
                <span>Test Person 4</span>
                <span>Test Person 5</span>
                <span>Test Person 6</span>
            </Typography>
        </Box>
    </>)
}


export default Footer;