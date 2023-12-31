import { createTheme } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        gradient: {
            main: "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)"
            // main: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%);"
        },
        primary:{
            main: blue[500]
        },
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366"
        }
    }
})