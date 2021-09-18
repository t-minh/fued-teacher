import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import IconInfographicTeacher from './IconInfographicTeacher';
import ChartInfographicTeacher from './ChartInfographicTeacher';

class Infographics extends React.Component {
  render() {
    const title = brand.name + ' - Teacher Class';
    const description = brand.desc;
    const docSrc = 'containers/Widgets/demos/';
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
        <PapperBlock title="Grade 7" whiteBg icon="ios-information-circle-outline" desc="The classes you are in charge of">
          <div>
            <IconInfographicTeacher />
            {/* <SourceReader componentName={docSrc + 'IconInfographic.js'} /> */}
          </div>
        </PapperBlock>
        <PapperBlock title="Grade 8" whiteBg icon="ios-analytics-outline" desc="The classes you are in charge of">
          <div>
            <ChartInfographicTeacher />
            {/* <SourceReader componentName={docSrc + 'ChartInfographic.js'} /> */}
          </div>
        </PapperBlock>
        {/* <PapperBlock title="Advanced" whiteBg icon="ios-stats-outline" desc="It's another design of this widget. Put any resume data, updates, or statistic information here as well">
          <div>
            <AdvancedInfographic />
            <SourceReader componentName={docSrc + 'AdvancedInfographic.js'} />
          </div>
        </PapperBlock> */}
      </div>
    );
  }
}

export default Infographics;
