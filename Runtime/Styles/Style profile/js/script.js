// document.addEventListener("DOMContentLoaded", function () {
//   // --- Get the comments div and form div ---
//   const divToMove = document.getElementById("c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_46a2cd23-8b71-ffa0-ab2c-75ec40fb18c1_b32ef5dd-d098-4f15-a2e0-c5ffa5036c7f");
//   const formDiv = document.querySelector(".form");

//   if (divToMove && formDiv) {
//     // Create a wrapper for comments + attachments
//     const wrapper = document.createElement("div");
//     wrapper.className = "commentsAttachments";

//     // Insert wrapper after form
//     formDiv.insertAdjacentElement("afterend", wrapper);

//     // --- Add title before comments ---
//     const viewTitle = document.createElement("div");
//     viewTitle.setAttribute("name", "viewTitle");

//     // Translate if URL contains RuntimeAR
//     if (window.location.href.includes("RuntimeAR")) {
//       viewTitle.textContent = "التعليقات والمرفقات"; // Arabic translation
//     } else {
//       viewTitle.textContent = "Comments & Attachments";
//     }

//     wrapper.appendChild(viewTitle);

//     // Move the comments div inside the wrapper
//     wrapper.appendChild(divToMove);

//     // --- Wait for the attachment div ---
//     const attachmentId = "c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b";
//     const interval = setInterval(function () {
//       const attachmentDiv = document.getElementById(attachmentId);
//       if (attachmentDiv) {
//         clearInterval(interval);

//         // Move attachment inside the same wrapper
//         wrapper.appendChild(attachmentDiv);

//         // Disable toolbar buttons if href is empty or '#'
//         const toolbarButtons = attachmentDiv.querySelectorAll(".toolbar-button");
//         toolbarButtons.forEach(btn => {
//           if (!btn.getAttribute("href") || btn.getAttribute("href") === "#") {
//             btn.classList.add("disabled");
//           }
//         });

//         // --- Append the extra section below wrapper ---
//         const extraSectionId = "c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_1b8a735a-b187-4130-8d85-3b5a33bcaa6e_2659b94a-4d8e-460e-91ea-d306fdafbf73";
//         const extraSection = document.getElementById(extraSectionId);
//         if (extraSection) {
//           wrapper.insertAdjacentElement("afterend", extraSection);
//         }
//       }
//     }, 200); // Check every 200ms until attachment exists
//   }
// });
// Get the current URL
const urlParams = new URLSearchParams(window.location.search);

// Check conditions properly with parentheses
const hasValidParams = (urlParams.has('RequestID') && urlParams.has('MarketingID')) || 
                       (urlParams.has('RequestID') && urlParams.has('AwardID')) ||
                       (urlParams.has('RequestID') && urlParams.has('AOMID')) ||
                       (urlParams.has('RequestID') && urlParams.has('StudyID'));

if (hasValidParams) {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.form');
    
    if (form) {
      form.classList.add('editingForm');
      console.log('editingForm class added to .form');
    } else {
      console.error('Form with class ".form" not found');
    }
  });
}
var fqn = null;
// Menu items
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    try {
      const fqn = SourceCode.Forms.Settings.User.FQN;
      // console.log("Logged-in User FQN: " + fqn);
    } catch (e) {
      console.error("Error retrieving FQN:", e);
    }
  }, 1000);


});

// =====================
// STEPPER MODULE START
// =====================
const Stepper = (() => {

    const STATUS_CLASSES = ["pendingStep", "inProgressStep", "completedStep"];

    const STATUS_MAP = {
        0: "pendingStep",
        1: "inProgressStep",
        2: "completedStep"
    };

    function getStepNumber(step) {
        const el = step.querySelector('[name*="stepNumber"]');
        if (!el) return null;

        const num = Number((el.textContent || "").replace(/\D/g, ""));
        return num in STATUS_MAP ? num : null;
    }

    /**
     * SINGLE SOURCE OF TRUTH
     * Classes update ONLY when numbers change
     */
    function updateStepStatus() {
        const steps = document.querySelectorAll('[name*="s_step"]');
        if (!steps.length) return;

        steps.forEach(step => {
            const stepNumber = getStepNumber(step);
            if (stepNumber === null) return;

            const requiredClass = STATUS_MAP[stepNumber];

            if (step.classList.contains(requiredClass)) return;

            step.classList.remove(...STATUS_CLASSES);
            step.classList.add(requiredClass);
        });
    }

    /**
     * Observe numeric changes (K2 / async safe)
     */
    function observeStepNumbers() {
        const stepNumbers = document.querySelectorAll('[name*="stepNumber"]');
        if (!stepNumbers.length) return;

        const observer = new MutationObserver(() => {
            updateStepStatus();
        });

        stepNumbers.forEach(el => {
            observer.observe(el, {
                childList: true,
                characterData: true,
                subtree: true
            });
        });
    }

    /**
     * Buttons DO NOT force state
     */
    function moveToNextStep() {
        updateStepStatus();
    }

    function moveToPreviousStep() {
        updateStepStatus();
    }

    function debug() {
        const steps = document.querySelectorAll('[name*="s_step"]');
        steps.forEach((step, i) => {
            console.log(`Step ${i + 1}`, {
                number: getStepNumber(step),
                class: STATUS_CLASSES.find(c => step.classList.contains(c)) || "none"
            });
        });
    }

    function init() {
        const steps = document.querySelectorAll('[name*="s_step"]');
        if (!steps.length) return;

        // Initial sync (covers first load where number is already 2)
        updateStepStatus();

        // Watch for future number changes
        observeStepNumbers();

        const continueBtn = document.querySelector('[name*="Continue Button"]');
        const backBtn = document.querySelector('[name*="Back Button"]');

        if (continueBtn) {
            continueBtn.addEventListener("click", e => {
                e.preventDefault();
                moveToNextStep();
            });
        }

        if (backBtn) {
            backBtn.addEventListener("click", e => {
                e.preventDefault();
                moveToPreviousStep();
            });
        }

        console.log("Stepper initialized (number-driven + observer).");
    }

    return {
        init,
        update: updateStepStatus,
        next: moveToNextStep,
        previous: moveToPreviousStep,
        debug
    };

})();

// Boot ONLY if steps exist
document.addEventListener("DOMContentLoaded", () => {
    Stepper.init();
});
// ===================
// STEPPER MODULE END
// ===================



// TABLE SORTING FEATURE - MAIN DASHBOARD START
function initTableSortingMainDashboard() {
  const table = document.getElementById("pendingrestable");
  if (!table) return;

  const sortDirection = {};

  document.removeEventListener("click", handleTableSort);
  document.addEventListener("click", handleTableSort);

  function handleTableSort(e) {
    const headerSpan = e.target.closest("th span");
    if (!headerSpan) return;
    if (!headerSpan.closest("th")?.querySelector("svg")) return;

    const th = headerSpan.closest("th");
    const theadRow = th.parentElement;
    const tbody = table?.querySelector("tbody") || table;
    if (!tbody) return;

    const columnIndex = Array.from(theadRow.children).indexOf(th);
    const columnName = headerSpan.textContent.trim();

    const rows = Array.from(tbody.querySelectorAll("tr"));
    const direction = sortDirection[columnName] || 1;

    rows.sort((a, b) => {
      const cellA = a.children[columnIndex]?.innerText.toLowerCase().trim() || "";
      const cellB = b.children[columnIndex]?.innerText.toLowerCase().trim() || "";
      if (cellA < cellB) return -1 * direction;
      if (cellA > cellB) return 1 * direction;
      return 0;
    });

    sortDirection[columnName] = direction * -1;
    rows.forEach(row => tbody.appendChild(row));

    // Reset icons
    document.querySelectorAll("th svg").forEach(svg => {
      svg.classList.remove("ascending", "descending");
      svg.classList.add("inactive");
    });

    // Update current column’s icon
    const svg = th.querySelector("svg");
    if (svg) {
      svg.classList.remove("inactive");
      if (sortDirection[columnName] === 1) {
        svg.classList.add("descending");
      } else {
        svg.classList.add("ascending");
      }
    }
  }

  // Keep SVGs inactive for new headers
  const observer = new MutationObserver(() => {
    document.querySelectorAll("th svg:not(.inactive)").forEach(svg => {
      svg.classList.add("inactive");
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  console.log("✅ Table sorting initialized");
}
document.addEventListener("DOMContentLoaded", initTableSortingMainDashboard);
// TABLE SORTING FEATURE - MAIN DASHBOARD END 



/////////
// move the action buttons of the form outside the form
document.addEventListener("DOMContentLoaded", function () {
  const divId = "a1785b7c-5537-44bf-a510-6f3e6760d6b1_9cf1ee05-5e62-9845-8d82-6c780b7d3e16_d0300780-c69e-30af-366b-fb216c06c0a2_aaa4b5ee-9511-44ba-ac7e-91b5ad0b7cba";

  const interval = setInterval(() => {
    const divToMove = document.getElementById(divId);
    const form = document.querySelector(".form");
    const header = document.querySelector(".formHeader");

    if (form && divToMove && header) {
      // ✅ Move div below the form only
      form.insertAdjacentElement("afterend", divToMove);
      console.info("✅ Div moved below form; header already exists.");

      clearInterval(interval);
    }
  }, 300);
});

// move the action buttons of the form outside the form
document.addEventListener("DOMContentLoaded", function () {
  const divId = "096be5b7-6d7c-4600-b68b-5cb91a9d0323_43a0cf06-c0ec-fe93-3bbc-c014fc40a1f5_e38beaa1-91cc-b6c7-ed3c-f28a1fe0b315_aaa4b5ee-9511-44ba-ac7e-91b5ad0b7cba";

  const interval = setInterval(() => {
    const divToMove = document.getElementById(divId);
    const form = document.querySelector(".form");
    const header = document.querySelector(".formHeader");

    if (form && divToMove && header) {
      // ✅ Move div below the form only
      form.insertAdjacentElement("afterend", divToMove);
      console.info("✅ Div moved below form; header already exists.");

      clearInterval(interval);
    }
  }, 300);
});
//


//FILTER MY REQUESTS TABLE - MY REQUESTS DASHBOARD START
function myFunction() {
  const input = document.getElementById("UserDashboardSearchInput");
  const filter = input.value.toUpperCase();

  const table = document.getElementById("myTable");
  const tbody = document.getElementById("requestsTable");
  const tr = tbody.getElementsByTagName("tr");

  // Detect Arabic runtime
  const isArabic = window.location.href.indexOf("RuntimeAR") !== -1;

  // Translated texts
  const placeholderTitle = isArabic
    ? "لا توجد بيانات للعرض حالياً"
    : "Nothing to Display Yet";

  const placeholderDescription = isArabic
    ? "سيظهر هذا القسم تلقائياً عند توفر البيانات"
    : "This section will show data once it becomes available";

  // Placeholder wrapper outside the table
  let placeholderWrapper = document.querySelector(".noDataPlaceholderWrapper");

  if (!placeholderWrapper) {
    placeholderWrapper = document.createElement("div");
    placeholderWrapper.classList.add("noDataPlaceholderWrapper");
    placeholderWrapper.style.width = "100%";
    placeholderWrapper.style.textAlign = "center";
    placeholderWrapper.style.padding = "40px 0";

    placeholderWrapper.innerHTML = `
      <div class="noData d-flex align-items-center justify-content-center flex-column">
        <div class="noDataImg">
          <img src="/Runtime/Styles/Style%20profile/images/placeholdericon.png" alt="no data available">
        </div>
        <h5>${placeholderTitle}</h5>
        <p>${placeholderDescription}</p>
      </div>
    `;

    table.parentNode.insertBefore(placeholderWrapper, table);
  }

  // Pagination
  const tablePager = document.getElementById("TablePager");

  let hasVisibleRows = false;

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    let rowMatch = false;

    for (let j = 0; j < td.length; j++) {
      const txtValue = td[j].textContent || td[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowMatch = true;
        break;
      }
    }

    tr[i].style.display = rowMatch ? "" : "none";
    if (rowMatch) hasVisibleRows = true;
  }

  // Toggle table, placeholder, and pagination
  if (!hasVisibleRows) {
    table.style.display = "none";
    placeholderWrapper.style.display = "block";
    if (tablePager) tablePager.setAttribute("style", "display: none !important;");
  } else {
    table.style.display = "";
    placeholderWrapper.style.display = "none";
    if (tablePager) tablePager.setAttribute("style", "display: flex !important;");
  }
}

//FILTER PENDING MY REQUESTS TABLE - MARKETING DASHBOARD END

//FILTER PENDING MY REQUESTS TABLE - MAIN DASHBOARD START 
function pendingRequestsTable(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  const input = document.getElementById("AdminDashboardSearchInput");
  const filter = input.value.toUpperCase();

  const tableWrapper = document.getElementById("AdminRequestsTableContainer");
  const tbody = document.getElementById("pendingRequestsTable");
  const tr = tbody.getElementsByTagName("tr");

  // Language detection
  const isArabic = window.location.href.indexOf("RuntimeAR") !== -1;

  const placeholderText = {
    title: isArabic ? "لا يوجد بيانات للعرض حالياً" : "Nothing to Display Yet",
    description: isArabic
      ? "سيظهر هذا القسم تلقائياً عند توفر البيانات"
      : "This section will show data once it becomes available"
  };

  // Create placeholder if it doesn't exist
  let placeholderWrapper = document.querySelector(".noDataPlaceholderWrapperPending");
  if (!placeholderWrapper) {
    placeholderWrapper = document.createElement("div");
    placeholderWrapper.classList.add("noDataPlaceholderWrapperPending");
    placeholderWrapper.innerHTML = `
      <div class="noData d-flex align-items-center justify-content-center flex-column">
        <div class="noDataImg">
          <img src="/Runtime/Styles/Style%20profile/images/placeholdericon.png" alt="no data available">
        </div>
        <h5>${placeholderText.title}</h5>
        <p>${placeholderText.description}</p>
      </div>
    `;
    tableWrapper.parentNode.insertBefore(placeholderWrapper, tableWrapper);
  }

  const tablePager = document.getElementById("TablePager");
  let hasVisibleRows = false;

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    let rowMatch = false;

    for (let j = 0; j < td.length; j++) {
      const cell = td[j];
      const txtValue = cell.textContent || cell.innerText;

      cell.innerHTML = txtValue;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowMatch = true;

        if (filter !== "") {
          const regex = new RegExp(`(${filter})`, "gi");
          cell.innerHTML = txtValue.replace(regex, `<span class="highlight">$1</span>`);
        }
      }
    }

    tr[i].style.display = rowMatch ? "" : "none";
    if (rowMatch) hasVisibleRows = true;
  }

  if (!hasVisibleRows) {
    tableWrapper.style.display = "none";
    placeholderWrapper.style.display = "block";
    if (tablePager) tablePager.style.setProperty("display", "none", "important");
  } else {
    tableWrapper.style.display = "";
    placeholderWrapper.style.display = "none";
    if (tablePager) tablePager.style.setProperty("display", "flex", "important");
  }
}

// Override the onkeyup handler from HTML
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById("marketingsearchInput");
  
  if (searchInput) {
    // Store the original onkeyup function
    const originalOnKeyUp = searchInput.onkeyup;
    
    // Override it with our own handler
    searchInput.onkeyup = function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
      
      // Call the original function for non-enter keys
      if (originalOnKeyUp) {
        originalOnKeyUp.call(this, event);
      }
    };
    
    // Also add keydown to prevent form submission
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("marketingsearchInput");
  
  if (searchInput) {
    // Add Enter key prevention
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        pendingRequestsTable();
      }
    });
    searchInput.addEventListener("input", pendingRequestsTable);
  }
});
//FILTER PENDING MY REQUESTS TABLE - MARKETING DASHBOARD END

//FILTER PENDING MY REQUESTS TABLE - MARKETING DASHBOARD START
function searcheport() {
  const input = document.getElementById("AnalyticsDashboardSearchInput");
  const filter = input.value.toUpperCase();

  const tbody = document.getElementById("reportsTable");
  const tr = tbody.getElementsByTagName("tr");

  let hasVisibleRows = false;

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    let rowMatch = false;

    for (let j = 0; j < td.length; j++) {
      const cell = td[j];
      const txtValue = cell.textContent || cell.innerText;

      cell.innerHTML = txtValue; // reset highlight

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowMatch = true;

        // highlight
        if (filter !== "") {
          const regex = new RegExp(`(${filter})`, "gi");
          cell.innerHTML = txtValue.replace(regex, `<span class="highlight">$1</span>`);
        }
      }
    }

    tr[i].style.display = rowMatch ? "" : "none";
    if (rowMatch) hasVisibleRows = true;
  }

  // Only show placeholder (NO hiding table wrapper, NO touching pager)
  const placeholder = document.querySelector(".noDataPlaceholderWrapperPending");
  if (placeholder) {
    placeholder.style.display = hasVisibleRows ? "none" : "block";
  }
}
//FILTER PENDING MY REQUESTS TABLE - MARKETING DASHBOARD END

// TABLE SCROLLING FEATURE START
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.table-container');
  if (!container) {
    console.warn('No element with class .table-container found.');
    return;
  }

  let isDown = false;
  let startX;
  let scrollLeft;

  // --- Drag to scroll ---
  container.addEventListener('pointerdown', (e) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.clientX;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const walk = (startX - e.clientX);
    container.scrollLeft = scrollLeft + walk;
  });

  const endDrag = () => {
    isDown = false;
    container.classList.remove('dragging');
  };
  container.addEventListener('pointerup', endDrag);
  container.addEventListener('pointerleave', endDrag);

  // --- Detect scroll to toggle shadow ---
  container.addEventListener('scroll', () => {
    if (container.scrollLeft > 0) {
      container.classList.add('scrolled');
    } else {
      container.classList.remove('scrolled');
    }
  });
});

// KPIS COUNTER ANIMATION START 
function startOdometerWhenVisible(element) {
  var observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var targetValue = parseFloat($(element).attr("data-stat")) || 0;

          // Initialize odometer
          var odometer = new Odometer({
            el: element,
            value: 0, // start from zero
            duration: 4000, // animation duration in ms
            format: '(,ddd).d' // include decimal formatting
          });

          // Start animation
          odometer.update(targetValue);

          // After animation ends (duration = 4000ms)
          setTimeout(function () {
            var formattedValue = targetValue.toLocaleString(undefined, {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1
            });

            // Add the currency label
            $(element).text(formattedValue + " USD M");
          }, 4000);

          // Stop observing this element
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // triggers when 50% of the element is visible
    }
  );

  observer.observe(element);
}
function initializeCounters() {
  $(".kpiCards .card .kpiValue").each(function () {
    startOdometerWhenVisible(this);
  });
}
initializeCounters();
// KPIS COUNTER ANIMATION END 

// STATUS CONTAINER - ACCORDION START 
document.addEventListener('DOMContentLoaded', () => {
  const statusContainer = document.querySelector('.status-container');

  if (statusContainer) {
    statusContainer.addEventListener('click', (event) => {
      const collapseIcon = event.target.closest('.collapse-icon');

      if (collapseIcon) {
        const statusItem = collapseIcon.closest('.status-item');
        if (statusItem) {
          const statusMessage = statusItem.querySelector('.status-message');

          if (statusMessage) {
            if (statusMessage.classList.contains('show')) {
              statusMessage.classList.remove('show');
              statusMessage.classList.add('hide');
            } else {
              statusMessage.classList.remove('hide');
              statusMessage.classList.add('show');
            }
            collapseIcon.classList.toggle('rotated');
          }
        }
      }
    });
  }
});
// STATUS CONTAINER - ACCORDION END 

// DROPDOWN PICKER START 
function initPickerEditable() {
  const wrappers = document.querySelectorAll('span[name*="s_picker"] .picker');

  wrappers.forEach(picker => {
    const wrapper = picker.closest('span[name*="s_picker"]');

    const editableArea = picker.querySelector('.editable-area');
    const searchBtn = picker.querySelector('.picker-search');
    const resolveBtn = picker.querySelector('.picker-resolve');

    const addFocus = () => {
      if (wrapper) wrapper.classList.add("on-focus");
    };

    if (editableArea) {
      editableArea.addEventListener("focus", addFocus);
      editableArea.addEventListener("click", addFocus);
      editableArea.addEventListener("input", addFocus);
    }

    if (searchBtn) searchBtn.addEventListener("click", addFocus);
    if (resolveBtn) resolveBtn.addEventListener("click", addFocus);
  });

  // Remove on outside click IF picker is empty
  document.addEventListener("click", function (e) {
    const clickedInside = e.target.closest('.picker');

    document.querySelectorAll('span[name*="s_dropdown"].on-focus').forEach(wrapper => {
      if (clickedInside && wrapper.contains(clickedInside)) return;

      const editable = wrapper.querySelector(".editable-area");
      const valueText = editable ? editable.innerText.trim() : "";

      if (!valueText) wrapper.classList.remove("on-focus");
    });
  });
}
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    setTimeout(() => initPickerEditable(), 200);
  }
});
$(document).on("DOMNodeInserted", function (e) {
  if ($(e.target).closest('.SFC').length > 0) {
    setTimeout(() => initPickerEditable(), 50);
  }
});
// DROPDOWN PICKER END 
// DATE PICKER - CALENDAR START 
$(document).ready(function() {

    $(document).on("click", '.theme-entry .input-control.select-box .input-control-buttons a', function() {
        const cell = $(this).closest('[name*="s_calendar"]');
        if (cell.length)
            cell.addClass("on-focus");
    });

    $(document).on("input change", '[name*="s_calendar"] input', function() {
        const cell = $(this).closest('[name*="s_calendar"]');
        $(this).val().trim() !== "" ? cell.addClass("on-focus") : cell.removeClass("on-focus");
    });

    $('[name*="s_calendar"] input').each(function() {
        const cell = $(this).closest('[name*="s_calendar"]');
        if ($(this).val().trim() !== "")
            cell.addClass("on-focus");
    });

});
// DATE PICKER - CALENDAR END 

// HEADER START 
document.addEventListener("DOMContentLoaded", () => {
  const spanToMove = document.getElementById("5651e70b-1c9a-4907-b3fe-0cfec8b1f339");
  const form = document.querySelector(".form");

  // ✅ Only create header if it doesn't already contain the span
  if (!spanToMove || !form) {
    console.warn("⚠️ Span or form not found.");
    return;
  }

  const existingHeader = document.querySelector(".formHeader");
  if (existingHeader && existingHeader.contains(spanToMove)) {
    console.warn("⚠️ Span already inside header — skipping creation.");
    return;
  }

  // Create header if not exists
  const header = existingHeader || document.createElement("header");
  header.className = "formHeader";

  // Add SVG only if not already present
  if (!header.querySelector(".openSidebar")) {
    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" class="openSidebar">
        <rect width="50" height="50" rx="12" fill="#F1DFDA"/>
        <rect x="0.5" y="0.5" width="49" height="49" rx="11.5" stroke="#002134" stroke-opacity="0.05"/>
        <path d="M14.5 32.5H35.5M14.5 25H35.5M14.5 17.5H35.5" stroke="#002134" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    header.insertAdjacentHTML("beforeend", svgIcon);
  }

  // Move the span inside the header (if not already moved)
  if (!header.contains(spanToMove)) {
    header.appendChild(spanToMove);
  }

  // Insert header before form if it was newly created
  if (!existingHeader) {
    form.insertAdjacentElement("beforebegin", header);
    // console.info("✅ Header created with SVG and span.");
  }

  // Sidebar toggle
  setTimeout(() => {
    const sidebar = document.querySelector(".sidebar");
    const openSidebarBtn = document.querySelector(".formHeader .openSidebar");
    const darkOverlay = document.querySelector(".overlayShadow");

    if (sidebar && openSidebarBtn && darkOverlay) {
      openSidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        darkOverlay.classList.toggle("active");
      });

      darkOverlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        darkOverlay.classList.remove("active");
      });

      // console.info("✅ Sidebar toggle and overlay click functionality added.");
    } else {
      console.warn("⚠️ Sidebar, openSidebar button, or overlay not found.");
    }
  }, 1200);
});
// HEADER END 

// Select the element by its ID
const element = document.getElementById('511d9373-ca00-4925-a0f9-b9e97e08e6e4_e6d522f3-1ab1-219a-ca97-6bbc63715b61');
// Select the form element
const form = document.querySelector('.form');
// If both exist, move the element outside the form
if (element && form) {
  form.parentNode.insertBefore(element, form.nextSibling);
}

// ACCREDITATION OF MEETING MINUTES MOVE BUTTON OUTSIDE THE FORM
document.addEventListener("DOMContentLoaded", () => {
  const targetDiv = document.getElementById("667130a1-d4a1-4448-95c8-338ef3a5c2ae_e347f1be-47a2-4710-9fb1-aaa230ebda40_4f374200-55a5-22d6-fd23-2b3667c6d8d3_2544a28d-c21d-4f47-a48a-41e993a245ba");
  const form = document.querySelector(".form");

  if (targetDiv && form) {
    // Only move for screens <= 768px (mobile)
    const moveDivForMobile = () => {
      if (window.innerWidth <= 768) {
        if (targetDiv.parentNode !== form.parentNode) {
          form.insertAdjacentElement("afterend", targetDiv);
        }
      } else {
        // Optional: move it back inside .form on larger screens
        if (targetDiv.parentNode !== form) {
          form.appendChild(targetDiv);
        }
      }
    };

    // Initial check
    moveDivForMobile();

    // Update on window resize
    window.addEventListener("resize", moveDivForMobile);
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
// process 2 move buttons outside the form
document.addEventListener("DOMContentLoaded", function () {
  const divId = "7edaed9a-032c-4fce-a780-69a0ae1005ad_f2b548b2-fbcf-9c4a-74eb-fb39a0963d43_f50c64b5-3824-30c9-f024-a655c48cf5c5_aaa4b5ee-9511-44ba-ac7e-91b5ad0b7cba";

  const interval = setInterval(() => {
    const divToMove = document.getElementById(divId);
    const form = document.querySelector(".form");
    const header = document.querySelector(".formHeader");

    if (form && divToMove && header) {
      // ✅ Move div below the form only
      form.insertAdjacentElement("afterend", divToMove);
      console.info("✅ Div moved below form; header already exists.");

      clearInterval(interval);
    }
  }, 300); // check every 300ms until elements exist
});
window.addEventListener("load", function () {
  const skeleton = document.getElementById("skeletonOverlay");
  if (skeleton) {
    skeleton.classList.add("hidden");
    // Optionally remove it from the DOM after fade out
    setTimeout(() => skeleton.remove(), 6000);
  }
});
/* FEEDBACK SECTION START */
function submitRating(rating, el) {
  console.log("rating clicked");
  console.log('Rating submitted:', rating);

  const $buttons = $('.rating-btn');
  const $rating  = $('#ratingScreen');
  const $screens = $('#screens');
  const $success = $('#successScreen');

  $buttons.each(function () {
    const $btn = $(this);

    if (this === el) {
      $btn.addClass('selected');

      $btn.get(0).animate(
        [
          { transform: 'translateY(-2px) scale(1.02)' },
          { transform: 'translateY(-7px) scale(1.10)' },
          { transform: 'translateY(-5px) scale(1.08)' }
        ],
        { duration: 280, easing: 'cubic-bezier(0.22,0.61,0.36,1)', fill: 'forwards' }
      );
    } else {
    
      $btn.get(0).animate(
        [
          { opacity: 1,   transform: 'scale(1)',   filter: 'blur(0px) saturate(1)'   },
          { opacity: 0.45, transform: 'scale(0.98)', filter: 'blur(0.3px) saturate(0.85)' }
        ],
        { duration: 300, easing: 'ease', fill: 'forwards' }
      );
    }

    $btn.prop('disabled', true);
  });

  $rating.get(0).animate(
    [
      { filter: 'brightness(1)'   },
      { filter: 'brightness(0.98)' },
      { filter: 'brightness(1)'   }
    ],
    { duration: 1000, easing: 'ease-in-out', iterations: 1 }
  );

  setTimeout(function () {
    const fadeOut = $rating.get(0).animate(
      [
        { opacity: 1, transform: 'translateX(0px) rotateZ(0deg)' },
        { opacity: 0, transform: 'translateX(-100px) rotateZ(-0.35deg)' }
      ],
      { duration: 600, easing: 'ease', fill: 'forwards' }
    );

    fadeOut.onfinish = function () {

      $rating.css('visibility', 'hidden');
      $screens.addClass('slide-left');
      $('#ratingScreen').attr('aria-hidden', 'true');
      $success.attr('aria-hidden', 'false');

      $success.get(0).animate(
        [
          { opacity: 0, transform: 'translateX(60px) scale(0.98)' },
          { opacity: 1, transform: 'translateX(0) scale(1)' }
        ],
        { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
      );

      const circle = document.querySelector('.checkmark-circle');
      if (circle) {
        circle.animate(
          [
            { transform: 'scale(0)', opacity: 0 },
            { transform: 'scale(1)', opacity: 1 }
          ],
          { duration: 600, delay: 200, easing: 'ease', fill: 'both' }
        );
      }

      const path = document.querySelector('.checkmark path');
      if (path) {
        const len = path.getTotalLength ? path.getTotalLength() : 100;
        path.style.strokeDasharray  = len;
        path.style.strokeDashoffset = len;
        path.animate(
          [
            { strokeDashoffset: len },
            { strokeDashoffset: 0 }
          ],
          { duration: 500, delay: 300, easing: 'ease', fill: 'forwards' }
        );
      }

      ['.success-title', '.success-message'].forEach((sel, i) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.animate(
          [
            { opacity: 0, transform: 'translateY(10px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ],
          { duration: 450, delay: 550 + i * 150, easing: 'ease', fill: 'forwards' }
        );
      });
    };
  }, 1000); 
}
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
document.addEventListener("DOMContentLoaded", function () {
    (function() {
        const card = document.querySelector('.card.marketingoverview');
        if (!card) return;

        const valueSpans = card.querySelectorAll(
            '.label-box1 .value, .label-box2 .value, .label-box3 .value'
        );

        const allZero = Array.from(valueSpans).every(span => {
            const text = (span.textContent || '').trim();
            return text.includes('(0%)');
        });

        if (allZero) {
            card.classList.add('no-content');
        } else {
            card.classList.remove('no-content');
        }
    })();
});
document.addEventListener("DOMContentLoaded", () => {
  // Scope inside the .averageTime card
  const card = document.querySelector(".card.averageTime");
  if (!card) return;

  const dropdownBtn = card.querySelector("#timeFilterDropdown");
  const dropdownMenu = card.querySelector(".dropdown-menu");
  const numberBox = card.querySelector(".box-number-reports");
  if (!dropdownBtn || !dropdownMenu || !numberBox) return;

  const chevron = dropdownBtn.querySelector(".chevron-img");

  // Create or reuse a span for the button label
  let labelSpan = dropdownBtn.querySelector(".dropdown-label");
  if (!labelSpan) {
    labelSpan = document.createElement("span");
    labelSpan.className = "dropdown-label";
    labelSpan.style.marginRight = "0.3em";
    // Insert labelSpan before chevron if chevron exists, otherwise prepend
    if (chevron) dropdownBtn.insertBefore(labelSpan, chevron);
    else dropdownBtn.insertBefore(labelSpan, dropdownBtn.firstChild);
  }

  // ---- remove any direct text nodes (like the hardcoded "Announcement") ----
  Array.from(dropdownBtn.childNodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      // remove the stray text node so only labelSpan + chevron remain
      node.remove();
    }
  });

  // Function to update number & button label
  function updateSelection(item) {
    if (!item) return;
    const raw = (item.dataset.average || "").toString().trim().replace(",", ".");
    const value = parseFloat(raw);
    const rounded = Number.isNaN(value) ? 0 : Math.round(value);

    numberBox.textContent = rounded;
    labelSpan.textContent = item.textContent.trim();
    dropdownMenu.classList.remove("show");
  }

  // Item click handlers (scoped)
  dropdownMenu.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      updateSelection(item);
    });
  });

  // Toggle dropdown (scoped)
  dropdownBtn.addEventListener("click", e => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  // Close when clicking outside the card
  document.addEventListener("click", e => {
    if (!card.contains(e.target)) dropdownMenu.classList.remove("show");
  });

  // Set initial/default selection (prefer "Total Average", fallback to first)
  const defaultItem =
    Array.from(dropdownMenu.querySelectorAll(".dropdown-item"))
      .find(i => i.textContent.trim() === "Total Average") ||
    dropdownMenu.querySelector(".dropdown-item");
  if (defaultItem) updateSelection(defaultItem);
});
console.log("Screen Resolution: " + window.screen.width + " x " + window.screen.height);
console.log("Available Resolution: " + window.screen.availWidth + " x " + window.screen.availHeight);
console.log("Browser Window Size: " + window.innerWidth + " x " + window.innerHeight);
// Lock button size
function lockButtonSize(btn) {
    const originalWidth = btn.offsetWidth;
    const originalHeight = btn.offsetHeight;
    btn.style.width = `${originalWidth}px`;
    btn.style.height = `${originalHeight}px`;
    btn.style.minWidth = `${originalWidth}px`;
    return () => {
        btn.style.width = '';
        btn.style.height = '';
        btn.style.minWidth = '';
    };
}
// Open dropdown
function openDropdown(dropdown) {
    if (!dropdown) return;
    const btn = dropdown.querySelector('.Select-btn');
    document.querySelectorAll('.dropdown-custom').forEach(d => {
        if (d !== dropdown) {
            closeDropdown(d);
        }
    });
    dropdown.classList.add('open', 'active');
    btn.classList.add('active');
}
// Close dropdown
function closeDropdown(dropdown) {
    if (!dropdown) return;
    const btn = dropdown.querySelector('.Select-btn');
    dropdown.classList.remove('open', 'active');
    btn.classList.remove('active');
}
// Show loader and hide dropdown content
function showLoader(dropdown) {
    if (!dropdown) return;
    const btn = dropdown.querySelector('.Select-btn');
    const btnText = dropdown.querySelector('.select-btn-text');
    const btnIcon = dropdown.querySelector('.small-logo-chevron');
    const spinner = dropdown.querySelector('.spinner-border');

    const releaseSize = lockButtonSize(btn);

    // Hide dropdown and show loader
    closeDropdown(dropdown);
    btn.classList.add('dropdown-loader');
    btn.classList.remove('choosen');
    spinner.style.display = 'inline-block';
    btnText.style.visibility = 'hidden';
    btnIcon.style.visibility = 'hidden';

    return releaseSize; // Return release function to call later
}
// Hide loader and show final text/icon
function hideLoader(dropdown, label, iconSrc, iconAlt) {
    if (!dropdown) return;
    const btn = dropdown.querySelector('.Select-btn');
    const btnText = dropdown.querySelector('.select-btn-text');
    const btnIcon = dropdown.querySelector('.small-logo-chevron');
    const spinner = dropdown.querySelector('.spinner-border');

    btnText.textContent = label;
    btnIcon.src = iconSrc;
    btnIcon.alt = iconAlt;

    btn.classList.remove('dropdown-loader');
    btn.classList.add('choosen');
    spinner.style.display = 'none';
    btnText.style.visibility = 'visible';
    btnIcon.style.visibility = 'visible';

    // Release button size after short delay
    setTimeout(() => {
        btn.style.width = '';
        btn.style.height = '';
        btn.style.minWidth = '';
    }, 50);
}
// --- Initialize dropdown functionality ---
document.querySelectorAll('.dropdown-custom').forEach(dropdown => {
    const btn = dropdown.querySelector('.Select-btn');
    const items = dropdown.querySelectorAll('.dropdown-item-custom');

    // Toggle dropdown on button click
    btn.addEventListener('click', e => {
        e.stopPropagation();
        if (dropdown.classList.contains('open')) {
            closeDropdown(dropdown);
        } else {
            openDropdown(dropdown);
        }
    });

    // When an item is selected
    items.forEach(item => {
        item.addEventListener('click', () => {
            const label = item.dataset.label;
            const iconEl = item.querySelector('.option-icon');
            const iconSrc = iconEl.src;
            const iconAlt = iconEl.alt;

            const releaseSize = showLoader(dropdown);

            // Simulate AJAX / action
            setTimeout(() => {
                hideLoader(dropdown, label, iconSrc, iconAlt);
                releaseSize(); // Release button size lock
            }, 1500);
        });
    });
});
// Close dropdowns if clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-custom').forEach(dropdown => closeDropdown(dropdown));
});
// FOCUS STATE FOR FIELDS
$(document).on('focus', '[name*=s_textbox] input, [name*=s_textbox] > input', function() {
    if (!$(this).is('[readonly]')) {
        $(this).closest('[name*=s_textbox]').addClass('on-focus');
    }
});

$(document).on('blur', '[name*=s_textbox] input, [name*=s_textbox] > input', function() {
    const $parent = $(this).closest('[name*=s_textbox]');
    // If textbox is empty, remove class
    if ($(this).val().trim() === '') {
        $parent.removeClass('on-focus');
    }
});

// TextArea
$(document).on('focus', '[name*=s_textarea] textarea, [name*=s_textarea] > textarea', function() {
    if (!$(this).is('[readonly]')) {
        $(this).closest('[name*=s_textarea]').addClass('on-focus');
    }
});
$(document).on('blur', '[name*=s_textarea] textarea, [name*=s_textarea] > textarea', function() {
    const $parent = $(this).closest('[name*=s_textarea]');
    // If textarea is empty, remove class
    if ($(this).val().trim() === '') {
        $parent.removeClass('on-focus');
    }
});

// THIS FUNCTION IS TO FIX THE DROPDOWN VISIBILITY ISSUE IN THE TABLE START - ADDED BY SILVANA
document.addEventListener('click', function(e) {
    if (e.target.closest('.Select-btn')) {
        const button = e.target.closest('.Select-btn');
        const dropdown = button.closest('.dropdown-custom');
        const menu = dropdown.querySelector('.dropdown-menu-custom');
        
        if (menu) {
            const rect = button.getBoundingClientRect();
            const menuHeight = menu.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Check if there's enough space below the button
            // We need space for at least 4 items or the full menu
            const itemHeight = 40; // Approximate height of each dropdown item in pixels
            const minSpaceNeeded = Math.min(menuHeight, itemHeight * 4);
            
            const spaceBelow = windowHeight - rect.bottom;
            
            if (spaceBelow < minSpaceNeeded) {
                // Not enough space below, position above
                menu.style.setProperty('--dropdown-top', (rect.top + window.scrollY - menuHeight) + 'px');
            } else {
                // Enough space below, position normally
                menu.style.setProperty('--dropdown-top', (rect.bottom + window.scrollY) + 'px');
            }
            
            menu.style.setProperty('--dropdown-left', (rect.left + window.scrollX) + 'px');
        }
    }
});
// THIS FUNCTION IS TO FIX THE DROPDOWN VISIBILITY ISSUE IN THE TABLE END - ADDED BY SILVANA

//THIS FUNCTION IS TO MOVE THE BUTTONS OUTSIDE THE FORM START - ADDED BY SILVANA 
document.addEventListener("DOMContentLoaded", function () {
  const interval = setInterval(() => {
    const divToMove = document.querySelector('[name*="buttonsView"]');
    const form = document.querySelector(".form");
    const header = document.querySelector(".formHeader");

    if (form && divToMove && header) {
      // Move div below the form only
      form.insertAdjacentElement("afterend", divToMove);
      console.info("✅ Div moved below form; header already exists.");

      clearInterval(interval);
    }
  }, 300);
});
//THIS FUNCTION IS TO MOVE THE BUTTONS OUTSIDE THE FORM END - ADDED BY SILVANA

// THIS FUNCTION IS TO FIX THE LANGUAGE VARIATION SWITCH START - ADDED BY WALID
// (function () {

//     function applyLanguageButton() {

//         // Find any existing language anchor
//         const anchor = document.querySelector(
//             'a[name="Ar_Button"], a[name="English_Button"], a[name="Eng_Button"]'
//         );

//         if (!anchor) return;

//         // Prevent duplicate buttons
//         if (anchor.previousSibling && anchor.previousSibling.classList?.contains("lang-toggle-btn")) {
//             return;
//         }

//         const btn = document.createElement("button");
//         btn.type = "button";
//         btn.className = "lang-toggle-btn";

//         const path = window.location.pathname;
//         const isArabic = path.startsWith("/RuntimeAR");

//         // Button always shows TARGET language
//         btn.textContent = isArabic ? "EN" : "AR";

//         // Replace anchor with button
//         anchor.parentNode.insertBefore(btn, anchor);
//         anchor.remove();

//         btn.addEventListener("click", function () {

//             let newPath;
//             if (isArabic) {
//                 newPath = path.replace(/^\/RuntimeAR/, "/Runtime");
//             } else {
//                 newPath = path.replace(/^\/Runtime/, "/RuntimeAR");
//             }

//             localStorage.setItem("siteLang", isArabic ? "EN" : "AR");

//             window.location.href =
//                 window.location.origin +
//                 newPath +
//                 window.location.search +
//                 window.location.hash;
//         });
//     }

//     // Run once DOM is ready
//    // document.addEventListener("DOMContentLoaded", applyLanguageButton);

//     // Run again in case portal re-renders toolbar
//    // setTimeout(applyLanguageButton, 2000);

// })();
// (function () {

//     function applyLanguageButton() {

//         // Remove any previously injected buttons
//         document.querySelectorAll(".lang-toggle-btn").forEach(b => b.remove());

//         // Find the current language anchor
//         const anchor = document.querySelector(
//             'a[name="Ar_Button"], a[name="English_Button"], a[name="Eng_Button"]'
//         );

//         if (!anchor || !anchor.parentNode) return;

//         const btn = document.createElement("button");
//         btn.type = "button";
//         btn.className = "lang-toggle-btn";

//         const path = window.location.pathname;
//         const isArabic = path.startsWith("/RuntimeAR");

//         // Show target language only
//         btn.textContent = isArabic ? "EN" : "AR";

//         // 🔑 Replace anchor IN PLACE
//         anchor.parentNode.replaceChild(btn, anchor);

//         btn.addEventListener("click", function () {

//             let newPath;
//             if (isArabic) {
//                 newPath = path.replace(/^\/RuntimeAR/, "/Runtime");
//             } else {
//                 newPath = path.replace(/^\/Runtime/, "/RuntimeAR");
//             }

//             localStorage.setItem("siteLang", isArabic ? "EN" : "AR");

//             window.location.href =
//                 window.location.origin +
//                 newPath +
//                 window.location.search +
//                 window.location.hash;
//         });
//     }

//     // Initial load
//     document.addEventListener("DOMContentLoaded", applyLanguageButton);

//     // Safety rerun for portal re-render
//     setTimeout(applyLanguageButton, 2000);

// })();
// THIS FUNCTION IS TO FIX THE LANGUAGE VARIATION SWITCH END - ADDED BY WALID


//THIS IS A CODE BY WALID TO ADD A LOADER ON LOAD
$(document).ready(function(){
  setTimeout(function(){
  $('.language-switcher').remove();
  },3000)
})

  // 1️⃣ Create loader and content wrapper
  const loader = document.createElement('div');
  loader.id = 'pageLoader';
  loader.textContent = 'Loading…';
  document.body.prepend(loader);

  const content = document.createElement('div');
  content.id = 'pageContent';
  
  // Move all existing body content into content wrapper
  while (document.body.children.length > 1) { // skip loader itself
    content.appendChild(document.body.children[1]);
  }
  document.body.appendChild(content);

  // 2️⃣ Inject CSS styles
  const style = document.createElement('style');
  style.textContent = `
    #pageLoader {
      position: fixed;
      inset: 0;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      z-index: 9999;
    }
    #pageContent {
      visibility: hidden;
    }
  `;
  document.head.appendChild(style);

  // 3️⃣ Show loader for 2 seconds, then reveal content
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.visibility = 'visible';
    }, 2000);
  });


/* final backup 15 january 2026 12:25pm*/