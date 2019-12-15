(function($) {
    "use strict"; // Start of use strict
    $('#myButton1').on('click', function(event) {
        // event.preventDefault(); // To prevent following the link (optional)
        $(document).ready(function() {
                $.ajax({
                    type: 'POST',
                    url: '/mail'
                }).done(function (data) {
                    console.log(data);
                }).fail(function (xhr,status) {
                    console.log('Request Failed');
                });
            });
    });

    $('#myButton2').on('click', function(event) {
        event.preventDefault(); // To prevent following the link (optional)
        $(document).ready(function() {
                $.ajax({
                    type: 'POST',
                    url: '/mail'
                }).done(function (data) {
                    console.log(data);
                }).fail(function (xhr,status) {
                    console.log('Request Failed');
                });
            });
    });

    $('#myButton3').on('click', function(event) {
        event.preventDefault(); // To prevent following the link (optional)
        $(document).ready(function() {
                $.ajax({
                    type: 'POST',
                    url: '/mail'
                }).done(function (data) {
                    console.log(data);
                }).fail(function (xhr,status) {
                    console.log('Request Failed');
                });
            });
    });

    $('#myButton4').on('click', function(event) {
        event.preventDefault(); // To prevent following the link (optional)
        $(document).ready(function() {
                $.ajax({
                    type: 'POST',
                    url: '/mail'
                }).done(function (data) {
                    console.log(data);
                }).fail(function (xhr,status) {
                    console.log('Request Failed');
                });
            });
    });

})(jQuery); // End of use strict

// $(document).ready(function() {
//     $.ajax({
//         type: 'GET',
//         url: '/success'
//     }).done(function (data) {
//         console.log(data);
//         if(data!==""){
//             addDashboard(data);
//             addusername(data);
//             loggedIn();
//         }else{
//             loggedOut();
//         }
//     }).fail(function (xhr,status) {
//         console.log(status);
//         loggedOut();
//     });
// });