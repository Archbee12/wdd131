document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('expenses-chart').getContext('2d');
  const timeIntervalSelect = document.getElementById('time-interval');

  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  function groupExpensesByInterval(expenses, interval) {
    const grouped = {};
    expenses.forEach(expense => {
      const date = new Date(expense.date);
      let key;

      if (interval === 'daily') {
        key = date.toISOString().split('T')[0];
      } else if (interval === 'weekly') {
        const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
        key = weekStart.toISOString().split('T')[0];
      } else if (interval === 'monthly') {
        key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      }

      if (!grouped[key]) {
        grouped[key] = 0;
      }
      grouped[key] += parseFloat(expense.amount);
    });

    return grouped;
  }

  function updateChart(interval) {
    const groupedExpenses = groupExpensesByInterval(expenses, interval);
    const labels = Object.keys(groupedExpenses);
    const data = Object.values(groupedExpenses);

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: `Expenses (${interval.charAt(0).toUpperCase() + interval.slice(1)})`,
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  timeIntervalSelect.addEventListener('change', (e) => {
    updateChart(e.target.value);
  });

  // Initialize the chart with monthly data
  updateChart('monthly');
});
