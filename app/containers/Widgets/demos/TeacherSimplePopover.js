import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
    textAlign: 'center'
  },
  button: {
    // margin: theme.spacing.unit,
  },
});

class SimplePopover extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      // <div>
        <Grid
          alignItems="center"
          justify="center"
        >
            <Button className={classes.button} onClick={this.handleClick} variant="outlined" style={{ border: '2px solid white', color: 'white'}}>
              Start Class
            </Button> 
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Typography className={classes.typography} variant="h6" component="h6">Start class success</Typography>
            </Popover>
        </Grid>
    );
  }
}

SimplePopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopover);