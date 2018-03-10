// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");

        var newDevourState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

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