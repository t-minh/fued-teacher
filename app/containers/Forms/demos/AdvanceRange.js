import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Star from '@material-ui/icons/Star';
import 'dan-styles/vendors/react-input-range/react-input-range.css';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  inputRange: {
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: 200
    },
    margin: `${theme.spacing.unit * 3}px 5px`,
  },
  verticalSlider: {
    display: 'flex',
    justifyContent: 'center',
    height: 300,
  },
  slider: {
    padding: '22px 0px',
  },
  thumbIconWrapper: {
    backgroundColor: '#fff',
  },
});

class RangeInput extends PureComponent {
  state = {
    valueVertical: 50,
    valueInverse: 70
  }

  handleChangeVertical = (event, valueVertical) => {
    this.setState({ valueVertical });
  };

  handleChangeInverse = (event, valueInverse) => {
    this.setState({ valueInverse });
  };

  render() {
    const { classes } = this.props;
    const { valueVertical, valueInverse } = this.state;
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
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Range Custom Thumb</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.inputRange}>
                <Slider
                  value={valueInverse}
                  aria-labelledby="slider-icon"
                  onChange={this.handleChangeInverse}
                  classes={{
                    container: classes.slider,
                    thumbIconWrapper: classes.thumbIconWrapper,
                  }}
                  thumb={<Star style={{ color: '#2196f3' }} />}
                />
              </div>
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Range Input Vertical</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.verticalSlider}>
                <Slider value={valueVertical} onChange={this.handleChangeVertical} vertical />
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

RangeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RangeInput);
