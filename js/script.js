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

// Handle subLinks clicks
document.querySelectorAll(".subLinks a").forEach(subLink => {
  subLink.addEventListener("click", function (e) {
    e.preventDefault();

    // Clear all active states
    document.querySelectorAll(".subLinks a").forEach(a => a.classList.remove("active"));
    document.querySelectorAll(".hasChildren").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".isSubMenu > a").forEach(mainLink => mainLink.classList.remove("active"));

    // Activate clicked subLink
    this.classList.add("active");

    // Activate its parent .hasChildren
    const parentHasChildren = this.closest(".hasChildren");
    if (parentHasChildren) {
      parentHasChildren.classList.add("active");
    }

    // Activate its main parent link
    const mainParentLink = this.closest(".isSubMenu")?.querySelector("a");
    if (mainParentLink) {
      mainParentLink.classList.add("active");
    }
  });
});

// Handle parent isSubMenu link clicks
document.querySelectorAll(".isSubMenu > a").forEach(mainLink => {
  mainLink.addEventListener("click", function (e) {
    e.preventDefault();

    // Clear all active states
    document.querySelectorAll(".subLinks a").forEach(a => a.classList.remove("active"));
    document.querySelectorAll(".hasChildren").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".isSubMenu > a").forEach(link => link.classList.remove("active"));

    // Activate clicked main link
    this.classList.add("active");

    // Activate its .hasChildren
    const hasChildren = this.closest(".isSubMenu")?.querySelector(".hasChildren");
    if (hasChildren) {
      hasChildren.classList.add("active");

      // Also activate the first subLink
      const firstSubLink = hasChildren.querySelector(".subLinks a");
      if (firstSubLink) {
        firstSubLink.classList.add("active");
      }
    }
  });
});
