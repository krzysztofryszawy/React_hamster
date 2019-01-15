import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { CurrentSettingsConsumer } from '../../context/CurrentSettings.context';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '5rem',
    padding: theme.spacing.unit * 3,
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
});

const Help = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={24}
        >
          <Grid className={classes.item} item sm={6} xs={12}>
            <Typography variant="h5" component="h3">
              HELP
            </Typography>
            <Typography component="p">
              Place for future development. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nobis harum dolorum perspiciatis
              fugiat eaque dolores cupiditate laborum quam facilis rem ducimus
              doloribus facere soluta repellendus, culpa atque unde voluptatum
              quasi incidunt? Laudantium amet inventore aliquid reprehenderit
              iusto facere, atque tempore.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Help);
