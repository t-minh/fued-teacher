import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import colorfull from 'dan-api/palette/colorfull';
import { CounterWidget } from 'dan-components';
import styles from 'dan-components/Widget/widget-jss';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import TeacherSimplePopover from './demos/TeacherSimplePopover'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

class IconInfographicTeacher extends React.Component {
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
      <div className={classes.rootCounterFull}>
        <Grid container spacing={16}>
          <Grid item xs={8} md={4}>
            <CounterWidget
              color={colorfull[0]}
              start={0}
              end={40}
              duration={3}
              title="7A"
            >
              {/* <OndemandVideo className={classes.counterIcon} /> */}
             
              {/* <TeacherSimplePopover/> */}
                {/* <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Start Class</NavLink> */}
              <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
               <Button className={classes.button} onClick={this.handleClick} variant="outlined" style={{ border: '2px solid white', color: 'white'}}>
                {/* <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white' }}>Discussion</NavLink> */}
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
              <Typography className={classes.typography} variant="h6" component="h6" style={{ padding: '10px'}}>Start class success</Typography>
            </Popover>
              {/* </Button> */}
            </CounterWidget>
            </Grid>
          <Grid item xs={8} md={4}>
            <CounterWidget
              color={colorfull[1]}
              start={0}
              end={39} 
              duration={3}
              title="7B"
            >
              {/* <SupervisorAccount className={classes.counterIcon} /> */}
              {/* <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white' }}>Discussion</NavLink>
              </Button>
              <Button variant="outlined" style={{ border: '2px solid white', marginLeft: '10px'  }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Start Class</NavLink>
              </Button> */}

<Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
               <Button className={classes.button} onClick={this.handleClick} variant="outlined" style={{ border: '2px solid white', color: 'white'}}>
                {/* <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white' }}>Discussion</NavLink> */}
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
              <Typography className={classes.typography} variant="h6" component="h6" style={{ padding: '10px'}}>Start class success</Typography>
            </Popover>
            </CounterWidget>
          </Grid>
          <Grid item xs={8} md={4}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={42}
              duration={3}
              title="7C"
            >
              {/* <Edit className={classes.counterIcon} /> */}
              {/* <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white' }}>Discussion</NavLink>
              </Button>
              <Button variant="outlined" style={{ border: '2px solid white', marginLeft: '10px'  }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Start Class</NavLink>
              </Button> */}
              <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
               <Button className={classes.button} onClick={this.handleClick} variant="outlined" style={{ border: '2px solid white', color: 'white'}}>
                {/* <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white' }}>Discussion</NavLink> */}
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
              <Typography className={classes.typography} variant="h6" component="h6" style={{ padding: '10px'}}>Start class success</Typography>
            </Popover>
            </CounterWidget>
          </Grid>
          {/* <Grid item xs={6} md={3}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={43}
              duration={3}
              title="7D"
            > */}
              {/* <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Start Class</NavLink>
              </Button> */}
              {/* <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
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
              <Typography className={classes.typography} variant="h6" component="h6" style={{ padding: '10px'}}>Start class success</Typography>
            </Popover>
            </CounterWidget>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

IconInfographicTeacher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconInfographicTeacher);
