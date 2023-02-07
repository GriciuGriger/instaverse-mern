import { makeStyles } from "@material-ui/core/styles/index.js";

export default makeStyles((theme) => ({
  
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    }
}))