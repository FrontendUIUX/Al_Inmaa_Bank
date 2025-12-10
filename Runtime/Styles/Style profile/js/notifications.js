// Key names for localStorage
const SEEN_KEY = "lastSeenNotificationTime";
const LATEST_KEY = "latestRequestTime";

// Get DOM elements
const indicator = document.getElementById("notifIndicator");
const notifButton = document.getElementById("notifButton");
const notifPanel = document.getElementById("notifPanel");

// Initialize last seen time
if (!localStorage.getItem(SEEN_KEY)) {
    localStorage.setItem(SEEN_KEY, 0);
}

// Call this function whenever new requests load
function notifyNewRequest(requestTime) {
    localStorage.setItem(LATEST_KEY, requestTime);
    updateIndicator();
}

// Check whether indicator should be active
function updateIndicator() {
    const lastSeen = Number(localStorage.getItem(SEEN_KEY));
    const latest = Number(localStorage.getItem(LATEST_KEY));

    if (latest > lastSeen) {
        indicator.classList.add("active");
    } else {
        indicator.classList.remove("active");
    }
}

// When user opens notifications panel
notifButton.addEventListener("click", () => {
    notifPanel.classList.toggle("hidden");

    // Mark all notifications as seen
    if (!notifPanel.classList.contains("hidden")) {
        localStorage.setItem(SEEN_KEY, Date.now());
        updateIndicator();
    }
});

// Run indicator check on page load
updateIndicator();

//when new notification comes
//notifyNewRequest(Date.now());
