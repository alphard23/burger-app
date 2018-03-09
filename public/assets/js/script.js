// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");

        var newSleepState = {
            sleepy: newSleep
        };

        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newSleepState
        }).then(
            function() {
                console.log("changed sleep to", newSleep);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        debugger;

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burgerName: $("#ca").val().trim()
            }
        }).then(
            function() {
                console.log("Added a burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});