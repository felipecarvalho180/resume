
import React from 'react';

import styled, { css } from 'styled-components';
import { ResponsiveLine } from '@nivo/line'

import { ORANGE } from '../../styles/colors/Colors';
import LineChart from '../../components/line-chart/LineChart';
import Section from '../../components/section/Section';

export default function Techs() {
  const data = [{
    id: "HTML",
    data: [{
      x: 2017,
      y: 0
    }, {
      x: 2018,
      y: 0.5
    }, {
      x: 2019,
      y: 1.5
    }, {
      x: 2020,
      y: 2.5
    }],
  }, {
    id: "CSS",
    data: [{
      x: 2017,
      y: 0
    }, {
      x: 2018,
      y: 0.5
    }, {
      x: 2019,
      y: 1.5
    }, {
      x: 2020,
      y: 2.5
    }],
  }, {
    id: "JavaScript",
    data: [{
      x: 2017,
      y: 0
    }, {
      x: 2018,
      y: 0
    }, {
      x: 2019,
      y: 1
    }, {
      x: 2020,
      y: 2
    }],
  }, {
    id: "React",
    data: [{
      x: 2017,
      y: 0
    }, {
      x: 2018,
      y: 0
    }, {
      x: 2019,
      y: 0.5
    }, {
      x: 2020,
      y: 1.5
    }],
  }, {
    id: "React Native",
    data: [{
      x: 2017,
      y: 0
    }, {
      x: 2018,
      y: 0
    }, {
      x: 2019,
      y: 0
    }, {
      x: 2020,
      y: 1
    }],
  }];

  return (
    <Wrapper>
      <Section>
        <ResponsiveLine
          enablePoints={ true }
          data={data}
          margin={{ 
            top: 20, 
            right: 20,
            bottom: 30, 
            left: 50
          }}
          enableSlices='x'
          xScale={{ 
            type: 'point', 
            stacked: false 
          }}
          yScale={{ 
            type: 'linear', 
            min: 'auto', 
            max: 'auto', 
            stacked: false, 
            reverse: false
          }}
          axisTop={null}
          axisRight={null}
          curve='monotoneY'
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Years of Experience',
              legendOffset: -40,
              legendPosition: 'middle',
              tickValues: [ 0, 0.5, 1, 1.5, 2, 2.5 ]
          }}
          colors={{ scheme: 'nivo' }}
          pointSize={ 10 }
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={0}
          useMesh={true}
          theme={{
            axis: {
              legend: {
                text: { 
                  fill: ORANGE,
                  fontWeight: 'bold', 
                } 
              },
              ticks: { 
                text: { 
                  fill: ORANGE,
                  fontWeight: 'bold', 
                } 
              } 
            },
          }}
        />
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs({
  id: 'Techs'
})`
  display: flex;
  height: 400px;

  & > :first-child {
    width: 100%;
    align-items: center;
  }
`;
