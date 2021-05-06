import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const chartConfig = {
  type: 'polarArea',
  data: {
    labels: ["Anger", "Disgust", "Fear", "Joy", "Sadness"],
    datasets: [
      {
        label: "Emotional Scores",
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // Red
          "rgba(255, 206, 86, 0.2)", // Yellow
          "rgba(75, 192, 192, 0.2)", // Green
          "rgba(153, 102, 255, 0.2)", // Purple
          "rgba(54, 162, 235, 0.2)", // Blue
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(54, 162, 235, 1)", // Blue
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 100,
        right: 100
      }
    },
    scales: {
      
    }
  }
};

const ToneChart = (props) => {

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [tones, setTones] = useState([]);
  const data = chartConfig.data.datasets;

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
      updateDataset(0, props.tones)
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };


  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default ToneChart;