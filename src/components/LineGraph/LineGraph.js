import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import Dictionary from '../../constants/Dictionary';
import { URL, tails } from '../../constants/api';
import { options, graphColors } from '../../constants/graphSettings';
 
function LineGraph({ casesType = Dictionary.CASES.toLowerCase(), className }) {
  const [data, setData] = useState([]);

  const buildChartData = (data, casesType = Dictionary.CASES.toLowerCase()) => {
    const chartData = [];
    let lastDataPoint;

    for(let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    };
    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${URL}${tails.LAST_120_DAYS}`)
        .then(res => res.json())
        .then(data => {
          const chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  const backgroundColor = casesType
    ? graphColors[casesType].rgba
    : graphColors[Dictionary.CASES.toLowerCase()].rgba;
  const borderColor = casesType
    ? graphColors[casesType].hex
    : graphColors[Dictionary.CASES.toLowerCase()].hex;

  return (
    <div className={className}>
      {data?.length > 0 && (
        <Line 
          data={{
            datasets: [{
              backgroundColor,
              borderColor,
              data,
            }]
          }}
          options={options}
        />
      )}
    </div>
  )
};

LineGraph.propTypes = {
  casesType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

LineGraph.defaultProps = {
  className: 'app__graph',
};

export default LineGraph;
