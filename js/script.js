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

// Execute the function when the script runs (i.e., when the page loads)
document.addEventListener('DOMContentLoaded', renderProgressBar);