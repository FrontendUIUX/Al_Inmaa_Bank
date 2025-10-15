

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

const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
        datasets: [{
            data: [120, 90, 184, 130, 190, 70, 115],
            backgroundColor: '#9795E0',
            borderRadius: 3,
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
                    autoSkip: false,
                    color: '#000',
                    font: { size: 12 }
                },
                grid: {
                    borderDash: [5, 5],
                    color: '#ccc'
                },
                title: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: {
                    color: '#000',
                    font: { size: 12 },
                    maxRotation: 0,  
                    minRotation: 0,  
                    autoSkip: false 
                },
                title: { display: false }
            }
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
  const chartCanvas = document.getElementById('semiCircleChart').getContext('2d');


  const dataMap = [
    { color: '#8e44ad', value: 10 },
    { color: '#ff9f68', value: 6 },
    { color: '#f5d7a1', value: 6 }
  ];

  const dataValues = [];
  const colors = [];

  dataMap.forEach(item => {
    for (let i = 0; i < item.value; i++) {
      dataValues.push(1);          
      colors.push(item.color);      
      dataValues.push(0.2);         
      colors.push('#ffffff');
    }
  });


  new Chart(chartCanvas, {
    type: 'doughnut',
    data: {
      labels: dataValues.map(() => ''), 
      datasets: [{
        data: dataValues,
        backgroundColor: colors,
        borderWidth: 0,
        borderRadius: 10,  
      }]
    },
    options: {
      rotation: -90,
      circumference: 180,
      cutout: '70%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    }
  });
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