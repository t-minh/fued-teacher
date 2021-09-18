import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['7A1', '7A2', '7A3', '7A4', '8A1', '8A2'],
  datasets: [
    {
      label: 'Average score',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function BarHorizontal() {
  return (
    <div>
      <h2>Average score per classes</h2>
      <HorizontalBar data={data} />
    </div>
  );
}

export default BarHorizontal;
