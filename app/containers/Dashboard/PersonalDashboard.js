import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  SliderWidget,
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
  CounterChartWidget,
  PapperBlock,
  CalculatorWidget
} from 'dan-components';
import { HorizontalBar } from 'react-chartjs-2';
import LineSimple from './LineSimple';
import styles from './dashboard-jss';
import BarHorizontal from './BarHorizontal';

class PersonalDashboard extends PureComponent {
  render() {
    const title = brand.name + ' - Teacher Dashboard';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        {/* 1st Section */}

        <Grid container className={classes.root}>
          <CounterChartWidget />
        </Grid>

        <Divider className={classes.divider} />
        {/* 2nd Section */}
        {/* <Grid container spacing={24} className={classes.root}> */}
        {/* <Grid item xs={12}> */}
        {/* <PerformanceChartWidget /> */}
        {/* </Grid> */}
        {/* </Grid> */}
        <PapperBlock icon="ios-analytics-outline" title="Line Chart" desc="" overflowX>
          <div>
            {/* <LineSimple /> */}
            <BarHorizontal />
            {/* <SourceReader componentName={docSrc + 'LineSimple.js'} /> */}
          </div>
        </PapperBlock>
        {/* 3rd Section */}
        <Grid container spacing={24} className={classes.root}>
          <Grid item md={6} xs={12}>
            <Divider className={classes.divider} />
            <ContactWidget />
            <Divider className={classes.divider} />
            <TaskWidget />
          </Grid>
          <Grid item md={6} xs={12}>
            <Hidden mdDown>
              <Divider className={classes.divider} />
            </Hidden>
            {/* <WeatherWidget /> */}
            <Divider className={classes.divider} />
            <DateWidget />
            <Divider className={classes.divider} />
            <TimelineWidget />
            <Divider className={classes.divider} />
            <CalculatorWidget />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        {/* <FilesWidget /> */}
      </div>
    );
  }
}

PersonalDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalDashboard);
