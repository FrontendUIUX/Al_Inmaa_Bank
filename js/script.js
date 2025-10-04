const requestsData = [
    { type: 'marketing', percentage: 56, elementId: 'marketing-request', percentId: 'marketing-request-percentage' },
    { type: 'study', percentage: 20, elementId: 'request-a-study', percentId: 'request-study-percentage' },
    { type: 'branch', percentage: 17, elementId: 'branch-visit-notes', percentId: 'branch-viti-percentage' },
    { type: 'other', percentage: 7, elementId: 'other', percentId: 'other-percentage' },
];
function showPercentages() {
    requestsData.forEach(item => {
        const percentElement = document.getElementById(item.percentId);
        if (percentElement) {
            percentElement.textContent = `${item.percentage}%`;
        }
    });
}
function animateSequentially(index = 0) {
    if (index >= requestsData.length) return;

    const item = requestsData[index];
    const segmentElement = document.getElementById(item.elementId);

    if (segmentElement) {
        segmentElement.style.width = '0';
        setTimeout(() => {
            segmentElement.style.width = `${item.percentage}%`;
            setTimeout(() => {
                animateSequentially(index + 1);
            }, 1600);
        }, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showPercentages();
    animateSequentially();
});
// SIDE BAR SUBMENU 
document.addEventListener("DOMContentLoaded", () => {
    const subMenus = document.querySelectorAll(".isSubMenu");
    const subPanel = document.querySelector(".subPanel");
    const subPanelList = subPanel.querySelector(".subPanelBody ul");
    const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
    const overlayShadow = document.querySelector(".overlayShadow");
    const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

    const submenuLinks = {
        "Reports & Analytics": [
            { icon: "../images/net/sada 1.svg", text: "Marketing Dashboard", url: "#" },
            { icon: "../images/net/sada 1.svg", text: "Communication Dashboard", url: "#" },
            { icon: "../images/net/sada 1.svg", text: "Information Technology Dashboard", url: "#" }
        ],
        "Retail & Digital Banking": [
            { icon: "../images/net/sada 1.svg", text: "Branch Reports", url: "#" },
            { icon: "../images/net/sada 1.svg", text: "Customer Insights", url: "#" }
        ],
        "Marketing & Corporate": [
            { icon: "../images/net/sada 1.svg", text: "Campaign Performance", url: "#" }
        ],
        "Shariah": [],
        "Information Technology": [],
        "Operations": [],
        "Facilities Management": [],
        "Human Capital": [],
        "Risk Management": []
    };

    function renderSubLinks(title) {
        subPanelList.innerHTML = ""; // Clear old links

        if (submenuLinks[title] && submenuLinks[title].length > 0) {
            submenuLinks[title].forEach(link => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <div class="icon">
                        <img src="${link.icon}" alt="">
                    </div>
                    <a href="${link.url}">${link.text}</a>
                `;
                subPanelList.appendChild(li);
            });
            return true; 
        }
        return false;
    }

    // helper to sync overlay with active panels
    function updateOverlay() {
        const hasActivePanel = document.querySelector(".subPanel.active");
        if (overlayShadow) {
            overlayShadow.style.display = hasActivePanel ? "block" : "none";
        }
    }

    subMenus.forEach(menu => {
        menu.addEventListener("click", e => {
            e.preventDefault();

            const title = menu.querySelector("a").innerText.trim();

            // If no links → close panel and update overlay
            if (!submenuLinks[title] || submenuLinks[title].length === 0) {
                subPanel.classList.remove("active");
                updateOverlay();
                return;
            }

            // Update panel title
            subPanelTitle.textContent = title;

            if (subPanel.classList.contains("active")) {
                // remove first
                subPanel.classList.remove("active");

                // wait 1 second before adding back
                setTimeout(() => {
                    renderSubLinks(title);
                    subPanel.classList.add("active");
                    updateOverlay();
                }, 1000); // ← enforce 1 second delay
            } else {
                renderSubLinks(title);
                subPanel.classList.add("active");
                updateOverlay();
            }
        });
    });

    // Close Sub Panel
    if (closeSubpanelBtn) {
        closeSubpanelBtn.addEventListener("click", function(){
            subPanel.classList.remove("active");
            updateOverlay();
        });
    }
});


// Filter table by search input
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
// Animate Counters
function startOdometerWhenVisible(element) {
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var targetValue = parseFloat($(element).attr("data-stat")) || 0;

          var odometer = new Odometer({
            el: element,
            value: 0, // Start from 0
            duration: 4000,
            format: '(,ddd).d', // Include decimal point in the format
          });

          // Update the odometer value
          odometer.update(targetValue);

          // Add the currency label after the animation finishes
          odometer.on('stop', function() {
            var formattedValue = targetValue.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
            $(element).text(formattedValue + " USD M"); // Update text with currency and suffix
          });

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Adjust threshold as needed
    }
  );
  observer.observe(element);
}
function initializeCounters() {
  $(".card .kpiValue").each(function () {
    startOdometerWhenVisible(this);
  });
}
initializeCounters();


// Light mode toggle
    $("#modeToggle").on("change", function () {
        if ($(this).is(":checked")) {
            $(".sun-img").hide();   
        } else {
            $(".sun-img").show();   
        }
    });


// SORT TABLE 
document.addEventListener("DOMContentLoaded", function () {
        const tbody = document.getElementById("requestsTable");
        const serviceHeader = document.querySelector("th.service span"); // span contains the SVG
        const sortIcon = serviceHeader.querySelector("svg");

        let sortDirection = 1; // 1 = ascending, -1 = descending

        serviceHeader.addEventListener("click", function () {
            let rows = Array.from(tbody.querySelectorAll("tr"));

            rows.sort((a, b) => {
                let serviceA = a.querySelector("td[data-title='Service']").innerText.toLowerCase();
                let serviceB = b.querySelector("td[data-title='Service']").innerText.toLowerCase();

                if (serviceA < serviceB) return -1 * sortDirection;
                if (serviceA > serviceB) return 1 * sortDirection;
                return 0;
            });

            // Toggle sort direction
            sortDirection *= -1;

            // Re-append rows in sorted order
            rows.forEach(row => tbody.appendChild(row));

            // Toggle active class on the SVG
            sortIcon.classList.toggle("active", sortDirection === -1);
        });
    });