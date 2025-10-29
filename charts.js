// Embed Chart.js library via CDN
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

script.onload = function() {
  // Bar chart data for churn rates by contract type
  const contractData = {
    labels: ['Month-to-month', 'One year', 'Two year'],
    datasets: [{
      label: 'Churn Rate (%)',
      data: [42.7, 11.3, 2.8],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 205, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }]
  };

  // Render bar chart
  new Chart(document.getElementById('chart-1'), {
    type: 'bar',
    data: contractData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Line chart data for churn rate by tenure (simulated)
  const tenureData = {
    labels: ['0-12 months', '13-24 months', '25-36 months', '37-48 months', '49-60 months', '61-72 months'],
    datasets: [{
      label: 'Churn Rate (%)',
      data: [50, 30, 20, 15, 10, 5],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  // Render line chart
  new Chart(document.getElementById('chart-2'), {
    type: 'line',
    data: tenureData,
  });
};