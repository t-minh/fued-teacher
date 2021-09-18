import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { ToggleBtn } from './demos';
import {
  FloatingButtons,
  CustomButtons,
  ComplexButtons
} from './demos'
import StandardButtonsCopy from './demos/StandardButtonsCopy';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class ToggleButton extends React.Component {
  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'containers/Forms/demos/';
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
        {/* <PapperBlock title="Toggle Buttons" icon="ios-contrast" desc="Toggle buttons can be used to group related options.">
          <div>
            <ToggleBtn />
            <SourceReader componentName={docSrc + 'ToggleBtn.js'} />
          </div>
        </PapperBlock> */}
        <PapperBlock title="Standard Buttons" icon="ios-game-controller-a-outline" desc="Buttons communicate the action that will occur when the user touches them.">
          <div>
            <StandardButtonsCopy />
            {/* <SourceReader componentName={docSrc + 'StandardButtons.js'} /> */}
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(ToggleButton);
