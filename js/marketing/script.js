

const toggle = document.getElementById("modeToggle");
const label = document.getElementById("modeLabel");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    label.textContent = "Dark Mode";
  } else {
    label.textContent = "Light Mode";
  }
});
  ///dashboard page///

    document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.requests-table-dashboard');
  const serviceHeader = table.querySelector('th:nth-child(2)');
  let asc = true;

  serviceHeader.style.cursor = "pointer";

  serviceHeader.addEventListener('click', () => {
    const tbody = table.querySelector('tbody');
    const serviceCells = Array.from(tbody.querySelectorAll('tr td:nth-child(2)'));

    const sortedTexts = serviceCells
      .map(cell => cell.textContent.trim())
      .sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) return asc ? -1 : 1;
        if (a.toLowerCase() > b.toLowerCase()) return asc ? 1 : -1;
        return 0;
      });

    serviceCells.forEach((cell, index) => {
      cell.textContent = sortedTexts[index];
    });

    asc = !asc;
  });
});



const ctx = document.getElementById('myBarChart').getContext('2d');

// Create gradient for bars
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(151, 149, 224, 0.7)'); // top
gradient.addColorStop(1, 'rgba(151, 149, 224, 1)');   // bottom

const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        datasets: [{
            data: [120, 90, 184, 130, 190, 70, 115],
            backgroundColor: gradient,
            borderRadius: 6, // rounded top corners
            barPercentage: 0.6,
            categoryPercentage: 0.8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 200,
                ticks: {
                    stepSize: 20,
                    color: '#7a7a7a',
                    font: { size: 12 }
                },
                grid: {
                    borderDash: [4, 4],
                    color: '#e0e0e0'
                },
                title: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: {
                    color: '#7a7a7a',
                    font: { size: 12 },
                    maxRotation: 0,
                    minRotation: 0
                },
                title: { display: false }
            }
        }
    }
});



document.querySelectorAll('.dropdown-custom .Select-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const parent = button.parentElement;
    const isActive = parent.classList.contains('active');
    
    document.querySelectorAll('.dropdown-custom.active').forEach(d => d.classList.remove('active'));

    if (!isActive) parent.classList.add('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown-custom')) {
    document.querySelectorAll('.dropdown-custom.active').forEach(d => d.classList.remove('active'));
  }
});