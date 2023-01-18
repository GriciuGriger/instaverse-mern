import React from 'react'
import useStyles from './styles.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.js';
import moment from 'moment';


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => {setCurrentId(post._id)}}>
                        <MoreHoriz fontSize="medium"/>
                    </Button>
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom={true}>{post.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
                </div>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                        <ThumbUpAlt fontSize="small" />
                        &nbsp; Like &nbsp;
                        {post.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                        <Delete fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
        </Card>
    )
}

export default Post;
