
import React from 'react';

import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line';

import { ORANGE } from '../../../styles/colors/Colors';
import Section from '../../../components/section/Section';
import { Title } from '../../../styles/componet/ComponentStyles';
import TECHS from '../../../constants/techs/TechsExperience';

export default function Techs() {
  return (
    <Wrapper>
      <Section>
        <CustomTitle>Techs</CustomTitle>
        <ResponsiveLine
          enablePoints={ true }
          data={ TECHS }
          margin={{ 
            top: 20, 
            right: 20,
            bottom: 90, 
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
  height: 400px;
  margin-bottom: 20px;

  & > div > div:last-child {
    width: 100%;
    height: 400px;
    align-items: center;
  }
`;

const CustomTitle = styled(Title)`
  align-self: flex-start;
  margin-bottom: 10px;
`;
