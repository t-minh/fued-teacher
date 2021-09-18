import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Ionicon from 'react-ionicons';
import Title from './Title';
import styles from './landingStyle-jss';

let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

class Feature extends React.Component {
  state = {
    featureList: [
      createFeatureData('ios-infinite-outline', 'Analyze student\'s concentration and attitude', 'We use student’ camera to analyze concentration, attitude, and interaction during the study time and give the data for teachers to improving.'),
      createFeatureData('ios-flower-outline', 'Analyze data and automatically give an overview', 'Data of students such as scores, exercises, quizzes will be analyzed to give an overall observation and recommend the orientation for each student.'),
      createFeatureData('ios-ionic-outline', 'Create student assessment records & resources management', 'Interacting between teachers, students and parents.')
    ]
  }

  render() {
    const { classes, slideMode } = this.props;
    const { featureList } = this.state;
    return (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="Main Feature" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={40}>
            { featureList.map(item => (
              <Grid key={item.id.toString()} item xs={12} md={4}>
                <Typography component="h4" variant="h6">
                  <span className={classes.icon}>
                    <Ionicon icon={item.icon} />
                  </span>
                  {item.title}
                </Typography>
                <Typography className={slideMode ? classes.colorWhite : ''}>
                  {item.desc}
                </Typography>
              </Grid>
            )) }
          </Grid>
        </div>
      </div>
    );
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Feature);
