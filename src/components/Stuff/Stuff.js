import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import databaseStuff_json from '../../assets/databases/StuffDatabase.json';

import SingleThing from './SingleThing/SingleThing';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '5rem',
    padding: theme.spacing.unit * 1,
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  item: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

const Stuff = props => {
  const { classes } = props;
  const databaseStuff = databaseStuff_json;

  let content = databaseStuff.map(item =>
    item.ownerID != props.currentPersonId ? (
      <SingleThing
        key={item.id}
        img={item.img}
        name={item.name}
        description={item.description}
      />
    ) : null
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
          spacing={0}
        >
          <Grid className={classes.item} item xs={12}>
            <Typography variant="h5" component="h3">
              STUFF, current person ID: {props.currentPersonId}
            </Typography>

            {content}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Stuff);
