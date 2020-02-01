
$(function() {
    $("#submitBtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let burgerData = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };
        
        // Send the POST request - 
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerData
        }).then(
            function() {
                console.log("New burger");
                // Reload the page to get the updated list
                location.reload("/");
            }
        );
    });

    $(".devourBtn").on("click", function(event){
        let id= $(this).data("id");

        let updatedBurger = {
            devoured: id
        };

        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(
            function() {
                console.log("Changed devoured to 1");
                location.reload();
            }
        );

    });

});