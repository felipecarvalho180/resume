
import React from 'react';

import Card from '../../components/card/Card';
import Degree from '../../constants/degree/Degree';
import Section from '../../components/section/Section';

export default function Education() {
  return (
    <Section title='Education'>
      { Degree.map(d => (
        <Card 
          key={ d.timeLapsed }
          { ...d }
        />
      )) }
    </Section>
  );
};