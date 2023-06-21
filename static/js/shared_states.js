$(document).ready(function() {
    var nodes = JSON.parse(localStorage.getItem('nodes'));
    nodes = nodes.map(function(node) { return { id: node }; }); // Convert to dictionary format
    var links = JSON.parse(localStorage.getItem('links'));
    var data = {
        nodes: nodes,
        links: links
    };
    var sharedStates = [];

    $('#addSharedStates').on('click', function() {
        var sharedStateNodes = $('#sharedStatesInput').val().split(',');
        for (var i = 0; i < sharedStateNodes.length; i++) {
            sharedStateNodes[i] = sharedStateNodes[i].trim();
        }
        sharedStates.push(sharedStateNodes);

        var listItem = $('<li></li>');
        listItem.text(sharedStateNodes.join(', '));
        $('#sharedStatesList').append(listItem);

        $('#sharedStatesInput').val(''); // Clear the input
    });

    $('#processSharedStates').on('click', function() {
        for (var i = 0; i < sharedStates.length; i++) {
            var sharedStateId = sharedStates[i].join('_');
            data.nodes.push({ id: sharedStateId });

            for (var j = 0; j < sharedStates[i].length; j++) {
                var nodeId = sharedStates[i][j];
                for (var k = 0; k < data.links.length; k++) {
                    if (data.links[k].source == nodeId || data.links[k].target == nodeId) {
                        var link = JSON.parse(JSON.stringify(data.links[k]));
                        if (link.source == nodeId) link.source = sharedStateId;
                        if (link.target == nodeId) link.target = sharedStateId;
                        data.links.push(link);
                    }
                }
            }
        }

        // Send the data to the server
        $.ajax({
            url: '/process',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log(response);
            }
        });
    });
});
