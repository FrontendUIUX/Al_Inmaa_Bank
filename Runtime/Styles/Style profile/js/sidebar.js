// ================================
// SIDEBAR + LIGHT/DARK MODE SCRIPT
// ================================
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    try {
      // Check if we're in Arabic mode
      const isArabic = window.location.pathname.includes("RuntimeAR");
      
      // ===== Get user info from K2 SourceCode object =====
      const fqn = SourceCode?.Forms?.Settings?.User?.FQN || "";
      const userName = fqn.split("\\").pop() || "User";

      // ===== Get department text from form label =====
      const departmentEl = document.querySelector("[name*='User_Department_DataLabel']");
      const department = departmentEl ? departmentEl.textContent.trim() : "Unknown Department";

      // ===== Sidebar configuration (dynamic links) with translations =====
      const sidebarConfig = [
        {
          category: isArabic ? "الروابط الرئيسية" : "Main Links",
          links: [
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/Dashboard.svg", 
              name: isArabic ? "لوحة التحكم" : "Dashboard", 
              url: isArabic ? "/RuntimeAR/Runtime/Form/MainDashboard/" : "/Runtime/Runtime/Form/MainDashboard/" 
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/My Requests.svg", 
              name: isArabic ? "طلباتي" : "My Requests", 
              url: isArabic ? "/RuntimeAR/Runtime/Form/UserDashboard/" : "/Runtime/Runtime/Form/UserDashboard/" 
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/report-and-analytics.svg", 
              name: isArabic ? "التقارير والتحليلات" : "Reports & Analytics", 
              url: isArabic ? "#" : "#" ,
              children:[
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "لوحة معلومات التسويق" : "Marketing Dashboard", 
                  url: isArabic ? "/RuntimeAR/Runtime/Form/Marketing__Admin__Dashboard/" : "/Runtime/Runtime/Form/Marketing__Admin__Dashboard/" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "لوحة معلومات الاتصالات" : "Communication Dashboard", 
                  url: isArabic ? "#" : "#" 
                },
                 { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "لوحة معلومات تكنولوجيا المعلومات" : "Information Technology Dashboard", 
                  url: isArabic ? "#" : "#" 
                },
              ]
            },
          ]
        },
        // Uncomment if you need departments section
        {
          category: isArabic ? "الإدارات" : "Departments",
          links: [
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/Retail Banking.svg", 
              name: isArabic ? "الخدمات المصرفية للأفراد والخدمات المصرفية الرقمية" : "Retail & Digital Banking", 
              url: "#",
              children:[
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "طلب تسويقي" : "Marketing Request", 
                  url: isArabic ? "/RuntimeAR/Runtime/Form/NR__MarketingRequest__Form/" : "/Runtime/Runtime/Form/NR__MarketingRequest__Form/" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "الموافقة على الحسابات عالية المخاطر" : "High Risk Account Approvals", 
                  url: isArabic ? "#" : "#" 
                },
                 { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "عملية الاستثناء - شريحة العملاء" : "Exception Process Customer Segment", 
                  url: isArabic ? "#" : "#" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "ملاحظات زيارة الفرع" : "Branch Visit Notes", 
                  url: isArabic ? "#" : "#" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "أتمتة الإحالات" : "Referral Automation", 
                  url: isArabic ? "#" : "#" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "ختم T24" : "T24 Stamp", 
                  url: isArabic ? "#" : "#" 
                },
              ]
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/Human Capital Excellence.svg", 
              name: isArabic ? "التسويق والشركات" : "Marketing & Corporate", 
              url: "#",
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/Shariah.svg", 
              name: isArabic ? "الشريعة الإسلامية" : "Shariah", 
              url: "#",
              children:[
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "طلب تسويقي" : "Marketing Request", 
                  url: isArabic ? "/RuntimeAR/Runtime/Form/NR__MarketingRequest__Form/" : "/Runtime/Runtime/Form/NR__MarketingRequest__Form/" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "طلب اعتماد محضر الاجتماع" : "Accreditation of Meeting Minutes Request", 
                  url: isArabic ? "/RuntimeAR/Runtime/Form/AccreditationOfMinutesR__Form1/" : "/Runtime/Runtime/Form/AccreditationOfMinutesR__Form1/" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "طلب دراسة" : "Study Request", 
                  url: isArabic ? "/RuntimeAR/Runtime/Form/SR__StudyRequestSubmission__Form/" : "/Runtime/Runtime/Form/SR__StudyRequestSubmission__Form/" 
                },
                { 
                  icon: "/Runtime/Styles/Style%20profile/images/expandedicon.png", 
                  name: isArabic ? "طلب توصية بجائزة" : "Award Recommendation Request", 
                  url: isArabic ? "/RuntimeAR/Runtime/Form/AR__AwardRecommendationRequest__Form/" : "/Runtime/Runtime/Form/AR__AwardRecommendationRequest__Form/" 
                },
              ]
            },
             { 
              icon: "/Runtime/Styles/Style%20profile/images/net/information-technology.svg", 
              name: isArabic ? "تكنولوجيا المعلومات" : "Information Technology", 
              url: "#",
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/Operations.svg", 
              name: isArabic ? "العمليات" : "Operations", 
              url: "#",
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/facilities-management.svg", 
              name: isArabic ? "إدارة المرافق" : "Facilities Management", 
              url: "#",
            },
            { 
              icon: "/Runtime/Styles/Style%20profile/images/net/human-capital.png", 
              name: isArabic ? "رأس المال البشري" : "Human Capital", 
              url: "#",
            },
             { 
              icon: "/Runtime/Styles/Style%20profile/images/net/risk-management.svg", 
              name: isArabic ? "إدارة المخاطر" :"Risk Management", 
              url: "#",
            },
          ]
        },
      ];

      // ===== Sidebar HTML skeleton =====
      document.body.insertAdjacentHTML("beforeend", `
        <aside class="sidebar ${isArabic ? 'rtl' : ''}">
          <div class="userSettings d-flex align-items-center">
            <div class="userProfile d-none d-lg-flex align-items-center">
              <div class="userProfilePhoto">
                <img src="/Runtime/Styles/Style%20profile/images/net/Userthumb.png" alt="${userName}" class="profilePhoto" />
              </div>
              <div class="userInformations d-flex flex-column ${isArabic ? 'text-right' : ''}">
                <div class="profileUpper">
                  <span class="username">${userName}</span>
                  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M0.75 0.75L5.25 5.25L9.75 0.75" stroke="#002134" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
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
              <div class="icon-popup ${isArabic ? 'rtl-popup' : ''}">
                <div class="icon-popup-content">
                  <div class="icon-popup-header">
                    <h3 class="icon-popup-title">${isArabic ? 'الإشعارات' : 'Notifications'}</h3>
                    <span class="popup-count">10</span>
                  </div>
                  <div id="NotificationsPopupContainer"></div>
                  <div class="noNotifications" id="noNotifications">
                    <div class="d-flex align-items-center justify-content-center">
                      <img src="/Runtime/Styles/Style%20Profile/images/placeholdericon.png" />
                      <h5>${isArabic ? 'لا توجد إشعارات بعد' : 'No Notifications Yet'}</h5>
                      <p>${isArabic ? 'لقد انتهيت من كل شيء!' : 'You\'re all caught up!'}</p>
                    </div>
                  </div>
                  <a href="${isArabic ? '/RuntimeAR/Runtime/Form/NotificationsPage/' : '/Runtime/Runtime/Form/NotificationsPage/'}" class="icon-popup-close" type="button">
                    ${isArabic ? 'عرض الكل' : 'View All'}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="sideBarLinksGroup"></div>
          <div class="toggle-container ${isArabic ? 'text-right' : ''}">
            <span class="toggle-label">${isArabic ? 'الوضع الداكن' : 'Dark Mode'}</span>
            <label class="switch">
              <input type="checkbox" id="modeToggle">
              <span class="slider round"></span>
              <img class="sun-img" src="/Runtime/Styles/Style%20profile/images/net/Moon.svg" alt="Sun">
            </label>
          </div>
        </aside>
        <div class="overlayShadow" style="display:none;"></div>
        <aside class="subPanel ${isArabic ? 'rtl-subpanel' : ''}">
          <div class="closeSubpanel ${isArabic ? 'left-close' : ''}">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.2894 24.2894L13.1447 13.1447M13.1447 13.1447L2 2M13.1447 13.1447L24.2894 2M13.1447 13.1447L2 24.2894" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="subPanelHeader ${isArabic ? 'text-right' : ''}">
            <h5 class="subSectionTitle"></h5>
          </div>
          <div class="subPanelBody">
            <ul></ul>
          </div>
        </aside>
        <div class="modal" id="userProfileModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
       <div class="userProfile d-none d-lg-flex align-items-center">
              <div class="userProfilePhoto">
                <img src="/Runtime/Styles/Style%20profile/images/net/Userthumb.png" alt="${userName}" class="profilePhoto" />
              </div>
              <div class="userInformations d-flex flex-column ${isArabic ? 'text-right' : ''}">
                <span class="username">${userName}</span>
                <span class="userPosition">${department}</span>
              </div>
            </div>
            <svg class="closeModalSettings" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10L5.5 5.5M5.5 5.5L1 1M5.5 5.5L10 1M5.5 5.5L1 10" stroke="#002134" stroke-opacity="0.4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <a href="#" class="disabled">
          <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5164 10.5205C13.1175 10.5205 15.2261 8.412 15.2261 5.81103C15.2261 3.21006 13.1175 1.10156 10.5164 1.10156C7.91526 1.10156 5.80664 3.21006 5.80664 5.81103C5.80664 8.412 7.91526 10.5205 10.5164 10.5205Z" stroke="#002134" stroke-width="2.2"/>
            <path d="M19.713 19.5203C19.713 22.0901 19.713 24.1734 10.4063 24.1734C1.09961 24.1734 1.09961 22.0901 1.09961 19.5203C1.09961 16.9504 5.26636 14.8672 10.4063 14.8672C15.5463 14.8672 19.713 16.9504 19.713 19.5203Z" stroke="#002134" stroke-width="2.2"/>
          </svg>
          <span>${isArabic ? 'عرض الملف الشخصي' : 'Show Profile'}</span>
        </a>
        <div class="langSwitchContainer">
          <div class="leftSection">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.900391 11.8984H22.9004M0.900391 11.8984C0.900391 17.9736 5.82526 22.8984 11.9004 22.8984M0.900391 11.8984C0.900391 5.82331 5.82526 0.898438 11.9004 0.898438M22.9004 11.8984C22.9004 17.9736 17.9756 22.8984 11.9004 22.8984M22.9004 11.8984C22.9004 5.82331 17.9756 0.898438 11.9004 0.898438M11.9004 22.8984C3.04614 13.2184 8.21113 4.19844 11.9004 0.898438M11.9004 22.8984C20.7547 13.2184 15.5897 4.19844 11.9004 0.898438" stroke="#002134" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${isArabic ? 'اللغة' : 'Language'}</span>
          </div>
          <div class="language-switcher">
          
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
      `);

      // Add RTL direction to body if Arabic
      if (isArabic) {
        document.body.style.direction = 'rtl';
      }

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

          li.innerHTML = `
            <div class="icon"><img src="${link.icon}" alt=""></div>
            <a href="${link.url || '#'}">${link.name}</a>
          `;

          // If Arabic, add RTL class to anchor
          if (isArabic) {
            const anchor = li.querySelector("a");
            anchor.classList.add('rtl-text');
          }

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

    // Remove "open" class from all submenus
    document.querySelectorAll(".isSubMenu.open").forEach(m => {
      m.classList.remove("open");
    });

    // Apply "open" to the clicked submenu
    menu.classList.add("open");

    const title = menu.querySelector("a").innerText.trim();
    let found = null;

    // Find the clicked link in the config
    sidebarConfig.forEach(sec => {
      sec.links.forEach(l => {
        if (l.name === title) found = l;
      });
    });

    // If no children found, do not open the subpanel
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

      const childPath = new URL(child.url, window.location.origin).pathname;
      if (currentPath === childPath) {
        li.classList.add("active");
      }

      li.innerHTML = `
        <div class="icon">
          <img src="${child.icon}" alt="${child.name}">
        </div>
        <a href="${child.url}" class="${isArabic ? 'rtl-text' : ''}">${child.name}</a>
      `;

      subPanelList.appendChild(li);
    });

    // Display subpanel
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
        document.documentElement.classList.toggle("light", theme === "light");
        toggle.checked = theme === "light";
        if (icon) icon.src = theme === "light"
          ? "/Runtime/Styles/Style%20profile/images/net/Sun.svg"
          : "/Runtime/Styles/Style%20profile/images/net/Moon.svg";
        if (label) label.textContent = theme === "light" 
          ? (isArabic ? "الوضع الفاتح" : "Light Mode")
          : (isArabic ? "الوضع الداكن" : "Dark Mode");
      };

      // Determine initial theme
      const saved = localStorage.getItem(THEME_KEY);
      const prefersDark = window.matchMedia("(prefers-color-scheme: light)").matches;
      const initial = saved === "light" || saved === "dark" ? saved : (prefersDark ? "light" : "dark");
      applyTheme(initial);

      // Listen for toggle changes
      toggle.addEventListener("change", () => {
        const next = toggle.checked ? "light" : "dark";
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });

    } catch (e) {
      console.error("Error rendering sidebar:", e);
    }
  }, 500);
});

// notification process
document.addEventListener("DOMContentLoaded", () => {
  // Check if Arabic mode for notification text
  const isArabic = window.location.pathname.includes("RuntimeAR");

  function extractNotificationId(item) {
    const title = item.querySelector(".notification-title")?.innerText || "";
    const match = title.match(/\(([^)]+)\)/); // extract text inside parentheses
    const id = match ? match[1] : null;
    return id;
  }

  function updateNotificationCounter() {
    const notifItems = document.querySelectorAll('.notification-item');
    let seen = JSON.parse(localStorage.getItem("seenNotifications") || "[]");
    const currentIds = [...notifItems]
      .map(item => extractNotificationId(item))
      .filter(id => id !== null);
    const unread = currentIds.filter(id => !seen.includes(id));
    
    const counter = document.querySelector(".popup-count");
    if (counter) {
      counter.textContent = unread.length;
    }
  }

  function markNotificationsAsRead() {
    const notifItems = document.querySelectorAll('.notification-item');
    const ids = [...notifItems]
      .map(item => extractNotificationId(item))
      .filter(id => id !== null);
    
    localStorage.setItem("seenNotifications", JSON.stringify(ids));
    updateNotificationCounter();
  }

  // Initial counter update
  updateNotificationCounter();

  // When popup header clicked, mark as read
  const popupHeader = document.querySelector('.icon-popup-header');
  if (popupHeader) {
    popupHeader.addEventListener('click', () => {
      markNotificationsAsRead();
    });
  }

  // Watch for new notifications dynamically
  const notifContainer = document.querySelector("#NotificationsPopupContainer ul.notification-list");
  if (notifContainer) {
    const observer = new MutationObserver(() => {
      updateNotificationCounter();
    });
    observer.observe(notifContainer, { childList: true, subtree: true });
  }
});

// check if panel is empty
$(document).ready(function(){
  setTimeout(function(){
    const isArabic = window.location.pathname.includes("RuntimeAR");
    var textt = $("#NotificationsPopupContainer").text();

    if(textt.toLowerCase()==("No data").toLowerCase()){
      $("#NotificationsPopupContainer").text("");
      $(".noNotifications").addClass("show");
      $(".icon-popup-close").remove();
      $(".popup-count").hide();
      
      // Update no notifications text if Arabic
      if (isArabic) {
        const noNotifDiv = $(".noNotifications.show");
        noNotifDiv.find("h5").text("لا توجد إشعارات بعد");
        noNotifDiv.find("p").text("لقد انتهيت من كل شيء!");
      }
    }
  }, 1000);
});

$(document).ready(function () {
  setTimeout(function () {
    const isArabic = window.location.pathname.includes("RuntimeAR");
    var textt1 = $("#NotificationsContainer").text().trim();

    if (textt1.toLowerCase() === "no data") {
      // Clear the container
      $("#NotificationsContainer").empty();

      // Append your HTML
      $("#NotificationsContainer").append(`
        <div class="noNotifications show" id="noNotifications">
          <div class="d-flex align-items-center justify-content-center">
            <img src="/Runtime/Styles/Style%20Profile/images/placeholdericon.png">
            <h5>${isArabic ? 'لا توجد إشعارات بعد' : 'No Notifications Yet'}</h5>
            <p>${isArabic ? 'لقد انتهيت من كل شيء!' : 'You\'re all caught up!'}</p>
          </div>
        </div>
      `);

      // Hide load more button
      $("#NotificationsLoadMoreBtn").hide();
    }
  }, 1000);
  
});
$(document).on("click", ".userProfile", function () {
  console.log("clicked");
  $("#userProfileModal").toggleClass("show");
});
$(document).ready(function () {
  // Slight delay to ensure Nintex finished rendering
  setTimeout(function () {
    var arabicButton  = $('a[name="Ar_Button"]');
    var englishButton = $('a[name="Eng_Button"]');
    var langContainer = $('.language-switcher');

    if (langContainer.length === 0) {
      console.warn('language-switcher not found in DOM.');
      return;
    }

    if (arabicButton.length === 0) {
      console.warn('Arabic button not found.');
    } else {
      langContainer.append(arabicButton);
    }

    if (englishButton.length === 0) {
      console.warn('English button not found.');
    } else {
      langContainer.append(englishButton);
    }

    console.log('Language buttons appended to modal.');
  }, 500);
});

$(document).on("click", ".closeModalSettings", function(){
  $("#userProfileModal").removeClass("show");
});