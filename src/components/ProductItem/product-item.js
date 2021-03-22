import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 345,
      margin: '10px 20px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));


function ProductItem ({ product }) {

    const classes = useStyles();

    return (
        <Card className={classes.root} key={product.id}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.thumbnail}
                    title="Paella dish"
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
                
            </CardActions>
        </Card>
    )
}

export default ProductItem;
