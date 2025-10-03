const requestsData = [
    { type: 'marketing', percentage: 56, elementId: 'marketing-request', percentId: 'marketing-request-percentage' },
    { type: 'study', percentage: 20, elementId: 'request-a-study', percentId: 'request-study-percentage' },
    { type: 'branch', percentage: 17, elementId: 'branch-visit-notes', percentId: 'branch-viti-percentage' },
    { type: 'other', percentage: 7, elementId: 'other', percentId: 'other-percentage' },
];
function renderProgressBar() {
    requestsData.forEach(item => {
        // 1. Update the progress bar segment width
        const segmentElement = document.getElementById(item.elementId);
        if (segmentElement) {
            // Set the width based on the percentage
            segmentElement.style.width = `${item.percentage}%`;
        }

        // 2. Update the percentage text in the legend
        const percentElement = document.getElementById(item.percentId);
        if (percentElement) {
            // Display the percentage with a '%' sign
            percentElement.textContent = `${item.percentage}%`;
        }
    });
}
renderProgressBar();
document.addEventListener("DOMContentLoaded", () => {
    const subMenus = document.querySelectorAll(".isSubMenu");
    const subPanel = document.querySelector(".subPanel");
    const subPanelList = subPanel.querySelector(".subPanelBody ul");
    const subPanelTitle = subPanel.querySelector(".subPanelHeader .subSectionTitle");
    const overlayShadow = document.querySelector(".overlayShadow");
    const closeSubpanelBtn = subPanel.querySelector(".closeSubpanel");

    // Example submenu link data
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

    subMenus.forEach(menu => {
        menu.addEventListener("click", e => {
            e.preventDefault();

            const title = menu.querySelector("a").innerText.trim();

            // If no links → close panel and stop
            if (!submenuLinks[title] || submenuLinks[title].length === 0) {
                subPanel.classList.remove("active");
                return;
            }

            // Update panel title
            subPanelTitle.textContent = title;

            if (subPanel.classList.contains("active")) {
                subPanel.classList.remove("active");
                 if(overlayShadow){
                    overlayShadow.style.display = "none";
                }
                setTimeout(() => {
                    renderSubLinks(title);
                    subPanel.classList.add("active");
                }, 1000);
            } else {
                renderSubLinks(title);
                subPanel.classList.add("active");
                if(overlayShadow){
                    overlayShadow.style.display = "block";
                }
            }
            // Close Sub Panel
            if(closeSubpanelBtn){
                closeSubpanelBtn.addEventListener("click", function(){
                    subPanel.classList.remove("active");
                    if(overlayShadow){
                        overlayShadow.style.display = "none";
                    }
                })
            }
        });
    });
});