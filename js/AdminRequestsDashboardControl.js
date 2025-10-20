

function PerformActionFromServer(actionName, serialNumber){
    $.ajax({
        url: 'AdminRequestsDashboardControl.handler', // your handler
        method: 'GET',
        data: {
            action: "PerformTask",
            taskAction: actionName, 
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
                location.reload();
            } else {
                console.log('Request not removed because response is false');
            }
          }
    });
}

function GetWorkList(direction){
  $("#DashboardLoader").show();
  $("#DashboardLoadMoreBtn").hide();
  //$('#pendingRequestsTable').html("");
  var $table = $("#pendingrestable");
  // Always parse it as a number to avoid string issues
  var currentPage = parseInt($table.data("current-page")) || 1;

  if (direction === "next") {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--; // prevent going below 1
  }

  if(currentPage == 1){
    $('#prevPageBtn').prop('disabled', true)
  }
  else{
    $('#prevPageBtn').prop('disabled', false)
  }

  // Update both jQuery data cache and DOM attribute
  $table.data("current-page", currentPage);
  $table.attr("data-current-page", currentPage);

  console.log("Current Page:", currentPage);

    $.ajax({
        url: 'AdminRequestsDashboardControl.handler', // your handler
        method: 'GET',
        data: {
            pageNumber: currentPage,
            action: "GetPagedResults",
        },
        dataType: 'text',
        success: function(response) {
            console.log(response);
            // Update your UI with the new worklist HTML
            
            if (response.toLowerCase().includes("no pending requests")) {
                console.log("No pending requests found.");
                // You can show a message or handle UI accordingly
                $("#DashboardLoadMoreBtn").hide();
            } else {
                // Update your UI with the new worklist HTML
                $('#pendingRequestsTable').append(response);
                $("#DashboardLoadMoreBtn").show();
            }

            $("#DashboardLoader").hide();
        }
    });
}

$(document).on('click', '#pendingRequestsTable .dropdown-menu-custom .dropdown-item-custom', function() {
    $("#DashboardLoader").hide();

    var $row = $(this).closest('tr');
    var serialNumber = $row.find('td').first().data('serialnumber');
    var actionText = $(this).text().trim();

    var taskResponse = PerformActionFromServer(actionText, serialNumber);

    console.log('Serial Number:', serialNumber, '| Action:', actionText);
    // console.log('task:', taskResponse);
});

// Handle Previous button click
$(document).on('click', '#prevPageBtn', function() {
    console.log("Previous button clicked");
    GetWorkList("prev");
});

// Handle Next button click
$(document).on('click', '#nextPageBtn', function() {
    console.log("Next button clicked");
    GetWorkList("next");
    
});

// Handle Next button click
$(document).on('click', '#DashboardLoadMoreBtn', function() {
    console.log("Dashboard LoadMore Btn clicked");
    GetWorkList("next");
    
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