import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio

      </SectionTitle>
      <SectionText>
        I am a computer science student at the University of Alberta. I love to create full stack applications and learn about new technologies.
      </SectionText>

      <Button onClick={() => window.location = '#projects'}>Learn More</Button>

    </LeftSection>
  </Section>
);

export default Hero;