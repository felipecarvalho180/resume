
import React from 'react';

import { ORANGE } from '../../styles/colors/Colors';
import LineChart from '../../components/line-chart/LineChart';
import Section from '../../components/section/Section';

export default function Techs() {
  const series = [{
    name: "HTML",
    data: [0, 0.5, 1.5, 2.5],
  }, {
    name: "CSS",
    data: [0, 0.5, 1.5, 2.5],
  }, {
    name: "JavaScript",
    data: [0, 0, 1, 2],
  }, {
    name: "React",
    data: [0, 0, 0.5, 1.5],
  }, {
    name: "React Native",
    data: [0, 0, 0, 1],
  }];

  const options = {
    legend: {
      show: false,
    },
    xaxis: {
      categories: [ 2017, 2018, 2019, 2020 ],
      labels: {
        style: {
          colors: [ ORANGE, ORANGE, ORANGE, ORANGE ],
          fontSize: '20px'
        },
      }
    }, 
    yaxis: {
      title: {
        text: "Years of Experience",
        style: {
          color: ORANGE,
          fontSize: '14px'
        }
      },
      labels: {
        style: {
          colors: [ ORANGE, ORANGE, ORANGE, ORANGE ],
          fontSize: '20px'
        },
      }
    },
  }

  return (
    <Section title='Techs'>
      <LineChart series={ series } options={ options }/>
    </Section>
  );
};