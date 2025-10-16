document.addEventListener("DOMContentLoaded", function () {
  // --- Get the comments div and form div ---
  const divToMove = document.getElementById("c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_46a2cd23-8b71-ffa0-ab2c-75ec40fb18c1_b32ef5dd-d098-4f15-a2e0-c5ffa5036c7f");
  const formDiv = document.querySelector(".form");

  if (divToMove && formDiv) {
    // Create a wrapper for comments + attachments
    const wrapper = document.createElement("div");
    wrapper.className = "commentsAttachments";

    // Insert wrapper after form
    formDiv.insertAdjacentElement("afterend", wrapper);

    // --- Add title before comments ---
    const viewTitle = document.createElement("div");
    viewTitle.setAttribute("name", "viewTitle");
    viewTitle.textContent = "Comments & Attachments";
    wrapper.appendChild(viewTitle);

    // Move the comments div inside the wrapper
    wrapper.appendChild(divToMove);

    // --- Wait for the attachment div ---
    const attachmentId = "c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_670a4cd6-be18-3c1a-1dfe-7205b9468cac_48ccda29-94f2-448b-bdee-389afebb2c9b";
    const interval = setInterval(function () {
      const attachmentDiv = document.getElementById(attachmentId);
      if (attachmentDiv) {
        clearInterval(interval);

        // Move attachment inside the same wrapper
        wrapper.appendChild(attachmentDiv);

        // Disable toolbar buttons if href is empty or '#'
        const toolbarButtons = attachmentDiv.querySelectorAll(".toolbar-button");
        toolbarButtons.forEach(btn => {
          if (!btn.getAttribute("href") || btn.getAttribute("href") === "#") {
            btn.classList.add("disabled");
          }
        });

        // --- Append the extra section below wrapper ---
        const extraSectionId = "c8550e1c-75df-44c7-bbf9-664f0a3e3d2d_021c5380-e0aa-493c-a4e5-f995d800dd1e_1b8a735a-b187-4130-8d85-3b5a33bcaa6e_2659b94a-4d8e-460e-91ea-d306fdafbf73";
        const extraSection = document.getElementById(extraSectionId);
        if (extraSection) {
          wrapper.insertAdjacentElement("afterend", extraSection);
        }
      }
    }, 200); // Check every 200ms until attachment exists
  }
});
// colapse
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
document.addEventListener("DOMContentLoaded", function () {
  const userProfiledp = document.querySelector(".userProfile");
  const userModal = document.querySelector(".user-modal");

  if (userProfiledp && userModal) {
    userProfiledp.addEventListener("click", function () {
      userModal.classList.toggle("show");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    try {
      // ===== Get user info from K2 SourceCode object =====
      const fqn = SourceCode.Forms.Settings.User.FQN;
      const userName = fqn.split("\\").pop();

      // ===== Get department text from form label =====
      const departmentEl = document.querySelector("[name*='User_Department_DataLabel']");
      const department = departmentEl ? departmentEl.textContent.trim() : "Unknown Department";

      // ===== Sidebar configuration (dynamic links) =====
      const sidebarConfig = [
        {
          category: "Main Links",
          links: [
            {
              icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Dashboard.svg",
              name: "Dashboard",
              url: "/Runtime/Runtime/Form/MainDashboard"
            },
            {
              icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/My Requests.svg",
              name: "My Requests",
              url: "/Runtime/Form/UserDashboard/"
            },
            {
              icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/report-and-analytics.svg",
              name: "Reports & Analytics",
              url: "#",
              // children: [
              //   { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", name: "Marketing Dashboard", url: "#" },
              //   { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", name: "Communication Dashboard", url: "#" },
              //   { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", name: "Information Technology Dashboard", url: "#" }
              // ]
            }
          ]
        },
        {
          category: "Departments",
          links: [
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Retail Banking.svg", name: "Retail & Digital Banking", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Human Capital Excellence.svg", name: "Marketing & Corporate", url: "/Runtime/Runtime/Form/NR__MarketingRequest__Form/", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Shariah.svg", name: "Shariah", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/information-technology.svg", name: "Information Technology", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Operations.svg", name: "Operations", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/facilities-management.svg", name: "Facilities Management", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Business Acquistion.svg", name: "Human Capital", url: "#", children: [] },
            { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/risk-management.svg", name: "Risk Management", url: "#", children: [] }
          ]
        }
      ];

      // ===== Sidebar HTML skeleton =====
      document.body.insertAdjacentHTML("beforeend", `
        <aside class="sidebar">
          <div class="userSettings d-flex align-items-center">
            <div class="userProfile d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#userModal">
              <div class="userProfilePhoto">
                <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Userthumb.png" alt="${userName}" class="profilePhoto" />
              </div>
              <div class="userInformations d-flex flex-column">
                <span class="username">${userName}</span>
                <span class="userPosition">${department}</span>
              </div>
            </div>
            <button class="notifications" data-bs-toggle="modal" data-bs-target="#notificationModal">
              <img src="https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/Notification.svg"/>
            </button>
          </div>
          <div class="sideBarLinksGroup"></div>
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
        <div class="overlayShadow" style="display:none;"></div>
        <aside class="subPanel">
          <div class="closeSubpanel">X</div>
          <div class="subPanelHeader"><h5 class="subSectionTitle"></h5></div>
          <div class="subPanelBody"><ul></ul></div>
        </aside>
        <!-- USER PROFILE POPUP START -->
    <div class="modal user-modal" id="userModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-end">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="user-modal-header">
                        <img src="../images/net/UserProfile.png" alt="">
                        <div class="name-email">
                            <p class="userNAME">${userName}</p>
                            <p class="user-mail"></p>
                        </div>

                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="user-settings">
                        <a href="#" class="viewProfile">
                            <img src="../images/net/user.svg" alt="user">
                            <p>View Profile</p>
                        </a>
                        <a href="#" class="account-settings">
                            <img src="../images/net/settings.svg" alt="settings">
                            Account Settings
                        </a>
                        <a href="#" class="sign-out">
                            <img src="../images/net/Sign Out.svg" alt="sign-out">
                            Sign Out
                        </a>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <!-- USER PROFILE POPUP END -->
      `);

      // ===== Render Sidebar Links =====
      const sidebarContainer = document.querySelector(".sideBarLinksGroup");
      const currentPath = window.location.pathname;

      sidebarConfig.forEach(section => {
        const category = document.createElement("div");
        category.classList.add("sidebarCategory");

        const title = document.createElement("h6");
        title.classList.add("categoryName");
        title.textContent = section.category;
        category.appendChild(title);

        const ul = document.createElement("ul");
        ul.classList.add("links");

        section.links.forEach(link => {
          const li = document.createElement("li");
          if (link.children && link.children.length > 0) {
            li.classList.add("isSubMenu");
          } else {
            li.classList.add("noSubChildren");
          }

          // mark active link based on current page
          if (link.url && currentPath === new URL(link.url, window.location.origin).pathname) {
            li.classList.add("active");
          }

          li.innerHTML = `
            <div class="icon"><img src="${link.icon}" alt=""></div>
            <a href="${link.url || '#'}">${link.name}</a>
          `;
          // ====== Add disabled class if href is empty or '#' ======
          const anchor = li.querySelector("a");
          if (!anchor.getAttribute("href") || anchor.getAttribute("href").trim() === "#" || anchor.getAttribute("href").trim() === "") {
            anchor.classList.add("disabled");
            anchor.setAttribute("aria-disabled", "true");
            anchor.setAttribute("tabindex", "-1"); // remove from tab order
          }

          // Prevent clicks on disabled links
          anchor.addEventListener("click", (e) => {
            if (anchor.classList.contains("disabled")) {
              e.preventDefault();
              e.stopPropagation();
              // optional: show tooltip or message
            }
          });
          ul.appendChild(li);
        });

        category.appendChild(ul);
        sidebarContainer.appendChild(category);
      });

      // ===== Submenu rendering logic =====
      const subPanel = document.querySelector(".subPanel");
      const subPanelList = subPanel.querySelector(".subPanelBody ul");
      const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
      const overlayShadow = document.querySelector(".overlayShadow");
      const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

      function updateOverlay() {
        overlayShadow.style.display = subPanel.classList.contains("active") ? "block" : "none";
      }

      document.querySelectorAll(".isSubMenu").forEach(menu => {
        menu.addEventListener("click", e => {
          e.preventDefault();
          const title = menu.querySelector("a").innerText.trim();

          // find config
          let found = null;
          sidebarConfig.forEach(sec => {
            sec.links.forEach(l => {
              if (l.name === title) found = l;
            });
          });

          if (!found || !found.children || found.children.length === 0) {
            subPanel.classList.remove("active");
            updateOverlay();
            return;
          }

          subPanelTitle.textContent = title;
          subPanelList.innerHTML = "";

          found.children.forEach(child => {
            const li = document.createElement("li");
            li.innerHTML = `
              <div class="icon"><img src="${child.icon}" alt=""></div>
              <a href="${child.url}">${child.name}</a>
            `;
            subPanelList.appendChild(li);
          });

          subPanel.classList.add("active");
          updateOverlay();
        });
      });

      if (closeSubpanelBtn) {
        closeSubpanelBtn.addEventListener("click", () => {
          subPanel.classList.remove("active");
          updateOverlay();
        });
      }

    } catch (e) {
      console.error("Error rendering sidebar:", e);
    }
  }, 1000);
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
      // if (select && (select.hasAttribute("readonly") || select.disabled)) return;
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
var fqn = null;
// Menu items
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    try {
      const fqn = SourceCode.Forms.Settings.User.FQN;
      console.log("Logged-in User FQN: " + fqn);
    } catch (e) {
      console.error("Error retrieving FQN:", e);
    }
  }, 1000);
});


//////////////// end of k2 scripts
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
  const requestsTotalElement = document.querySelector('.resquestText');
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
      { icon: "https://frontenduiux.github.io/Al_Inmaa_Bank/images/net/sada 1.svg", text: "Campaign Performance", url: "https://win-0q5t2palbof/Runtime/Runtime/Form/NR__MarketingRequest__Form/" }
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
    closeSubpanelBtn.addEventListener("click", function () {
      subPanel.classList.remove("active");
      updateOverlay();
    });
  }
});


//FILTER MY REQUESTS TABLE - MY REQUESTS DASHBOARD
function myFunction() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const tbody = document.getElementById("requestsTable");
  const tr = tbody.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    let rowMatch = false;

    for (let j = 0; j < td.length; j++) {
      let txtValue = td[j].textContent || td[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowMatch = true;
        break; // stop checking once one column matches
      }
    }

    tr[i].style.display = rowMatch ? "" : "none";
  }
}
//FILTER PENDING MY REQUESTS TABLE - MARKETING DASHBOARD
function pendingRequestsTable(){
   const input = document.getElementById("marketingsearchInput");
  const filter = input.value.toUpperCase();
  const tbody = document.getElementById("pendingRequestsTable");
  const tr = tbody.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    let rowMatch = false;

    for (let j = 0; j < td.length; j++) {
      let txtValue = td[j].textContent || td[j].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowMatch = true;
        break; // stop checking once one column matches
      }
    }

    tr[i].style.display = rowMatch ? "" : "none";
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
          odometer.on('stop', function () {
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
// TABLE SORTING FEATURE START - MY REQUESTS
document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("requestsTable");
  const headers = document.querySelectorAll("th:has(svg) span"); // clickable spans with sort icons
  let sortDirection = {}; // Keep track of sort direction per column

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const columnName = header.textContent.trim();
      let rows = Array.from(tbody.querySelectorAll("tr"));

      // Detect which column to sort by
      let columnIndex = Array.from(header.closest("tr").children).indexOf(header.closest("th"));

      rows.sort((a, b) => {
        let cellA = a.querySelectorAll("td")[columnIndex]?.innerText.toLowerCase().trim() || "";
        let cellB = b.querySelectorAll("td")[columnIndex]?.innerText.toLowerCase().trim() || "";

        if (cellA < cellB) return -1 * (sortDirection[columnName] || 1);
        if (cellA > cellB) return 1 * (sortDirection[columnName] || 1);
        return 0;
      });

      // Toggle direction for this column
      sortDirection[columnName] = (sortDirection[columnName] || 1) * -1;

      // Re-append sorted rows
      rows.forEach(row => tbody.appendChild(row));

      // Reset all icons → inactive
      document.querySelectorAll("th svg").forEach(svg => {
        svg.classList.remove("ascending", "descending");
        svg.classList.add("inactive");
      });

      // Apply class to current icon
      const svg = header.querySelector("svg");
      if (svg) {
        svg.classList.remove("inactive");
        if (sortDirection[columnName] === 1) {
          svg.classList.add("descending"); // last click flipped to descending
        } else {
          svg.classList.add("ascending");
        }
      }
    });
  });

  // Initialize all icons as inactive
  document.querySelectorAll("th svg").forEach(svg => {
    svg.classList.add("inactive");
  });
});
// TABLE SORTING FEATURE START - Marketing Dashboard
document.addEventListener("DOMContentLoaded", function () {
  const tbody = document.getElementById("pendingRequestsTable");
  const headers = document.querySelectorAll("th:has(svg) span"); // clickable spans with sort icons
  let sortDirection = {}; // Keep track of sort direction per column

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const columnName = header.textContent.trim();
      let rows = Array.from(tbody.querySelectorAll("tr"));

      // Detect which column to sort by
      let columnIndex = Array.from(header.closest("tr").children).indexOf(header.closest("th"));

      rows.sort((a, b) => {
        let cellA = a.querySelectorAll("td")[columnIndex]?.innerText.toLowerCase().trim() || "";
        let cellB = b.querySelectorAll("td")[columnIndex]?.innerText.toLowerCase().trim() || "";

        if (cellA < cellB) return -1 * (sortDirection[columnName] || 1);
        if (cellA > cellB) return 1 * (sortDirection[columnName] || 1);
        return 0;
      });

      // Toggle direction for this column
      sortDirection[columnName] = (sortDirection[columnName] || 1) * -1;

      // Re-append sorted rows
      rows.forEach(row => tbody.appendChild(row));

      // Reset all icons → inactive
      document.querySelectorAll("th svg").forEach(svg => {
        svg.classList.remove("ascending", "descending");
        svg.classList.add("inactive");
      });

      // Apply class to current icon
      const svg = header.querySelector("svg");
      if (svg) {
        svg.classList.remove("inactive");
        if (sortDirection[columnName] === 1) {
          svg.classList.add("descending"); // last click flipped to descending
        } else {
          svg.classList.add("ascending");
        }
      }
    });
  });

  // Initialize all icons as inactive
  document.querySelectorAll("th svg").forEach(svg => {
    svg.classList.add("inactive");
  });
});
// MARKETING DASHBOARD - OVERVIEW CHART 
document.addEventListener("DOMContentLoaded", function() {
  const chartCanvas = document.getElementById('semiCircleChart');
  const ctx = chartCanvas.getContext('2d');

  const dataMap = [
    { baseColor: '#b6b5faff', darkColor: '#8785d8ff', bars: 10, percent: 50 },   // purple
    { baseColor: '#ffb5a0ff', darkColor: '#ff9581ff', bars: 6, percent: 30 },  // peach
    { baseColor: '#F4E7DB', darkColor: '#F4E7DB', bars: 6, percent: 20 }     // beige
  ];

  const dataValues = [];
  const sliceColors = [];
  const greyColors = [];

  function interpolateColor(color1, color2, factor) {
    const c1 = color1.match(/\w\w/g).map(h => parseInt(h,16));
    const c2 = color2.match(/\w\w/g).map(h => parseInt(h,16));
    const result = c1.map((v,i) => Math.round(v + (c2[i]-v)*factor));
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
  }

  dataMap.forEach(item => {
    for (let i = 0; i < item.bars; i++) {
      dataValues.push(1);
      const factor = ((i + 1) / item.bars) * (item.percent / 100);
      sliceColors.push(interpolateColor(item.baseColor, item.darkColor, factor));
      greyColors.push('#cccccc');

      // spacer slice
      dataValues.push(0.2);
      sliceColors.push('#ffffff');
      greyColors.push('#ffffff');
    }
  });

  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: dataValues.map(() => ''),
      datasets: [{
        data: dataValues,
        backgroundColor: greyColors.slice(),
        borderWidth: 0,
        borderRadius: 10,
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
    let i = 0;
    function step() {
      if (i < chart.data.datasets[0].backgroundColor.length) {
        chart.data.datasets[0].backgroundColor[i] = sliceColors[i];
        chart.update();
        i++;
        setTimeout(step, 50);
      }
    }
    step();
  }

  chartCanvas.style.transition = "all 0.3s ease";
  animateFill();

  // ===== UPDATE HTML PERCENTAGES =====
  const percentageSpans = document.querySelectorAll('.overviewCard .percentage');
  dataMap.forEach((item, index) => {
    if (percentageSpans[index]) {
      percentageSpans[index].textContent = `${item.percent}%`;
    }
  });
});
// BAR CHART - MARKETING DASHBOARD
const ctx = document.getElementById('myBarChart').getContext('2d');

// Create a linear gradient
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#9795E0'); 
gradient.addColorStop(1, 'rgba(191, 189, 249, 1)'); 

// Initial chart data (All-Time)
let chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
    datasets: [{
        data: [120, 90, 184, 130, 190, 70, 115],
        backgroundColor: gradient,
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.8
    }]
};

const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 200,
                ticks: { stepSize: 20, color: 'rgba(0, 33, 52, 1)', font: { size: 14 } },
                grid: { borderDash: [5, 5], color: '#cccccc32' },
                title: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: { color: 'rgba(0, 33, 52, 1)', font: { size: 12 }, maxRotation: 0, minRotation: 0, autoSkip: false },
                title: { display: false }
            }
        },
        animations: {
            y: {
                duration: 1500,
                easing: 'easeOutBounce',
                delay: (context) => context.dataIndex * 150
            }
        }
    }
});

// Trigger animation from 0 → actual values
setTimeout(() => {
    myBarChart.data.datasets[0].data = actualData;
    myBarChart.update();
}, 50);


// Example data for different filters
const chartValues = {
    month: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], data: [120, 90, 184, 130, 190, 70, 115] },
    year: { labels: ['2019', '2020', '2021', '2022', '2023'], data: [120, 80, 58, 13, 20] },
};

// Dropdown click listener
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.dataset.filter; // day, month, year, all
        const selected = chartValues[filter];

        // Update chart
        myBarChart.data.labels = selected.labels;
        myBarChart.data.datasets[0].data = selected.data;
        myBarChart.update();

        // Update dropdown text
        document.getElementById('timeFilterDropdown').innerHTML = `${this.textContent} <img src="../images/net/Chevron Down.svg" alt="chevrondown" class="chevron-img">`;
    });
});