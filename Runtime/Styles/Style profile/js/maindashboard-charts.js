
//USER DASHBOARD - REQUESTS PROGRESS BAR
function initRequestProgressBar() {
  console.log("🔄 initRequestProgressBar() called");

  // 1. Create and append the progress bar container
  console.log("➡️ Creating progress bar container...");
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar-container';
  progressBarContainer.id = 'progress-bar-container';

  // We'll create segments dynamically based on request cards found
  progressBarContainer.innerHTML = ''; // Start empty

  // 2. Insert it right after the #requests-total element
  const requestsTotalElement = document.querySelector('.resquestText');

  if (requestsTotalElement && requestsTotalElement.parentNode) {
    console.log("✔️ progressBarContainer inserted after .resquestText");
    requestsTotalElement.insertAdjacentElement('afterend', progressBarContainer);
  } else {
    console.warn("❌ Could not find .resquestText — progress bar NOT inserted");
    return;
  }

  // 3. Extract data from ALL non-"not-available" request cards
  console.log("➡️ Reading request cards...");
  const requestData = [];

  // Get all request cards that are not marked as "not-available"
  const requestCards = document.querySelectorAll('.request-card:not(.not-available)');

  console.log(`📊 Found ${requestCards.length} active request cards`);

  requestCards.forEach((card, index) => {
    const label = card.querySelector('.request-name span')?.textContent.trim();
    const percentText = card.querySelector('.percentage')?.textContent.trim();
    const percentValue = parseInt(percentText?.replace('%', ''), 10) || 0;

    console.log(`--- Card ${index + 1} ---`);
    console.log("Label:", label);
    console.log("Percent Text:", percentText);
    console.log("Parsed Percent Value:", percentValue);

    if (label && !isNaN(percentValue)) {
      requestData.push({
        index: index,
        label: label,
        percentValue: percentValue,
        segmentId: `progress-segment-${index}`
      });
    }
  });

  if (requestData.length === 0) {
    console.warn("❌ No valid request data found");
    return;
  }

  console.log("➡️ Request Data:", requestData);

  // 4. Create progress bar segments based on the data
  requestData.forEach((data) => {
    const segment = document.createElement('div');
    segment.className = 'request-progress-zone progress-segment';
    segment.id = data.segmentId;
    segment.dataset.index = data.index;
    segment.dataset.label = data.label;
    progressBarContainer.appendChild(segment);
  });

    const colorPalette = [
  'var(--pb-1)',
  'var(--pb-2)',
  'var(--pb-3)',
  'var(--pb-4)'
];


  requestData.forEach((data) => {
    const segmentElement = document.getElementById(data.segmentId);
    if (segmentElement) {
      const colorIndex = data.index % colorPalette.length;
      segmentElement.style.backgroundColor = colorPalette[colorIndex];
    }
  });

  // 6. Animate each segment sequentially
  console.log("➡️ Starting animation...");

  function animateSegment(index = 0) {
    if (index >= requestData.length) {
      console.log("✔️ All segments animated");
      return;
    }

    const data = requestData[index];
    const segmentElement = document.getElementById(data.segmentId);
    const percentValue = data.percentValue;

    console.log(`🎬 Animating Segment ${index + 1}: ${data.label} → ${percentValue}%`);

    if (segmentElement) {
      segmentElement.style.width = '0'; // Reset

      setTimeout(() => {
        console.log(`➡️ Applying width: ${percentValue}% to ${data.label}`);
        segmentElement.style.transition = 'width 1.5s ease';
        segmentElement.style.width = `${percentValue}%`;

        setTimeout(() => {
          animateSegment(index + 1);
        }, 1600);
      }, 100);
    } else {
      console.warn(`❌ segmentElement NOT found for index ${index}`);
      animateSegment(index + 1);
    }
  }

  animateSegment();
}

// 🔥 Auto-run on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initRequestProgressBar, 100);
});

// Optional: Add CSS for the progress bar if not already present
(function addProgressBarStyles() {
  if (!document.getElementById('progress-bar-styles')) {
    const style = document.createElement('style');
    style.id = 'progress-bar-styles';
    style.textContent = `
      .progress-bar-container {
        width: 100%;
        height: 12px;
        display: flex;
        background-color: rgba(0 0 0 / 50%);
        border-radius: 6px;
        overflow: hidden;
        margin-top: 8px;
      }
    .light .progress-bar-container {
      
        background-color: rgba(0 0 0 / 10%);
      }
      .progress-segment {
        height: 100%;
        transition: width 1.5s ease, background-color 0.3s ease;
        float: left;
      }
    `;
    document.head.appendChild(style);
  }
})();


// MAIN DASHBOARD - OVERVIEW CHART 
function createSemiCircleChart() {
    console.log("circle chart")
    const chartCanvas = document.getElementById('semiCircleChart');
    if (!chartCanvas) {
        console.warn('semiCircleChart element not found');
        return null;
    }

    if (chartCanvas.chart) {
        chartCanvas.chart.destroy();
    }

    const ctx = chartCanvas.getContext('2d');
    const percentageItems = document.querySelectorAll('.overviewCard .sentences');
    const dataMap = Array.from(percentageItems).map(item => {
        const percentEl = item.querySelector('.percentage');
        const labelEl = item.querySelector('.label');
       /* const percent = parseFloat(
            percentEl?.dataset.count ||
            percentEl?.textContent.replace('%', '') ||
            0
        );*/
        const percent = parseFloat(
            percentEl?.textContent.replace('%', '') || 0
        );


        const label = (labelEl?.textContent || "").toLowerCase();

        let baseColor = '#e0e0e0';
        let darkColor = '#cccccc';

        if (label.includes('approved') || label.includes('الطلبات المعتمدة')) {
            baseColor = '#b6b5fa';
            darkColor = '#8785d8';
        } else if (label.includes('pending') || label.includes('بانتظار إجراءاتي')) {
            baseColor = '#ffb5a0';
            darkColor = '#ff9581';
        } else if (label.includes('rejected') || label.includes('الطلبات المرفوضة')) {
            baseColor = '#ff9b9b';
            darkColor = '#e56b6b';
        }

        return { percent, baseColor, darkColor };
    });

    const validData = dataMap.filter(item => item.percent > 0);
    const hasRealData = validData.length > 0;

    const totalBars = 20;
    const sliceColors = [];
    const dataValues = [];
    let usedBars = 0;

    function interpolateColor(c1Hex, c2Hex, factor) {
        const c1 = c1Hex.match(/\w\w/g).map(h => parseInt(h, 16));
        const c2 = c2Hex.match(/\w\w/g).map(h => parseInt(h, 16));
        const r = c1.map((v, i) => Math.round(v + (c2[i] - v) * factor));
        return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
    }

    if (hasRealData) {
        validData.forEach(item => {
            const barsForItem = Math.max(
                1,
                Math.round((item.percent / 100) * totalBars)
            );

            for (let i = 0; i < barsForItem && usedBars < totalBars; i++) {
                const factor = (i + 1) / barsForItem;
                sliceColors.push(interpolateColor(item.baseColor, item.darkColor, factor));
                dataValues.push(1);
                usedBars++;
            }
        });
    }

    while (usedBars < totalBars) {
        sliceColors.push('#e0e0e0');
        dataValues.push(1);
        usedBars++;
    }

    const greyStart = sliceColors.map(() => '#e0e0e0');

    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dataValues.map(() => ''),
            datasets: [{
                data: dataValues,
                backgroundColor: greyStart,
                borderWidth: 5,
                spacing: 20,
                borderRadius: 10,
                borderColor: 'transparent'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            rotation: -90,
            circumference: 180,
            cutout: '70%',
            animation: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });

    function animateFill() {
        let index = 0;
        function step() {
            if (index < sliceColors.length) {
                chart.data.datasets[0].backgroundColor[index] = sliceColors[index];
                chart.update();
                index++;
                setTimeout(step, 40);
            }
        }
        step();
    }

    if (hasRealData) {
        animateFill();
    }

    // Store reference to the chart on the canvas for later cleanup
    chartCanvas.chart = chart;

    return chart;
}
// Initialize chart when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(createSemiCircleChart,100);
    //createSemiCircleChart();
});

// MAIN DASHBOARD - BAR CHART 
function initializeBarChart(canvasId = 'myBarChart') {
    const canvas = document.getElementById(canvasId);
    const dropdownBtn = canvas ? canvas.closest('.card.totalRequests')?.querySelector('.totalRequests #timeFilterDropdown') : null;
    const dropdownMenu = canvas ? canvas.closest('.card.totalRequests')?.querySelector('.totalRequests .dropdown-menu') : null;
    const card = canvas ? canvas.closest('.card.totalRequests') : null;

    if (!canvas) {
        console.warn(`Canvas with ID "${canvasId}" not found`);
        return null;
    }
    
    // Check if URL contains RuntimeAR
    const isRTL = window.location.href.includes('RuntimeAR');
    
    // Arabic translations
    const translations = {
        months: {
            'Jan': 'يناير',
            'Feb': 'فبراير',
            'Mar': 'مارس',
            'Apr': 'أبريل',
            'May': 'مايو',
            'Jun': 'يونيو',
            'Jul': 'يوليو',
            'Aug': 'أغسطس',
            'Sep': 'سبتمبر',
            'Oct': 'أكتوبر',
            'Nov': 'نوفمبر',
            'Dec': 'ديسمبر'
        },
        dropdown: {
            'Last 6 Months': 'آخر 6 أشهر',
            'Last 12 Months': 'آخر 12 شهراً'
        }
    };

    const ctx = canvas.getContext('2d');
    const parseData = (attr) => {
        const raw = canvas.getAttribute(attr);
        if (!raw) return { labels: [], values: [] };
        const items = raw.split(',').map(item => item.trim());
        const labels = [];
        const values = [];

        items.forEach(pair => {
            const [label, value] = pair.split(':').map(x => x.trim());
            if (label && !isNaN(value)) {
                // Translate month labels if RTL
                let finalLabel = label;
                if (isRTL && translations.months[label]) {
                    finalLabel = translations.months[label];
                }
                labels.push(finalLabel);
                values.push(Number(value));
            }
        });

        return { labels, values };
    };

    const monthData = parseData('data-months');
    const yearData = parseData('data-years');

    // ------------------------
    // DISABLE DROPDOWN + ADD noData CLASS TO CARD IF NO DATA
    // ------------------------
    const hasMonthData = monthData.labels.length > 0;
    const hasYearData = yearData.labels.length > 0;

    if (!hasMonthData && !hasYearData) {
        if (dropdownBtn) dropdownBtn.classList.add('disabled');
        if (card) card.classList.add('noData');
    }

    // ------------------------
    // ENSURE CHART ALWAYS HAS SOME DATA
    // ------------------------
    const ensureData = (data) => {
        if (data.labels.length === 0) {
            return {
                labels: [isRTL ? 'لا توجد بيانات' : 'No data'],
                values: [0]
            };
        }
        return data;
    };

    const safeMonthData = ensureData(monthData);
    const safeYearData = ensureData(yearData);

    // ------------------------
    // CREATE GRADIENT
    // ------------------------
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#9795E0');
    gradient.addColorStop(1, 'rgba(191, 189, 249, 1)');

    // ------------------------
    // FUNCTION TO GET CURRENT TICK COLOR BASED ON HTML CLASS
    // ------------------------
    const getTickColor = () => {
        // If html has the class 'light' - navy blue, otherwise white
        if (document.documentElement.classList.contains('light')) {
            return '#002134'; // Navy blue for light mode
        } else {
            return '#ffffff'; // White for dark mode (or when 'light' class is not present)
        }
    };

    // ------------------------
    // INITIAL CHART DATA
    // ------------------------
    const chartData = {
        labels: safeMonthData.labels,
        datasets: [{
            data: safeMonthData.values,
            backgroundColor: gradient,
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.8
        }]
    };

    // ------------------------
    // CHART OPTIONS - RTL ADJUSTMENTS
    // ------------------------
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { 
                    stepSize: 10, 
                    color: getTickColor(), 
                    font: { 
                        size: 14,
                        family: isRTL ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : undefined
                    } 
                },
                grid: { borderDash: [5, 5], color: '#cccccc32' },
                // RTL: Position y-axis on the right side
                position: isRTL ? 'right' : 'left',
            },
            x: {
                grid: { display: false },
                ticks: { 
                    color: getTickColor(), 
                    font: { 
                        size: 12,
                        family: isRTL ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" : undefined
                    },
                    // RTL: Mirror the labels if needed
                    callback: function(value, index, values) {
                        return this.getLabelForValue(value);
                    }
                },
                // RTL: Reverse the x-axis
                reverse: isRTL
            }
        },
        animation: { duration: 800, easing: 'easeInOutQuart' },
        // RTL: Set text direction
        rtl: isRTL,
        // RTL: Adjust tooltip position
        tooltips: {
            rtl: isRTL,
            textDirection: isRTL ? 'rtl' : 'ltr'
        }
    };

    // ------------------------
    // INITIALIZE CHART
    // ------------------------
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });

    // ------------------------
    // OBSERVER TO HANDLE DARK MODE TOGGLE
    // ------------------------
    const observer = new MutationObserver(() => {
        const color = getTickColor();
        myBarChart.options.scales.x.ticks.color = color;
        myBarChart.options.scales.y.ticks.color = color;
        myBarChart.update();
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });

    // ================================
    // CUSTOM DROPDOWN LOGIC + CHART UPDATE
    // ================================
    if (dropdownBtn && dropdownMenu && !dropdownBtn.classList.contains('disabled')) {
        // Translate dropdown items if RTL
        if (isRTL && dropdownMenu) {
            const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item[data-filter]');
            dropdownItems.forEach(item => {
                const originalText = item.textContent.trim();
                if (translations.dropdown[originalText]) {
                    item.textContent = translations.dropdown[originalText];
                }
            });
            
            // Update dropdown button initial text
            const currentText = dropdownBtn.textContent.trim();
            if (translations.dropdown[currentText]) {
                const chevronHTML = dropdownBtn.querySelector('.chevron-img')?.outerHTML || '';
                dropdownBtn.innerHTML = `${translations.dropdown[currentText]} ${chevronHTML}`;
            }
        }

        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', () => dropdownMenu.classList.remove('show'));

        dropdownMenu.querySelectorAll('.dropdown-item[data-filter]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const filter = item.dataset.filter;
                const selectedData = ensureData(filter === 'year' ? yearData : monthData);
                
                // Get text (either translated or original)
                let displayText = item.textContent;
                if (isRTL && translations.dropdown[item.dataset.originalText]) {
                    displayText = translations.dropdown[item.dataset.originalText];
                }
                
                // Store original text for future reference
                if (!item.dataset.originalText) {
                    item.dataset.originalText = item.textContent;
                }

                dropdownBtn.innerHTML = `${displayText} <img src="/Runtime/Styles/Style%20profile/images/net/Chevron Down.svg" alt="chevrondown" class="chevron-img">`;
                dropdownMenu.classList.remove('show');

                const originalData = [...selectedData.values];
                const zeros = selectedData.values.map(() => 0);

                myBarChart.data.labels = selectedData.labels;
                myBarChart.data.datasets[0].data = zeros;
                myBarChart.update();

                setTimeout(() => {
                    myBarChart.data.datasets[0].data = originalData;
                    myBarChart.update({ duration: 800, easing: 'easeInOutQuart' });
                }, 150);
            });
        });
    }

    // Add RTL class to the canvas container if needed
    if (isRTL && canvas.parentElement) {
        canvas.parentElement.classList.add('rtl-chart');
        canvas.style.direction = 'rtl';
    }

    // Return the chart instance for external control if needed
    return {
        chart: myBarChart,
        isRTL: isRTL,
        destroy: () => {
            observer.disconnect();
            myBarChart.destroy();
        },
        updateData: (monthData, yearData) => {
            // You can extend this method to update chart data dynamically
            console.log('Update data method - implement as needed');
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initializeBarChart(); // Uses default 'myBarChart' ID
});


// MArketing Requests - Popular Requests 
function initPopularRequests() {
    // Wait for DOM and Chart.js to be ready
    function initializeChart() {
        const el = document.getElementById('popularRequestsChart');
        if (!el) {
            console.log('Chart element not found');
            return;
        }

        if (!window.Chart) {
            console.log('Chart.js not loaded');
            setTimeout(initializeChart, 100);
            return;
        }

        console.log('Initializing chart with plugins:', {
            ChartDataLabels: !!window.ChartDataLabels,
            ChartRegistry: Chart.registry?.plugins
        });

        // ------------------------
        // CONFIGURATION
        // ------------------------
        const config = {
            fontFamily: "regularFont",
            baseRem: { labels: .7, ticks: .8 },
            baseVw: { labels: .9, ticks: .8 }
        };

        // ------------------------
        // HELPER: Detect Dark Mode
        // ------------------------
        const isDarkMode = () => document.documentElement.classList.contains('light');

        // ------------------------
        // PARSE DATA FROM HTML
        // ------------------------
        const rawData = el.getAttribute('data-chart') || "";
        const parsed = rawData.split(', ').map(item => {
            const match = item.match(/name:([^\-]+)\s*--\s*count:(\d+)/);
            return match ? { name: match[1].trim(), count: parseInt(match[2].trim(), 10) } : null;
        }).filter(Boolean);

        const labels = parsed.map(i => i.name);
        const values = parsed.map(i => i.count);
        const maxValue = values.length ? Math.max(...values) : 10;

        const colors = ['#2FC04F', '#FF9480', '#E86F70', '#0B1B24', '#9795E0', '#FFA726', '#4DD0E1'].slice(0, labels.length);

        let activeTooltip = null;
        let activeBarIndex = -1;
        let originalColors = [...colors];
        let chart = null; // Declare chart variable here so all functions can access it

        const updateBarOpacity = (selectedIndex) => {
            if (!chart) return;
            const dataset = chart.data.datasets[0];
            if (selectedIndex === -1) {
                dataset.backgroundColor = originalColors;
            } else {
                dataset.backgroundColor = originalColors.map((color, index) => {
                    if (index === selectedIndex) return color;
                    if (color.startsWith('#')) {
                        const r = parseInt(color.slice(1, 3), 16);
                        const g = parseInt(color.slice(3, 5), 16);
                        const b = parseInt(color.slice(5, 7), 16);
                        return `rgba(${r}, ${g}, ${b}, 0.3)`;
                    }
                    return color;
                });
            }
            chart.update();
        };

        const createTooltip = (data, barIndex, x, y) => {
            removeTooltip();
            updateBarOpacity(barIndex);

            const tooltip = document.createElement('div');
            tooltip.className = 'chart-tooltip';
            tooltip.innerHTML = `
        <div class="tooltip-content">
          <div class="tooltip-count">${data.count.toLocaleString()}<span> Requests</span></div>
          <div class="tooltip-header">${data.name}</div>
        </div>
      `;
            Object.assign(tooltip.style, {
                position: 'fixed',
                background: '#FFFFFF',
                color: '#000000',
                fontFamily: config.fontFamily,
                fontWeight: '500',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                zIndex: '10000',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                border: '1px solid #E0E0E0',
                transform: 'translateX(-50%)',
                left: `${x}px`,
                top: `${y - 70}px`,
                padding: '8px 12px',
                borderRadius: '4px'
            });
            document.body.appendChild(tooltip);
            activeTooltip = tooltip;
            activeBarIndex = barIndex;
        };

        const removeTooltip = () => {
            if (activeTooltip && activeTooltip.parentNode) {
                activeTooltip.parentNode.removeChild(activeTooltip);
            }
            updateBarOpacity(-1);
            activeTooltip = null;
            activeBarIndex = -1;
        };

        const handleCanvasHover = (event) => {
            if (!chart) return;

            const canvasPosition = el.getBoundingClientRect();
            const x = event.clientX - canvasPosition.left;
            const y = event.clientY - canvasPosition.top;

            const meta = chart.getDatasetMeta(0);
            if (!meta || !meta.data) return;

            let hoveredIndex = -1;

            meta.data.forEach((bar, index) => {
                const barLeft = Math.min(bar.x, bar.base);
                const barRight = Math.max(bar.x, bar.base);
                const barTop = bar.y - bar.height / 2;
                const barBottom = bar.y + bar.height / 2;

                if (x >= barLeft && x <= barRight && y >= barTop && y <= barBottom) {
                    hoveredIndex = index;
                }
            });

            el.style.cursor = hoveredIndex !== -1 ? 'pointer' : 'default';

            if (hoveredIndex !== -1) {
                const data = {
                    name: labels[hoveredIndex],
                    count: values[hoveredIndex]
                };
                createTooltip(data, hoveredIndex, event.clientX, event.clientY);
            } else {
                removeTooltip();
            }
        };

        const handleCanvasLeave = () => removeTooltip();

        // Register ChartDataLabels plugin if available but not registered
        if (window.ChartDataLabels) {
            try {
                if (!Chart.registry.plugins.get('datalabels')) {
                    Chart.register(ChartDataLabels);
                    console.log('ChartDataLabels plugin registered successfully');
                } else {
                    console.log('ChartDataLabels plugin already registered');
                }
            } catch (error) {
                console.error('Error registering ChartDataLabels plugin:', error);
            }
        } else {
            console.log('ChartDataLabels plugin not available');
        }

        const isLargeScreen = () => window.innerWidth >= 1600;
        const fontSize = (type = 'labels') =>
            isLargeScreen() ? (window.innerWidth * config.baseVw[type]) / 100 : 16 * config.baseRem[type];
        const barThickness = () => (isLargeScreen() ? window.innerWidth * 0.02 : 30);

        const staticLabelPlugin = {
            id: 'staticLabels',
            afterDatasetsDraw(chart) {
                const ctx = chart.ctx;
                const meta = chart.getDatasetMeta(0);
                if (!meta?.data) return;

                const fSize = Math.round(fontSize('labels'));
                ctx.save();
                ctx.font = `${fSize}px ${config.fontFamily}`;
                ctx.textBaseline = 'middle';
                ctx.fillStyle = 'rgba(255,255,255,1)';
                ctx.textAlign = 'left';

                meta.data.forEach((bar, i) => {
                    const label = chart.data.labels[i] || '';
                    if (!label) return;

                    const barStartPx = Math.min(bar.x, bar.base);
                    const barEndPx = Math.max(bar.x, bar.base);
                    const barWidthPx = Math.max(1, barEndPx - barStartPx);
                    const barCenterY = bar.y;

                    const innerPadding = 12;
                    const textX = barStartPx + innerPadding;

                    const textWidth = ctx.measureText(label).width;
                    const availableWidth = barWidthPx - innerPadding - 8;

                    let displayText = label;
                    if (textWidth > availableWidth) {
                        let truncated = label;
                        for (let len = label.length - 1; len > 0; len--) {
                            truncated = label.substring(0, len) + '...';
                            if (ctx.measureText(truncated).width <= availableWidth) {
                                displayText = truncated;
                                break;
                            }
                        }
                    }
                    ctx.fillText(displayText, textX, barCenterY);
                });
                ctx.restore();
            }
        };

        // ------------------------
        // CREATE CHART
        // ------------------------
        try {
            chart = new Chart(el, { // Remove 'const' so it uses the outer variable
                type: 'bar',
                data: {
                    labels: labels.length ? labels : ['No data available'],
                    datasets: [{
                        data: values.length ? values : [0],
                        backgroundColor: labels.length ? colors : ['#cccccc'],
                        borderRadius: 8,
                        borderColor: 'transparent',
                        barThickness: barThickness(),
                        maxBarThickness: 200,
                        borderSkipped: false
                    }]
                },
                options: {
                    indexAxis: 'y',
                    maintainAspectRatio: false,
                    events: ['mousemove', 'mouseout'],
                    animation: { duration: 200, easing: 'easeOutCubic' },
                    layout: { padding: { left: 10, right: 30, top: 6, bottom: 0 } },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false },
                        datalabels: { display: false }
                    },
                    scales: {
                        y: {
                            display: false, // Hide Y-axis completely
                            grid: { display: false },
                            border: { display: false },
                            ticks: { display: false } // Hide Y-axis ticks as well
                        },
                        x: {
                            type: 'linear',
                            min: 0,
                            max: maxValue * 1.25,
                            display: false,
                            grid: { display: false },
                            border: { display: false },
                            ticks: { color: isDarkMode() ? '#000' : '#fff' }
                        },
                        x2: {
                            type: 'category',
                            position: 'bottom',
                            labels: ['0', '2', '6', '8', '10', '12', '16', '18', '20'],
                            ticks: {
                                color: isDarkMode() ? '#000' : '#fff',
                                font: { family: config.fontFamily, weight: '600', size: fontSize('ticks') }
                            },
                            grid: {
                                drawOnChartArea: true,
                                drawTicks: false,
                                color: isDarkMode() ? 'rgba(255,255,255,0.2)rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
                                lineWidth: 1
                            },
                            border: { display: false }
                        }
                    },
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                plugins: [staticLabelPlugin]
            });

            // ------------------------
            // EVENT LISTENERS
            // ------------------------
            el.addEventListener('mousemove', handleCanvasHover);
            el.addEventListener('mouseleave', handleCanvasLeave);

            // ------------------------
            // DARK MODE LISTENER
            // ------------------------
            const updateChartColors = () => {
                const dark = isDarkMode();
                const { x2, x, y } = chart.options.scales;
                if (x2?.ticks) x2.ticks.color = dark ? '#000' : '#fff';
                if (x2?.grid) x2.grid.color = dark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)';
                if (x?.ticks) x.ticks.color = dark ? '#000' : '#fff';
                if (y?.ticks) y.ticks.color = dark ? '#000' : '#fff';
                chart.update();
            };

            const htmlObserver = new MutationObserver(() => updateChartColors());
            htmlObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

            // ------------------------
            // CLEANUP OBSERVER
            // ------------------------
            const observer = new MutationObserver(() => {
                if (!document.body.contains(el)) {
                    removeTooltip();
                    el.removeEventListener('mousemove', handleCanvasHover);
                    el.removeEventListener('mouseleave', handleCanvasLeave);
                    chart?.destroy();
                    observer.disconnect();
                    htmlObserver.disconnect();
                }
            });
            observer.observe(document, { childList: true, subtree: true });

            console.log('Chart initialized successfully');

        } catch (error) {
            console.error('Error creating chart:', error);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeChart);
    } else {
        initializeChart();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    initPopularRequests()
});


// MArketing Requests - User Satisfaction Bar

function roundRectPath(ctx, x, y, w, h, r) {
    const rr = Math.min(r, h / 2, w / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.lineTo(x + w - rr, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
    ctx.lineTo(x + w, y + h - rr);
    ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
    ctx.lineTo(x + rr, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
    ctx.lineTo(x, y + rr);
    ctx.quadraticCurveTo(x, y, x + rr, y);
    ctx.closePath();
}

function prepCanvasForDPR(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth || canvas.width;
    const cssH = canvas.clientHeight || canvas.height;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
}

const isLargeScreen = () => window.innerWidth >= 1600;

function drawRatingBar(canvas, rating, opts = {}) {
    const defaults = { segments: 5, gap: 4, height: 8, fillColor: '#FF9480', bgColor: 'rgba(255,149,129,0.2)', radius: 50, maxRating: 10 };
    const { segments, fillColor, bgColor, radius, maxRating } = { ...defaults, ...opts };
    let barHeight, barGap;
    const baseVwHeight = 0.5, baseVwGap = 0.25;
    if (isLargeScreen()) {
        const vwToPx = (vw) => window.innerWidth * vw / 100;
        barHeight = vwToPx(baseVwHeight);
        barGap = vwToPx(baseVwGap);
    } else {
        barHeight = defaults.height;
        barGap = defaults.gap;
    }
    const ctx = prepCanvasForDPR(canvas);
    const W = canvas.clientWidth || canvas.width;
    const H = canvas.clientHeight || barHeight;
    const totalGap = barGap * (segments - 1);
    const segW = (W - totalGap) / segments;
    const segH = barHeight;
    const y = Math.round((H - segH) / 2);
    ctx.clearRect(0, 0, W, H);

    // Background bars
    for (let i = 0; i < segments; i++) {
        const x = Math.round(i * (segW + barGap));
        ctx.fillStyle = bgColor;
        roundRectPath(ctx, x, y, segW, segH, radius);
        ctx.fill();
    }

    // Foreground fill
    const scaledRating = (rating / maxRating) * segments;
    const full = Math.floor(Math.max(0, Math.min(scaledRating, segments)));
    const part = Math.max(0, Math.min(1, scaledRating - full));
    ctx.fillStyle = fillColor;
    for (let i = 0; i < full; i++) {
        const x = Math.round(i * (segW + barGap));
        roundRectPath(ctx, x, y, segW, segH, radius);
        ctx.fill();
    }
    if (part > 0 && full < segments) {
        const x = Math.round(full * (segW + barGap));
        roundRectPath(ctx, x, y, segW * part, segH, radius);
        ctx.fill();
    }
}

const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

function animateRatingBar(canvas, targetRating, options = {}) {
    const { duration = 900, easing = easeOutCubic, ...drawOpts } = options;
    let rafId = null, start = null;
    if (canvas.__animCancel) canvas.__animCancel();
    canvas.__animCancel = () => { if (rafId) cancelAnimationFrame(rafId); }
    const step = (ts) => {
        if (!start) start = ts;
        const t = Math.min(1, (ts - start) / duration);
        const eased = easing(t);
        const current = targetRating * eased;
        drawRatingBar(canvas, current, drawOpts);
        if (t < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
}

function initAllRatingBars() {
    document.querySelectorAll('.rating-canvas').forEach(canvas => {
        if (!canvas.style.width) canvas.style.width = '234px';
        if (!canvas.style.height) canvas.style.height = '8px';
        const card = canvas.closest('.small-box-reports') || document;
        const numEl = card.querySelector('.big-number');
        const smallEl = card.querySelector('.small-number');
        const raw = parseFloat((numEl?.textContent || '0').trim());
        const max = smallEl ? parseFloat((smallEl.textContent || '5').replace(/[^\d.]/g, '')) : 5;
        const rating = isNaN(raw) ? 0 : Math.max(0, Math.min(max, raw));
        animateRatingBar(canvas, rating, { maxRating: max });
        let rAF;
        const onResize = () => { cancelAnimationFrame(rAF); rAF = requestAnimationFrame(() => drawRatingBar(canvas, rating, { maxRating: max })); };
        window.addEventListener('resize', onResize, { passive: true });
        const obs = new MutationObserver(() => { const n = parseFloat((numEl?.textContent || '0').trim()); if (!isNaN(n)) animateRatingBar(canvas, Math.max(0, Math.min(max, n)), { maxRating: max }); });
        if (numEl) obs.observe(numEl, { characterData: true, childList: true, subtree: true });
    });
}

document.addEventListener('DOMContentLoaded', initAllRatingBars);
window.updateRatingCanvas = (selector, newVal) => {
    const c = document.querySelector(selector);
    if (!c) return;
    const card = c.closest('.small-box-reports') || document;
    const smallEl = card.querySelector('.small-number');
    const max = smallEl ? parseFloat((smallEl.textContent || '5').replace(/[^\d.]/g, '')) : 5;
    animateRatingBar(c, Math.max(0, Math.min(max, +newVal)), { maxRating: max });
};



// MARKETING DASHBOARD - OVERVIEW CHART 

// MARKETING DASHBOARD - OVERVIEW CHART 

function initializeCircularChart(chartData) {
    // ================================
    // CIRCULAR CHART
    // ================================

    // Calculate total and percentages
    const totalValue = chartData.values.reduce((sum, val) => sum + val, 0);

    // Filter out zero values
    const filteredData = {
        labels: chartData.labels.filter((_, index) => chartData.values[index] > 0),
        values: chartData.values.filter(val => val > 0),
        colors: chartData.colors.filter((_, index) => chartData.values[index] > 0),
        endColors: chartData.endColors.filter((_, index) => chartData.values[index] > 0),
    };

    // Calculate actual percentages for filtered data
    const filteredPercentages = filteredData.values.map(val =>
        totalValue === 0 ? 0 : Math.round((val / totalValue) * 100)
    );

    // Determine if all values are zero
    const allZero = totalValue === 0;

    // ================================
    // Gradient Helper
    // ================================
    function createGradient(ctx, startColor, endColor) {
        const gradient = ctx.createLinearGradient(0, 0, 250, 0);
        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);
        return gradient;
    }

    // ================================
    // Label Positioning
    // ================================
    function calculateLabelPositions(percentages) {
        const positions = [];
        let currentAngle = -90;

        percentages.forEach(percentage => {
            const segmentAngle = (percentage / 100) * 360;
            const middleAngle = currentAngle + (segmentAngle / 2);
            const angleInRadians = (middleAngle * Math.PI) / 180;

            const distanceFromCenter = 0.7;
            const x = 50 + (Math.cos(angleInRadians) * distanceFromCenter * 50);
            const y = 50 + (Math.sin(angleInRadians) * distanceFromCenter * 50);

            positions.push({ top: `${y}%`, left: `${x}%` });
            currentAngle += segmentAngle;
        });

        return positions;
    }

    function positionLabels() {
        const positions = calculateLabelPositions(filteredPercentages);

        // Hide all labels first
        document.querySelectorAll('.chartLabel').forEach(label => {
            label.style.display = 'none';
        });

        // Show only non-zero labels
        filteredData.labels.forEach((label, index) => {
            const originalIndex = chartData.labels.indexOf(label);
            const labelElement = document.querySelector(`.segment-label${originalIndex + 1}`);

            if (labelElement) {
                labelElement.style.display = allZero ? 'none' : 'block';
                labelElement.style.top = positions[index].top;
                labelElement.style.left = positions[index].left;

                const valueSpan = labelElement.querySelector('.value');
                if (valueSpan) {
                    valueSpan.innerHTML = `${filteredData.values[index]} <span class="light">(${filteredPercentages[index]}%)</span>`;
                }
            }
        });
    }

    // ================================
    // Chart.js Data
    // ================================
    const chartJsData = {
        labels: filteredData.labels,
        datasets: [{
            data: filteredData.values,
            backgroundColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) return null;

                const index = context.dataIndex;

                if (allZero) {
                    return '#D3D3D3';
                }

                return createGradient(
                    ctx,
                    filteredData.colors[index],
                    filteredData.endColors[index]
                );
            },
            borderWidth: 2,
            borderColor: 'transparent',
            hoverOffset: 0,
            spacing: 8,
            borderRadius: 10
        }]
    };

    // ================================
    // Chart Configuration
    // ================================
    const config = {
        type: 'doughnut',
        data: chartJsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
                datalabels: { display: false }
            },
            interaction: { mode: null, intersect: false },
            animation: { animateScale: true, animateRotate: true },
            onHover: () => {},
            events: []
        }
    };

    // ================================
    // Chart Initialization
    // ================================
    const canvas = document.getElementById('myCircularChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (window.statusChart && typeof window.statusChart.destroy === 'function') {
        window.statusChart.destroy();
    }

    window.statusChart = new Chart(ctx, config);
    setTimeout(positionLabels, 100);

    // ================================
    // Center Text (EN / AR)
    // ================================
    const centerNumber = document.querySelector('.chart-center-text .number');
    const centerLabel = document.querySelector('.chart-center-text .label');
    const isArabic = window.location.pathname.includes('RuntimeAR');

    if (centerNumber) {
        centerNumber.textContent = totalValue;
    }

    if (centerLabel) {
        centerLabel.textContent = isArabic ? 'إجمالي الطلبات' : 'Total Requests';
    }

    // ================================
    // Label Click Handling
    // ================================
    document.querySelectorAll('.chartLabel').forEach(label => {
        label.addEventListener('click', function () {
            const value = this.querySelector('.value')?.textContent || '';
            const labelText = this.querySelector('.label-text')?.textContent || '';
            alert(`You clicked on ${labelText}: ${value}`);
        });
    });
}


// Function to extract data from HTML automatically
function getChartDataFromHTML() {
    const labels = [];
    const values = [];

    // Get all label elements in the correct order
    const labelElements = [
        document.querySelector('.segment-label1'),
        document.querySelector('.segment-label2'),
        document.querySelector('.segment-label3')
    ];

    labelElements.forEach((labelElement, index) => {
        if (labelElement) {
            const labelText = labelElement.querySelector('.label-text').textContent;
            const valueText = labelElement.querySelector('.value').textContent;

            // Extract the numeric value (before space)
            const value = parseInt(valueText.split(' ')[0]) || 0;

            labels.push(labelText);
            values.push(value);
        }
    });

    return {
        labels: labels,
        values: values,
        colors: ['#9795E0', '#F4E7DB', '#F59174'], // Colors for each segment
        endColors: ['#B2B0EF', '#CEB8A3', '#FFB5A0'] // End colors for gradients
    };
}

// Initialize the chart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if the chart canvas exists on the page
    if (document.getElementById('myCircularChart')) {
        // Get data from HTML
        const chartData = getChartDataFromHTML();

        // Initialize the chart with the data
        initializeCircularChart(chartData);
    }
});
/* final backup 15 january 2026 12:25pm*/