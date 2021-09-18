import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import dummy from 'dan-api/dummy/dummyContents';
import imgApi from 'dan-api/images/photos';
import Webcam from 'react-webcam';
import Button from '@material-ui/core/Button';
import {
  GeneralCard,
  NewsCard,
  Quote,
  IdentityCard,
} from '../../../../components';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const styles = (theme) => ({
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardMedia: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    // paddingTop: "56.25%", // 16:9
  },
});

class StandardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCaptureEnable: false, url: '' };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  setUrl = (value) => {
    this.setState({
      url: value,
    });
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    if (imageSrc) {
      this.setUrl(imageSrc);
    }
  };

  setCaptureEnable = (value) => {
    this.setState({
      isCaptureEnable: value,
    });
  };

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={24}
      >
        <Grid item md={24}>
          <NewsCard image={imgApi[8]} title="Contemplative Reptile">
            {this.state.isCaptureEnable || (
              <Button
                onClick={() => this.setCaptureEnable(true)}
                variant="outlined"
                color="secondary"
              >
                Turn on
              </Button>
            )}
            {this.state.isCaptureEnable && (
              <>
                <div>
                  <Button
                    onClick={() => this.setCaptureEnable(false)}
                    variant="outlined"
                    color="secondary"
                  >
                    Turn off
                  </Button>
                </div>
                <Webcam
                  audio={false}
                  width={540}
                  height={360}
                  // ref={webcamRef}
                  ref={this.setRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                <Button
                  onClick={this.capture}
                  variant="outlined"
                  color="secondary"
                >
                  Capture photo
                </Button>
              </>
            )}
            {this.state.url && (
              <>
                <div>
                  <img src={this.state.url} alt="Screenshot" />
                </div>
              </>
            )}
            {/* <Typography gutterBottom variant="h4" component="h2">
                Lorem ipsum
              </Typography> */}
            <Typography component="p">
              Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor
              ligula. Proin maximus risus nunc lorem xin chao dhe dhe qeqwewqewq
            </Typography>
          </NewsCard>
        </Grid>
        {/* <Grid item md={6}>
          <Typography variant="button" className={classes.divider}>
            Quoted Card
          </Typography>
          <div>
            <GeneralCard liked={1} shared={20} commented={15}>
              <Quote
                align="left"
                content="Imagine all the people living life in peace. You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one."
                footnote="John Lennon"
              />
            </GeneralCard>
          </div>
          <div>
            <Typography variant="button" className={classes.divider}>
              Identity Card
            </Typography>
            <IdentityCard
              title="Contact and Address Card"
              name={dummy.user.name}
              avatar={dummy.user.avatar}
              phone="(+8543201213)"
              address="Town Hall Building no.45 Block C - ABC Street"
            />
          </div>
        </Grid> */}
      </Grid>
    );
  }
}

StandardCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StandardCard);
