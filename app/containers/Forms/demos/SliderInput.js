import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import 'dan-styles/vendors/react-input-range/react-input-range.css';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  inputRange: {
    width: 200,
    [theme.breakpoints.down('xs')]: {
      width: 150
    },
    margin: `${theme.spacing.unit * 3}px 5px`,
  },
  slider: {
    padding: '8px 0px',
  },
});

class SliderInput extends PureComponent {
  state = {
    valueBasic: 40,
    valueStep: 3
  }

  handleChangeBasic = (event, valueBasic) => {
    this.setState({ valueBasic });
  };

  handleChangeStep = (event, valueStep) => {
    this.setState({ valueStep });
  };

  render() {
    const { classes } = this.props;
    const { valueBasic, valueStep } = this.state;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={16}
        >
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Slider Input Basic</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.inputRange}>
                <Slider value={valueBasic} aria-labelledby="label" onChange={this.handleChangeBasic} />
              </div>
            </FormControl>
          </Grid>
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Slider with steps</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.inputRange}>
                <Slider value={valueStep} min={0} max={6} step={1} onChange={this.handleChangeStep} />
              </div>
            </FormControl>
          </Grid>
          <Grid
            item
            md={4}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Slider Input Disabled</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.inputRange}>
                <Slider classes={{ container: classes.slider }} value={0} disabled />
                <Slider classes={{ container: classes.slider }} value={50} disabled />
                <Slider classes={{ container: classes.slider }} value={100} disabled />
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SliderInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderInput);
