import React from 'react';
import PropTypes from 'prop-types';
import {
  XYPlot, VerticalBarSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, ChartLabel, DiscreteColorLegend,
} from 'react-vis';

import 'react-vis/dist/styles/legends.scss';

function BarChart({ data, title }) {
  if (data.length === 0) {
    return (
      <div>
        No data available for
        {' '}
        {title}
        .
      </div>
    );
  }

  const chartData = data.map((point, index) => ({
    x: index,
    y: point[1],
  }));

  const xLabels = data.map((point, index) => ({
    x: index,
    label: point[0],
  }));

  return (
    <div>
      <XYPlot width={300} height={300} xType="linear" style={{ overflow: 'visible' }}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="" tickValues={xLabels.map((item) => item.x)} tickFormat={(v) => xLabels[v]?.label} />
        <YAxis title="" />
        <ChartLabel
          text={title}
          includeMargin={false}
          xPercent={0.5}
          yPercent={0} // Adjust this value to move the title above the bars
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        />
        <VerticalBarSeries data={chartData} barWidth={0.3} />
        <DiscreteColorLegend items={[{ title, color: 'rgba(75,192,192,1)' }]} />
      </XYPlot>
    </div>
  );
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
  title: PropTypes.string.isRequired,
};

export default BarChart;
