document.addEventListener("DOMContentLoaded", () => {
  const targetSpanId = "5651e70b-1c9a-4907-b3fe-0cfec8b1f339";
  const maxWaitTime = 8000; // stop after 8s if header never appears
  const checkInterval = 300; // retry interval in ms

  const tryInsertSvg = () => {
    const header = document.querySelector(".formHeader");
    const spanToMove = document.getElementById(targetSpanId);

    if (!header || !spanToMove) return false;

    // Prevent duplicates
    if (!header.querySelector(".openSidebar")) {
      const svgIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" class="openSidebar">
          <rect width="50" height="50" rx="12" fill="#F1DFDA"/>
          <rect x="0.5" y="0.5" width="49" height="49" rx="11.5" stroke="#002134" stroke-opacity="0.05"/>
          <path d="M14.5 32.5H35.5M14.5 25H35.5M14.5 17.5H35.5" stroke="#002134" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      header.insertAdjacentHTML("afterbegin", svgIcon);
      header.appendChild(spanToMove);
      console.info("✅ SVG icon added successfully.");
    }

    return true;
  };

  // Try once immediately, then repeatedly until both header and span exist
  if (!tryInsertSvg()) {
    const interval = setInterval(() => {
      if (tryInsertSvg()) clearInterval(interval);
    }, checkInterval);

    // Stop checking after maxWaitTime
    setTimeout(() => clearInterval(interval), maxWaitTime);
  }
});





// Move Comments and attachments section in addition to the buttons outside the form
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
// move the action buttons of the form outside the form
document.addEventListener("DOMContentLoaded", function () {
  const spanId = "5651e70b-1c9a-4907-b3fe-0cfec8b1f339";
  const divId = "a1785b7c-5537-44bf-a510-6f3e6760d6b1_9cf1ee05-5e62-9845-8d82-6c780b7d3e16_d0300780-c69e-30af-366b-fb216c06c0a2_aaa4b5ee-9511-44ba-ac7e-91b5ad0b7cba";

  const interval = setInterval(() => {
    const spanToMove = document.getElementById(spanId);
    const divToMove = document.getElementById(divId);
    const form = document.querySelector(".form");

    if (form && spanToMove && divToMove) {
      // Move span above form
      const header = document.createElement("header");
      header.className = "formHeader";
      header.appendChild(spanToMove);
      form.insertAdjacentElement("beforebegin", header);

      // Move div below form
      form.insertAdjacentElement("afterend", divToMove);

      console.info("✅ Both elements moved successfully.");
      clearInterval(interval);
    }
  }, 300); // check every 300ms
});
window.addEventListener("load", function() {
    const skeleton = document.getElementById("skeletonOverlay");
    if (skeleton) {
        skeleton.classList.add("hidden");
        // Optionally remove it from the DOM after fade out
        setTimeout(() => skeleton.remove(), 6000);
    }
});
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
              icon: "/Runtime/Styles/Style%20profile/images/net/Human Capital Excellence.svg",
              name: "New Request",
              url: "/Runtime/Runtime/Form/NR__MarketingRequest__Form/"
            },
            {
              icon: "/Runtime/Styles/Style%20profile/images/net/Dashboard.svg",
              name: "Dashboard",
              url: "/Runtime/Runtime/Form/MainDashboard"
            },
            {
              icon: "/Runtime/Styles/Style%20profile/images/net/My Requests.svg",
              name: "My Requests",
              url: "/Runtime/Form/UserDashboard/"
            },
            // {
            //   icon: "/Runtime/Styles/Style%20profile/images/net/report-and-analytics.svg",
            //   name: "Reports & Analytics",
            //   url: "#",
            //   children: [
            //     { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", name: "Marketing Dashboard", url: "#" },
            //     { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", name: "Communication Dashboard", url: "#" },
            //     { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", name: "Information Technology Dashboard", url: "#" }
            //   ]
            // }
          ]
        },
        // {
        //   category: "Departments",
        //   links: [
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/Retail Banking.svg", name: "Retail & Digital Banking", url: "#", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/Human Capital Excellence.svg", name: "Marketing & Corporate", url: "/Runtime/Runtime/Form/NR__MarketingRequest__Form/", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/Shariah.svg", name: "Shariah", url: "#", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/information-technology.svg", name: "Information Technology", url: "#", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/Operations.svg", name: "Operations", url: "#", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/facilities-management.svg", name: "Facilities Management", url: "#", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/Business Acquistion.svg", name: "Human Capital", url: "#", children: [] },
        //     { icon: "/Runtime/Styles/Style%20profile/images/net/risk-management.svg", name: "Risk Management", url: "#", children: [] }
        //   ]
        // }
      ];

      // ===== Sidebar HTML skeleton =====
      document.body.insertAdjacentHTML("beforeend", `
        <aside class="sidebar">
          <div class="userSettings d-flex align-items-center">
            <div class="userProfile d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#userModal">
              <div class="userProfilePhoto">
                <img src="/Runtime/Styles/Style%20profile/images/net/Userthumb.png" alt="${userName}" class="profilePhoto" />
              </div>
              <div class="userInformations d-flex flex-column">
                <span class="username">${userName}</span>
                <span class="userPosition">${department}</span>
              </div>
            </div>
            <button class="notifications" data-bs-toggle="modal" data-bs-target="#notificationModal">
              <img src="/Runtime/Styles/Style%20profile/images/net/Notification.svg"/>
            </button>
          </div>
          <div class="sideBarLinksGroup"></div>
          <div class="light-dark-mode">
            <div class="toggle-label d-flex align-items-center justify-content-between">
              <img class="sun-img" src="/Runtime/Styles/Style%20profile/images/net/Sun.svg" alt="">
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
                        <img src="/Runtime/Styles/Style%20profile/images/net/UserProfile.png" alt="">
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
                            <img src="/Runtime/Styles/Style%20profile/images/net/user.svg" alt="user">
                            <p>View Profile</p>
                        </a>
                        <a href="#" class="account-settings">
                            <img src="/Runtime/Styles/Style%20profile/images/net/settings.svg" alt="settings">
                            Account Settings
                        </a>
                        <a href="#" class="sign-out">
                            <img src="/Runtime/Styles/Style%20profile/images/net/Sign Out.svg" alt="sign-out">
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
      { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", text: "Marketing Dashboard", url: "#" },
      { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", text: "Communication Dashboard", url: "#" },
      { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", text: "Information Technology Dashboard", url: "#" }
    ],
    "Retail & Digital Banking": [
      { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", text: "Branch Reports", url: "#" },
      { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", text: "Customer Insights", url: "#" }
    ],
    "Marketing & Corporate": [
      { icon: "/Runtime/Styles/Style%20profile/images/net/sada 1.svg", text: "Campaign Performance", url: "https://win-0q5t2palbof/Runtime/Runtime/Form/NR__MarketingRequest__Form/" }
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
  // $(".marketingKPIs .card .kpiValue").each(function () {
  //   startOdometerWhenVisible(this);
  // });
}

// Initialize all counters
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

  // === Extract data directly from the HTML ===
  const percentageItems = document.querySelectorAll('.overviewCard .sentences');
  const dataMap = Array.from(percentageItems).map(item => {
    const percentText = item.querySelector('.percentage')?.textContent.trim() || "0%";
    const percent = parseInt(percentText.replace('%', '')) || 0;

    // Assign colors dynamically (or customize per label keyword)
    const label = item.querySelector('.label')?.textContent.toLowerCase() || "";
    let baseColor = '#ccc';
    let darkColor = '#999';

    if (label.includes('approved')) {
      baseColor = '#b6b5fa';  // purple
      darkColor = '#8785d8';
    } else if (label.includes('progress')) {
      baseColor = '#ffb5a0';  // peach
      darkColor = '#ff9581';
    } else if (label.includes('pending')) {
      baseColor = '#f4e7db';  // beige
      darkColor = '#f4e7db';
    }

    return { baseColor, darkColor, percent };
  });

  // === Prepare data arrays ===
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
    const bars = 10; // fixed bar count per category (can adjust)
    for (let i = 0; i < bars; i++) {
      dataValues.push(1);
      const factor = ((i + 1) / bars) * (item.percent / 100);
      sliceColors.push(interpolateColor(item.baseColor, item.darkColor, factor));
      greyColors.push('#cccccc');

      // spacer slice
      dataValues.push(0.2);
      sliceColors.push('#ffffff');
      greyColors.push('#ffffff');
    }
  });

  // === Create Chart ===
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

  // === Animate Fill ===
  function animateFill() {
    let i = 0;
    function step() {
      if (i < chart.data.datasets[0].backgroundColor.length) {
        chart.data.datasets[0].backgroundColor[i] = sliceColors[i];
        chart.update();
        i++;
        setTimeout(step, 40); // animation speed
      }
    }
    step();
  }

  chartCanvas.style.transition = "all 0.1s ease";
  animateFill();
});
// BAR CHART - MARKETING DASHBOARD
const canvas = document.getElementById('myBarChart');
if (canvas) {
  const ctx = canvas.getContext('2d');

  // Parse data from canvas attributes
  const parseData = (attr) => {
    const raw = canvas.getAttribute(attr);
    if (!raw) return { labels: [], values: [] };

    const items = raw.split(',').map(item => item.trim());
    const labels = [];
    const values = [];

    items.forEach(pair => {
      const [label, value] = pair.split(':').map(x => x.trim());
      if (label && !isNaN(value)) {
        labels.push(label);
        values.push(Number(value));
      }
    });

    return { labels, values };
  };

  const monthData = parseData('data-months');
  const yearData = parseData('data-years');

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, '#9795E0');
  gradient.addColorStop(1, 'rgba(191, 189, 249, 1)');

  // Initial (default) dataset
  const chartData = {
    labels: monthData.labels,
    datasets: [{
      data: monthData.values,
      backgroundColor: gradient,
      borderRadius: 4,
      barPercentage: 0.6,
      categoryPercentage: 0.8
    }]
  };

  // Initialize chart
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
          ticks: { stepSize: 10, color: 'rgba(0, 33, 52, 1)', font: { size: 14 } },
          grid: { borderDash: [5, 5], color: '#cccccc32' },
        },
        x: {
          grid: { display: false },
          ticks: { color: 'rgba(0, 33, 52, 1)', font: { size: 12 } },
        }
      },
      animations: {
        y: {
          duration: 500,
          easing: 'easeInOut',
          delay: ctx => ctx.dataIndex * 150
        }
      }
    }
  });

  // Dropdown filter handler
  document.querySelectorAll('.dropdown-item[data-filter]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const filter = item.getAttribute('data-filter');
      const btn = document.getElementById('timeFilterDropdown');
      if (btn) btn.innerHTML = `${item.textContent} <img src="/Runtime/Styles/Style%20profile/images/net/Chevron Down.svg" class="chevron-img" alt="chevrondown">`;

      // Update chart data dynamically
      const selectedData = filter === 'year' ? yearData : monthData;
      myBarChart.data.labels = selectedData.labels;
      myBarChart.data.datasets[0].data = selectedData.values;
      myBarChart.update();
    });
  });

} else {
  console.info("ℹ️ Skipping chart initialization — element #myBarChart not found.");
}



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
        document.getElementById('timeFilterDropdown').innerHTML = `${this.textContent} <img src="/Runtime/Styles/Style%20profile/images/net/Chevron Down.svg" alt="chevrondown" class="chevron-img">`;
    });
});

/* FEEDBACK SECTION START */
function submitRating(rating, el) {
    console.log('Rating submitted:', rating);
    const $buttons = $('.rating-btn');
    $buttons.each(function () {
        const $btn = $(this);
        if (this === el) {
            $btn.addClass('selected');
        }
        $btn.prop('disabled', true);
    });

    const $rating = $('#ratingScreen');
    const $screens = $('#screens');

    setTimeout(function () {
        $rating.addClass('fade-out-right-to-left');

        setTimeout(function () {
            $rating.css('visibility', 'hidden');
            $screens.addClass('slide-left');
            $('#ratingScreen').attr('aria-hidden', 'true');
            $('#successScreen').attr('aria-hidden', 'false');
            $('#successScreen').addClass('fade-in-right-to-left');
        }, 600); // Wait for fade animation to complete
    }, 1000); // Wait 1 second before starting fade animation
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

// USER SATISFACTION SCRIPT 

/*!
 * Custom Dashboard Script – Chart.js v4.5.1 Compatible
 * Includes:
 *  - Circular (Doughnut) Chart
 *  - Popular Requests Chart
 *  - User Satisfaction Bar Animation
 *  - Table Column Sorters
 *  © 2025 – Works with Chart.js 4.5.1 + chartjs-plugin-datalabels@2.2.0
 */

(() => {
  // ================================
  //  CIRCULAR OVERVIEW CHART
  // ================================
  const circularCanvas = document.getElementById('myCircularChart');

  if (circularCanvas && window.Chart) {
    if (window.ChartDataLabels && !Chart.registry.plugins.get('datalabels')) {
      Chart.register(ChartDataLabels);
    }

    const labelsMap = [
      { selector: '.segment-label1', label: 'Closed', color: '#9795E0' },
      { selector: '.segment-label2', label: 'In Progress', color: '#FF9480' },
      { selector: '.segment-label3', label: 'Pending', color: '#E9DBD0' }
    ];

    // Read numbers from HTML
    const values = labelsMap.map(({ selector }) => {
      const el = document.querySelector(`${selector} .value`);
      if (!el) return 0;
      const match = el.textContent.match(/[\d.]+/);
      return match ? parseFloat(match[0]) : 0;
    });

    const total = values.reduce((a, b) => a + b, 0);
    const labelEls = labelsMap.map(l => document.querySelector(l.selector)).filter(Boolean);

    const hideLabels = () => {
      labelEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(6px)';
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        el.style.pointerEvents = 'none';
      });
    };

    const showLabels = () => {
      labelEls.forEach(el => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.pointerEvents = '';
        }, 120);
      });
    };

    hideLabels();

    new Chart(circularCanvas, {
      type: 'doughnut',
      data: {
        labels: labelsMap.map(l => l.label),
        datasets: [{
          data: values,
          backgroundColor: labelsMap.map(l => l.color),
          borderWidth: 12,
          borderColor: '#ffffff',
          borderRadius: 12
        }]
      },
      options: {
        cutout: '60%',
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: { display: false }
        },
        animation: {
          duration: 900,
          easing: 'easeOutCubic',
          onProgress: hideLabels,
          onComplete: showLabels
        }
      },
      plugins: [ChartDataLabels]
    });
  }

  // ================================
  //  USER SATISFACTION RATING BAR
  // ================================
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

  function drawRatingBar(canvas, rating, opts = {}) {
    const {
      segments = 10,
      gap = 4,
      height = 8,
      fillColor = '#FF9480',
      bgColor = '#e0e0e0',
      radius = 50
    } = opts;

    const ctx = prepCanvasForDPR(canvas);
    const W = canvas.clientWidth || canvas.width;
    const H = canvas.clientHeight || height;
    const totalGap = gap * (segments - 1);
    const segW = (W - totalGap) / segments;
    const segH = height;
    const y = Math.round((H - segH) / 2);
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < segments; i++) {
      const x = Math.round(i * (segW + gap));
      ctx.fillStyle = bgColor;
      roundRectPath(ctx, x, y, segW, segH, radius);
      ctx.fill();
    }

    const full = Math.floor(Math.max(0, Math.min(rating, segments)));
    const part = Math.max(0, Math.min(1, rating - full));
    ctx.fillStyle = fillColor;

    for (let i = 0; i < full; i++) {
      const x = Math.round(i * (segW + gap));
      roundRectPath(ctx, x, y, segW, segH, radius);
      ctx.fill();
    }
    if (part > 0 && full < segments) {
      const x = Math.round(full * (segW + gap));
      roundRectPath(ctx, x, y, segW * part, segH, radius);
      ctx.fill();
    }
  }

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function animateRatingBar(canvas, targetRating, options = {}) {
    const { duration = 900, easing = easeOutCubic, ...drawOpts } = options;
    let rafId = null, start = null;

    if (canvas.__animCancel) canvas.__animCancel();
    canvas.__animCancel = () => { if (rafId) cancelAnimationFrame(rafId); };

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

  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.rating-canvas');
    const numEl = document.querySelector('.userSatisfaction .big-number');
    const raw = parseFloat((numEl?.textContent || '0').trim());
    const rating = isNaN(raw) ? 0 : Math.max(0, Math.min(10, raw));

    if (canvas) animateRatingBar(canvas, rating);
  });

  // ================================
  //  POPULAR REQUESTS BAR CHART
  // ================================
  (function initPopularRequests() {
    const el = document.getElementById('popularRequestsChart');
    if (!el || !window.Chart) return;

    if (window.ChartDataLabels && !Chart.registry.plugins.get('datalabels')) {
      Chart.register(ChartDataLabels);
    }

    // Parse data from data-chart attribute
    const dataAttr = el.getAttribute('data-chart') || '';
    const matches = [...dataAttr.matchAll(/name:([^,]+)--\s*count:(\d+)/g)];
    const labels = matches.map(m => m[1].trim());
    const values = matches.map(m => parseInt(m[2].trim(), 10));

    const colors = ['#2FC04F', '#FF9480', '#CAD8E1', '#0B1B24', '#9795E0'];

    let labelAlpha = 0;

    const chart = new Chart(el, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: colors.slice(0, labels.length),
          borderRadius: 6,
          barThickness: 22,
          borderSkipped: false
        }]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        animation: {
          duration: 800,
          easing: 'easeOutCubic',
          onComplete: (anim) => fadeInLabels(anim.chart, 500)
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
          datalabels: {
            display: true,
            anchor: 'start',
            align: 'right',
            font: { family: 'AlinmaTheSans', weight: '400', size: 12 },
            formatter: (_v, ctx) => ctx.chart.data.labels[ctx.dataIndex],
            color: () => `rgba(255,255,255,${labelAlpha})`
          }
        },
        scales: {
          y: { display: false },
          x: { display: false }
        }
      },
      plugins: [ChartDataLabels]
    });

    function fadeInLabels(chart, duration = 500) {
      const start = performance.now();
      function step(ts) {
        const t = Math.min(1, (ts - start) / duration);
        labelAlpha = t;
        chart.update('none');
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  })();
})();
