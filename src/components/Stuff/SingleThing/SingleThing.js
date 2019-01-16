import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  container: {
    cursor: 'pointer',
    margin: '.5rem',
    width: '100%',
    transition: '.1s all ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  cardInside: {
    display: 'flex'
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
  },
  actions: {
    display: 'flex',
    alignItems: 'flex-end',
    // flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class SingleThing extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes, theme } = this.props;
    return (
      <Card className={classes.container}>
        <div className={classes.cardInside}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="body1">{this.props.name}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {this.props.description.substr(0, 50) + '...'}
              </Typography>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                  fontSize="small"
                >
                  <ExpandMoreIcon />
                </IconButton>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon fontSize="small" />
                </IconButton>
              </CardActions>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={require(`../../../assets/images/${this.props.img.toLowerCase()}.jpg`)}
            title="Live from space album cover"
          />
        </div>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>

            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>

            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SingleThing);
