import React from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import brand from 'dan-api/dummy/brand';
import { PricingCard } from 'dan-components';

class Pricing extends React.Component {
  render() {
    const title = brand.name + ' - Pricing';
    const description = brand.desc;
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
        <Grid container spacing={16}>
          <Grid item md={3} sm={6} xs={12}>
            <PricingCard
              title="Basic"
              price="$0"
              tier="free"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec']}
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <PricingCard
              title="Recomended"
              price="$24"
              tier="cheap"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec', 'Pellentesque ac bibendum', 'Vivamus sit amet']}
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <PricingCard
              title="Extended"
              price="$200"
              tier="expensive"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec', 'Pellentesque ac bibendum', 'Vivamus sit amet']}
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <PricingCard
              title="Enterprise"
              price="$600"
              tier="more-expensive"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec', 'Pellentesque ac bibendum', 'Vivamus sit amet']}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Pricing;
