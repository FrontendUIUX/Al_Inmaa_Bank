document.addEventListener("DOMContentLoaded", () => {
    // Append the sidebar + modals + subPanel HTML into body
    document.body.insertAdjacentHTML("beforeend", `
    <aside class="sidebar">
        <div class="userSettings d-flex align-items-center">
            <div class="userProfile d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#userModal">
                <div class="userProfilePhoto">
                    <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/UserProfile.png" alt="Ibrahim K." class="profilePhoto">
                </div>
                <div class="userInformations d-flex flex-column">
                    <span class="username">Ibrahim K.</span>
                    <span class="userPosition">Marketing Department</span>
                </div>
            </div>
            <button class="notifications" data-bs-toggle="modal" data-bs-target="#notificationModal">
                <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Notification.svg"/>
            </button>
        </div>
        <div class="sideBarLinksGroup">
            <div class="sidebarCategory">
                <h6 class="categoryName">Main Links</h6>
                <ul class="links">
                    <li>
                        <div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Dashboard.svg" alt=""></div>
                        <a href="#">Dashboard</a>
                    </li>
                    <li class="active">
                        <div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/My Requests.svg" alt=""></div>
                        <a href="/">My Requests</a>
                    </li>
                    <li class="isSubMenu">
                        <div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/report-and-analytics.svg" alt=""></div>
                        <a href="#">Reports & Analytics</a>
                    </li>
                </ul>
            </div>
            <div class="sidebarCategory">
                <h6 class="categoryName">Departments</h6>
                <ul class="links">
                    <li><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Retail Banking.svg" alt="Retail & Digital Banking"></div><a href="">Retail & Digital Banking</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Human Capital Excellence.svg" alt=""></div><a href="">Marketing & Corporate</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Shariah.svg" alt=""></div><a href="">Shariah</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/information-technology.svg" alt=""></div><a href="">Information Technology</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Operations.svg" alt=""></div><a href="">Operations</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/facilities-management.svg" alt=""></div><a href="">Facilities Management</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Business Acquistion.svg" alt=""></div><a href="">Human Capital</a></li>
                    <li class="isSubMenu"><div class="icon"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/risk-management.svg" alt=""></div><a href="">Risk Management</a></li>
                </ul>
            </div>
        </div>
        <div class="light-dark-mode">
            <div class="toggle-label d-flex align-items-center justify-content-between">
                <img class="sun-img" src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Sun.svg" alt="">
                <span id="mode-label">Light Mode</span>
                <div class="form-check form-switch m-0">
                    <input class="form-check-input" type="checkbox" role="switch" id="modeToggle">
                </div>
            </div>
        </div>
    </aside>

    <!-- NOTIFICATION POPUP -->
    <div class="modal notification-modal" id="notificationModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-end">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Notifications</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="notification-item"><p>Your <span class="bold-text">High Risk Account Opening</span> Request <span class="bold-text">RM-9052XZ</span> is <span class="notification-status rejected">Rejected</span></p><span>5 hours ago</span></div>
                    <div class="notification-item"><p>Your <span class="bold-text">High Risk Account Opening</span> Request <span class="bold-text">RM-9052XZ</span> is <span class="notification-status completed">Completed</span></p><span>11 hours ago</span></div>
                    <div class="notification-item"><p>Your <span class="bold-text">High Risk Account Opening</span> Request <span class="bold-text">RM-72GHSZ</span> is <span class="notification-status completed">Completed</span></p><span>2 days ago</span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- USER PROFILE POPUP -->
    <div class="modal user-modal" id="userModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-end">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="user-modal-header">
                        <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/UserProfile.png" alt="">
                        <div class="name-email">
                            <p class="userNAME">Ibrahim</p>
                            <p class="user-mail">ibrahim_ksa64@gmail.com</p>
                        </div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="user-settings">
                        <a href="#" class="viewProfile"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/user.svg" alt="user"><p>View Profile</p></a>
                        <a href="#" class="account-settings"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/settings.svg" alt="settings">Account Settings</a>
                        <a href="#" class="sign-out"><img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Sign Out.svg" alt="sign-out">Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SUB MENU PANEL -->
    <aside class="subPanel">
        <div class="closeSubpanel">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2894 24.2894L13.1447 13.1447M13.1447 13.1447L2 2M13.1447 13.1447L24.2894 2M13.1447 13.1447L2 24.2894" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="subPanelHeader">
            <h5 class="subSectionTitle">Reports & Analytics</h5>
        </div>
        <div class="subPanelBody">
            <ul></ul>
        </div>
    </aside>
    `);

    // ==== SIDEBAR INTERACTIVITY ====
    const subMenus = document.querySelectorAll(".isSubMenu");
    const subPanel = document.querySelector(".subPanel");
    const subPanelList = subPanel.querySelector(".subPanelBody ul");
    const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
    const overlayShadow = document.querySelector(".overlayShadow");
    const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

    const submenuLinks = {
        "Reports & Analytics": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Marketing Dashboard", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Communication Dashboard", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Information Technology Dashboard", url: "#" }
        ],
        "Retail & Digital Banking": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Branch Reports", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Customer Insights", url: "#" }
        ],
        "Marketing & Corporate": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Campaign Performance", url: "#" }
        ],
        "Shariah": [],
        "Information Technology": [],
        "Operations": [],
        "Facilities Management": [],
        "Human Capital": [],
        "Risk Management": []
    };

    function renderSubLinks(title) {
        subPanelList.innerHTML = "";
        if (submenuLinks[title] && submenuLinks[title].length > 0) {
            submenuLinks[title].forEach(link => {
                const li = document.createElement("li");
                li.innerHTML =`
                    <div class="icon"><img src="\${link.icon}" alt=""></div>
                    <a href="\${link.url}">\${link.text}</a> 
                `;
                subPanelList.appendChild(li);
            });
            return true; 
        }
        return false;
    }

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

            if (!submenuLinks[title] || submenuLinks[title].length === 0) {
                subPanel.classList.remove("active");
                updateOverlay();
                return;
            }

            subPanelTitle.textContent = title;

            if (subPanel.classList.contains("active")) {
                subPanel.classList.remove("active");
                setTimeout(() => {
                    renderSubLinks(title);
                    subPanel.classList.add("active");
                    updateOverlay();
                }, 1000);
            } else {
                renderSubLinks(title);
                subPanel.classList.add("active");
                updateOverlay();
            }
        });
    });

    if (closeSubpanelBtn) {
        closeSubpanelBtn.addEventListener("click", function(){
            subPanel.classList.remove("active");
            updateOverlay();
        });
    }
});
$(document).ready(function () {
  
  // Attach to ALL textboxes that are inside spans whose name contains "s_textbox"
  $(document).on('focus', '[name*=s_textbox] input, [name*=s_textbox] > input', function () {
    $(this).closest('[name*=s_textbox]').addClass('on-focus');
  });

  $(document).on('blur', '[name*=s_textbox] input, [name*=s_textbox] > input', function () {
    const $parent = $(this).closest('[name*=s_textbox]');
    // If textbox is empty, remove class
    if ($(this).val().trim() === '') {
      $parent.removeClass('on-focus');
    }
  });

});


//////////////// end of k2 scripts
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
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Marketing Dashboard", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Communication Dashboard", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Information Technology Dashboard", url: "#" }
        ],
        "Retail & Digital Banking": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Branch Reports", url: "#" },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Customer Insights", url: "#" }
        ],
        "Marketing & Corporate": [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Campaign Performance", url: "#" }
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
        //const sortIcon = serviceHeader.querySelector("svg");

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
            // if(sortIcon){
            //     sortIcon.classList.toggle("active", sortDirection === -1);
            // }
        });
    });