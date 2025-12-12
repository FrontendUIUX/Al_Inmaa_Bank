// ================================
// SIDEBAR + LIGHT/DARK MODE SCRIPT
// ================================
// ================================
// SIDEBAR + LIGHT/DARK MODE SCRIPT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    try {
      // ===== Get user info from K2 SourceCode object =====
      const fqn = SourceCode?.Forms?.Settings?.User?.FQN || "";
      const userName = fqn.split("\\").pop() || "User";

      // ===== Get department text from form label =====
      const departmentEl = document.querySelector("[name*='User_Department_DataLabel']");
      const department = departmentEl ? departmentEl.textContent.trim() : "Unknown Department";

      // ===== Sidebar configuration (dynamic links) =====
      const sidebarConfig = [
        {
          category: "Main Links",
          links: [
            { icon: "/Runtime/Styles/Style%20profile/images/net/Human Capital Excellence.svg", name: "New Request", url: "/Runtime/Runtime/Form/NR__MarketingRequest__Form/" },
            { icon: "/Runtime/Styles/Style%20profile/images/net/Dashboard.svg", name: "Dashboard", url: "/Runtime/Runtime/Form/MainDashboard" },
            { icon: "/Runtime/Styles/Style%20profile/images/net/My Requests.svg", name: "My Requests", url: "/Runtime/Form/UserDashboard/" },
            { icon: "/Runtime/Styles/Style%20profile/images/net/report-and-analytics.svg", name: "Marketing Dashboard", url: "/Runtime/Form/Marketing__Admin__Dashboard/?ServiceID=4" },
          ]
        },
        // {
        //   category: "Departments",
        //   links: [
        //     { 
        //       icon: "/Runtime/Styles/Style%20profile/images/net/Human Capital Excellence.svg", 
        //       name: "Award Recommendation Process", 
        //       url: "#",
        //       children: [
        //         { 
        //           icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
        //           name: "New Request", 
        //           url: "/Runtime/Runtime/Form/AR__AwardRecommendationRequest__Form/" 
        //         }
        //       ]
        //     },
            
        //   ]
        // },
      ];

      // ===== Sidebar HTML skeleton =====
      document.body.insertAdjacentHTML("beforeend", `
        <aside class="sidebar">
          <div class="userSettings d-flex align-items-center">
            <div class="userProfile d-none d-lg-flex align-items-center">
              <div class="userProfilePhoto">
                <img src="/Runtime/Styles/Style%20profile/images/net/Userthumb.png" alt="${userName}" class="profilePhoto" />
              </div>
              <div class="userInformations d-flex flex-column">
                <span class="username">${userName}</span>
                <span class="userPosition">${department}</span>
              </div>
            </div>
            <div class="userNotification">
              <button class="notifications" data-bs-toggle="modal" data-bs-target="#notificationModal">
              <img src="/Runtime/Styles/Style%20profile/images/net/Notification.svg">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" rx="12" fill="#043049" fill-opacity="0.9"></rect>
                <mask id="path-2-outside-1_3002_3880" maskUnits="userSpaceOnUse" x="12" y="13.5078" width="23" height="23" fill="black">
                <rect fill="white" x="12" y="13.5078" width="23" height="23"></rect>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6749 16.5076C19.6272 16.5076 16.3459 19.7889 16.3459 23.8366V30.6002C15.5868 30.697 15 31.3453 15 32.1307C15 32.9829 15.6908 33.6737 16.543 33.6737H30.815C31.6672 33.6737 32.358 32.9829 32.358 32.1307C32.358 31.3425 31.7669 30.6923 31.0038 30.5992V23.8366C31.0038 19.7889 27.7225 16.5076 23.6749 16.5076Z"></path>
                </mask>
                <path d="M16.3459 30.6002L16.662 33.0801L18.8459 32.8018V30.6002H16.3459ZM31.0038 30.5992H28.5038V32.8127L30.7011 33.0808L31.0038 30.5992ZM16.3459 23.8366H18.8459C18.8459 21.1696 21.0079 19.0076 23.6749 19.0076V16.5076V14.0076C18.2465 14.0076 13.8459 18.4082 13.8459 23.8366H16.3459ZM16.3459 30.6002H18.8459V23.8366H16.3459H13.8459V30.6002H16.3459ZM15 32.1307H17.5C17.5 32.6198 17.1354 33.0198 16.662 33.0801L16.3459 30.6002L16.0298 28.1203C14.0382 28.3741 12.5 30.0708 12.5 32.1307H15ZM16.543 33.6737V31.1737C17.0715 31.1737 17.5 31.6021 17.5 32.1307H15H12.5C12.5 34.3636 14.3101 36.1737 16.543 36.1737V33.6737ZM30.815 33.6737V31.1737H16.543V33.6737V36.1737H30.815V33.6737ZM32.358 32.1307H29.858C29.858 31.6021 30.2865 31.1737 30.815 31.1737V33.6737V36.1737C33.0479 36.1737 34.858 34.3636 34.858 32.1307H32.358ZM31.0038 30.5992L30.7011 33.0808C30.2252 33.0227 29.858 32.6215 29.858 32.1307H32.358H34.858C34.858 30.0634 33.3086 28.3618 31.3065 28.1176L31.0038 30.5992ZM31.0038 23.8366H28.5038V30.5992H31.0038H33.5038V23.8366H31.0038ZM23.6749 16.5076V19.0076C26.3418 19.0076 28.5038 21.1696 28.5038 23.8366H31.0038H33.5038C33.5038 18.4082 29.1032 14.0076 23.6749 14.0076V16.5076Z" fill="white" mask="url(#path-2-outside-1_3002_3880)"></path>
                <path d="M21.6445 38.2852C22.9155 39.5292 24.9355 39.568 26.2533 38.3737L26.3509 38.2852" stroke="white" stroke-width="2.3" stroke-linecap="round"></path>
                <circle class="newNotification" cx="32.5" cy="17.5" r="7.5" fill="#BB2C30" stroke="#042E47" stroke-width="4.5"></circle>
              </svg>

            </button>
             <div class="icon-popup">
    <div class="icon-popup-content">
        <div class="icon-popup-header">
            <h3 class="icon-popup-title">Notifications</h3>
            <span class="popup-count">10</span>
        </div>
 
        <div id="NotificationsPopupContainer"></div>
        <div class="noNotifications" id="noNotifications">
          <div class="d-flex align-items-center justify-content-center">
            <img src="/Runtime/Styles/Style%20Profile/images/placeholdericon.png" />
            <h5>No Notifications Yet</h5>
            <p>You’re all caught up!</p>
          </div>
        </div>
        <a href="/Runtime/Runtime/Form/NotificationsPage/" class="icon-popup-close" type="button">View All</a>
        </div>
    </div>
            </div>
          </div>
          </div>
          
          
          <div class="sideBarLinksGroup"></div>
          <div class="toggle-container">
            <span class="toggle-label">Light Mode</span>
            <label class="switch">
              <input type="checkbox" id="modeToggle">
              <span class="slider round"></span>
              <img class="sun-img" src="/Runtime/Styles/Style%20profile/images/net/Sun.svg" alt="Sun">
            </label>
          </div>
        </aside>
        <div class="overlayShadow" style="display:none;"></div>
        <aside class="subPanel">
          <div class="closeSubpanel">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.2894 24.2894L13.1447 13.1447M13.1447 13.1447L2 2M13.1447 13.1447L24.2894 2M13.1447 13.1447L2 24.2894" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div class="subPanelHeader"><h5 class="subSectionTitle"></h5></div>
          <div class="subPanelBody"><ul></ul></div>
        </aside>
      `);
        // show notification popup
      const notificationButton = document.querySelector(".notifications");
      const notificationPopup = document.querySelector(".icon-popup");
      if(notificationButton && notificationPopup){
        notificationButton.addEventListener("click", function(){
          notificationPopup.classList.toggle("visible");
        })
      }
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
          // Add isSubMenu class if link has children
          if (link.children && link.children.length > 0) {
            li.classList.add("isSubMenu");
          } else {
            li.classList.add("noSubChildren");
          }

          // Check if current page matches the link URL
          if (link.url && link.url !== "#" && currentPath === new URL(link.url, window.location.origin).pathname) {
            li.classList.add("active");
          }

          li.innerHTML = `<div class="icon"><img src="${link.icon}" alt=""></div><a href="${link.url || '#'}">${link.name}</a>`;

          const anchor = li.querySelector("a");
          if (!anchor.getAttribute("href") || anchor.getAttribute("href").trim() === "#") {
            anchor.classList.add("disabled");
            anchor.setAttribute("aria-disabled", "true");
            anchor.setAttribute("tabindex", "-1");
          }
          anchor.addEventListener("click", e => {
            if (anchor.classList.contains("disabled")) {
              e.preventDefault();
            }
          });

          ul.appendChild(li);
        });

        category.appendChild(ul);
        sidebarContainer.appendChild(category);
      });

      // ===== Submenu logic =====
      const subPanel = document.querySelector(".subPanel");
      const subPanelList = subPanel.querySelector(".subPanelBody ul");
      const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
      const overlayShadow = document.querySelector(".overlayShadow");
      const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

      function updateOverlay() {
        overlayShadow.style.display = subPanel.classList.contains("active") ? "block" : "none";
      }

      // Add click event to items with submenus
      document.querySelectorAll(".isSubMenu").forEach(menu => {
        menu.addEventListener("click", e => {
          e.preventDefault();
          e.stopPropagation();
          
          const title = menu.querySelector("a").innerText.trim();
          let found = null;
          
          // Find the clicked link in the config
          sidebarConfig.forEach(sec => {
            sec.links.forEach(l => {
              if (l.name === title) found = l;
            });
          });
          
          // If no children found, don't open subpanel
          if (!found || !found.children || found.children.length === 0) {
            subPanel.classList.remove("active");
            updateOverlay();
            return;
          }
          
          // Update subpanel title
          subPanelTitle.textContent = title;
          
          // Clear and rebuild subpanel list
          subPanelList.innerHTML = "";
          
          found.children.forEach(child => {
            const li = document.createElement("li");
            
            // Check if child link is active
            const childPath = new URL(child.url, window.location.origin).pathname;
            if (currentPath === childPath) {
              li.classList.add("active");
            }
            
            li.innerHTML = `
              <div class="icon">
                <img src="${child.icon}" alt="${child.name}">
              </div>
              <a href="${child.url}">${child.name}</a>
            `;
            
            subPanelList.appendChild(li);
          });
          
          // Show subpanel
          subPanel.classList.add("active");
          updateOverlay();
        });
      });

      // Close subpanel when close button is clicked
      if (closeSubpanelBtn) {
        closeSubpanelBtn.addEventListener("click", () => {
          subPanel.classList.remove("active");
          updateOverlay();
        });
      }

      // Close subpanel when clicking on overlay
      overlayShadow.addEventListener("click", () => {
        subPanel.classList.remove("active");
        updateOverlay();
      });

      // Close subpanel with Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && subPanel.classList.contains("active")) {
          subPanel.classList.remove("active");
          updateOverlay();
        }
      });

      // ================================
      // LIGHT/DARK MODE TOGGLE
      // ================================
      const THEME_KEY = "theme";
      const toggle = document.getElementById("modeToggle");
      const icon = document.querySelector(".sun-img");
      const label = document.querySelector(".toggle-label");

      const applyTheme = (theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        toggle.checked = theme === "dark";
        if (icon) icon.src = theme === "dark"
          ? "/Runtime/Styles/Style%20profile/images/net/Moon.svg"
          : "/Runtime/Styles/Style%20profile/images/net/Sun.svg";
        if (label) label.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
      };

      // Determine initial theme
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved === "dark" || saved === "light" ? saved : (prefersDark ? "dark" : "light");
      applyTheme(initial);

      // Listen for toggle changes
      toggle.addEventListener("change", () => {
        const next = toggle.checked ? "dark" : "light";
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });

    } catch (e) {
      console.error("Error rendering sidebar:", e);
    }
  }, 500);
});



//   notification process
document.addEventListener("DOMContentLoaded", () => {

    function extractNotificationId(item) {
        const title = item.querySelector(".notification-title")?.innerText || "";
        const match = title.match(/\(([^)]+)\)/); // extract text inside parentheses
        const id = match ? match[1] : null;
        console.log("Extracted ID:", id);
        return id;
    }

    function updateNotificationCounter() {
        const notifItems = document.querySelectorAll('.notification-item');
        console.log("Total notifications found:", notifItems.length);

        let seen = JSON.parse(localStorage.getItem("seenNotifications") || "[]");
        console.log("Seen IDs from localStorage:", seen);

        const currentIds = [...notifItems]
            .map(item => extractNotificationId(item))
            .filter(id => id !== null);

        console.log("Current notification IDs:", currentIds);

        const unread = currentIds.filter(id => !seen.includes(id));
        console.log("Unread notifications:", unread);

        const counter = document.querySelector(".popup-count");
        if (counter) {
            counter.textContent = unread.length;
            console.log("Updated counter to:", counter.textContent);
        }
    }

    function markNotificationsAsRead() {
        const notifItems = document.querySelectorAll('.notification-item');
        const ids = [...notifItems]
            .map(item => extractNotificationId(item))
            .filter(id => id !== null);

        localStorage.setItem("seenNotifications", JSON.stringify(ids));
        console.log("Marked notifications as read, saved IDs:", ids);

        updateNotificationCounter();
    }

    // Initial counter update
    updateNotificationCounter();

    // When popup header clicked, mark as read
    const popupHeader = document.querySelector('.icon-popup-header');
    if (popupHeader) {
        popupHeader.addEventListener('click', () => {
            console.log("Popup header clicked");
            markNotificationsAsRead();
        });
    }

    // Watch for new notifications dynamically
    const notifContainer = document.querySelector("#NotificationsPopupContainer ul.notification-list");
    if (notifContainer) {
        const observer = new MutationObserver(() => {
            console.log("Notification list changed!");
            updateNotificationCounter();
        });
        observer.observe(notifContainer, { childList: true, subtree: true });
    }

});


//check if panel is empty

$(document).ready(function(){
  setTimeout(function(){
  var textt = $("#NotificationsPopupContainer").text();

  if(textt.toLowerCase()==("No data").toLowerCase()){
    $("#NotificationsPopupContainer").text("");
    // $("#NotificationsPopupContainer").addClass("noNotifications");
    $(".noNotifications").addClass("show");
    $(".icon-popup-close").remove();
    $(".popup-count").hide();
  }
  },1000)
});


$(document).ready(function () {
    setTimeout(function () {

        var textt1 = $("#NotificationsContainer").text().trim();

        if (textt1.toLowerCase() === "no data") {

            // Clear the container
            $("#NotificationsContainer").empty();

            // Append your HTML
            $("#NotificationsContainer").append(`
                <div class="noNotifications show" id="noNotifications">
                    <div class="d-flex align-items-center justify-content-center">
                        <img src="/Runtime/Styles/Style%20Profile/images/placeholdericon.png">
                        <h5>No Notifications Yet</h5>
                        <p>You’re all caught up!</p>
                    </div>
                </div>
            `);

            // Hide load more button
            $("#NotificationsLoadMoreBtn").hide();
        }

    }, 1000);
});