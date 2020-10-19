import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="CycloForty"
        content="Customized, domain-driven software solutions."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
