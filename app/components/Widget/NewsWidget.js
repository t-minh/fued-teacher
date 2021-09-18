import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import imgApi from 'dan-api/images/photos';
import NewsCard from '../CardPaper/NewsCard';
import styles from './widget-jss';
import Quote2 from '../../api/images/Quote2.jpg';
import Quote3 from '../../api/images/Quote3.jpg';
import Quote4 from '../../api/images/Quote4.jpg';
import Quote5 from '../../api/images/Quote5.jpg';
import Quote6 from '../../api/images/Quote6.jpg';

const slideData = [
  {
    label: '“Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.”',
    imgPath: Quote2,
    desc: 'Unknown.'
  },
  {
    label: '“Nobody can go back and start a new beginning, but anyone can start today and make a new ending.”',
    imgPath: Quote3,
    desc: 'MARIA ROBINSON.'
  },
  {
    label: '“Don’t wish it were easier. Wish you were better.”',
    imgPath: Quote4,
    desc: 'Unknown.'
  },
  {
    label: 'Travel everytime that you have a chance',
    imgPath: Quote5,
    desc: 'Unknown.'
  },
  {
    label: '“If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.”',
    imgPath: Quote6,
    desc: 'Unknown.'
  },
];

class NewsWidget extends React.Component {
  state = {
    activeStepSwipe: 0,
  };

  handleNextSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe + 1,
    }));
  };

  handleBackSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe - 1,
    }));
  };

  handleStepChangeSwipe = activeStepSwipe => {
    this.setState({ activeStepSwipe });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStepSwipe } = this.state;

    const maxStepsSwipe = slideData.length;
    return (
      <div>
        <Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStepSwipe}
            onChangeIndex={this.handleStepChangeSwipe}
            enableMouseEvents
            className={classes.sliderWrap}
          >
            {slideData.map((slide, index) => (
              <div className={classes.figure} key={index.toString()}>
                <NewsCard
                  image={slide.imgPath}
                  title="slide.label"
                  className={classes.sliderContent}
                >
                  <Typography gutterBottom className={classes.title} variant="h6" component="h2">
                    {slide.label}
                  </Typography>
                  <Typography component="p">
                    {slide.desc}
                  </Typography>
                </NewsCard>
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            steps={maxStepsSwipe}
            position="static"
            activeStep={activeStepSwipe}
            className={classes.mobileStepper}
            nextButton={(
              <Button size="small" onClick={this.handleNextSwipe} disabled={activeStepSwipe === maxStepsSwipe - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )}
            backButton={(
              <Button size="small" onClick={this.handleBackSwipe} disabled={activeStepSwipe === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            )}
          />
        </Paper>
      </div>
    );
  }
}

NewsWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewsWidget);
