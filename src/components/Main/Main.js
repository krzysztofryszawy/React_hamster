import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import databaseStuff_json from '../../assets/databases/StuffDatabase.json';
import SingleThing from '../Stuff/SingleThing/SingleThing';
import axios from '../../axios-instance';
import Spinner from '../Spinner/Spinner';

const styles = theme => ({
  root: {
    // background: 'linear-gradient(to right, #ece9e6, #ffffff)',
    overflow: 'hidden',
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

class Main extends Component {
  componentDidMount() {
    this.getStuffHandler();
  }

  state = {
    currentThing: {
      id: 17,
      category: 'car',
      name: 'Opel Astra DWR5572',
      ownerID: 2433945780010472,
      description: 'DATA SAVED ON FIREBASE',
      img: 'opelastra'
    },
    databaseStuffNEW: []
  };

  saveThingHandler = () => {
    axios
      .put(`/Stuff/${this.state.currentThing.id}.json`, this.state.currentThing)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getStuffHandler = () => {
    this.setState({ loading: true });
    axios
      .get(`/Stuff.json`)
      .then(response => {
        this.setState({ databaseStuffNEW: response.data, loading: false });
        // console.log('getStuffHandler // response  ', databaseStuffNEW);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;

    // let databaseStuff = Object.values(databaseStuff_json[0]);
    // console.table(databaseStuff);

    // console.log(Object.values(this.state.databaseStuffNEW));
    let content = Object.values(this.state.databaseStuffNEW).map(item =>
      item.ownerID == this.props.currentPersonId ? (
        <SingleThing
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          description={item.description}
        />
      ) : null
    );

    // console.log('content', content);
    // console.log('databaseStuffNEW', this.state.databaseStuffNEW);

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
            {/* <button onClick={this.saveThingHandler}>SAVE THING</button> */}
            {/* <button onClick={this.getStuffHandler}>LOAD ALL STUFF</button> */}
            <Grid className={classes.item} item sm={6} xs={12}>
              <Typography gutterBottom variant="h5" component="h5">
                Welcome to Hamster App.
              </Typography>
            </Grid>
            <Grid className={classes.item} item sm={6} xs={12}>
              <Typography variant="h5" component="h3">
                Your treasures list below. (alpha ☕)
              </Typography>
              <Typography component="p">
                Check if someone offers you anything to exchange
              </Typography>
            </Grid>
          </Grid>
          {this.state.loading ? <Spinner /> : content}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);
