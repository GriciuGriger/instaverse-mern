import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import usestyles from './styles.js';

import instaverse from './images/instaverse.png'

const App = () => {
    const classses = usestyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts)
    }, [dispatch])

    return (
       <Container maxWidth="lg">
            <AppBar className={classses.addBar} position="static" color="inherit">
                <Typography className={classses.heading} variant="h2" align="center">Instaverse</Typography>
                <img className={classses.image} src={instaverse} alt="instaverse" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    );
}

export default App;