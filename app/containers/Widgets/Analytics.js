import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { SourceReader, PapperBlock } from 'dan-components';
import { InsetDivider } from 'dan-components/Divider';
import {
  PerformanceAnalytic, SalesAnalytic, TradingAnalytic, DateTimeStatus
} from './demos';
import EditableCellTeacherAssessment from './EditableCellTeacherAssessment';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 640
  }
};

class Analytics extends React.Component {
  render() {
    const title = brand.name + ' - Widgets';
    const description = brand.desc;
    const docSrc = 'containers/Widgets/demos/';
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
        <Grid container spacing={24}>
          <Grid item md={12} xs={12}>
            <PapperBlock title="Date & Time" icon="ios-clock-outline" desc="Show current time in analog and digital format, and also current date with calendar">
              <div className={classes.miniWrap}>
                <DateTimeStatus />
                {/* <SourceReader componentName={docSrc + 'DateTimeStatus.js'} /> */}
              </div>
            </PapperBlock>
            <PapperBlock whiteBg icon="ios-create-outline" title="Create Assessments" desc="Create or edit your assessment and see the statistic.">
              <div className={classes.root}>
                <EditableCellTeacherAssessment />
                {/* <SourceReader componentName={docSrc + 'EditableCellDemo.js'} /> */}
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        {/* <PerformanceAnalytic />
        <SourceReader componentName={docSrc + 'PerformanceAnalytic.js'} />
        <InsetDivider />
        <SalesAnalytic />
        <SourceReader componentName={docSrc + 'SalesAnalytic.js'} />
        <InsetDivider />
        <TradingAnalytic />
        <SourceReader componentName={docSrc + 'TradingAnalytic.js'} /> */}
      </div>
    );
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Analytics);
