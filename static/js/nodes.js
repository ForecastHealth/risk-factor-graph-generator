$('#nodeForm').on('submit', function(e) {
    e.preventDefault();

    var nodes = $('#nodes').val().split(',');

    // Store nodes in local storage for use on the second page
    localStorage.setItem('nodes', JSON.stringify(nodes));

    // Redirect to the second page
    window.location.href = '/table';
});
