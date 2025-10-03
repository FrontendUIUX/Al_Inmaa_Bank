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

document.addEventListener('DOMContentLoaded', function() {
    const subMenus = document.querySelectorAll('.isSubMenu');

    subMenus.forEach(subMenu => {
        subMenu.addEventListener('click', function(event) {
            // Prevent the default action (like navigating)
            event.preventDefault();

            const clickedHasChildren = this.querySelector('.hasChildren');

            // 1. First, remove 'active' from ALL 'hasChildren' elements
            document.querySelectorAll('.hasChildren.active').forEach(activeChild => {
                // IMPORTANT: Make sure we don't accidentally remove the class from the one we are about to activate
                if (activeChild !== clickedHasChildren) {
                    activeChild.classList.remove('active');
                    // Optional: Remove active class from its parent 'isSubMenu' too
                    activeChild.closest('.isSubMenu').classList.remove('active-menu-item');
                }
            });

            // 2. Toggle the 'active' class on the clicked 'hasChildren' element
            if (clickedHasChildren) {
                clickedHasChildren.classList.toggle('active');
                
                // 3. Toggle the optional parent class 'active-menu-item'
                this.classList.toggle('active-menu-item');
            }
        });
    });
});