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
  if (!$(this).is('[readonly]')) {
    $(this).closest('[name*=s_textbox]').addClass('on-focus');
  }
});

$(document).on('blur', '[name*=s_textbox] input, [name*=s_textbox] > input', function () {
  const $parent = $(this).closest('[name*=s_textbox]');
  // If textbox is empty, remove class
  if ($(this).val().trim() === '') {
    $parent.removeClass('on-focus');
  }
});


  // TextArea
$(document).on('focus', '[name*=s_textarea] textarea, [name*=s_textarea] > textarea', function () {
  if (!$(this).is('[readonly]')) {
    $(this).closest('[name*=s_textarea]').addClass('on-focus');
  }
});

$(document).on('blur', '[name*=s_textarea] textarea, [name*=s_textarea] > textarea', function () {
  const $parent = $(this).closest('[name*=s_textarea]');
  // If textarea is empty, remove class
  if ($(this).val().trim() === '') {
    $parent.removeClass('on-focus');
  }
});


});
// dropdown
document.addEventListener("DOMContentLoaded", function () {
  // Find all dropdown wrappers
  const wrappers = document.querySelectorAll('span[name*="s_dropdown"]');

  wrappers.forEach(wrapper => {
    const select = wrapper.querySelector("select");
    const icon = wrapper.querySelector(".dropdown");
    const visibleControl = wrapper.querySelector("a.input-control");
    const fontSpan = visibleControl ? visibleControl.querySelector(".styling-font") : null;

    // Add focus class only if NOT readonly or disabled
    const addFocus = () => {
      if (select && (select.hasAttribute("readonly") || select.disabled)) return;
      wrapper.classList.add("on-focus");
    };

    // Check if user has selected a value (text inside .styling-font)
    const hasValue = () => fontSpan && fontSpan.textContent.trim() !== "";

    // When clicking dropdown icon
    if (icon) {
      icon.addEventListener("click", addFocus);
    }

    // When clicking visible control
    if (visibleControl) {
      visibleControl.addEventListener("click", addFocus);
    }

    // When hidden select changes (in case it updates .styling-font)
    if (select) {
      select.addEventListener("change", () => {
        addFocus();
      });
    }
  });

  // Remove on-focus only if no value selected
  document.addEventListener("click", function (e) {
    const clickedInside = e.target.closest('span[name*="s_dropdown"]');

    document.querySelectorAll('span[name*="s_dropdown"].on-focus').forEach(wrapper => {
      if (clickedInside && clickedInside === wrapper) return; // ignore clicks inside current wrapper

      const fontSpan = wrapper.querySelector(".styling-font");
      const hasValue = fontSpan && fontSpan.textContent.trim() !== "";

      if (!hasValue) {
        wrapper.classList.remove("on-focus");
      }
    });
  });
});

// stepper 
function updateStepStatus() {
  const statusMap = {
    0: "pendingStep",
    1: "inProgressStep",
    2: "completedStep"
  };

  document.querySelectorAll('[name*="s_step"]').forEach(step => {
    const stepNumberEl = step.querySelector('[name*="stepNumber"]');
    if (!stepNumberEl) return;

    // Force number comparison
    const stepNumber = parseInt(stepNumberEl.textContent.trim(), 10);

    // Remove all status classes before applying new one
    step.classList.remove(...Object.values(statusMap));

    if (statusMap.hasOwnProperty(stepNumber)) {
      step.classList.add(statusMap[stepNumber]);
    }
  });
}

function moveToNextStep() {
  const steps = Array.from(document.querySelectorAll('[name*="s_step"]'));

  // Find the step currently in progress
  const currentStep = steps.find(step =>
    step.classList.contains("inProgressStep")
  );

  if (currentStep) {
    const stepNumberEl = currentStep.querySelector('[name*="stepNumber"]');

    // Mark current step as completed (2)
    if (stepNumberEl) {
      stepNumberEl.textContent = "2";
    }

    // Move to next step and mark as in progress (1)
    const nextStep = steps[steps.indexOf(currentStep) + 1];
    if (nextStep) {
      const nextStepNumberEl = nextStep.querySelector('[name*="stepNumber"]');
      if (nextStepNumberEl) {
        nextStepNumberEl.textContent = "1";
      }
    }
  }

  // Refresh classes
  updateStepStatus();
}

function moveToPreviousStep() {
  const steps = Array.from(document.querySelectorAll('[name*="s_step"]'));

  // Find the step currently in progress
  const currentStep = steps.find(step =>
    step.classList.contains("inProgressStep")
  );

  if (currentStep) {
    const stepNumberEl = currentStep.querySelector('[name*="stepNumber"]');

    // Mark current step as pending (0)
    if (stepNumberEl) {
      stepNumberEl.textContent = "0";
    }

    // Move to previous step and mark as in progress (1)
    const prevStep = steps[steps.indexOf(currentStep) - 1];
    if (prevStep) {
      const prevStepNumberEl = prevStep.querySelector('[name*="stepNumber"]');
      if (prevStepNumberEl) {
        prevStepNumberEl.textContent = "1";
      }
    }
  }

  // Refresh classes
  updateStepStatus();
}

document.addEventListener("DOMContentLoaded", () => {
  updateStepStatus();

  const continueBtn = document.querySelector(
    "#d0300780-c69e-30af-366b-fb216c06c0a2_6aaf7a9c-0919-dc4a-0dd7-8e94cc163dec"
  );
  const backBtn = document.querySelector(
    "a#d0300780-c69e-30af-366b-fb216c06c0a2_80e627c7-7f8e-62f7-4f44-88a84122ffeb"
  );

  if (continueBtn) {
    continueBtn.addEventListener("click", event => {
      event.preventDefault();
      moveToNextStep();
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", event => {
      event.preventDefault();
      moveToPreviousStep();
    });
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//   // Run on page load
//   updateStepStatus();

//   // Example: attach to a button if it exists
//   const button = document.querySelector("button#updateStepBtn"); // change selector as needed
//   if (button) {
//     button.addEventListener("click", () => {
//       const firstStep = document.querySelector('[name*="s_step"] [name*="stepNumber"]');
//       if (firstStep) {
//         firstStep.textContent = "1"; // Update dynamically
//         updateStepStatus();
//       }
//     });
//   }

//   // Attach to your specific link if it exists
//   const link = document.querySelector(
//     "div#a1785b7c-5537-44bf-a510-6f3e6760d6b1 a#d0300780-c69e-30af-366b-fb216c06c0a2_6aaf7a9c-0919-dc4a-0dd7-8e94cc163dec"
//   );
//   if (link) {
//     link.addEventListener("click", updateStepStatus);
//   }
// });


// Create the overlay div
const overlay = document.createElement("div");

// Add your CSS class (assuming you already defined `.overlay-shadow` in your stylesheet)
overlay.classList.add("overlayShadow");

// Append it to the body
document.body.appendChild(overlay);

function updateDropdownState(select) {
  const dropdownWrapper = select.closest(".s_dropdown");
  if (!dropdownWrapper) return;

  if (select.classList.contains("disabled") || select.disabled) {
    dropdownWrapper.classList.add("disabled");
  } else {
    dropdownWrapper.classList.remove("disabled");
  }
}

// Initial run (page load)
document.querySelectorAll("select").forEach(updateDropdownState);

// Watch for changes to class/attributes
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.target.tagName === "SELECT") {
      updateDropdownState(mutation.target);
    }
  });
});

// Observe all selects
document.querySelectorAll("select").forEach(select => {
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["class", "disabled"] // only watch relevant changes
  });
});






//add readonly class to textbox

function updateTextboxState(input) {
  const textboxWrapper = input.closest(".s_textbox");
  if (!textboxWrapper) return;

  if (input.hasAttribute("readonly") || input.classList.contains("readonly")) {
    textboxWrapper.classList.add("readonly");
  } else {
    textboxWrapper.classList.remove("readonly");
  }
}

// Initial sync on page load
document.querySelectorAll('.s_textbox input[type="text"]').forEach(updateTextboxState);

// Watch for attribute/class changes dynamically
const observer1 = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.target.tagName === "INPUT") {
      updateTextboxState(mutation.target);
    }
  });
});

// Observe all text inputs inside .s_textbox
document.querySelectorAll('.s_textbox input[type="text"]').forEach(input => {
  observer.observe(input, {
    attributes: true,
    attributeFilter: ["readonly", "class"], // only watch relevant attributes
  });
});

//////////////// end of k2 scripts




// const requestsData = [
//     { type: 'marketing', percentage: 56, elementId: 'marketing-request', percentId: 'marketing-request-percentage' },
//     { type: 'study', percentage: 20, elementId: 'request-a-study', percentId: 'request-study-percentage' },
//     { type: 'branch', percentage: 17, elementId: 'branch-visit-notes', percentId: 'branch-viti-percentage' },
//     { type: 'other', percentage: 7, elementId: 'other', percentId: 'other-percentage' },
// ];
// function showPercentages() {
//     requestsData.forEach(item => {
//         const percentElement = document.getElementById(item.percentId);
//         if (percentElement) {
//             percentElement.textContent = `${item.percentage}%`;
//         }
//     });
// }
// function animateSequentially(index = 0) {
//     if (index >= requestsData.length) return;

//     const item = requestsData[index];
//     const segmentElement = document.getElementById(item.elementId);

//     if (segmentElement) {
//         segmentElement.style.width = '0';
//         setTimeout(() => {
//             segmentElement.style.width = `${item.percentage}%`;
//             setTimeout(() => {
//                 animateSequentially(index + 1);
//             }, 1600);
//         }, 100);
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     showPercentages();
//     animateSequentially();
// });

document.addEventListener('DOMContentLoaded', () => {
    // 1. Create and append the progress bar container
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';
    progressBarContainer.id = 'progress-bar-container';

    progressBarContainer.innerHTML = `
        <div class="request-progress-zone marketing-request progress-segment" id="marketing-request"></div>
        <div class="request-progress-zone request-a-study progress-segment" id="request-a-study"></div>
        <div class="request-progress-zone branch-visit-notes progress-segment" id="branch-visit-notes"></div>
        <div class="request-progress-zone other progress-segment" id="other"></div>
    `;

    // 2. Insert it right after the #requests-total element
    const requestsTotalElement = document.getElementById('requests-total');
    if (requestsTotalElement && requestsTotalElement.parentNode) {
        requestsTotalElement.insertAdjacentElement('afterend', progressBarContainer);
    }

    // 3. Map request types to progress segment IDs
    const segmentMap = {
        'Marketing Request': 'marketing-request',
        'HR': 'request-a-study',
        'Accounting': 'branch-visit-notes',
        'Other': 'other'
    };

    // 4. Extract percentages from request cards
    const percentages = {};
    const requestCards = document.querySelectorAll('.request-card');

    requestCards.forEach(card => {
        const label = card.querySelector('.request-name span')?.textContent.trim();
        const percentText = card.querySelector('.percentage')?.textContent.trim();
        const percentValue = parseInt(percentText?.replace('%', ''), 10) || 0;

        const segmentId = segmentMap[label];
        if (segmentId) {
            percentages[segmentId] = percentValue;
        }
    });

    // 5. Animate each segment sequentially
    const segmentIdsInOrder = ['marketing-request', 'request-a-study', 'branch-visit-notes', 'other'];

    function animateSegment(index = 0) {
        if (index >= segmentIdsInOrder.length) return;

        const segmentId = segmentIdsInOrder[index];
        const segmentElement = document.getElementById(segmentId);
        const percentValue = percentages[segmentId] || 0;

        if (segmentElement) {
            segmentElement.style.width = '0'; // Reset
            setTimeout(() => {
                segmentElement.style.transition = 'width 1.5s ease';
                segmentElement.style.width = `${percentValue}%`;
                setTimeout(() => {
                    animateSegment(index + 1);
                }, 1600); // Delay before next
            }, 100);
        } else {
            animateSegment(index + 1);
        }
    }

    // Start the animation
    animateSegment();
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