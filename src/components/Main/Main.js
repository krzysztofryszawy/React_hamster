import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import databaseStuff_json from '../../assets/databases/StuffDatabase.json';
import SingleThing from '../Stuff/SingleThing/SingleThing';

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

const Main = props => {
  const { classes } = props;
  const databaseStuff = databaseStuff_json;

  let content = databaseStuff.map(item =>
    item.ownerID == props.currentPersonId ? (
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
          justify="space-between"
          alignItems="stretch"
          spacing={24}
        >
          <Grid className={classes.item} item sm={6} xs={12}>
            <Typography gutterBottom variant="h6" component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              similique nulla rem neque nisi perferendis quis est beatae nihil
              molestias! Perspiciatis, aperiam aut vitae ab, atque sint
              blanditiis id quod culpa possimus sequi sapiente maxime neque.
              Voluptates tempore dolor fuga quis voluptatem minus quasi
              perspiciatis. Officiis molestias dolores doloremque reiciendis?
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={6} xs={12}>
            <Typography variant="h5" component="h3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
              similique nulla rem neque nisi perferendis quis est beatae nihil
              molestias! Perspiciatis, aperiam aut vitae ab, atque sint
              blanditiis id quod culpa possimus sequi sapiente maxime neque.
              Voluptates tempore dolor fuga quis voluptatem minus quasi
              perspiciatis. Officiis molestias dolores doloremque reiciendis?
              (alpha ☕)
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
        {content}
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Main);
