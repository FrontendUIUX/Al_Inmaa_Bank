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