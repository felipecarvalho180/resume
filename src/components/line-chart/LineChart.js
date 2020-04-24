
import React from 'react';

import Chart from 'react-apexcharts';
import propTypes from 'prop-types';
import styled from 'styled-components';

export default function LineChart({
  series,
  options,
}) {
  return (
    <LineChartWrapper 
      type='line'
      series={ series }
      options={ options }  
    />
  );
};

const LineChartWrapper = styled(Chart)`
  max-width: 660px;
`;

LineChart.propTypes = {
  series: propTypes.array,
  options: propTypes.object,
};