function PostFeedback(el){
    var rating = $(el).text().trim();
                console.log(rating);

    var user = $("#FeedbackUsername").text();
    var urlParams = new URLSearchParams(window.location.search);
    var requestID = urlParams.get("RequestID");
    var serviceID = urlParams.get("ServiceID");
    var refNo = urlParams.get("RefNo");

    $.ajax({
        url: 'RequestFeedbackControl.handler', 
        method: 'GET',
        data: {
            ServiceID: serviceID,
            RequestID: requestID, 
            RefNo: refNo,
            Rating: rating,
            User: user
        },
        dataType: 'text',
        success: function(response) {
            console.log(response);
            if (response === "True") {
                console.log(true);
                submitRating(rating, el);
            } else {
                console.log('feedback not posted error');
            }
          }
    });
}

function PerformActionFromServer(actionName, serialNumber, dropdown, labelFinalTxt, iconSrc, iconAlt){

    showLoader(dropdown);

    $.ajax({
        url: 'AdminRequestsDashboardControl.handler', 
        method: 'GET',
        data: {
            action: "PerformTask",
            taskAction: labelFinalTxt, 
            serialNumber: serialNumber
        },
        dataType: 'text',
        success: function(response) {
            console.log(response);
              // var $table = $("#pendingrestable");
              // var currentPage = parseInt($table.data("current-page")) || 1;
              // $table.data("current-page", currentPage++);
              // $table.attr("data-current-page", currentPage++);
              //GetWorkList("prev");

            if (response === "True") {
                // Only remove the row if response is true
                //RemoveRequestRow(serialNumber);
                //location.reload();
                hideLoader(dropdown, actionName, iconSrc, iconAlt);
                GetAdminDashboardUpdatedTotals();
            } else {
                console.log('Request not removed because response is false');
            }
          }
    });
}

// $(document).on('click', '#pendingRequestsTable .dropdown-menu-custom .dropdown-item-custom', function() {
//     $("#DashboardLoader").hide();

//     var $row = $(this).closest('tr');
//     var serialNumber = $row.find('td').first().data('serialnumber');
//     var actionText = $(this).text().trim();

//     var dropdown = $(this).closest('.dropdown-custom')[0];

//     var labelFinalTxt = $(this).data("label");
//     console.log(labelFinalTxt);

//     var $img = $(this).find('img.option-icon');
//     var iconSrc = $img.attr('src');
//     var iconAlt = $img.attr('alt');

//     console.log('src:', iconSrc, 'alt:', iconAlt);
//     console.log(dropdown)

//     var taskResponse = PerformActionFromServer(actionText, serialNumber, dropdown, labelFinalTxt, iconSrc, iconAlt);

//     console.log('Serial Number:', serialNumber, '| Action:', actionText);
//     // console.log('task:', taskResponse);
// });

$(document).on('click', '#pendingRequestsTable .dropdown-menu-custom .dropdown-item-custom', function() {
    $("#DashboardLoader").hide();

    var $row = $(this).closest('tr');
    var serialNumber = $row.find('td').first().data('serialnumber');
    var actionText = $(this).text().trim();

    var dropdown = $(this).closest('.dropdown-custom')[0];

    var labelFinalTxt = $(this).data("label");
    // console.log(labelFinalTxt);

    var $img = $(this).find('img.option-icon');
    var iconSrc = $img.attr('src');
    var iconAlt = $img.attr('alt');

    // console.log('src:', iconSrc, 'alt:', iconAlt);
    // console.log(dropdown)

    //var taskResponse = PerformActionFromServer(actionText, serialNumber, dropdown, labelFinalTxt, iconSrc, iconAlt);


    if ($(this).hasClass('required-action')) {
      console.log('This action is required');
      $('#MainDashboardPopup').addClass('open');

      var url = $(this)
        .closest('tr')          // go to the row
        .find('td:first a')     // first td → a tag
        .attr('href');          // get href

      console.log(url);

      $(document).ready(function() {
        $("#MainDashboardReviewBtn").click(function() {
            // Replace 'yourURLhere' with the URL you want to go to
            window.location.href = url;
        });
      });

    }
    else{
      console.log('This action is NOT required');
      PerformActionFromServer(actionText, serialNumber, dropdown, labelFinalTxt, iconSrc, iconAlt);
    }

    // console.log('Serial Number:', serialNumber, '| Action:', actionText);
    // console.log('task:', taskResponse);
});

function RemoveRequestRow(serialNumber) {
    // Find the <tr> that contains a <td> with the matching data-serialnumber
    var $row = $('#pendingrestable td[data-serialnumber="' + serialNumber + '"]').closest('tr');

    if ($row.length) {
        $row.remove(); // Remove the row
        console.log('Row with serial number ' + serialNumber + ' removed.');
    } else {
        console.warn('No row found with serial number ' + serialNumber);
    }
}

function AddClickEvents() {
  // Handle dropdown button clicks
  document.addEventListener('click', function(e) {
    const button = e.target.closest('.dropdown-custom .Select-btn');
    if (button) {
      const parent = button.parentElement;
      const isActive = parent.classList.contains('active');
      
      // Close all open dropdowns
      document.querySelectorAll('.dropdown-custom.active').forEach(d => d.classList.remove('active'));
      
      // Toggle the clicked one
      if (!isActive) parent.classList.add('active');
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-custom')) {
      document.querySelectorAll('.dropdown-custom.active').forEach(d => d.classList.remove('active'));
    }
  });
}

AddClickEvents();
$("#DashboardLoader").hide();

function GetUserRequests(page, user, search, isArabic){
    $("#RequestsTableContainer table tbody").html("");
    $("#DashboardLoader").show();
    $.ajax({
        url: 'RequestsDashboardControl.handler', 
        method: 'GET',
        data: {
            page: page,
            user: user,
            referenceNo: search,
            isArabic: isArabic
        },
        dataType: 'json',
        success: function(response) { 
            $("#RequestsTableContainer table tbody").html(response.body);
            $("#TablePager").replaceWith(response.pager);
            $("#DashboardLoader").hide();

            if(isArabic){
                LocalizeLinks();
            }
            // $("#RequestsTableContainer").html(response);
          }
    });
}

function GetAdminDashboardRequests(page, user, search, isArabic){
    $("#AdminRequestsTableContainer table tbody").html("");
    $("#DashboardLoader").show();
    $.ajax({
        url: 'AdminRequestsDashboardControl.handler', 
        method: 'GET',
        data: {
            action: "GetPagedResults",
            page: page,
            user: user, 
            referenceNo: search, 
            isArabic: isArabic
        },
        dataType: 'json',
        success: function(response) {
            //console.log(response);
            $("#AdminRequestsTableContainer table tbody").html(response.body);
            $("#TablePager").replaceWith(response.pager);
            $("#DashboardLoader").hide();

            if(isArabic){
                LocalizeLinks();
            }

          }
    });
}

function GetAdminDashboardUpdatedTotals(){
  const user = $("#RequestsUsername").data("name") || "";

  $.ajax({
      url: 'AdminRequestsDashboardControl.handler', 
      method: 'GET',
      data: {
          action: "GetUpdatedCounts",
          user: user, 
      },
      dataType: 'json',
      success: function(response) {
          //bar chart
          $("#myBarChart").data("months", response.MONTHS);
          $("#myBarChart").data("years", response.YEARS);

          //main counts
          $("#PendingAPICount").data("stat", response.PENDING);
          $("#RejectedAPICount").data("stat", response.REJECTED);
          $("#ApprovedAPICount").data("stat", response.COMPLETED);

          //other graph percents
          $("#PendingAPIValue").text(response.PENDINGPERCENT + "%").data("stat", response.PENDING);
          $("#RejectedAPIValue").text(response.REJECTEDPERCENT + "%").data("stat", response.REJECTED);
          $("#ApprovedAPIValue").text(response.COMPLETEDPERCENT + "%").data("stat", response.COMPLETED);
          $("#TotalAPIValue").text(response.PENDING + response.REJECTED +  response.COMPLETED);

          //from other script file (for updates)
          createSemiCircleChart();
          initializeBarChart();
          initializeCounters();
        }
  });
}

function GetAnalyticsDashboardRequests(page, search, isArabic){
    var urlParams = new URLSearchParams(window.location.search);
    var serviceID = urlParams.get("ServiceID");

    $("#AnalyticsRequestsTableContainer table tbody").html("");
    $("#DashboardLoader").show();

    $.ajax({
        url: 'AnalyticsDashboardControl.handler', 
        method: 'GET',
        data: {
            page: page,
            serviceID: serviceID, 
            referenceNo: search, 
            isArabic: isArabic

        },
        dataType: 'json',
        success: function(response) {

            $("#AnalyticsRequestsTableContainer table tbody").html(response.body);
            $("#TablePager").replaceWith(response.pager);
            $("#DashboardLoader").hide();

            if(isArabic){
                LocalizeLinks();
            }

          }
    });
}

function GetNotificationsPaged(page, user, isArabic){
    $("#DashboardLoader").show();
    $.ajax({
        url: 'UserNotificationsControl.handler', 
        method: 'GET',
        data: {
            action: "GetNotificationsPaged",
            page: page,
            user: user, 
            isArabic: isArabic
        },
        dataType: 'json',
        success: function(response) {
            //console.log(response);
            $("#NotificationsContainer").append(response.body);
            $("#DashboardLoader").hide();

            if(!response.hasMore){
              $("#NotificationsLoadMoreBtn").hide();
            }

            if(isArabic){
                LocalizeLinks();
            }

          }
    });
}

$(document).on('click', '#NotificationsLoadMoreBtn', function() {
    console.log("NotificationsLoadMoreBtn clicked");

    let page = parseInt($("#NotificationsLoadMoreBtn").attr("data-page")) || 1;

    page++; // increment by 1

    // Update the element so next click uses new page value
    $("#NotificationsLoadMoreBtn").attr("data-page", page);
    const user = $("#RequestsUsername").data("name") || "";

    var isArabic = window.location.pathname.toLowerCase().includes('/runtimear/');
    GetNotificationsPaged(page, user, isArabic);
    
});

function GetNotificationsPopup(user, isArabic){
    // $("#DashboardLoader").show();
    $.ajax({
        url: 'UserNotificationsControl.handler',
        method: 'GET',
        data: {
            action: "GetNotificationsPopup",
            user: user,
            isArabic: isArabic
        },
        dataType: 'text',
        success: function(response) {
            //console.log(response);
            $("#NotificationsPopupContainer").html(response);

            if(isArabic){                
                // Find all <a> tags inside the section
                $("#NotificationsPopupContainer").find('a').each(function() {
                    var $link = $(this);
                    var href = $link.attr('href');
                    if (href) {
                        // Replace only the first occurrence of 'Runtime' with 'RuntimeAR'
                        $link.attr('href', href.replace('Runtime', 'RuntimeAR'));
                    }
                });
            }
          }
    });
}
// window.onload = function () {
//     let text = document.getElementById("__runtimeWhoAmI").textContent.trim();
//     let username = text.split(" :: ")[2];
//     GetNotificationsPopup(username);
// };
document.addEventListener("DOMContentLoaded", function () {

    function initNotifications() {
        var $container = $("#NotificationsPopupContainer");
        if ($container.length) {
            let text = document.getElementById("__runtimeWhoAmI").textContent.trim();
            let username = text.split(" :: ")[2];
            var isArabic = window.location.pathname.toLowerCase().includes('/runtimear/');
            GetNotificationsPopup(username, isArabic);

            

            return true;
            }
        return false;
    }

    // First check immediately
    if (!initNotifications()) {

        var observerNotifications = new MutationObserver(function(mutations) {
            if (initNotifications()) {
                observerNotifications.disconnect();
            }
        });

        observerNotifications.observe(document.body, { childList: true, subtree: true });
    }

});

// TABLE SORTING FEATURE - MY REQUESTS AND MARKETING DASHBOARD TABLE 
function initTableSorting() {
  const table = document.getElementById("requestsTable");
  if (!table) return;

  const sortDirection = {};

  document.removeEventListener("click", handleTableSort);
  document.addEventListener("click", handleTableSort);

  function handleTableSort(e) {
    const headerSpan = e.target.closest("th span");
    if (!headerSpan) return;
    if (!headerSpan.closest("th")?.querySelector("svg")) return;

    const th = headerSpan.closest("th");
    const theadRow = th.parentElement;
    const tbody = table?.querySelector("tbody") || table;
    if (!tbody) return;

    const columnIndex = Array.from(theadRow.children).indexOf(th);
    const columnName = headerSpan.textContent.trim();

    const rows = Array.from(tbody.querySelectorAll("tr"));
    const direction = sortDirection[columnName] || 1;

    rows.sort((a, b) => {
      const cellA = a.children[columnIndex]?.innerText.toLowerCase().trim() || "";
      const cellB = b.children[columnIndex]?.innerText.toLowerCase().trim() || "";
      if (cellA < cellB) return -1 * direction;
      if (cellA > cellB) return 1 * direction;
      return 0;
    });

    sortDirection[columnName] = direction * -1;
    rows.forEach(row => tbody.appendChild(row));

    // Reset icons
    document.querySelectorAll("th svg").forEach(svg => {
      svg.classList.remove("ascending", "descending");
      svg.classList.add("inactive");
    });

    // Update current column’s icon
    const svg = th.querySelector("svg");
    if (svg) {
      svg.classList.remove("inactive");
      if (sortDirection[columnName] === 1) {
        svg.classList.add("descending");
      } else {
        svg.classList.add("ascending");
      }
    }
  }

  // Keep SVGs inactive for new headers
  const observer = new MutationObserver(() => {
    document.querySelectorAll("th svg:not(.inactive)").forEach(svg => {
      svg.classList.add("inactive");
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  console.log("✅ Table sorting initialized");
}
document.addEventListener("DOMContentLoaded", initTableSorting);
// PAGINATION FEATURE
$(document).ready(function () {

    function reloadRequests(page) {
        const user = $("#RequestsUsername").data("name") || "";

        var isArabic = window.location.pathname
          .toLowerCase()
          .includes('/runtimear/');

        //  Call the correct function based on which dashboard exists
        if ($("#RequestsDashboardControl").length) {
            //var search = $("#UserDashboardSearchInput").val();
            var search = "";
            GetUserRequests(page, user, search, isArabic);
        }
        if ($("#AdminRequestsDashboardControl").length) {
            //var search = $("#AdminDashboardSearchInput").val();
            var search = "";
            GetAdminDashboardRequests(page, user, search, isArabic);
        }
        if ($("#AnalyticsDashboardControl").length) {
            //var search = $("#AnalyticsDashboardSearchInput").val();
            var search = "";
            GetAnalyticsDashboardRequests(page, search, isArabic);
        }

        //  Recall sorting after 2 seconds
        setTimeout(() => {
            console.log("Reinitializing table sorting after pagination...");
            initTableSorting();
        }, 2000);

    }

    //  First Page
    $(document).on("click", "#FirstPageButton", function () {
        reloadRequests(1);
    });

    //  Last Page
    $(document).on("click", "#LastPageButton", function () {
        reloadRequests($(this).data("page"));
    });

    //  Next Page
    $(document).on("click", "#NextPageButton", function () {
        const $active = $(".pageNumber.active");
        const $next = $active.next(".pageNumber");
        if ($next.length) reloadRequests(parseInt($next.text().trim()));
    });

    //  Previous Page
    $(document).on("click", "#PrevPageButton", function () {
        const $active = $(".pageNumber.active");
        const $prev = $active.prev(".pageNumber");
        if ($prev.length) reloadRequests(parseInt($prev.text().trim()));
    });

    //  Page Number Click
    $(document).on("click", ".pageNumber", function () {
        reloadRequests(parseInt($(this).text().trim()));
    });
});


function LocalizeLinks(){
    // List of section IDs
    var sectionIds = ['AdminRequestsTableContainer', 'RequestsTableContainer', 'AnalyticsDashboardControl', 'NotificationsContainer']; // replace with your actual IDs

    sectionIds.forEach(function(id) {
        var $section = $('#' + id);
        if ($section.length === 0) return;

        // Find all <a> tags inside the section
        $section.find('a').each(function() {
            var $link = $(this);
            var href = $link.attr('href');
            if (href) {
                // Replace only the first occurrence of 'Runtime' with 'RuntimeAR'
                $link.attr('href', function(_, href) {
                    // Only replace 'Runtime' if it exists as 'Runtime' (not RuntimeAR)
                    return href.includes('RuntimeAR') ? href : href.replace('Runtime', 'RuntimeAR');
                });
            }
        });
    });
}

$(document).ready(function() {
    // Check if current URL contains 'RuntimeAR'
    if (window.location.href.indexOf('RuntimeAR') === -1) return;

   LocalizeLinks();

    //for attachment button
    var $btn = $("#RequestStatusAttachmentBtn");

    // Get the current onclick URL
    var onclickAttr = $btn.attr("onclick"); 

    if ( onclickAttr) {
        // Extract the URL inside the quotes
        var urlMatch = onclickAttr.match(/window\.location\.href=['"](.+)['"]/i);
        if (urlMatch && urlMatch[1]) {
            var url = urlMatch[1];

            // Replace only the first /Runtime/ with /RuntimeAR/
            url = url.replace(/\/Runtime\//i, "/RuntimeAR/");

            // Set the updated onclick
            $btn.attr("onclick", "window.location.href='" + url + "'");
        }
    
    }


});
/* final backup 15 january 2026 12:25pm*/