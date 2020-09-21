import numeral from 'numeral';

export const graphColors = {
  cases: {
    hex: "#cc1034",
    rgba: 'rgba(204, 16, 52, 0.4)',
  },
  recovered: {
    hex: "#7dd71d",
    rgba: 'rgba(125, 215, 29, 0.4)',
  },
  deaths: {
    hex: "#fb4443",
    rgba: 'rgba(251, 68, 67, 0.4)',
  },
};

export const options = {
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
};
