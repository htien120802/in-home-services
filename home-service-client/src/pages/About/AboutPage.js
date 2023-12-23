import React from 'react';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import Work from 'components/Work/Work';
import About from 'components/About/About';
import Counter from 'components/Counter/Counter';

function AboutPage() {
  return (
    <>
      <BannerSlider title="About us" />

      <Work />
      <About />
      <Counter />
    </>
  );
}

export default AboutPage;
