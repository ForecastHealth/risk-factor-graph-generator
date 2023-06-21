$(document).ready(function () {
    var nodes = JSON.parse(localStorage.getItem('nodes'));

    // Create the table header
    var header = $('<tr></tr>');
    header.append('<th></th>'); // Empty top-left cell
    for (var i = 0; i < nodes.length; i++) {
        header.append('<th>' + nodes[i] + '</th>'); // Column headers
    }
    $('#nodeTable').append(header);

    // Create the table body
    for (var i = 0; i < nodes.length; i++) {
        var row = $('<tr></tr>');
        row.append('<th>' + nodes[i] + '</th>'); // Row header
        for (var j = 0; j < nodes.length; j++) {
            row.append('<td data-source="' + nodes[i] + '" data-target="' + nodes[j] + '"></td>');
        }
        $('#nodeTable').append(row);
    }

    // Handle cell click
    $('#nodeTable td').on('click', function () {
        if ($(this).attr('data-selected') == 'true') {
            $(this).text('').attr('data-selected', 'false');
        } else {
            $(this).text('X').attr('data-selected', 'true');
        }
    });

    // Process the table
    $('#processTable').on('click', function () {
        var links = [];
        $('#nodeTable td[data-selected="true"]').each(function () {
            links.push({
                source: $(this).attr('data-source'),
                target: $(this).attr('data-target')
            });
        });

        // Save the links to localStorage
        localStorage.setItem('links', JSON.stringify(links));

        // Redirect to the shared states page
        window.location.href = "/shared_states";
    });

});
