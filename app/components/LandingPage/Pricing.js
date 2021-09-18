import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PricingCard from '../CardPaper/PricingCard';
import Title from './Title';
import styles from './landingStyle-jss';

class Pricing extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.pricing}>
        <div className={slideMode ? classes.fullWidth : classes.container}>
          <Title title="Pricing" desc="Find a plans that's right for you." align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={40}>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="SMALL PLAN"
                price="$2,100"
                number_user="500 - 1,000 users"
                tier="free"
                feature={['Student assessment records', 'Resources management', 'Create quizzes and tests']}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="MEDIUM PLAN"
                price="$2,750"
                number_user="1,001 - 1,500 users"
                tier="cheap"
                feature={['Courses management', 'Automatic analysis', 'Create quizzes and tests', 'AI-assisted navigation']}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="LARGE PLAN"
                price="$3,300"
                number_user="1,501 - 2,000 users"
                tier="expensive"
                feature={['Analyze student\'s emotion', 'Automatic analysis & management', 'Cheating detection', 'AI-assisted navigation', 'AI chatbox', 'Recommend the orientation']}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Pricing.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Pricing);
