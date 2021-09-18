import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

const dataTimeline = [
  {
    time: '11:20',
    title: 'Update homeworks',
    desc: 'Assign new organic chemistry for class 7A1'
  },
  {
    time: 'Yesteray',
    title: 'Video lectures',
    desc: 'Record detail video about atomic and explain difficult exercises.'
  },
  {
    time: 'Yesterday',
    title: '60 minutes test',
    desc: 'Assign new 60 minutes test for student to practice'
  },
  {
    time: '05 Sept 2021',
    title: 'Teachers meeting',
    desc: 'Meeting with chemistry teachers at 11:00PM.'
  },
  {
    time: 'Last week',
    title: 'Check the 15 minutes test',
    desc: 'Mark and upload scores for class 8A2'
  },
];

class TimelineWidget extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <PapperBlock whiteBg noMargin title="Recent Activity" icon="ios-time-outline" desc="">
        <div className={classes.activityWrap}>
          <List>
            {dataTimeline.map((item, index) => (
              <ListItem key={index.toString()} className={classes.activityList}>
                <ListItemIcon>
                  <div className={classes.timeDot}>
                    <time>{item.time}</time>
                    <span />
                  </div>
                </ListItemIcon>
                <ListItemText primary={item.title} className={classes.activityText} secondary={item.desc} />
              </ListItem>
            ))}
          </List>
        </div>
      </PapperBlock>
    );
  }
}

TimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimelineWidget);
