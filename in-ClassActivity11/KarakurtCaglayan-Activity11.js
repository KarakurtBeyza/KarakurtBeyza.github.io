$(document).ready(function() {
    // Attach click event handler to sidebar links
    $('#nav_list a').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        var speakerTitle = $(this).attr('title');
        var fileName = 'json_files/' + speakerTitle + '.json';

        // Perform AJAX request to get the JSON data
        $.ajax({
            url: fileName,
            dataType: 'json',
            success: function(data) {
                // Clear the main element
                $('main').empty();

                // Loop through each speaker in the JSON data
                $.each(data.speakers, function(index, speaker) {
                    // Create HTML content for each speaker
                    var speakerHTML = "<h1>" + speaker.title + "</h1>" +
                                      "<h2>" + speaker.month + "<br>" + speaker.speaker + "</h2>" +
                                      "<p>" + speaker.text + "</p>" +
                                      "<img src='" + speaker.image + "' alt='" + speaker.title + "'>";

                    // Append the content to the main element
                    $('main').append(speakerHTML);
                });
            },
            error: function() {
                alert("Error loading the speaker data.");
            }
        });
    });
}); // end ready