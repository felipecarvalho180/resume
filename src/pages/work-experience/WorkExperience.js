
import React from 'react';

import Card from '../../components/card/Card';
import Experience from '../../constants/experience/ExperienceConstants';
import Section from '../../components/section/Section';

export default function WorkExperience() {
  return (
    <Section title='Work Experience'>
      { Experience.map(e => (
        <Card 
          key={ e.timeLapsed }
          { ...e }
        />
      )) }
    </Section>
  );
};