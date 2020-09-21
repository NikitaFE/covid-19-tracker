import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

import Dictionary from '../../constants/Dictionary';
import { URL, tails } from '../../constants/api';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
}
 
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

  return (
    <div className={className}>
      {data?.length > 0 && (
        <Line 
          data={{
            datasets: [{
              backgroundColor: "rgba(204, 16, 52, 0.5)",
              borderColor: "#CC1034",
              data,
            }]
          }}
          options={options}
        />
      )}
    </div>
  )
};

export default LineGraph;
