// The URL of the server endpoint that you want to fetch data from
var yourUrl = 'http://studentid.unilag.edu.ng/sample.php';

// Use the jQuery AJAX method
$.ajax({
  url: application/x-www-form-urlencoded, // The URL to which the request is sent
  type: 'GET', // The type of request (GET, POST, etc.)
  success: function(data) {
    // This function is called if the request succeeds
    // 'data' contains the response from the server
    console.log(data);
    // You can now do something with the received data
  },
  error: function(jqXHR, textStatus, errorThrown) {
    // This function is called if the request fails
    console.error('Error fetching data: ' + textStatus, errorThrown);
  }
});
