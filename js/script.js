$(document).ready(function() {
  $("h3").click(function(e) {
    $(".text").toggleClass("show");
e.preventDefault();

  });
});





// $(document).ready(function() {
//   $("h3").on("click", function() {
//     $(this).parent().find('h3.active').removeClass('active');
//     $(this).addClass('active');
//
//     $(".text").toggleClass("show");
//   });
// });
