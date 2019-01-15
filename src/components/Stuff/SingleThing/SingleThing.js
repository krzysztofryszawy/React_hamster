import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '.5rem',
    width: '100%'
  },
  details: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    // flex: '1 0 auto'
  },
  cover: {
    width: 250
  }
});

function SingleThing(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.description.substr(0, 50) + '...'}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={require(`../../../assets/images/${props.img.toLowerCase()}.jpg`)}
        title="Live from space album cover"
      />
    </Card>
  );
}

export default withStyles(styles, { withTheme: true })(SingleThing);
