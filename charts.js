// Chart.js implementation for investment analysis charts
document.addEventListener('DOMContentLoaded', function() {
  // Gold Price Chart
  const goldPriceCtx = document.getElementById('goldPriceChart').getContext('2d');
  const goldPriceChart = new Chart(goldPriceCtx, {
    type: 'line',
    data: {
      labels: ['Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025'],
      datasets: [{
        label: 'Gold Price (USD)',
        data: [2205.40, 2310.75, 2390.20, 2450.60, 2510.30, 2580.45, 2650.80, 2720.15, 2780.50, 2830.25, 2870.10, 2895.30],
        backgroundColor: 'rgba(243, 156, 18, 0.2)',
        borderColor: 'rgba(243, 156, 18, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(243, 156, 18, 1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Gold Price Trend (Last 12 Months)',
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Price (USD)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        }
      }
    }
  });

  // Trump Coin Price Chart
  const trumpCoinCtx = document.getElementById('trumpCoinChart').getContext('2d');
  const trumpCoinChart = new Chart(trumpCoinCtx, {
    type: 'line',
    data: {
      labels: ['Jan 2025', 'Feb 2025', 'Mar 2025'],
      datasets: [{
        label: 'Official Trump Token (USD)',
        data: [6.00, 70.00, 10.32],
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        borderColor: 'rgba(231, 76, 60, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(231, 76, 60, 1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Trump Coin Price Volatility',
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Price (USD)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        }
      }
    }
  });

  // Risk Comparison Chart
  const riskComparisonCtx = document.getElementById('riskComparisonChart').getContext('2d');
  const riskComparisonChart = new Chart(riskComparisonCtx, {
    type: 'radar',
    data: {
      labels: ['Price Volatility', 'Regulatory Risk', 'Ownership Concentration', 'Political Risk', 'Market Liquidity', 'Track Record'],
      datasets: [
        {
          label: 'Trump Coins',
          data: [9, 8, 9, 8, 5, 2],
          backgroundColor: 'rgba(231, 76, 60, 0.2)',
          borderColor: 'rgba(231, 76, 60, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(231, 76, 60, 1)',
        },
        {
          label: 'Gold',
          data: [4, 2, 2, 3, 9, 10],
          backgroundColor: 'rgba(243, 156, 18, 0.2)',
          borderColor: 'rgba(243, 156, 18, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(243, 156, 18, 1)',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Risk Profile Comparison (Lower is Better)',
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
        }
      },
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 10
        }
      }
    }
  });

  // Return Potential Chart
  const returnPotentialCtx = document.getElementById('returnPotentialChart').getContext('2d');
  const returnPotentialChart = new Chart(returnPotentialCtx, {
    type: 'bar',
    data: {
      labels: ['Short-term', 'Medium-term', 'Long-term'],
      datasets: [
        {
          label: 'Trump Coins (Potential)',
          data: [80, 60, 40],
          backgroundColor: 'rgba(231, 76, 60, 0.7)',
          borderColor: 'rgba(231, 76, 60, 1)',
          borderWidth: 1
        },
        {
          label: 'Trump Coins (Risk)',
          data: [90, 70, 60],
          backgroundColor: 'rgba(192, 57, 43, 0.7)',
          borderColor: 'rgba(192, 57, 43, 1)',
          borderWidth: 1
        },
        {
          label: 'Gold (Potential)',
          data: [15, 20, 25],
          backgroundColor: 'rgba(243, 156, 18, 0.7)',
          borderColor: 'rgba(243, 156, 18, 1)',
          borderWidth: 1
        },
        {
          label: 'Gold (Risk)',
          data: [10, 15, 20],
          backgroundColor: 'rgba(211, 84, 0, 0.7)',
          borderColor: 'rgba(211, 84, 0, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Return Potential vs Risk by Time Horizon (%)',
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time Horizon'
          }
        }
      }
    }
  });

  // Platform Comparison Chart
  const platformComparisonCtx = document.getElementById('platformComparisonChart').getContext('2d');
  const platformComparisonChart = new Chart(platformComparisonCtx, {
    type: 'bar',
    data: {
      labels: ['Binance', 'Kraken', 'Coinbase', 'Crypto.com', 'Robinhood', 'Public.com'],
      datasets: [
        {
          label: 'Security Rating',
          data: [8, 9, 9, 8, 7, 7],
          backgroundColor: 'rgba(26, 82, 118, 0.7)',
          borderColor: 'rgba(26, 82, 118, 1)',
          borderWidth: 1
        },
        {
          label: 'User Experience',
          data: [7, 8, 9, 8, 9, 8],
          backgroundColor: 'rgba(41, 128, 185, 0.7)',
          borderColor: 'rgba(41, 128, 185, 1)',
          borderWidth: 1
        },
        {
          label: 'Fee Structure',
          data: [9, 8, 7, 8, 9, 9],
          backgroundColor: 'rgba(52, 152, 219, 0.7)',
          borderColor: 'rgba(52, 152, 219, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Platform Comparison (Higher is Better)',
          font: {
            size: 16
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          position: 'top',
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          title: {
            display: true,
            text: 'Rating (1-10)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Platform'
          }
        }
      }
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
});
